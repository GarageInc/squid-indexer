import {
  AddedDaiToVoting,
  AddedZooToVoting,
  ChosenWinner,
  ClaimedIncentiveRewardFromVoting,
  ClaimedRewardFromStaking,
  ClaimedRewardFromVoting,
  CreatedStakerPosition,
  CreatedVotingPosition,
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
} from './model'
import * as arenaAbi from './abi/generated/battle-arena-abi'
import * as voterAbi from './abi/generated/battle-voter-abi'
import * as stakerAbi from './abi/generated/battle-staker-abi'
import * as functionsAbi from './abi/generated/battle-functions-abi'
import * as vemodelAbi from './abi/generated/ve-model-abi'
import * as erc721 from './abi/generated/erc721'
import * as erc20 from './abi/generated/erc20'
import { ZooUnlocked } from './model/generated/zooUnlocked.model'
import { VotedForCollection } from './model/generated/votedForCollection.model'
import {
  BATTLE_FUNCTIONS_ARBITRUM,
  BATTLE_STAKER_ARBITRUM,
  BATTLE_VOTER_ARBITRUM,
} from './contract'
import { SupportedChainId, fetchNftScan, getArbitrumApi, saveToBackend } from './nft-scan'
import { Context, IBlockHeader, LogContext } from './configs'

const makeId = (event: LogContext) =>
  `${getHash(event)}-${event.transactionIndex}-${event.id}-${event.logIndex}`

const calculateLeague = async (ctx: Context, block: IBlockHeader, stakingPositionId: string) => {
  const stakedPosition = await ctx.store.findOneBy(CreatedStakerPosition, {
    stakingPositionId: BigInt(stakingPositionId),
  })

  if(stakedPosition){
    const staker = new functionsAbi.Contract(ctx, { height: block.height }, BATTLE_FUNCTIONS_ARBITRUM)

    const positions = await ctx.store.find(CreatedVotingPosition, {
      where: {
        stakingPositionId: BigInt(stakingPositionId),
        isDeleted: false
      }
    })
  
    const allVotes = positions.reduce((acc, item) => {
      return acc + item.votes
    }, BigInt(0))

    stakedPosition.league = await staker.getNftLeague(allVotes)
    await ctx.store.save([stakedPosition])
  }
}

export async function saveAddedDai<T>(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedDaiToVoting.decode>
    event: LogContext
    block: IBlockHeader
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])

  transfersData.forEach(async (transferData) => {
    const { e,  block } = transferData
    await calculateLeague(ctx, block, e.stakingPositionId.toString())
  })
}

export async function saveAddedZoo(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.AddedZooToVoting.decode>
    event: LogContext
    block: IBlockHeader
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])

  transfersData.forEach(async (transferData) => {
    const { e,  block } = transferData
    await calculateLeague(ctx, block, e.stakingPositionId.toString())
  })
}

export async function saveWithdrawedZoo(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedZooFromVoting.decode>
    event: LogContext
    block: IBlockHeader
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])

  transfersData.forEach(async (transferData) => {
    const { e,  block } = transferData
    await calculateLeague(ctx, block, e.stakingPositionId.toString())
  })
}

export async function saveWithdrawedDai(
  ctx: Context,
  transfersData: {
    e: ReturnType<typeof arenaAbi.events.WithdrawedDaiFromVoting.decode>
    event: LogContext
    block: IBlockHeader
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])

  transfersData.forEach(async (transferData) => {
    const { e,  block } = transferData
    await calculateLeague(ctx, block, e.stakingPositionId.toString())
  })
}

export async function savePaired(
  ctx: Context,
  transfersData: { e: ReturnType<typeof arenaAbi.events.PairedNft.decode>; event: LogContext; block: IBlockHeader }[]
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
      league: 0
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      transactionHash: getHash(event),
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
    block: IBlockHeader
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
      votingSaved.transactionHash = getHash(event) || event.block.hash

      votingSaved.voter = e.voter.toLowerCase()
      votingSaved.author = e.voter.toLowerCase()

      await ctx.store.save([votingSaved])
    } else {
      const transfer = new VotedForCollection({
        id: makeId(event),
        amount: BigInt(e.amount.toString()),
        collection: e.collection.toLowerCase(),
        positionId: BigInt(e.positionId.toString()),
        voter: e.voter.toLowerCase(),
        author: e.voter.toLowerCase(),
        timestamp: new Date(block.timestamp),
        transactionHash: getHash(event),
        isDeleted: false,
      })

      await ctx.store.save([transfer])
    }
  }

}

async function getTargetProject(ctx: Context, positionId: string, block: IBlockHeader, newId: string) {
  const staker = new stakerAbi.Contract(ctx, { height: block.height }, BATTLE_STAKER_ARBITRUM)
  const data = await staker.positions(BigInt(positionId))

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

export async function saveTransfersERC721(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: IBlockHeader }[],
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export async function saveTransfersERC20(
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc20.events.Transfer.decode>; event: LogContext; block: IBlockHeader }[],
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
      transactionHash: getHash(event),
    })

    transfers.add(transfer)
  }

  await ctx.store.save([...transfers])
}

export const saveVotingsTransferred = async (
  ctx: Context,
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: IBlockHeader }[]
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
  transfersData: { e: ReturnType<typeof erc721.events.Transfer.decode>; event: LogContext; block: IBlockHeader }[]
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

const saveNftScanProject = async (ctx: Context, eventId: string, token: string, id: BigInt) => {
  const url = getArbitrumApi(token, id.toString())

  const tokenSaved = await ctx.store.findOneBy(NftScanTokens, {
    tokenId: BigInt(id.toString()),
    contract: token.toLowerCase(),
  })

  if (tokenSaved) {
    return tokenSaved
  } else {
    try {
      const result: any = await fetchNftScan(url)

      if (+result?.code === 200 && result.data) {
        const project = new NftScanTokens({
          id: eventId,
          tokenId: BigInt(id.toString()),
          contract: token.toLowerCase(),
          meta: JSON.stringify(result.data),
        })

        await ctx.store.save([project])

        await saveToBackend(token, id, SupportedChainId.ARBITRUM_ONE)
      }
    } catch (e) {
      console.error(e)
    }
  }
}

function getHash(event: LogContext): string | undefined {
  return event.transaction?.hash || event.block.hash
}

