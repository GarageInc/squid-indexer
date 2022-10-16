import {
  BatchProcessorItem,
  BatchContext,
  EvmLogEvent,
  SubstrateBatchProcessor,
  SubstrateBlock,
} from '@subsquid/substrate-processor'
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
  Project,
  RemovedStakerPosition,
  WithdrawedDaiFromVoting,
  WithdrawedZooFromVoting,
} from './model'
import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as erc721 from './abi/erc721'
import { ZooUnlocked } from './model/generated/zooUnlocked.model'
import { VotedForCollection } from './model/generated/votedForCollection.model'
import { FaucetGiven } from './model/generated/faucetGiven.model'
import { stakerContract } from './contract'

export type Item = BatchProcessorItem<typeof SubstrateBatchProcessor>

export type Ctx = BatchContext<Store, Item>

export async function saveAddedDai(
  ctx: Ctx,
  transfersData: { e: arenaAbi.AddedDaiToVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<AddedDaiToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new AddedDaiToVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveAddedZoo(
  ctx: Ctx,
  transfersData: { e: arenaAbi.AddedZooToVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<AddedZooToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new AddedZooToVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedZoo(
  ctx: Ctx,
  transfersData: { e: arenaAbi.WithdrawedZooFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<WithdrawedZooFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new WithdrawedZooFromVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      zooNumber: BigInt(e.zooNumber.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedDai(
  ctx: Ctx,
  transfersData: { e: arenaAbi.WithdrawedDaiFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<WithdrawedDaiFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new WithdrawedDaiFromVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      daiNumber: BigInt(e.daiNumber.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function savePaired(
  ctx: Ctx,
  transfersData: { e: arenaAbi.PairedNft0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<PairedNft> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new PairedNft({
      id: event.id,
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWinner(
  ctx: Ctx,
  transfersData: { e: arenaAbi.ChosenWinner0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ChosenWinner> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ChosenWinner({
      id: event.id,
      winner: e.winner,
      playedPairsAmount: BigInt(e.playedPairsAmount.toString()),
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedStaking(
  ctx: Ctx,
  transfersData: { e: arenaAbi.ClaimedRewardFromStaking0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedRewardFromStaking> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromStaking({
      id: event.id,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      staker: e.staker.toLowerCase(),
      beneficiary: e.beneficiary,
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
export async function saveClaimedVoting(
  ctx: Ctx,
  transfersData: { e: arenaAbi.ClaimedRewardFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromVoting({
      id: event.id,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      voter: e.voter.toLowerCase(),
      beneficiary: e.beneficiary,
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveStaked(
  ctx: Ctx,
  transfersData: { e: arenaAbi.CreatedStakerPosition0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const targetProject = await getTargetProject(ctx, e.stakingPositionId.toString(), block, event.id)

    const transfer = new CreatedStakerPosition({
      id: event.id,
      staker: e.staker.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      project: targetProject,
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveUnStaked(
  ctx: Ctx,
  transfersData: { e: arenaAbi.RemovedStakerPosition0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<RemovedStakerPosition> = new Set()
  const created: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new RemovedStakerPosition({
      id: event.id,
      staker: e.staker.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
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
  transfersData: { e: arenaAbi.CreatedVotingPosition0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const targetProject = await getTargetProject(ctx, e.stakingPositionId.toString(), block, event.id)

    const transfer = new CreatedVotingPosition({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiAmount: BigInt(e.daiAmount.toString()),
      votes: BigInt(e.votes.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
      project: targetProject,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function liquidateVoted(
  ctx: Ctx,
  transfersData: { e: arenaAbi.LiquidatedVotingPosition0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<LiquidatedVotingPosition> = new Set()
  const voted: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new LiquidatedVotingPosition({
      id: event.id,
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      zooReturned: BigInt(e.zooReturned.toString()),
      daiReceived: BigInt(e.daiReceived.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
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
  transfersData: { e: vemodelAbi.ZooUnlocked0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ZooUnlocked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ZooUnlocked({
      id: event.id,
      amount: BigInt(e.amount.toString()),
      collection: e.collection.toLowerCase(),
      voter: e.voter.toLowerCase(),
      timestamp: new Date(block.timestamp),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveCollectionVoted(
  ctx: Ctx,
  transfersData: { e: vemodelAbi.VotedForCollection0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<VotedForCollection> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new VotedForCollection({
      id: event.id,
      amount: BigInt(e.amount.toString()),
      collection: e.collection.toLowerCase(),
      voter: e.voter.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveFaucetGiven(
  ctx: Ctx,
  transfersData: { e: faucetAbi.tokensGiven0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<FaucetGiven> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new FaucetGiven({
      id: event.id,
      user: e.user,
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
async function getTargetProject(ctx: Ctx, positionId: string, block: SubstrateBlock, newId: string) {
  const data = await stakerContract.functions['positions'](positionId)

  const { token } = data

  const address = token.toLowerCase()

  const contract = new erc721.Contract(ctx, { height: block.height }, address)

  const name = await contract.name()
  const symbol = await contract.symbol()

  const tokenSaved = await ctx.store.findOneBy(Project, {
    address: address,
  })

  if (tokenSaved) {
    return tokenSaved
  } else {
    const project = new Project({
      id: newId,
      address: address,
      name: name,
      symbol: symbol,
    })

    await ctx.store.save([project])
  }

  return await ctx.store.findOneBy(Project, {
    address: address,
  })
}
