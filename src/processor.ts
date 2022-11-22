import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import {
  VE_MODEL_MOONBEAM,
  X_ZOO_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
  BATTLE_VOTER_MOONBEAM,
  BATTLE_STAKER_MOONBEAM,
} from './contract'
import {
  liquidateVoted,
  saveAddedDai,
  saveAddedZoo,
  saveClaimedIncentiveStaking,
  saveClaimedIncentiveVoting,
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
import { database, processor, Context } from './configs'
import {
  CreatedStakerPositionT,
  RemovedStakerPositionT,
  CreatedVotingPositionT,
  LiquidatedVotingPositionT,
  AddedDaiToVotingT,
  AddedZooToVotingT,
  WithdrawedZooFromVotingT,
  WithdrawedDaiFromVotingT,
  PairedNftT,
  ChosenWinnerT,
  ClaimedRewardFromStakingT,
  ClaimedRewardFromVotingT,
  ClaimedIncentiveRewardFromStakingT,
  ClaimedIncentiveRewardFromVotingT,
  VotedForCollectionT,
  ZooUnlockedT,
  TokensGivenT,
  XZooStakedT,
  xZooWithdrawnT,
  xZooClaimedT,
  JackpotStakedT,
  JackpotUnstakedT,
  JackpotWinnedT,
  JackpotClaimedT,
  TransferVoter,
  TransferStaker,
  TransferXZoo,
  TransferJackpot,
} from './events'

interface IArenaEvmEvent {
  topic: string
  decode: (data: any) => any
}

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

processor.run(database, async (ctx: Context) => {
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

  const claimedIncentiveStaking = []
  const claimedIncentiveVoting = []

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

        if (hasIn(item, ClaimedIncentiveRewardFromStakingT.topic)) {
          claimedIncentiveStaking.push(handler(ctx, block.header, item.event, ClaimedIncentiveRewardFromStakingT))
        }
        if (hasIn(item, ClaimedIncentiveRewardFromVotingT.topic)) {
          claimedIncentiveVoting.push(handler(ctx, block.header, item.event, ClaimedIncentiveRewardFromVotingT))
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
          } else if (isJackpotB(item)) {
            jackpotBStaked.push(handler(ctx, block.header, item.event, JackpotStakedT))
          }
        }

        if (hasIn(item, JackpotUnstakedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAUnstaked.push(handler(ctx, block.header, item.event, JackpotUnstakedT))
          } else if (isJackpotB(item)) {
            jackpotBUnstaked.push(handler(ctx, block.header, item.event, JackpotUnstakedT))
          }
        }

        if (hasIn(item, JackpotWinnedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAWinned.push(handler(ctx, block.header, item.event, JackpotWinnedT))
          } else if (isJackpotB(item)) {
            jackpotBWinned.push(handler(ctx, block.header, item.event, JackpotWinnedT))
          }
        }

        if (hasIn(item, JackpotClaimedT.topic)) {
          if (isJackpotA(item)) {
            jackpotAClaimed.push(handler(ctx, block.header, item.event, JackpotClaimedT))
          } else if (isJackpotB(item)) {
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

  await saveClaimedIncentiveVoting(ctx, claimedIncentiveVoting)
  await saveClaimedIncentiveStaking(ctx, claimedIncentiveStaking)
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

function handler(ctx: Context, block: SubstrateBlock, event: EvmLogEvent, type: IArenaEvmEvent) {
  return { e: type.decode(event.args.log), event, block: block }
}
