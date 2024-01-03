import { lookupArchive } from '@subsquid/archive-registry'
import { TypeormDatabase, Store } from '@subsquid/typeorm-store'
import {
  BATTLE_ARENA_ARBITRUM,
  BATTLE_VOTER_ARBITRUM,
  BATTLE_STAKER_ARBITRUM,
  VE_MODEL_ARBITRUM,
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
  TransferERC721T,
  TransferErc20T,
} from './events'
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor'

const FROM = 166614673

export const database = new TypeormDatabase()

export const processor = new EvmBatchProcessor()
  .setBlockRange({ from: FROM })
  .setFinalityConfirmation(12)
  .setDataSource({
    chain: process.env.RPC_ARBITRUM_ONE_HTTP,
    archive: lookupArchive('arbitrum'),
  })

  .setFields({
    log: {
      topics: true,
      data: true
    },
    transaction: {
      input: true,
      hash: true,
      from: true,
    }
  })
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [CreatedStakerPositionT.topic], transaction: true})

  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [RemovedStakerPositionT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [CreatedVotingPositionT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [LiquidatedVotingPositionT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [AddedDaiToVotingT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [AddedZooToVotingT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [WithdrawedDaiFromVotingT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [WithdrawedZooFromVotingT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [PairedNftT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [ChosenWinnerT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [ClaimedRewardFromStakingT.topic], transaction: true})
  .addLog({address: [BATTLE_ARENA_ARBITRUM], topic0: [ClaimedRewardFromVotingT.topic], transaction: true})

  .addLog({address: [BATTLE_VOTER_ARBITRUM], topic0: [ClaimedIncentiveRewardFromVotingT.topic], transaction: true})
  .addLog({address: [BATTLE_STAKER_ARBITRUM], topic0: [ClaimedIncentiveRewardFromStakingT.topic], transaction: true})
  .addLog({address: [VE_MODEL_ARBITRUM], topic0: [VotedForCollectionT.topic], transaction: true})
  .addLog({address: [VE_MODEL_ARBITRUM], topic0: [ZooUnlockedT.topic], transaction: true})
  .addLog({address: [BATTLE_VOTER_ARBITRUM], topic0: [TransferERC721T.topic], transaction: true})
  .addLog({address: [BATTLE_STAKER_ARBITRUM], topic0: [TransferERC721T.topic], transaction: true})
  .addLog({address: [fsGLP], topic0: [TransferErc20T.topic], transaction: true})

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>

export type Context = DataHandlerContext<Store, { log: { topics: true; data: true }; transaction: { input: true; hash: true; from: true } }>

export interface LogContext {
  id: string;
  logIndex: number;
  transactionIndex: number;
  address: string;
  data: string;
  topics: string[];
  block: {
      id: string;
      hash: string;
      height: number;
      parentHash: string;
      timestamp: number;
  };
  transaction?: {
    hash: string
  }
}

export interface IBlockHeader {
  id: string;
  hash: string;
  height: number;
  parentHash: string;
  timestamp: number;
}