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
  BATTLE_STAKER_MOONBEAM,
  BATTLE_VOTER_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
  X_ZOO_MOONBEAM,
} from './contract'
import { BigNumber } from 'ethers'
import { SupportedChainId, fetchNftScan, getMoonbeamNftAPI, saveToBackend } from './nft-scan'

export async function saveAddedDai<T>(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedDaiToVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedZooToVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedZooFromVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedDaiFromVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: { e: ReturnType<typeof arenaAbi.events.PairedNft.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<PairedNft> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const { project: targetProject1 } = await getTargetProject(ctx, e.fighter1.toString(), block, event.id)
    const { project: targetProject2 } = await getTargetProject(ctx, e.fighter2.toString(), block, event.id)

    const transfer = new PairedNft({
      id: event.id,
      fighter1: BigInt(e.fighter1.toString()),
      fighterPosition1: await getStakingPosition(ctx, e.fighter1.toString()),
      fighter2: BigInt(e.fighter2.toString()),
      fighterPosition2: await getStakingPosition(ctx, e.fighter2.toString()),
      project1: targetProject1,
      project2: targetProject2,
      currentEpoch: BigInt(e.currentEpoch.toString()),
      pairIndex: BigInt(e.pairIndex.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
      league: 0
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveWinner(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ChosenWinner.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ClaimedRewardFromStaking.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof stakerAbi.events.ClaimedIncentiveRewardFromVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.ClaimedRewardFromVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof voterAbi.events.ClaimedIncentiveRewardFromVoting.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.CreatedStakerPosition.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
) {
  const transfers: Set<CreatedStakerPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const {
      project: targetProject,
      token,
      id,
    } = await getTargetProject(ctx, e.stakingPositionId.toString(), block, event.id)

    const transfer = new CreatedStakerPosition({
      id: event.id,
      staker: e.staker.toLowerCase(),
      author: e.staker.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      project: targetProject,
      transactionHash: event.evmTxHash,
      league: 0
    })

    transfers.add(transfer)

    if (targetProject) {
      await saveNftScanProject(ctx, event.id, token, id)
    }
  }

  await ctx.store.save([...transfers])
}

export async function saveUnStaked(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.RemovedStakerPosition.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.CreatedVotingPosition.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
) {
  const transfers: Set<CreatedVotingPosition> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const {
      project: targetProject,
      token,
      id,
    } = await getTargetProject(ctx, e.stakingPositionId.toString(), block, event.id)

    const transfer = new CreatedVotingPosition({
      id: event.id,
      voter: e.voter.toLowerCase(),
      author: e.voter.toLowerCase(),
      currentEpoch: BigInt(e.currentEpoch.toString()),
      stakingPositionId: BigInt(e.stakingPositionId.toString()),
      daiAmount: BigInt(e.daiAmount.toString()),
      votes: BigInt(e.votes.toString()),
      votingPositionId: BigInt(e.votingPositionId.toString()),
      isDeleted: false,
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
      project: targetProject,
      stakedPosition: await getStakingPosition(ctx, e.stakingPositionId.toString())
    })

    if (targetProject) {
      await saveNftScanProject(ctx, event.id, token, id)
    }

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

async function getStakingPosition(ctx: Context, stakingPositionId: string)  {
  return await ctx.store.findOneBy(CreatedStakerPosition, {
    stakingPositionId: BigInt(stakingPositionId),
  })
}

export async function liquidateVoted(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.LiquidatedVotingPosition.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: {
    e: ReturnType<typeof vemodelAbi.events.ZooUnlocked.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
) {
  const transfers: Set<ZooUnlocked> = new Set()
  const voted: Set<VotedForCollection> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new ZooUnlocked({
      id: event.id,
      amount: BigInt(e.amount.toString()),
      collection: e.collection.toLowerCase(),
      voter: e.voter.toLowerCase(),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
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
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
) {
  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const votingSaved = await ctx.store.findOneBy(VotedForCollection, {
      positionId: BigInt(e.positionId.toString()),
      collection: e.collection.toLowerCase(),
      isDeleted: false,
    })

    if (votingSaved) {
      votingSaved.amount = votingSaved.amount + BigInt(e.amount.toString())
      votingSaved.timestamp = new Date(block.timestamp)
      votingSaved.transactionHash = event.evmTxHash

      votingSaved.voter = e.voter.toLowerCase()
      votingSaved.author = e.voter.toLowerCase()

      await ctx.store.save([votingSaved])
    } else {
      const transfer = new VotedForCollection({
        id: event.id,
        amount: BigInt(e.amount.toString()),
        collection: e.collection.toLowerCase(),
        positionId: BigInt(e.positionId.toString()),
        voter: e.voter.toLowerCase(),
        author: e.voter.toLowerCase(),
        timestamp: new Date(block.timestamp),
        transactionHash: event.evmTxHash,
        isDeleted: false,
      })

      await ctx.store.save([transfer])
    }

  }

}

export async function saveFaucetGiven(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof faucetAbi.events.ZooGiven.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
) {
  const transfers: Set<FaucetZooGiven> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new FaucetZooGiven({
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
  transfersData: { e: ReturnType<typeof xZooAbi.events.ZooStaked.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
) {
  const transfers: Set<XZooStaked> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new XZooStaked({
      id: event.id,
      beneficiary: e.beneficiary.toLowerCase(),
      staker: e.staker.toLowerCase(),
      author: e.staker.toLowerCase(),
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
  transfersData: {
    e: ReturnType<typeof xZooAbi.events.ZooWithdrawal.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[]
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
  transfersData: { e: ReturnType<typeof xZooAbi.events.Claimed.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Staked.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[],
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
      author: e.beneficiary.toLowerCase(),
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Unstaked.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[],
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.WinnerChosen.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[],
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
  transfersData: {
    e: ReturnType<typeof jackpotAbi.events.Claimed.decode>
    event: EvmLogEvent
    block: SubstrateBlock
  }[],
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

export async function saveTransfersERC721(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[],
  contract: string
) {
  const transfers: Set<TransferErc721> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new TransferErc721({
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

export async function saveTransfersERC20(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc20.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[],
  contract: string
) {
  const transfers: Set<TransferErc20> = new Set()

  for (const transferData of transfersData) {
    const { e, event, block } = transferData

    const transfer = new TransferErc20({
      id: event.id,
      contract: contract.toLowerCase(),
      from: e.from.toLowerCase(),
      to: e.to.toLowerCase(),
      amount: BigInt(e.value.toString()),
      timestamp: new Date(block.timestamp),
      transactionHash: event.evmTxHash,
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export const saveVotingsTransferred = async (
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, BATTLE_VOTER_MOONBEAM)

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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, BATTLE_STAKER_MOONBEAM)

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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[]
) => {
  await saveTransfersERC721(ctx, transfersData, X_ZOO_MOONBEAM)

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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: EvmLogEvent; block: SubstrateBlock }[],
  type: JackpotType
) => {
  const isA = type === 'A'

  await saveTransfersERC721(ctx, transfersData, isA ? JACKPOT_A_MOONBEAM : JACKPOT_B_MOONBEAM)

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
  const url = getMoonbeamNftAPI(token, id.toString())

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

      await saveToBackend(token, id, SupportedChainId.MOONBEAM)
    }
  }
}
