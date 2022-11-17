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
  BATTLE_VOTER_MOONBEAM,
  BATTLE_STAKER_MOONBEAM,
} from './contract'
import * as arenaAbi from './abi/battle-arena-abi'
import * as stakerAbi from './abi/battle-staker-abi'
import * as voterAbi from './abi/battle-voter-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as xZooAbi from './abi/xZoo'
import * as jackpotAbi from './abi/jackpot'
import * as erc721Abi from './abi/erc721'
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
  saveJackpotTransferred,
  savePaired,
  saveStaked,
  saveStakingsTransferred,
  saveUnStaked,
  saveVoted,
  saveVotingsTransferred,
  saveWinner,
  saveWithdrawedDai,
  saveWithdrawedZoo,
  saveXZooClaimed,
  saveXZooStaked,
  saveXZooTransferred,
  saveXZooWithdrawn,
  saveZooUnlocked,
} from './transformers'
import { CreatedVotingPosition } from './model'

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
  arenaAbi.events['ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256)']

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

const TransferStaker = stakerAbi.events['Transfer(address,address,uint256)']
const TransferVoter = voterAbi.events['Transfer(address,address,uint256)']
const TransferXZoo = xZooAbi.events['Transfer(address,address,uint256)']
const TransferJackpot = vemodelAbi.events['Transfer(address,address,uint256)']

interface IArenaEvmEvent {
  topic: string
  decode: (data: arenaAbi.EvmLog) => any
}

const FROM = 1887167

const database = new TypeormDatabase()
const processor = new SubstrateBatchProcessor()
  .setBatchSize(1)
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

processor
  .addEvmLog(JACKPOT_A_MOONBEAM, {
    filter: [TransferJackpot.topic],
  })
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [TransferJackpot.topic],
  })

processor
  .addEvmLog(BATTLE_VOTER_MOONBEAM, {
    filter: [TransferVoter.topic],
  })
  .addEvmLog(BATTLE_STAKER_MOONBEAM, {
    filter: [TransferStaker.topic],
  })

processor.addEvmLog(X_ZOO_MOONBEAM, {
  filter: [TransferXZoo.topic],
})

const hasIn = (item: any, topic: string) =>
  item.event.args && item.event.args.log && item.event.args.log.topics.indexOf(topic) !== -1

const isJackpotA = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === JACKPOT_A_MOONBEAM

const isJackpotB = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === JACKPOT_B_MOONBEAM

const isVoter = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === BATTLE_VOTER_MOONBEAM

const isStaker = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === BATTLE_STAKER_MOONBEAM

const isVeModel = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === VE_MODEL_MOONBEAM

const isXZoo = (item: any) =>
  item.event?.extrinsic?.call?.args.transaction.value.action.value.toLowerCase() === X_ZOO_MOONBEAM

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

  const votingsTransferred = []
  const stakerTransferred = []
  const jackpotATransferred = []
  const jackpotBTransferred = []
  const xZooTransferred = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        /*console.log(
          '---->',
          block.items.map((i: any) => i)
        )*/
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

        if (hasIn(item, TransferVoter.topic)) {
          votingsTransferred.push(handler(ctx, block.header, item.event, TransferVoter))
        }

        if (hasIn(item, TransferStaker.topic)) {
          stakerTransferred.push(handler(ctx, block.header, item.event, TransferStaker))
        }

        if (hasIn(item, TransferXZoo.topic)) {
          xZooTransferred.push(handler(ctx, block.header, item.event, TransferXZoo))
        }

        if (hasIn(item, TransferJackpot.topic)) {
          if (isJackpotA(item)) {
            jackpotATransferred.push(handler(ctx, block.header, item.event, TransferJackpot))
          } else if (isJackpotB(item)) {
            jackpotBTransferred.push(handler(ctx, block.header, item.event, TransferJackpot))
          }
        }
      }
    }
  }

  /* FAUCET START */
  await saveFaucetGiven(ctx, given)
  /* FAUCET END */

  /* BATTLE START */
  await saveStaked(ctx, staked)
  await saveUnStaked(ctx, unstaked)

  await saveVoted(ctx, voted)
  await liquidateVoted(ctx, liquidatedVoting)

  await saveAddedDai(ctx, addedDai)
  await saveWithdrawedDai(ctx, withdrawedDai)

  await savePaired(ctx, pairedNft)

  await saveAddedZoo(ctx, addedZoo)
  await saveWithdrawedZoo(ctx, withdrawedZoo)

  await saveWinner(ctx, chosenWinner)

  await saveClaimedVoting(ctx, claimedVoting)
  await saveClaimedStaking(ctx, claimedStaking)
  /* BATTLE END */

  /* VE MODEL START */
  await saveCollectionVoted(ctx, votedCollection)
  await saveZooUnlocked(ctx, zooUnlocked)
  /* VE MODEL END */

  /* JACKPOTS START */
  await saveJackpotsStaked(ctx, jackpotAStaked, 'A')
  await saveJackpotsStaked(ctx, jackpotBStaked, 'B')

  await saveJackpotsClaimed(ctx, jackpotAClaimed, 'A')
  await saveJackpotsClaimed(ctx, jackpotBClaimed, 'B')

  await saveJackpotsUnStaked(ctx, jackpotAUnstaked, 'A')
  await saveJackpotsUnStaked(ctx, jackpotBUnstaked, 'B')

  await saveJackpotsWinned(ctx, jackpotAWinned, 'A')
  await saveJackpotsWinned(ctx, jackpotBWinned, 'B')

  await saveXZooStaked(ctx, xZooStakedEvents)
  await saveXZooClaimed(ctx, xZooClaimedEvents)
  await saveXZooWithdrawn(ctx, xZooWithdrawnEvents)
  /* JACKPOTS END */

  /* TRANSFERS START */
  await saveVotingsTransferred(ctx, votingsTransferred)
  await saveStakingsTransferred(ctx, stakerTransferred)

  await saveJackpotTransferred(ctx, jackpotATransferred, 'A')
  await saveJackpotTransferred(ctx, jackpotBTransferred, 'B')

  await saveXZooTransferred(ctx, xZooTransferred)
  /* TRANSFERS END */
})

function handler(ctx: Ctx, block: SubstrateBlock, event: EvmLogEvent, type: IArenaEvmEvent) {
  return { e: type.decode(event.args.log), event, block: block }
}
