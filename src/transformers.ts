import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import { Context } from './configs'
import { Store } from '@subsquid/typeorm-store'
import {
  AddedDaiToVoting,
  AddedZooToVoting,
  ChosenWinner,
  ClaimedIncentiveRewardFromVoting,
  ClaimedRewardFromStaking,
  ClaimedRewardFromVoting,
  CreatedStakerPosition,
  CreatedVotingPosition,
  JackpotClaimed,
  JackpotStaked,
  JackpotUnstaked,
  JackpotWinnerChoosed,
  LiquidatedVotingPosition,
  PairedNft,
  Project,
  RemovedStakerPosition,
  Stats,
  Transfer,
  WithdrawedDaiFromVoting,
  WithdrawedZooFromVoting,
  XZooClaimed,
  XZooStaked,
  XZooWithdrawed,
} from './model'
import * as arenaAbi from './abi/battle-arena-abi'
import * as voterAbi from './abi/battle-voter-abi'
import * as stakerAbi from './abi/battle-staker-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as xZooAbi from './abi/xZoo'
import * as erc721 from './abi/erc721'
import * as jackpotAbi from './abi/jackpot'
import { ZooUnlocked } from './model/generated/zooUnlocked.model'
import { VotedForCollection } from './model/generated/votedForCollection.model'
import { FaucetGiven } from './model/generated/faucetGiven.model'
import {
  BATTLE_STAKER_MOONBEAM,
  BATTLE_VOTER_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
  X_ZOO_MOONBEAM,
} from './contract'
import { BigNumber } from 'ethers'

