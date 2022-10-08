import { BatchProcessorItem, BatchContext, EvmLogEvent, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import {
  AddedDaiToVoting,
  AddedZooToVoting,
  ChosenWinner,
  ClaimedRewardFromStaking,
  ClaimedRewardFromVoting,
  CreatedStakerPosition,
  CreatedVotingPosition,
  LiquidatedVotingPosition,
  PairedNft,
  RemovedStakerPosition,
  WithdrawedDaiFromVoting,
  WithdrawedZooFromVoting,
} from './model'
import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import { ZooUnlocked } from './model/generated/zooUnlocked.model'
import { VotedForCollection } from './model/generated/votedForCollection.model'

export type Item = BatchProcessorItem<typeof SubstrateBatchProcessor>

export type Ctx = BatchContext<Store, Item>

export async function saveAddedDai(
  ctx: Ctx,
  transfersData: { e: arenaAbi.AddedDaiToVoting0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<AddedDaiToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new AddedDaiToVoting({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveAddedZoo(
  ctx: Ctx,
  transfersData: { e: arenaAbi.AddedZooToVoting0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<AddedZooToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new AddedZooToVoting({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedZoo(
  ctx: Ctx,
  transfersData: { e: arenaAbi.WithdrawedZooFromVoting0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<WithdrawedZooFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new WithdrawedZooFromVoting({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      zooNumber: BigInt(e.zooNumber.toString()),
      beneficiary: e.beneficiary,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedDai(
  ctx: Ctx,
  transfersData: { e: arenaAbi.WithdrawedDaiFromVoting0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<WithdrawedDaiFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new WithdrawedDaiFromVoting({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      daiNumber: BigInt(e.daiNumber.toString()),
      beneficiary: e.beneficiary,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function savePaired(ctx: Ctx, transfersData: { e: arenaAbi.PairedNft0Event; event: EvmLogEvent }[]) {
  const transfers: Set<PairedNft> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new PairedNft({
      id: event.id,
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWinner(ctx: Ctx, transfersData: { e: arenaAbi.ChosenWinner0Event; event: EvmLogEvent }[]) {
  const transfers: Set<ChosenWinner> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new ChosenWinner({
      id: event.id,
      winner: e.winner,
      playedPairsAmount: BigInt(e.playedPairsAmount.toString()),
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedStaking(
  ctx: Ctx,
  transfersData: { e: arenaAbi.ClaimedRewardFromStaking0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<ClaimedRewardFromStaking> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new ClaimedRewardFromStaking({
      id: event.id,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      staker: e.staker,
      beneficiary: e.beneficiary,
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      daiReward: BigInt(e.daiReward.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
export async function saveClaimedVoting(
  ctx: Ctx,
  transfersData: { e: arenaAbi.ClaimedRewardFromVoting0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<ClaimedRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new ClaimedRewardFromVoting({
      id: event.id,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      voter: e.voter,
      beneficiary: e.beneficiary,
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      daiReward: BigInt(e.daiReward.toString()),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

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
      isDeleted: false,
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
      isDeleted: false,
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

export async function saveZooUnlocked(
  ctx: Ctx,
  transfersData: { e: vemodelAbi.ZooUnlocked0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<ZooUnlocked> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new ZooUnlocked({
      id: event.id,
      amount: BigInt(e.amount.toString()),
      collection: e.collection,
      voter: e.voter,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveCollectionVoted(
  ctx: Ctx,
  transfersData: { e: vemodelAbi.VotedForCollection0Event; event: EvmLogEvent }[]
) {
  const transfers: Set<VotedForCollection> = new Set()

  for (const transferData of transfersData) {
    const { e, event } = transferData

    const transfer = new VotedForCollection({
      id: event.id,
      amount: BigInt(e.amount.toString()),
      collection: e.collection,
      voter: e.voter,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
