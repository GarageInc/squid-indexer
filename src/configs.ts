import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor, BatchProcessorItem, DataHandlerContext as BatchContext } from 'squid-sdk/substrate/substrate-processor/src'
import { TypeormDatabase, Store } from '@subsquid/typeorm-store'
import {
  BATTLE_ARENA_MOONBEAM,
  BATTLE_VOTER_MOONBEAM,
  BATTLE_STAKER_MOONBEAM,
  VE_MODEL_MOONBEAM,
  X_ZOO_MOONBEAM,
  JACKPOT_A_MOONBEAM,
  JACKPOT_B_MOONBEAM,
  WGLMR_MOONBEAM,
  WELL_MOONBEAM,
} from './contract'
import {
  CreatedStakerPositionT,
  RemovedStakerPositionT,
  CreatedVotingPositionT,
  LiquidatedVotingPositionT,
  AddedDaiToVotingT,
  AddedZooToVotingT,
  WithdrawedDaiFromVotingT,
  WithdrawedZooFromVotingT,
  PairedNftT,
  ChosenWinnerT,
  ClaimedRewardFromStakingT,
  ClaimedRewardFromVotingT,
  ClaimedIncentiveRewardFromVotingT,
  ClaimedIncentiveRewardFromStakingT,
  VotedForCollectionT,
  ZooUnlockedT,
  xZooClaimedT,
  XZooStakedT,
  xZooWithdrawnT,
  JackpotClaimedT,
  JackpotStakedT,
  JackpotUnstakedT,
  JackpotWinnedT,
  TransferERC721T,
  TransferErc20T,
} from './events'

const FROM = 3256980

export const database = new TypeormDatabase()
export const processor = new SubstrateBatchProcessor()
  .setBlockRange({ from: FROM })
  .setDataSource({
    chain: process.env.RPC_MOONBEAM_HTTP,
    archive: lookupArchive('moonbeam', { release: 'FireSquid', type: 'Substrate' }),
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
  .addEvmLog(BATTLE_VOTER_MOONBEAM, {
    filter: [ClaimedIncentiveRewardFromVotingT.topic],
  })
  .addEvmLog(BATTLE_STAKER_MOONBEAM, {
    filter: [ClaimedIncentiveRewardFromStakingT.topic],
  })

processor
  .addEvmLog(VE_MODEL_MOONBEAM, {
    filter: [VotedForCollectionT.topic],
  })
  .addEvmLog(VE_MODEL_MOONBEAM, {
    filter: [ZooUnlockedT.topic],
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
    filter: [TransferERC721T.topic],
  })
  .addEvmLog(JACKPOT_B_MOONBEAM, {
    filter: [TransferERC721T.topic],
  })

processor
  .addEvmLog(BATTLE_VOTER_MOONBEAM, {
    filter: [TransferERC721T.topic],
  })
  .addEvmLog(BATTLE_STAKER_MOONBEAM, {
    filter: [TransferERC721T.topic],
  })

processor.addEvmLog(X_ZOO_MOONBEAM, {
  filter: [TransferERC721T.topic],
})

processor
  .addEvmLog(WGLMR_MOONBEAM, {
    filter: [TransferErc20T.topic],
  })
  .addEvmLog(WELL_MOONBEAM, {
    filter: [TransferErc20T.topic],
  })

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>
