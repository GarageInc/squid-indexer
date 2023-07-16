import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor'
import {
  X_ZOO_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
  BATTLE_VOTER_MOONBEAM,
  BATTLE_STAKER_MOONBEAM,
  WELL_MOONBEAM,
  WGLMR_MOONBEAM,
  BATTLE_ARENA_MOONBEAM,
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
  saveTransfersERC20,
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
  ZooGivenT,
  XZooStakedT,
  xZooWithdrawnT,
  xZooClaimedT,
  JackpotStakedT,
  JackpotUnstakedT,
  JackpotWinnedT,
  JackpotClaimedT,
  TransferERC721T,
  TransferErc20T,
} from './events'
import { LogEvent } from './abi/generated/abi.support'

const hasIn = (item: any, topic: string) =>
  item.event.args && item.event.args.log && item.event.args.log.topics.indexOf(topic) !== -1

const isJackpotA = (item: any) => item.event?.args?.log?.address.toLowerCase() === JACKPOT_A_MOONBEAM

const isJackpotB = (item: any) => item.event?.args?.log?.address.toLowerCase() === JACKPOT_B_MOONBEAM

const isVoter = (item: any) => item.event?.args?.log?.address.toLowerCase() === BATTLE_VOTER_MOONBEAM

const isStaker = (item: any) => item.event?.args?.log?.address.toLowerCase() === BATTLE_STAKER_MOONBEAM

const isXZoo = (item: any) => item.event?.args?.log?.address.toLowerCase() === X_ZOO_MOONBEAM

const isWell = (item: any) => item.event?.args?.log?.address.toLowerCase() === WELL_MOONBEAM

const isWGlmr = (item: any) => item.event?.args?.log?.address.toLowerCase() === WGLMR_MOONBEAM

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

  const wglrmTransferred = []
  const wellTransferred = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        /*console.log(
          '---->',
          block.items.map((i: any) => i)
        )*/
        if (hasIn(item, CreatedStakerPositionT.topic)) {
          staked.push(handler<any>(ctx, block.header, item.event, CreatedStakerPositionT))
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

        if (hasIn(item, ZooGivenT.topic)) {
          given.push(handler(ctx, block.header, item.event, ZooGivenT))
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

        if (hasIn(item, TransferERC721T.topic)) {
          /*if (item.event.evmTxHash === '0x8e0633aba23fd8bc91f38b5eff8de4c82dfab3573f0a8e3945d4e992413acc80') {
            console.log('------>')

            console.log(item, item.event, handler(ctx, block.header, item.event, TransferT))
          }*/
          if (isVoter(item)) {
            votingsTransferred.push(handler(ctx, block.header, item.event, TransferERC721T))
          } else if (isStaker(item)) {
            stakerTransferred.push(handler(ctx, block.header, item.event, TransferERC721T))
          } else if (isXZoo(item)) {
            xZooTransferred.push(handler(ctx, block.header, item.event, TransferERC721T))
          } else if (isJackpotA(item)) {
            jackpotATransferred.push(handler(ctx, block.header, item.event, TransferERC721T))
          } else if (isJackpotB(item)) {
            jackpotBTransferred.push(handler(ctx, block.header, item.event, TransferERC721T))
          }
        }

        if (hasIn(item, TransferErc20T.topic)) {
          if (isWell(item)) {
            const event = handler(ctx, block.header, item.event, TransferErc20T)
            if (isFromArena(event)) {
              wellTransferred.push(event)
            }
          }

          if (isWGlmr(item)) {
            const event = handler(ctx, block.header, item.event, TransferErc20T)
            if (isFromArena(event)) {
              wglrmTransferred.push(event)
            }
          }
        }
      }
    }
  }

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

  /* TRANSFERS ERC721 START */
  await saveVotingsTransferred(ctx, votingsTransferred)
  await saveStakingsTransferred(ctx, stakerTransferred)

  await saveJackpotTransferred(ctx, jackpotATransferred, 'A')
  await saveJackpotTransferred(ctx, jackpotBTransferred, 'B')

  await saveXZooTransferred(ctx, xZooTransferred)
  /* TRANSFERS ERC721 END */

  /* TRANSFERS ERC20 START */
  await saveTransfersERC20(ctx, wellTransferred, WELL_MOONBEAM)
  await saveTransfersERC20(ctx, wglrmTransferred, WGLMR_MOONBEAM)
  /* TRANSFERS ERC20 END */
})

function handler<T>(ctx: Context, block: SubstrateBlock, event: EvmLogEvent, log: LogEvent<T>) {
  return { e: log.decode(event.args.log), event, block: block }
}

function isFromArena(event: {
  e: [from: string, to: string, value: import('ethers').BigNumber] & {
    from: string
    to: string
    value: import('ethers').BigNumber
  }
  event: EvmLogEvent
  block: SubstrateBlock
}) {
  return event.e.from.toLowerCase() === BATTLE_ARENA_MOONBEAM
}
function isFromVoter(event: {
  e: [from: string, to: string, value: import('ethers').BigNumber] & {
    from: string
    to: string
    value: import('ethers').BigNumber
  }
  event: EvmLogEvent
  block: SubstrateBlock
}) {
  return event.e.from.toLowerCase() === BATTLE_VOTER_MOONBEAM
}

function isFromStaker(event: {
  e: [from: string, to: string, value: import('ethers').BigNumber] & {
    from: string
    to: string
    value: import('ethers').BigNumber
  }
  event: EvmLogEvent
  block: SubstrateBlock
}) {
  return event.e.from.toLowerCase() === BATTLE_STAKER_MOONBEAM
}
