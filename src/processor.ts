import { EvmBatchProcessor, BlockHandlerContext, EvmBlock, LogItem, BatchHandlerContext } from '@subsquid/evm-processor'
import * as erc20 from './abi/generated/erc20'
import {
  VE_MODEL_ARBITRUM,
  X_ZOO_ARBITRUM,
  JACKPOT_A_ARBITRUM,
  JACKPOT_B_ARBITRUM,
  BATTLE_VOTER_ARBITRUM,
  BATTLE_STAKER_ARBITRUM,
  fsGLP,
  BATTLE_ARENA_ARBITRUM,
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
import { database, processor, Context, LogEventItem, LogContext } from './configs'
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
import { BigNumber } from 'ethers'

const hasIn = (item: LogContext, topic: string) => item.evmLog.topics.indexOf(topic) !== -1

const isJackpotA = (item: LogContext) => item.evmLog?.address.toLowerCase() === JACKPOT_A_ARBITRUM

const isJackpotB = (item: LogContext) => item.evmLog?.address.toLowerCase() === JACKPOT_B_ARBITRUM

const isVoter = (item: LogContext) => item.evmLog?.address.toLowerCase() === BATTLE_VOTER_ARBITRUM

const isStaker = (item: LogContext) => item.evmLog?.address.toLowerCase() === BATTLE_STAKER_ARBITRUM

const isXZoo = (item: LogContext) => item.evmLog?.address.toLowerCase() === X_ZOO_ARBITRUM

const isRewards = (item: LogContext) => item.evmLog?.address.toLowerCase() === fsGLP

function handler<T>(block: EvmBlock, ctx: LogContext, log: LogEvent<T>) {
  return { e: log.decode(ctx.evmLog), event: ctx, block: block }
}

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

  const rewardsTransferred = []

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.kind === 'evmLog') {
        // @ts-ignore
        const logCtx: LogContext = {
          ...ctx,
          block: block.header,
          ...item,
        }

        /*console.log(
          '---->',
          block.items.map((i: any) => i)
        )*/
        if (hasIn(logCtx, CreatedStakerPositionT.topic)) {
          staked.push(handler(block.header, logCtx, CreatedStakerPositionT))
        }
        if (hasIn(logCtx, RemovedStakerPositionT.topic)) {
          unstaked.push(handler(block.header, logCtx, RemovedStakerPositionT))
        }
        if (hasIn(logCtx, CreatedVotingPositionT.topic)) {
          voted.push(handler(block.header, logCtx, CreatedVotingPositionT))
        }
        if (hasIn(logCtx, LiquidatedVotingPositionT.topic)) {
          liquidatedVoting.push(handler(block.header, logCtx, LiquidatedVotingPositionT))
        }

        if (hasIn(logCtx, AddedDaiToVotingT.topic)) {
          addedDai.push(handler(block.header, logCtx, AddedDaiToVotingT))
        }
        if (hasIn(logCtx, AddedZooToVotingT.topic)) {
          addedZoo.push(handler(block.header, logCtx, AddedZooToVotingT))
        }
        if (hasIn(logCtx, WithdrawedZooFromVotingT.topic)) {
          withdrawedZoo.push(handler(block.header, logCtx, WithdrawedZooFromVotingT))
        }
        if (hasIn(logCtx, WithdrawedDaiFromVotingT.topic)) {
          withdrawedDai.push(handler(block.header, logCtx, WithdrawedDaiFromVotingT))
        }

        if (hasIn(logCtx, PairedNftT.topic)) {
          pairedNft.push(handler(block.header, logCtx, PairedNftT))
        }
        if (hasIn(logCtx, ChosenWinnerT.topic)) {
          chosenWinner.push(handler(block.header, logCtx, ChosenWinnerT))
        }
        if (hasIn(logCtx, ClaimedRewardFromStakingT.topic)) {
          claimedStaking.push(handler(block.header, logCtx, ClaimedRewardFromStakingT))
        }
        if (hasIn(logCtx, ClaimedRewardFromVotingT.topic)) {
          claimedVoting.push(handler(block.header, logCtx, ClaimedRewardFromVotingT))
        }

        if (hasIn(logCtx, ClaimedIncentiveRewardFromStakingT.topic)) {
          claimedIncentiveStaking.push(handler(block.header, logCtx, ClaimedIncentiveRewardFromStakingT))
        }
        if (hasIn(logCtx, ClaimedIncentiveRewardFromVotingT.topic)) {
          claimedIncentiveVoting.push(handler(block.header, logCtx, ClaimedIncentiveRewardFromVotingT))
        }

        if (hasIn(logCtx, VotedForCollectionT.topic)) {
          votedCollection.push(handler(block.header, logCtx, VotedForCollectionT))
        }
        if (hasIn(logCtx, ZooUnlockedT.topic)) {
          zooUnlocked.push(handler(block.header, logCtx, ZooUnlockedT))
        }

        if (hasIn(logCtx, XZooStakedT.topic)) {
          xZooStakedEvents.push(handler(block.header, logCtx, XZooStakedT))
        }
        if (hasIn(logCtx, xZooWithdrawnT.topic)) {
          xZooWithdrawnEvents.push(handler(block.header, logCtx, xZooWithdrawnT))
        }
        if (hasIn(logCtx, xZooClaimedT.topic)) {
          xZooClaimedEvents.push(handler(block.header, logCtx, xZooClaimedT))
        }

        if (hasIn(logCtx, JackpotStakedT.topic)) {
          if (isJackpotA(logCtx)) {
            jackpotAStaked.push(handler(block.header, logCtx, JackpotStakedT))
          } else if (isJackpotB(logCtx)) {
            jackpotBStaked.push(handler(block.header, logCtx, JackpotStakedT))
          }
        }

        if (hasIn(logCtx, JackpotUnstakedT.topic)) {
          if (isJackpotA(logCtx)) {
            jackpotAUnstaked.push(handler(block.header, logCtx, JackpotUnstakedT))
          } else if (isJackpotB(logCtx)) {
            jackpotBUnstaked.push(handler(block.header, logCtx, JackpotUnstakedT))
          }
        }

        if (hasIn(logCtx, JackpotWinnedT.topic)) {
          if (isJackpotA(logCtx)) {
            jackpotAWinned.push(handler(block.header, logCtx, JackpotWinnedT))
          } else if (isJackpotB(logCtx)) {
            jackpotBWinned.push(handler(block.header, logCtx, JackpotWinnedT))
          }
        }

        if (hasIn(logCtx, JackpotClaimedT.topic)) {
          if (isJackpotA(logCtx)) {
            jackpotAClaimed.push(handler(block.header, logCtx, JackpotClaimedT))
          } else if (isJackpotB(logCtx)) {
            jackpotBClaimed.push(handler(block.header, logCtx, JackpotClaimedT))
          }
        }

        if (hasIn(logCtx, TransferERC721T.topic)) {
          /*if (item.evmTxHash === '0x8e0633aba23fd8bc91f38b5eff8de4c82dfab3573f0a8e3945d4e992413acc80') {
            console.log('------>')

            console.log(item, item, handler(block.header, logCtx, TransferT))
          }*/
          if (isVoter(logCtx)) {
            votingsTransferred.push(handler(block.header, logCtx, TransferERC721T))
          } else if (isStaker(logCtx)) {
            stakerTransferred.push(handler(block.header, logCtx, TransferERC721T))
          } else if (isXZoo(logCtx)) {
            xZooTransferred.push(handler(block.header, logCtx, TransferERC721T))
          } else if (isJackpotA(logCtx)) {
            jackpotATransferred.push(handler(block.header, logCtx, TransferERC721T))
          } else if (isJackpotB(logCtx)) {
            jackpotBTransferred.push(handler(block.header, logCtx, TransferERC721T))
          }
        }

        if (hasIn(logCtx, TransferErc20T.topic)) {
          if (isRewards(logCtx)) {
            const event = handler(block.header, logCtx, TransferErc20T)
            if (isFromArena(event)) {
              rewardsTransferred.push(event)
            }
          }
        }
      }
    }
  }

  /* FAUCET START */
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

  /* TRANSFERS ERC721 START */
  await saveVotingsTransferred(ctx, votingsTransferred)
  await saveStakingsTransferred(ctx, stakerTransferred)

  await saveJackpotTransferred(ctx, jackpotATransferred, 'A')
  await saveJackpotTransferred(ctx, jackpotBTransferred, 'B')

  await saveXZooTransferred(ctx, xZooTransferred)
  /* TRANSFERS ERC721 END */

  /* TRANSFERS ERC20 START */
  await saveTransfersERC20(ctx, rewardsTransferred, fsGLP)
  /* TRANSFERS ERC20 END */
})

function isFromArena(event: {
  e: [from: string, to: string, value: BigNumber] & {
    from: string
    to: string
    value: BigNumber
  }
  event: LogContext
  block: EvmBlock
}) {
  return event.e.from.toLowerCase() === BATTLE_ARENA_ARBITRUM
}
