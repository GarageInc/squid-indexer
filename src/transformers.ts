import { Context, LogContext, LogEventItem } from './configs'
import {
  AddedDaiToVoting,
  AddedZooToVoting,
  ChosenWinner,
  ClaimedIncentiveRewardFromVoting,
  ClaimedRewardFromStaking,
  ClaimedRewardFromVoting,
  CreatedStakerPosition,
  CreatedVotingPosition,
  FaucetZooGiven,
  JackpotClaimed,
  JackpotStaked,
  JackpotUnstaked,
  JackpotWinnerChoosed,
  LiquidatedVotingPosition,
  NftScanTokens,
  PairedNft,
  Project,
  RemovedStakerPosition,
  Stats,
  TransferErc20,
  TransferErc721,
  WithdrawedDaiFromVoting,
  WithdrawedZooFromVoting,
  XZooClaimed,
  XZooStaked,
  XZooWithdrawed,
} from './model'
import * as arenaAbi from './abi/generated/battle-arena-abi'
import * as voterAbi from './abi/generated/battle-voter-abi'
import * as stakerAbi from './abi/generated/battle-staker-abi'
import * as vemodelAbi from './abi/generated/ve-model-abi'
import * as faucetAbi from './abi/generated/battle-faucet-abi'
import * as xZooAbi from './abi/generated/xZoo'
import * as erc721 from './abi/generated/erc721'
import * as erc20 from './abi/generated/erc20'
import * as jackpotAbi from './abi/generated/jackpot'
import { ZooUnlocked } from './model/generated/zooUnlocked.model'
import { VotedForCollection } from './model/generated/votedForCollection.model'
import {
  BATTLE_STAKER_ARBITRUM,
  BATTLE_VOTER_ARBITRUM,
  JACKPOT_A_ARBITRUM,
  JACKPOT_B_ARBITRUM,
  X_ZOO_ARBITRUM,
} from './contract'
import { BigNumber } from 'ethers'
import { EvmBlock } from '@subsquid/evm-processor'
import { SupportedChainId, fetchNftScan, getArbitrumApi, saveToBackend } from './nft-scan'

const makeId = (event: LogContext) =>
  `${event.transaction.hash}-${event.evmLog.transactionIndex}-${event.evmLog.id}-${event.evmLog.index}`

