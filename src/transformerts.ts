import { BatchProcessorItem, BatchContext, EvmLogEvent, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { CreatedStakerPosition, CreatedVotingPosition, LiquidatedVotingPosition, RemovedStakerPosition } from './model'
import * as arenaAbi from './abi/battle-arena-abi'

export type Item = BatchProcessorItem<typeof SubstrateBatchProcessor>

export type Ctx = BatchContext<Store, Item>

export async function saveStaked(
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

export async function saveUnStaked(
  ctx: Ctx,
  transfersData: { e: arenaAbi.RemovedStakerPosition0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<RemovedStakerPosition> = new Set()
  const created: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new RemovedStakerPosition({
      id: event.id,
      staker: e.staker,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
    })

    const item = await ctx.store.findOneBy(CreatedStakerPosition, {
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
    })

    if (item) {
      item.isDeleted = true
      created.add(item)
    }

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
  await ctx.store.save([...created])
}

export async function saveVoted(
  ctx: Ctx,
  transfersData: { e: arenaAbi.CreatedVotingPosition0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new CreatedVotingPosition({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiAmount: BigInt(e.daiAmount.toString()),
      votes: BigInt(e.votes.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function liquidateVoted(
  ctx: Ctx,
  transfersData: { e: arenaAbi.LiquidatedVotingPosition0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<LiquidatedVotingPosition> = new Set()
  const voted: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new LiquidatedVotingPosition({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      beneficiary: e.beneficiary,
      zooReturned: BigInt(e.zooReturned.toString()),
      daiReceived: BigInt(e.daiReceived.toString()),
    })

    const item = await ctx.store.findOneBy(CreatedVotingPosition, {
      votingPositionId: BigInt(e.votingPositionId.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
    })

    if (item) {
      item.isDeleted = true
      voted.add(item)
    }

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
  await ctx.store.save([...voted])
}
