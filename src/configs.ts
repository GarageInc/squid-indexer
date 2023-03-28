import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor, BatchProcessorItem, BatchContext } from '@subsquid/substrate-processor'
import { TypeormDatabase, Store } from '@subsquid/typeorm-store'
import {
  CHAIN_NODE,
  BATTLE_ARENA_ARBITRUM,
  BATTLE_VOTER_ARBITRUM,
  BATTLE_STAKER_ARBITRUM,
  VE_MODEL_ARBITRUM,
  X_ZOO_ARBITRUM,
  JACKPOT_A_ARBITRUM,
  JACKPOT_B_ARBITRUM,
  fsGLP,
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
  ZooGivenT,
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

const FROM = 73190022

export const database = new TypeormDatabase()

export const processor = new SubstrateBatchProcessor()
  .setBlockRange({ from: FROM })
  .setDataSource({
    chain: CHAIN_NODE,
    archive: lookupArchive('arbitrum'),
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [CreatedStakerPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [RemovedStakerPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [CreatedVotingPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [LiquidatedVotingPositionT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [AddedDaiToVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [AddedZooToVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [WithdrawedDaiFromVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [WithdrawedZooFromVotingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [PairedNftT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [ChosenWinnerT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [ClaimedRewardFromStakingT.topic],
  })
  .addEvmLog(BATTLE_ARENA_ARBITRUM, {
    filter: [ClaimedRewardFromVotingT.topic],
  })

processor
  .addEvmLog(BATTLE_VOTER_ARBITRUM, {
    filter: [ClaimedIncentiveRewardFromVotingT.topic],
  })
  .addEvmLog(BATTLE_STAKER_ARBITRUM, {
    filter: [ClaimedIncentiveRewardFromStakingT.topic],
  })

processor
  .addEvmLog(VE_MODEL_ARBITRUM, {
    filter: [VotedForCollectionT.topic],
  })
  .addEvmLog(VE_MODEL_ARBITRUM, {
    filter: [ZooUnlockedT.topic],
  })

processor
  .addEvmLog(X_ZOO_ARBITRUM, {
    filter: [xZooClaimedT.topic],
  })
  .addEvmLog(X_ZOO_ARBITRUM, {
    filter: [XZooStakedT.topic],
  })
  .addEvmLog(X_ZOO_ARBITRUM, {
    filter: [xZooWithdrawnT.topic],
  })

processor
  .addEvmLog(JACKPOT_A_ARBITRUM, {
    filter: [JackpotClaimedT.topic],
  })
  .addEvmLog(JACKPOT_A_ARBITRUM, {
    filter: [JackpotStakedT.topic],
  })

processor
  .addEvmLog(JACKPOT_A_ARBITRUM, {
    filter: [JackpotUnstakedT.topic],
  })
  .addEvmLog(JACKPOT_A_ARBITRUM, {
    filter: [JackpotWinnedT.topic],
  })

processor
  .addEvmLog(JACKPOT_B_ARBITRUM, {
    filter: [JackpotClaimedT.topic],
  })
  .addEvmLog(JACKPOT_B_ARBITRUM, {
    filter: [JackpotStakedT.topic],
  })

processor
  .addEvmLog(JACKPOT_B_ARBITRUM, {
    filter: [JackpotUnstakedT.topic],
  })
  .addEvmLog(JACKPOT_B_ARBITRUM, {
    filter: [JackpotWinnedT.topic],
  })

processor
  .addEvmLog(JACKPOT_A_ARBITRUM, {
    filter: [TransferERC721T.topic],
  })
  .addEvmLog(JACKPOT_B_ARBITRUM, {
    filter: [TransferERC721T.topic],
  })

processor
  .addEvmLog(BATTLE_VOTER_ARBITRUM, {
    filter: [TransferERC721T.topic],
  })
  .addEvmLog(BATTLE_STAKER_ARBITRUM, {
    filter: [TransferERC721T.topic],
  })

processor.addEvmLog(X_ZOO_ARBITRUM, {
  filter: [TransferERC721T.topic],
})

processor.addEvmLog(fsGLP, {
  filter: [TransferErc20T.topic],
})

export type Item = BatchProcessorItem<typeof processor>
export type Context = BatchContext<Store, Item>