export async function saveAddedDai<T>(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedDaiToVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<AddedDaiToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new AddedDaiToVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveAddedZoo(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedZooToVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<AddedZooToVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new AddedZooToVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      amount: BigInt(e.amount.toString()),
      votes: BigInt(e.votes.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedZoo(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedZooFromVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<WithdrawedZooFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new WithdrawedZooFromVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      zooNumber: BigInt(e.zooNumber.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWithdrawedDai(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedDaiFromVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<WithdrawedDaiFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new WithdrawedDaiFromVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      daiNumber: BigInt(e.daiNumber.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function savePaired(
  ctx: Context,
  transfersData: { e: ReturnType<typeof arenaAbi.events.PairedNft.decode>; event: LogContext; block: EvmBlock }[]
) {
  const transfers: Set<PairedNft> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const { project: targetProject1 } = await getTargetProject(ctx, e.fighter1.toString(), block, makeId(event))
    const { project: targetProject2 } = await getTargetProject(ctx, e.fighter2.toString(), block, makeId(event))

    const transfer = new PairedNft({
      id: makeId(event),
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      project1: targetProject1,
      project2: targetProject2,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWinner(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ChosenWinner.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ChosenWinner> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ChosenWinner({
      id: makeId(event),
      winner: e.winner,
      playedPairsAmount: BigInt(e.playedPairsAmount.toString()),
      fighter1: BigInt(e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedStaking(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ClaimedRewardFromStaking.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ClaimedRewardFromStaking> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromStaking({
      id: makeId(event),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      yTokenReward: BigInt(e.yTokenReward.toString()),
      staker: e.staker.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedIncentiveStaking(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof stakerAbi.events.ClaimedIncentiveRewardFromVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ClaimedIncentiveRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedIncentiveRewardFromVoting({
      id: makeId(event),
      staker: e.staker.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      zooReward: BigInt(e.zooReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedVoting(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ClaimedRewardFromVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ClaimedRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedRewardFromVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      daiReward: BigInt(e.daiReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveClaimedIncentiveVoting(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof voterAbi.events.ClaimedIncentiveRewardFromVoting.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ClaimedIncentiveRewardFromVoting> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ClaimedIncentiveRewardFromVoting({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      beneficiary: e.beneficiary.toLowerCase(),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      zooReward: BigInt(e.zooReward.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveStaked(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.CreatedStakerPosition.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const {
      project: targetProject,
      token,
      id,
    } = await getTargetProject(ctx, e.stakingPositionId.toString(), block, makeId(event))

    const transfer = new CreatedStakerPosition({
      id: makeId(event),
      staker: e.staker.toLowerCase(),
      author: e.staker.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      project: targetProject,
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)

    if (targetProject) {
      await saveNftScanProject(ctx, makeId(event), token, id)
    }
  }

  await ctx.store.save([...transfers])
}

export async function saveUnStaked(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.RemovedStakerPosition.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<RemovedStakerPosition> = new Set()
  const created: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new RemovedStakerPosition({
      id: makeId(event),
      staker: e.staker.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.CreatedVotingPosition.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const {
      project: targetProject,
      token,
      id,
    } = await getTargetProject(ctx, e.stakingPositionId.toString(), block, makeId(event))

    const transfer = new CreatedVotingPosition({
      id: makeId(event),
      voter: e.voter.toLowerCase(),
      author: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiAmount: BigInt(e.daiAmount.toString()),
      votes: BigInt(e.votes.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
      project: targetProject,
    })

    if (targetProject) {
      await saveNftScanProject(ctx, makeId(event), token, id)
    }

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function liquidateVoted(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.LiquidatedVotingPosition.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<LiquidatedVotingPosition> = new Set()
  const voted: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new LiquidatedVotingPosition({
      id: makeId(event),
      voter: e.voter,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      zooReturned: BigInt(e.zooReturned.toString()),
      daiReceived: BigInt(e.daiReceived.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
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
  transfersData: {
    e: ReturnType<typeof vemodelAbi.events.ZooUnlocked.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<ZooUnlocked> = new Set()
  const voted: Set<VotedForCollection> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ZooUnlocked({
      id: makeId(event),
      amount: BigInt(e.amount.toString()),
      collection: e.collection.toLowerCase(),
      voter: e.voter.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
      positionId: BigInt(e.positionId.toString()),
    })

    transfers.add(transfer)

    const item = await ctx.store.findOneBy(VotedForCollection, {
      positionId: BigInt(e.positionId.toString()),
      collection: e.collection.toLowerCase(),
    })

    if (item) {
      item.isDeleted = true
      voted.add(item)
    }
  }

  await ctx.store.save([...transfers])
  await ctx.store.save([...voted])
}

export async function saveCollectionVoted(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof vemodelAbi.events.VotedForCollection.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<VotedForCollection> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new VotedForCollection({
      id: makeId(event),
      amount: BigInt(e.amount.toString()),
      collection: e.collection.toLowerCase(),
      positionId: BigInt(e.positionId.toString()),
      voter: e.voter.toLowerCase(),
      author: e.voter.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
      isDeleted: false,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveFaucetGiven(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof faucetAbi.events.ZooGiven.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<FaucetZooGiven> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new FaucetZooGiven({
      id: makeId(event),
      user: e.user,
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}
async function getTargetProject(ctx: Context, positionId: string, block: EvmBlock, newId: string) {
  const staker = new stakerAbi.Contract(ctx, { height: block.height }, BATTLE_STAKER_ARBITRUM)
  const data = await staker.positions(BigNumber.from(positionId))

  const { token, id } = data

  const address = token.toLowerCase()

  const contract = new erc721.Contract(ctx, { height: block.height }, address)

  const name = await contract.name()
  const symbol = await contract.symbol()

  const tokenSaved = await ctx.store.findOneBy(Project, {
    address: address,
  })

  if (tokenSaved) {
    return {
      project: tokenSaved,
      token,
      id,
    }
  } else {
    const project = new Project({
      id: newId,
      address: address,
      name: name,
      symbol: symbol,
    })

    await ctx.store.save([project])
  }

  return {
    project: await ctx.store.findOneBy(Project, {
      address: address,
    }),
    token,
    id,
  }
}

export async function saveXZooStaked(
  ctx: Context,
  transfersData: { e: ReturnType<typeof xZooAbi.events.ZooStaked.decode>; event: LogContext; block: EvmBlock }[]
) {
  const transfers: Set<XZooStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooStaked({
      id: makeId(event),
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      author: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveXZooWithdrawn(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof xZooAbi.events.ZooWithdrawal.decode>
    event: LogContext
    block: EvmBlock
  }[]
) {
  const transfers: Set<XZooWithdrawed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooWithdrawed({
      id: makeId(event),
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

const X_ZOO_CLAIMED_TOTAL_KEY = 'X_ZOO_CLAIMED_TOTAL_KEY'

export async function saveXZooClaimed(
  ctx: Context,
  transfersData: { e: ReturnType<typeof xZooAbi.events.Claimed.decode>; event: LogContext; block: EvmBlock }[]
) {
  const transfers: Set<XZooClaimed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooClaimed({
      id: makeId(event),
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      amount: BigInt(e.amount.toString()),
      positionId: BigInt(e.positionId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Staked.decode>
    event: LogContext
    block: EvmBlock
  }[],
  type: JackpotType
) {
  const transfers: Set<JackpotStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotStaked({
      id: makeId(event),
      positionId: BigInt(e.positionId.toString()),
      jackpotPositionId: BigInt(e.jackpotPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      author: e.beneficiary.toLowerCase(),
      type: type,
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveJackpotsUnStaked(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Unstaked.decode>
    event: LogContext
    block: EvmBlock
  }[],
  type: JackpotType
) {
  const transfers: Set<JackpotUnstaked> = new Set()
  const created: Set<JackpotStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotUnstaked({
      id: makeId(event),
      zooPositionId: BigInt(e.zooPositionId.toString()),
      jackpotPositionId: BigInt(e.jackpotPositionId.toString()),
      beneficiary: e.beneficiary.toLowerCase(),
      owner: e.owner.toLowerCase(),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.WinnerChosen.decode>
    event: LogContext
    block: EvmBlock
  }[],
  type: JackpotType
) {
  const transfers: Set<JackpotWinnerChoosed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotWinnerChoosed({
      id: makeId(event),
      epoch: BigInt(e.epoch.toString()),
      winner: BigInt(e.winner.toString()),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

const JACKPOTS_CLAIMED_TOTAL_KEY = 'JACKPOTS_CLAIMED_TOTAL'

export async function saveJackpotsClaimed(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Claimed.decode>
    event: LogContext
    block: EvmBlock
  }[],
  type: JackpotType
) {
  const transfers: Set<JackpotClaimed> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new JackpotClaimed({
      id: makeId(event),
      beneficiary: e.beneficiary.toLowerCase(),
      owner: e.owner.toLowerCase(),
      positionId: BigInt(e.id.toString()),
      epoch: BigInt(e.epoch.toString()),
      rewards: BigInt(e.rewards.toString()),
      type: type,

      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
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

export async function saveTransfersERC721(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: EvmBlock }[],
  contract: string
) {
  const transfers: Set<TransferErc721> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new TransferErc721({
      id: makeId(event),
      contract: contract.toLowerCase(),
      from: e.from.toLowerCase(),
      to: e.to.toLowerCase(),
      tokenId: BigInt(e.tokenId.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveTransfersERC20(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc20.events.Transfer.decode>; event: LogContext; block: EvmBlock }[],
  contract: string
) {
  const transfers: Set<TransferErc20> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new TransferErc20({
      id: makeId(event),
      contract: contract.toLowerCase(),
      from: e.from.toLowerCase(),
      to: e.to.toLowerCase(),
      amount: BigInt(e.value.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.transaction.hash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export const saveVotingsTransferred = async (
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: EvmBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, BATTLE_VOTER_ARBITRUM)

  for (const t of transfersData) {
    const target = await ctx.store.findOneBy(CreatedVotingPosition, {
      voter: t.e.from.toLowerCase(),
      votingPositionId: BigInt(t.e.tokenId.toString()),
    })

    if (target) {
      target.voter = t.e.to.toLowerCase()

      await ctx.store.save(target)
    }
  }
}

export const saveStakingsTransferred = async (
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: EvmBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, BATTLE_STAKER_ARBITRUM)

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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: EvmBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, X_ZOO_ARBITRUM)

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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: EvmBlock }[],
  type: JackpotType
) => {
  const isA = type === 'A'

  await saveTransfersERC721(ctx, transfersData, isA ? JACKPOT_A_ARBITRUM : JACKPOT_B_ARBITRUM)

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
const saveNftScanProject = async (ctx: Context, eventId: string, token: string, id: BigNumber) => {
  const url = getArbitrumApi(token, id.toString())

  const tokenSaved = await ctx.store.findOneBy(NftScanTokens, {
    tokenId: BigInt(id.toString()),
    contract: token.toLowerCase(),
  })

  if (tokenSaved) {
    return tokenSaved
  } else {
    const result: any = await fetchNftScan(url)

    if (+result?.code === 200) {
      const project = new NftScanTokens({
        id: eventId,
        tokenId: BigInt(id.toString()),
        contract: token.toLowerCase(),
        meta: JSON.stringify(result.data),
      })

      await ctx.store.save([project])

      await saveToBackend(token, id, SupportedChainId.ARBITRUM_ONE)
    }
  }
}
