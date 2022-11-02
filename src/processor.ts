import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor, EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import {
  CHAIN_NODE,
  BATTLE_ARENA_MOONBEAM,
  VE_MODEL_MOONBEAM,
  FAUCET_MOONBEAM,
  X_ZOO_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
} from './contract'
import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as xZooAbi from './abi/xZoo'
import * as jackpotAbi from './abi/jackpot'
import {
  Ctx,
  liquidateVoted,
  saveAddedDai,
  saveAddedZoo,
  saveClaimedStaking,
  saveClaimedVoting,
  saveCollectionVoted,
  saveFaucetGiven,
  saveJackpotsClaimed,
  saveJackpotsStaked,
  saveJackpotsUnStaked,
  saveJackpotsWinned,
  savePaired,
  saveStaked,
  saveUnStaked,
  saveVoted,
  saveWinner,
  saveWithdrawedDai,
  saveWithdrawedZoo,
  saveXZooClaimed,
  saveXZooStaked,
  saveXZooWithdrawn,
  saveZooUnlocked,
} from './transformers'
import { JackpotWinnerChoosed } from './model'

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

const XZooStakedT = xZooAbi.events['ZooStaked(address,address,uint256,uint256)']
const xZooWithdrawnT = xZooAbi.events['ZooWithdrawal(address,address,uint256,uint256)']
const xZooClaimedT = xZooAbi.events['Claimed(address,address,uint256,uint256)']

const JackpotStakedT = jackpotAbi.events['Staked(uint256,address,address,uint256)']
const JackpotUnstakedT = jackpotAbi.events['Unstaked(uint256,address,address,uint256)']
const JackpotWinnedT = jackpotAbi.events['WinnerChoosed(uint256,uint256)']
const JackpotClaimedT = jackpotAbi.events['Claimed(uint256,uint256,address,address,uint256)']

interface IArenaEvmEvent {
  topic: string
  decode: (data: arenaAbi.EvmLog) => any
}

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
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [CreatedStakerPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [RemovedStakerPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [CreatedVotingPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [LiquidatedVotingPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [AddedDaiToVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [AddedZooToVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [WithdrawedDaiFromVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [WithdrawedZooFromVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [PairedNftT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [ChosenWinnerT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [ClaimedRewardFromStakingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_MOONBEAM, {
    filter: [ClaimedRewardFromVotingT.topic],
  })

processor
  .addEvmLog(VE_MODEL_MOONBEAM, {
    filter: [VotedForCollectionT.topic],
  })
  .addEvmLog(VE_MODEL_MOONBEAM, {
    filter: [ZooUnlockedT.topic],
  })

processor.addEvmLog(FAUCET_MOONBEAM, {
  filter: [TokensGivenT.topic],
})

processor
  .addEvmLog(X_ZOO_MOONBEAM, {
    filter: [xZooClaimedT.topic],
  })
  .addEvmLog(X_ZOO_MOONBEAM, {
    filter: [XZooStakedT.topic],
  })
  .addEvmLog(X_ZOO_MOONBEAM, {
    filter: [xZooWithdrawnT.topic],
  })

processor
  .addEvmLog(JACKPOT_A_MOONBEAM, {
    filter: [JackpotClaimedT.topic],
  })
  .addEvmLog(JACKPOT_A_MOONBEAM, {
    filter: [JackpotStakedT.topic],
  })

processor
  .addEvmLog(JACKPOT_A_MOONBEAM, {
    filter: [JackpotUnstakedT.topic],
  })
  .addEvmLog(JACKPOT_A_MOONBEAM, {
    filter: [JackpotWinnedT.topic],
  })

processor
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [JackpotClaimedT.topic],
  })
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [JackpotStakedT.topic],
  })

processor
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [JackpotUnstakedT.topic],
  })
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [JackpotWinnedT.topic],
  })

const hasIn = (item: any, topic: string) =>
  item.event.args && item.event.args.log && item.event.args.log.topics.indexOf(topic) !== -1

const isJackpotA = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === JACKPOT_A_MOONBEAM

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

  const xZooStakedEvents = []
  const xZooWithdrawnEvents = []
  const xZooClaimedEvents = []

  const jackpotAClaimed = []
  const jackpotAStaked = []
  const jackpotAUnstaked = []
  const jackpotAWinned = []

  const jackpotBClaimed = []
  const jackpotBStaked = []
  const jackpotBUnstaked = []
  const jackpotBWinned = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        console.log(
          '---->',
          block.items.map((i: any) => i)
        )
        if (hasIn(item, CreatedStakerPositionT.topic)) {
          staked.push(handler(ctx, block.header, item.event, CreatedStakerPositionT))
        }
        if (hasIn(item, RemovedStakerPositionT.topic)) {
          unstaked.push(handler(ctx, block.header, item.event, RemovedStakerPositionT))
        }
        if (hasIn(item, CreatedVotingPositionT.topic)) {
          voted.push(handler(ctx, block.header, item.event, CreatedVotingPositionT))
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

        if (hasIn(item, XZooStakedT.topic)) {
          xZooStakedEvents.push(handler(ctx, block.header, item.event, XZooStakedT))
        }
        if (hasIn(item, xZooWithdrawnT.topic)) {
          xZooWithdrawnEvents.push(handler(ctx, block.header, item.event, xZooWithdrawnT))
        }
        if (hasIn(item, xZooClaimedT.topic)) {
          xZooClaimedEvents.push(handler(ctx, block.header, item.event, xZooClaimedT))
        }

        if (hasIn(item, JackpotStakedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAStaked.push(handler(ctx, block.header, item.event, JackpotStakedT))
          } else {
            jackpotBStaked.push(handler(ctx, block.header, item.event, JackpotStakedT))
          }
        }

        if (hasIn(item, JackpotUnstakedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAUnstaked.push(handler(ctx, block.header, item.event, JackpotUnstakedT))
          } else {
            jackpotBUnstaked.push(handler(ctx, block.header, item.event, JackpotUnstakedT))
          }
        }

        if (hasIn(item, JackpotWinnedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAWinned.push(handler(ctx, block.header, item.event, JackpotWinnedT))
          } else {
            jackpotBWinned.push(handler(ctx, block.header, item.event, JackpotWinnedT))
          }
        }

        if (hasIn(item, JackpotClaimedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAClaimed.push(handler(ctx, block.header, item.event, JackpotClaimedT))
          } else {
            jackpotBClaimed.push(handler(ctx, block.header, item.event, JackpotClaimedT))
          }
        }
      }
    }
  }

  await saveJackpotsClaimed(ctx, jackpotAClaimed, 'A')
  await saveJackpotsClaimed(ctx, jackpotBClaimed, 'B')

  await saveJackpotsStaked(ctx, jackpotAStaked, 'A')
  await saveJackpotsStaked(ctx, jackpotBStaked, 'B')

  await saveJackpotsUnStaked(ctx, jackpotAUnstaked, 'A')
  await saveJackpotsUnStaked(ctx, jackpotBUnstaked, 'B')

  await saveJackpotsWinned(ctx, jackpotAWinned, 'A')
  await saveJackpotsWinned(ctx, jackpotBWinned, 'B')

  await saveXZooClaimed(ctx, xZooClaimedEvents)
  await saveXZooStaked(ctx, xZooStakedEvents)
  await saveXZooWithdrawn(ctx, xZooWithdrawnEvents)

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
