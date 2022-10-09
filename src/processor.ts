import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor, EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { CHAIN_NODE, arenaContract, veModelContract, faucetContract } from './contract'
import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import {
  Ctx,
  liquidateVoted,
  saveAddedDai,
  saveAddedZoo,
  saveClaimedStaking,
  saveClaimedVoting,
  saveCollectionVoted,
  saveFaucetGiven,
  savePaired,
  saveStaked,
  saveUnStaked,
  saveVoted,
  saveWinner,
  saveWithdrawedDai,
  saveWithdrawedZoo,
  saveZooUnlocked,
} from './transformers'

const CreatedStakerPositionT = arenaAbi.events['CreatedStakerPosition(uint256,address,uint256)']
const CreatedVotingPositionT = arenaAbi.events['CreatedVotingPosition(uint256,address,uint256,uint256,uint256,uint256)']
const RemovedStakerPositionT = arenaAbi.events['RemovedStakerPosition(uint256,address,uint256)']
const LiquidatedVotingPositionT =
  arenaAbi.events['LiquidatedVotingPosition(uint256,address,uint256,address,uint256,uint256,uint256)']
const AddedZooToVotingT = arenaAbi.events['AddedZooToVoting(uint256,address,uint256,uint256,uint256,uint256)']
const AddedDaiToVotingT = arenaAbi.events['AddedDaiToVoting(uint256,address,uint256,uint256,uint256,uint256)']
const WithdrawedDaiFromVotingT =
  arenaAbi.events['WithdrawedDaiFromVoting(uint256,address,uint256,address,uint256,uint256)']
const WithdrawedZooFromVotingT =
  arenaAbi.events['WithdrawedZooFromVoting(uint256,address,uint256,uint256,uint256,address)']
const PairedNftT = arenaAbi.events['PairedNft(uint256,uint256,uint256,uint256)']
const ChosenWinnerT = arenaAbi.events['ChosenWinner(uint256,uint256,uint256,bool,uint256,uint256)']
const ClaimedRewardFromStakingT =
  arenaAbi.events['ClaimedRewardFromStaking(uint256,address,uint256,address,uint256,uint256)']
const ClaimedRewardFromVotingT =
  arenaAbi.events['ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256,uint256)']

const VotedForCollectionT = vemodelAbi.events['VotedForCollection(address,address,uint256)']
const ZooUnlockedT = vemodelAbi.events['ZooUnlocked(address,address,uint256)']

const TokensGivenT = faucetAbi.events['tokensGiven(address)']

interface IArenaEvmEvent {
  topic: string
  decode: (data: arenaAbi.EvmLog) => any
}

/*
PairedNftT.topic,
ChosenWinnerT.topic,
ClaimedRewardFromStakingT.topic,
ClaimedRewardFromVotingT.topic,
*/

const FROM = 1887167

