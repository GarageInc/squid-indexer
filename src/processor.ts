import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor, EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { CHAIN_NODE, arenaContract, veModelContract } from './contract'
import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import { Ctx, liquidateVoted, saveStaked, saveUnStaked, saveVoted } from './transformerts'

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

interface IArenaEvmEvent {
  topic: string
  decode: (data: arenaAbi.EvmLog) => any
}

/*
AddedDaiToVotingT.topic,
AddedZooToVotingT.topic,
WithdrawedDaiFromVotingT.topic,
WithdrawedZooFromVotingT.topic,
PairedNftT.topic,
ChosenWinnerT.topic,
ClaimedRewardFromStakingT.topic,
ClaimedRewardFromVotingT.topic,
*/

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
    filter: [CreatedStakerPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    range: { from: 1887167 },
    filter: [RemovedStakerPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    range: { from: 1887167 },
    filter: [CreatedVotingPositionT.topic],
  })
  .addEvmLog(arenaContract.address, {
    range: { from: 1887167 },
    filter: [LiquidatedVotingPositionT.topic],
  })
  .addEvmLog(veModelContract.address, {
    range: { from: 1887167 },
    filter: [VotedForCollectionT.topic],
  })
  .addEvmLog(veModelContract.address, {
    range: { from: 1887167 },
    filter: [ZooUnlockedT.topic],
  })

console.log('CreatedStakerPositionT', CreatedStakerPositionT.topic, RemovedStakerPositionT.topic)

const hasIn = (item: any, topic: string) =>
  item.event.args && item.event.args.logs && item.event.args.logs.indexOf(topic) !== -1

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

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        console.log(
          '----',
          block.items.filter((i: any) => i.event).map((i: any) => i.event.args?.log?.topics)
        )
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
      }
    }
  }

  await saveStaked(ctx, staked)
  await saveUnStaked(ctx, staked)
  await saveVoted(ctx, voted)
  await liquidateVoted(ctx, liquidatedVoting)
})

function handler(ctx: Ctx, block: SubstrateBlock, event: EvmLogEvent, type: IArenaEvmEvent) {
  return { e: type.decode(event.args.log), event }
}