export async function saveAddedDai(
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
  transfersData: { e: arenaAbi.ClaimedRewardFromStaking0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedRewardFromStaking> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromStaking({
      id: event.id,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      staker: e.staker.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedIncentiveStaking(
  ctx: Context,
  transfersData: { e: stakerAbi.ClaimedIncentiveRewardFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedIncentiveRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedIncentiveRewardFromVoting({
      id: event.id,
      staker: e.staker.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      zooReward: BigInt(e.zooReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedVoting(
  ctx: Context,
  transfersData: { e: arenaAbi.ClaimedRewardFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedIncentiveVoting(
  ctx: Context,
  transfersData: { e: voterAbi.ClaimedIncentiveRewardFromVoting0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<ClaimedIncentiveRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedIncentiveRewardFromVoting({
      id: event.id,
      voter: e.voter.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      zooReward: BigInt(e.zooReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveStaked(
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
  ctx: Context,
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
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveCollectionVoted(
  ctx: Context,
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
  ctx: Context,
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
async function getTargetProject(ctx: Context, positionId: string, block: SubstrateBlock, newId: string) {
  const staker = new stakerAbi.Contract(ctx, { height: block.height }, BATTLE_STAKER_MOONBEAM)
  const data = await staker.positions(BigNumber.from(positionId))

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

export async function saveXZooStaked(
  ctx: Context,
  transfersData: { e: xZooAbi.ZooStaked0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<XZooStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooStaked({
      id: event.id,
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveXZooWithdrawn(
  ctx: Context,
  transfersData: { e: xZooAbi.ZooWithdrawal0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<XZooWithdrawed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooWithdrawed({
      id: event.id,
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

const X_ZOO_CLAIMED_TOTAL_KEY = 'X_ZOO_CLAIMED_TOTAL_KEY'

export async function saveXZooClaimed(
  ctx: Context,
  transfersData: { e: xZooAbi.Claimed0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<XZooClaimed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooClaimed({
      id: event.id,
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  if (transfersData.length > 0) {
    const amount = [...transfers].reduce((acc, item) => {
      return acc + item.amount
    }, BigInt(0))

    await saveOrUpdateByKey(ctx, X_ZOO_CLAIMED_TOTAL_KEY, amount)
  }

  await ctx.store.save([...transfers])
}

const saveOrUpdateByKey = async (ctx: Context, key: string, amount: bigint) => {
  const saved = await ctx.store.findOneBy(Stats, {
    id: key,
  })

  if (saved) {
    saved.value += amount

    saved.updatedAt = new Date()

    await ctx.store.save([saved])
  } else {
    const newStat = new Stats({
      id: key,
      value: amount,
      updatedAt: new Date(),
    })

    await ctx.store.save([newStat])
  }
}

type JackpotType = 'A' | 'B'

export async function saveJackpotsStaked(
  ctx: Context,
  transfersData: { e: jackpotAbi.Staked0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) {
  const transfers: Set<JackpotStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotStaked({
      id: event.id,
      positionId: BigInt(e.positionId.toString()),
      jackpotPositionId: BigInt(e.jackpotPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      type: type,
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveJackpotsUnStaked(
  ctx: Context,
  transfersData: { e: jackpotAbi.Unstaked0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) {
  const transfers: Set<JackpotUnstaked> = new Set()
  const created: Set<JackpotStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotUnstaked({
      id: event.id,
      zooPositionId: BigInt(e.zooPositionId.toString()),
      jackpotPositionId: BigInt(e.jackpotPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      owner: e.owner.toLowerCase(),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    const item = await ctx.store.findOneBy(JackpotStaked, {
      jackpotPositionId: BigInt(e.jackpotPositionId.toString()),
      type: type,
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

export async function saveJackpotsWinned(
  ctx: Context,
  transfersData: { e: jackpotAbi.WinnerChoosed0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) {
  const transfers: Set<JackpotWinnerChoosed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotWinnerChoosed({
      id: event.id,
      epoch: BigInt(e.epoch.toString()),
      winner: BigInt(e.winner.toString()),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

const JACKPOTS_CLAIMED_TOTAL_KEY = 'JACKPOTS_CLAIMED_TOTAL'

export async function saveJackpotsClaimed(
  ctx: Context,
  transfersData: { e: jackpotAbi.Claimed0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) {
  const transfers: Set<JackpotClaimed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotClaimed({
      id: event.id,
      beneficiary: e.beneficiary.toLowerCase(),
      owner: e.owner.toLowerCase(),
      positionId: BigInt(e.id.toString()),
      epoch: BigInt(e.epoch.toString()),
      rewards: BigInt(e.rewards.toString()),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  if (transfersData.length > 0) {
    const amount = [...transfers].reduce((acc, item) => {
      return acc + item.rewards
    }, BigInt(0))

    await saveOrUpdateByKey(ctx, `A_${JACKPOTS_CLAIMED_TOTAL_KEY}`, amount)
  }

  await ctx.store.save([...transfers])
}

export async function saveTransfers(
  ctx: Context,
  transfersData: { e: erc721.Transfer0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  contract: string
) {
  const transfers: Set<Transfer> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new Transfer({
      id: event.id,
      contract: contract.toLowerCase(),
      from: e.from.toLowerCase(),
      to: e.to.toLowerCase(),
      tokenId: BigInt(e.tokenId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export const saveVotingsTransferred = async (
  ctx: Context,
  transfersData: { e: erc721.Transfer0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfers(ctx, transfersData, BATTLE_VOTER_MOONBEAM)

  const list: CreatedVotingPosition[] = []
  for (const t of transfersData) {
    const target = await ctx.store.findOneBy(CreatedVotingPosition, {
      voter: t.e.from.toLowerCase(),
      votingPositionId: BigInt(t.e.tokenId.toString()),
    })

    if (target) {
      target.voter = t.e.to.toLowerCase()
      list.push(target)

      await ctx.store.save(target)
    }
  }
}

export const saveStakingsTransferred = async (
  ctx: Context,
  transfersData: { e: erc721.Transfer0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfers(ctx, transfersData, BATTLE_STAKER_MOONBEAM)

  const list: CreatedStakerPosition[] = []
  for (const t of transfersData) {
    const target = await ctx.store.findOneBy(CreatedStakerPosition, {
      staker: t.e.from.toLowerCase(),
      stakingPositionId: BigInt(t.e.tokenId.toString()),
    })

    if (target) {
      target.staker = t.e.to.toLowerCase()
      list.push(target)

      await ctx.store.save(target)
    }
  }
}

export const saveXZooTransferred = async (
  ctx: Context,
  transfersData: { e: erc721.Transfer0Event; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfers(ctx, transfersData, X_ZOO_MOONBEAM)

  const list: XZooStaked[] = []
  for (const t of transfersData) {
    const target = await ctx.store.findOneBy(XZooStaked, {
      staker: t.e.from.toLowerCase(),
      positionId: BigInt(t.e.tokenId.toString()),
    })

    if (target) {
      target.staker = t.e.to.toLowerCase()
      list.push(target)

      await ctx.store.save(target)
    }
  }
}

export const saveJackpotTransferred = async (
  ctx: Context,
  transfersData: { e: erc721.Transfer0Event; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) => {
  const isA = type === 'A'

  await saveTransfers(ctx, transfersData, isA ? JACKPOT_A_MOONBEAM : JACKPOT_B_MOONBEAM)

  const list: JackpotStaked[] = []

  for (const t of transfersData) {
    const target = await ctx.store.findOneBy(JackpotStaked, {
      beneficiary: t.e.from.toLowerCase(),
      type: type,
      jackpotPositionId: BigInt(t.e.tokenId.toString()),
    })

    if (target) {
      target.beneficiary = t.e.to.toLowerCase()
      list.push(target)

      await ctx.store.save(target)
    }
  }
}