const database = new TypeormDatabase()
const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setBlockRange({ from: FROM })
  .setDataSource({
    chain: CHAIN_NODE,
    archive: lookupArchive('moonbeam', { release: 'FireSquid' }),
  })
  .setTypesBundle('moonbeam')
  .addEvmLog(arenaContract.address, {
    filter: [CreatedStakerPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [RemovedStakerPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [CreatedVotingPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [LiquidatedVotingPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [AddedDaiToVotingT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [AddedZooToVotingT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [WithdrawedDaiFromVotingT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [WithdrawedZooFromVotingT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [PairedNftT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [ChosenWinnerT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [ClaimedRewardFromStakingT.topic],
  })
  .addEvmLog(arenaContract.address, {
    filter: [ClaimedRewardFromVotingT.topic],
  })

  .addEvmLog(veModelContract.address, {
    filter: [VotedForCollectionT.topic],
  })
  .addEvmLog(veModelContract.address, {
    filter: [ZooUnlockedT.topic],
  })

  .addEvmLog(faucetContract.address, {
    filter: [TokensGivenT.topic],
  })

const hasIn = (item: any, topic: string) =>
  item.event.args && item.event.args.log && item.event.args.log.topics.indexOf(topic) !== -1

processor.run(database, async (ctx: any) => {
  const staked = []
  const unstaked = []
  const voted = []
  const liquidatedVoting = []
  const addedDai = []
  const addedZoo = []
  const withdrawedDai = []
  const withdrawedZoo = []
  const pairedNft = []
  const chosenWinner = []
  const claimedStaking = []
  const claimedVoting = []

  const votedCollection = []
  const zooUnlocked = []

  const given = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        /*console.log(
          '----',
          block.items.filter((i: any) => i.event).map((i: any) => i.event.args?.log?.topics)
        )*/
        if (hasIn(item, CreatedStakerPositionT.topic)) {
          staked.push(handler(ctx, block.header, item.event, CreatedStakerPositionT))
        }
        if (hasIn(item, RemovedStakerPositionT.topic)) {
          unstaked.push(handler(ctx, block.header, item.event, RemovedStakerPositionT))
        }
        if (hasIn(item, VotedForCollectionT.topic)) {
          voted.push(handler(ctx, block.header, item.event, VotedForCollectionT))
        }
        if (hasIn(item, LiquidatedVotingPositionT.topic)) {
          liquidatedVoting.push(handler(ctx, block.header, item.event, LiquidatedVotingPositionT))
        }

        if (hasIn(item, AddedDaiToVotingT.topic)) {
          addedDai.push(handler(ctx, block.header, item.event, AddedDaiToVotingT))
        }
        if (hasIn(item, AddedZooToVotingT.topic)) {
          addedZoo.push(handler(ctx, block.header, item.event, AddedZooToVotingT))
        }
        if (hasIn(item, WithdrawedZooFromVotingT.topic)) {
          withdrawedZoo.push(handler(ctx, block.header, item.event, WithdrawedZooFromVotingT))
        }
        if (hasIn(item, WithdrawedDaiFromVotingT.topic)) {
          withdrawedDai.push(handler(ctx, block.header, item.event, WithdrawedDaiFromVotingT))
        }

        if (hasIn(item, PairedNftT.topic)) {
          pairedNft.push(handler(ctx, block.header, item.event, PairedNftT))
        }
        if (hasIn(item, ChosenWinnerT.topic)) {
          chosenWinner.push(handler(ctx, block.header, item.event, ChosenWinnerT))
        }
        if (hasIn(item, ClaimedRewardFromStakingT.topic)) {
          claimedStaking.push(handler(ctx, block.header, item.event, ClaimedRewardFromStakingT))
        }
        if (hasIn(item, ClaimedRewardFromVotingT.topic)) {
          claimedVoting.push(handler(ctx, block.header, item.event, ClaimedRewardFromVotingT))
        }

        if (hasIn(item, VotedForCollectionT.topic)) {
          votedCollection.push(handler(ctx, block.header, item.event, VotedForCollectionT))
        }
        if (hasIn(item, ZooUnlockedT.topic)) {
          zooUnlocked.push(handler(ctx, block.header, item.event, ZooUnlockedT))
        }

        if (hasIn(item, TokensGivenT.topic)) {
          given.push(handler(ctx, block.header, item.event, TokensGivenT))
        }
      }
    }
  }

  await saveStaked(ctx, staked)
  await saveUnStaked(ctx, unstaked)

  await saveVoted(ctx, voted)
  await liquidateVoted(ctx, liquidatedVoting)

  await saveAddedDai(ctx, addedDai)
  await saveAddedZoo(ctx, addedZoo)

  await saveWithdrawedDai(ctx, withdrawedDai)
  await saveWithdrawedZoo(ctx, withdrawedZoo)

  await saveWinner(ctx, chosenWinner)
  await savePaired(ctx, pairedNft)

  await saveClaimedVoting(ctx, claimedVoting)
  await saveClaimedStaking(ctx, claimedStaking)

  await saveCollectionVoted(ctx, votedCollection)
  await saveZooUnlocked(ctx, zooUnlocked)

  await saveFaucetGiven(ctx, given)
})

function handler(ctx: Ctx, block: SubstrateBlock, event: EvmLogEvent, type: IArenaEvmEvent) {
  return { e: type.decode(event.args.log), event, block: block }
}
