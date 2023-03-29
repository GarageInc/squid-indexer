import { lookupArchive } from '@subsquid/archive-registry'
import { EvmBatchProcessor, LogHandlerContext, BatchHandlerContext, BatchProcessorItem } from '@subsquid/evm-processor'
import { LogDataRequest, LogRequest, TransactionRequest } from '@subsquid/evm-processor/lib/interfaces/dataSelection'
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

const DATA_TEMPLATE: LogDataRequest = {
  evmLog: {
    data: true,
    topics: true,
  },
  transaction: {
    hash: true,
    from: true,
  },
}

export const processor = new EvmBatchProcessor()
  .setBlockRange({ from: FROM })
  .setDataSource({
    chain: CHAIN_NODE,
    archive: lookupArchive('arbitrum'),
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[CreatedStakerPositionT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[RemovedStakerPositionT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[CreatedVotingPositionT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[LiquidatedVotingPositionT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[AddedDaiToVotingT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[AddedZooToVotingT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[WithdrawedDaiFromVotingT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[WithdrawedZooFromVotingT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[PairedNftT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[ChosenWinnerT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[ClaimedRewardFromStakingT.topic]],
    data: DATA_TEMPLATE,
  })
  .addLog(BATTLE_ARENA_ARBITRUM, {
    filter: [[ClaimedRewardFromVotingT.topic]],
    data: DATA_TEMPLATE,
  })

processor.addLog(BATTLE_VOTER_ARBITRUM, {
  filter: [[ClaimedIncentiveRewardFromVotingT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(BATTLE_STAKER_ARBITRUM, {
  filter: [[ClaimedIncentiveRewardFromStakingT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(VE_MODEL_ARBITRUM, {
  filter: [[VotedForCollectionT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(VE_MODEL_ARBITRUM, {
  filter: [[ZooUnlockedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(JACKPOT_A_ARBITRUM, {
  filter: [[JackpotClaimedT.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(JACKPOT_A_ARBITRUM, {
  filter: [[JackpotStakedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(JACKPOT_A_ARBITRUM, {
  filter: [[JackpotUnstakedT.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(JACKPOT_A_ARBITRUM, {
  filter: [[JackpotWinnedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(JACKPOT_B_ARBITRUM, {
  filter: [[JackpotClaimedT.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(JACKPOT_B_ARBITRUM, {
  filter: [[JackpotStakedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(JACKPOT_B_ARBITRUM, {
  filter: [[JackpotUnstakedT.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(JACKPOT_B_ARBITRUM, {
  filter: [[JackpotWinnedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(JACKPOT_A_ARBITRUM, {
  filter: [[TransferERC721T.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(JACKPOT_B_ARBITRUM, {
  filter: [[TransferERC721T.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(BATTLE_VOTER_ARBITRUM, {
  filter: [[TransferERC721T.topic]],
  data: DATA_TEMPLATE,
})
processor.addLog(BATTLE_STAKER_ARBITRUM, {
  filter: [[TransferERC721T.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(X_ZOO_ARBITRUM, {
  filter: [[TransferERC721T.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(fsGLP, {
  filter: [[TransferErc20T.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(X_ZOO_ARBITRUM, {
  filter: [[xZooClaimedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(X_ZOO_ARBITRUM, {
  filter: [[XZooStakedT.topic]],
  data: DATA_TEMPLATE,
})

processor.addLog(X_ZOO_ARBITRUM, {
  filter: [[xZooWithdrawnT.topic]],
  data: DATA_TEMPLATE,
})

export type LogEventItem = BatchProcessorItem<typeof processor>
export type Context = BatchHandlerContext<Store, LogEventItem>

export type LogContext = LogHandlerContext<
  Store,
  {
    evmLog: {
      data: true
      topics: true
    }
    transaction: {
      hash: true
      from: true
    }
  }
>
