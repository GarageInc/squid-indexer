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
import battleArenaAbi from './abi/battle-arena-abi.json'

import { utils } from 'ethers'

const ifaceStaker = new utils.Interface(battleArenaAbi)

const database = new TypeormDatabase()
const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setBlockRange({ from: 1887167 })
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

console.log(arenaAbi.events['CreatedStakerPosition(uint256,address,uint256)'].topic)

processor.run(database, async (ctx) => {
  const transfersData = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log' && item.event.args) {
        // @ts-ignore
        console.log(
          '---',
          // @ts-ignore
          block.items
            // @ts-ignore
            .filter((i) => i.event)
            // @ts-ignore
            .map((i) => i.event)
            .map((i) => i.args)
        )
        const transfer = handleTransfer(ctx, block.header, item.event)
        transfersData.push(transfer)
      }
    }
  }

  await saveTransfers(ctx, transfersData)
})

function handleTransfer(ctx: Ctx, block: SubstrateBlock, event: EvmLogEvent) {
  const e = arenaAbi.events['CreatedStakerPosition(uint256,address,uint256)'].decode(event.args.log)
  return { e, event }
}

async function saveTransfers(
  ctx: Ctx,
  transfersData: { e: arenaAbi.CreatedStakerPosition0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new CreatedStakerPosition({
      id: event.id,
      staker: e.staker,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
