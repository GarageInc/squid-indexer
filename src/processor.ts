import { lookupArchive } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
  EvmLogEvent,
  SubstrateBlock,
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { CHAIN_NODE, arenaContract } from './contract'
import { CreatedStakerPosition } from './model'
import * as arenaAbi from './abi/battle-arena-abi'

interface StakerPositionEvent {
  currentEpoch: bigint
  staker: string
  stakingPositionId: bigint
  id: string
  timestamp: bigint
  block: number
  transactionHash: string
}

const database = new TypeormDatabase()
const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setBlockRange({ from: 442693 })
  .setDataSource({
    chain: CHAIN_NODE,
    archive: lookupArchive('moonbeam', { release: 'FireSquid' }),
  })
  .setTypesBundle('moonbeam')
  .addEvmLog(arenaContract.address, {
    range: { from: 1887167 },
    filter: [arenaAbi.events['CreatedStakerPosition(uint256,address,uint256)'].topic],
  })

type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(database, async (ctx) => {
  const transfersData: StakerPositionEvent[] = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        const transfer = handleTransfer(ctx, block.header, item.event)
        transfersData.push(transfer)
      }
    }
  }

  await saveTransfers(ctx, transfersData)
})

function handleTransfer(ctx: Ctx, block: SubstrateBlock, event: EvmLogEvent): StakerPositionEvent {
  const { staker, stakingPositionId, currentEpoch } = arenaAbi.events[
    'CreatedStakerPosition(uint256,address,uint256)'
  ].decode(event.args)

  const transfer: StakerPositionEvent = {
    id: event.id,
    timestamp: BigInt(block.timestamp),
    block: block.height,
    transactionHash: event.evmTxHash,
    staker,
    stakingPositionId: BigInt(stakingPositionId.toString()),
    currentEpoch: BigInt(currentEpoch.toString()),
  }

  return transfer
}

async function saveTransfers(ctx: Ctx, transfersData: StakerPositionEvent[]) {
  const transfers: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { staker, stakingPositionId, currentEpoch, id } = transferData

    const transfer = new CreatedStakerPosition({
      id,
      staker,
      stakingPositionId,
      currentEpoch,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
