import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type AddedDaiToVoting0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber})

export type AddedZooToVoting0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber})

export type ChosenWinner0Event = ([currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, winner: boolean, pairIndex: ethers.BigNumber, playedPairsAmount: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, winner: boolean, pairIndex: ethers.BigNumber, playedPairsAmount: ethers.BigNumber})

export type ClaimedRewardFromStaking0Event = ([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber, beneficiary: string, yTokenReward: ethers.BigNumber, daiReward: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber, beneficiary: string, yTokenReward: ethers.BigNumber, daiReward: ethers.BigNumber})

export type ClaimedRewardFromVoting0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, daiReward: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, daiReward: ethers.BigNumber, votingPositionId: ethers.BigNumber})

export type CreatedStakerPosition0Event = ([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber})

export type CreatedVotingPosition0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, daiAmount: ethers.BigNumber, votes: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, daiAmount: ethers.BigNumber, votes: ethers.BigNumber, votingPositionId: ethers.BigNumber})

export type EpochUpdated0Event = ([date: ethers.BigNumber, newEpoch: ethers.BigNumber] & {date: ethers.BigNumber, newEpoch: ethers.BigNumber})

export type LiquidatedVotingPosition0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, zooReturned: ethers.BigNumber, daiReceived: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, zooReturned: ethers.BigNumber, daiReceived: ethers.BigNumber})

export type PairedNft0Event = ([currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, pairIndex: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, pairIndex: ethers.BigNumber})

export type RecomputedDaiVotes0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber})

export type RecomputedZooVotes0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber})

export type RemovedStakerPosition0Event = ([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber})

export type WithdrawedDaiFromVoting0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber})

export type WithdrawedZooFromVoting0Event = ([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "AddedDaiToVoting(uint256,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("AddedDaiToVoting(uint256,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): AddedDaiToVoting0Event {
      return decodeEvent("AddedDaiToVoting(uint256,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "AddedZooToVoting(uint256,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("AddedZooToVoting(uint256,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): AddedZooToVoting0Event {
      return decodeEvent("AddedZooToVoting(uint256,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "ChosenWinner(uint256,uint256,uint256,bool,uint256,uint256)": {
    topic: abi.getEventTopic("ChosenWinner(uint256,uint256,uint256,bool,uint256,uint256)"),
    decode(data: EvmLog): ChosenWinner0Event {
      return decodeEvent("ChosenWinner(uint256,uint256,uint256,bool,uint256,uint256)", data)
    }
  }
  ,
  "ClaimedRewardFromStaking(uint256,address,uint256,address,uint256,uint256)": {
    topic: abi.getEventTopic("ClaimedRewardFromStaking(uint256,address,uint256,address,uint256,uint256)"),
    decode(data: EvmLog): ClaimedRewardFromStaking0Event {
      return decodeEvent("ClaimedRewardFromStaking(uint256,address,uint256,address,uint256,uint256)", data)
    }
  }
  ,
  "ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256)": {
    topic: abi.getEventTopic("ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256)"),
    decode(data: EvmLog): ClaimedRewardFromVoting0Event {
      return decodeEvent("ClaimedRewardFromVoting(uint256,address,uint256,address,uint256,uint256)", data)
    }
  }
  ,
  "CreatedStakerPosition(uint256,address,uint256)": {
    topic: abi.getEventTopic("CreatedStakerPosition(uint256,address,uint256)"),
    decode(data: EvmLog): CreatedStakerPosition0Event {
      return decodeEvent("CreatedStakerPosition(uint256,address,uint256)", data)
    }
  }
  ,
  "CreatedVotingPosition(uint256,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("CreatedVotingPosition(uint256,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): CreatedVotingPosition0Event {
      return decodeEvent("CreatedVotingPosition(uint256,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "EpochUpdated(uint256,uint256)": {
    topic: abi.getEventTopic("EpochUpdated(uint256,uint256)"),
    decode(data: EvmLog): EpochUpdated0Event {
      return decodeEvent("EpochUpdated(uint256,uint256)", data)
    }
  }
  ,
  "LiquidatedVotingPosition(uint256,address,uint256,address,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("LiquidatedVotingPosition(uint256,address,uint256,address,uint256,uint256,uint256)"),
    decode(data: EvmLog): LiquidatedVotingPosition0Event {
      return decodeEvent("LiquidatedVotingPosition(uint256,address,uint256,address,uint256,uint256,uint256)", data)
    }
  }
  ,
  "PairedNft(uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("PairedNft(uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): PairedNft0Event {
      return decodeEvent("PairedNft(uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "RecomputedDaiVotes(uint256,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("RecomputedDaiVotes(uint256,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): RecomputedDaiVotes0Event {
      return decodeEvent("RecomputedDaiVotes(uint256,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "RecomputedZooVotes(uint256,address,uint256,uint256,uint256,uint256)": {
    topic: abi.getEventTopic("RecomputedZooVotes(uint256,address,uint256,uint256,uint256,uint256)"),
    decode(data: EvmLog): RecomputedZooVotes0Event {
      return decodeEvent("RecomputedZooVotes(uint256,address,uint256,uint256,uint256,uint256)", data)
    }
  }
  ,
  "RemovedStakerPosition(uint256,address,uint256)": {
    topic: abi.getEventTopic("RemovedStakerPosition(uint256,address,uint256)"),
    decode(data: EvmLog): RemovedStakerPosition0Event {
      return decodeEvent("RemovedStakerPosition(uint256,address,uint256)", data)
    }
  }
  ,
  "WithdrawedDaiFromVoting(uint256,address,uint256,address,uint256,uint256)": {
    topic: abi.getEventTopic("WithdrawedDaiFromVoting(uint256,address,uint256,address,uint256,uint256)"),
    decode(data: EvmLog): WithdrawedDaiFromVoting0Event {
      return decodeEvent("WithdrawedDaiFromVoting(uint256,address,uint256,address,uint256,uint256)", data)
    }
  }
  ,
  "WithdrawedZooFromVoting(uint256,address,uint256,uint256,uint256,address)": {
    topic: abi.getEventTopic("WithdrawedZooFromVoting(uint256,address,uint256,uint256,uint256,address)"),
    decode(data: EvmLog): WithdrawedZooFromVoting0Event {
      return decodeEvent("WithdrawedZooFromVoting(uint256,address,uint256,uint256,uint256,address)", data)
    }
  }
  ,
}

export type _createVotingPosition0Function = ([stakingPositionId: ethers.BigNumber, voter: string, yTokens: ethers.BigNumber, amount: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, voter: string, yTokens: ethers.BigNumber, amount: ethers.BigNumber})

export type AddDaiToVoting0Function = ([votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber, _yTokens: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber, _yTokens: ethers.BigNumber})

export type AddZooToVoting0Function = ([votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber})

export type CalculateIncentiveRewardForStaker0Function = ([stakingPositionId: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber})

export type CalculateIncentiveRewardForVoter0Function = ([votingPositionId: ethers.BigNumber] & {votingPositionId: ethers.BigNumber})

export type ChooseWinnerInPair0Function = ([pairIndex: ethers.BigNumber] & {pairIndex: ethers.BigNumber})

export type ClaimRewardFromStaking0Function = ([stakingPositionId: ethers.BigNumber, staker: string, beneficiary: string] & {stakingPositionId: ethers.BigNumber, staker: string, beneficiary: string})

export type ClaimRewardFromVoting0Function = ([votingPositionId: ethers.BigNumber, voter: string, beneficiary: string] & {votingPositionId: ethers.BigNumber, voter: string, beneficiary: string})

export type CreateStakerPosition0Function = ([staker: string, token: string] & {staker: string, token: string})

export type CreateVotingPosition0Function = ([stakingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber})

export type Init0Function = ([_xZoo: string, _jackpotA: string, _jackpotB: string, _wglmr: string] & {_xZoo: string, _jackpotA: string, _jackpotB: string, _wglmr: string})

export type PairNft0Function = ([stakingPositionId: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber})

export type RecomputeDaiVotes0Function = ([votingPositionId: ethers.BigNumber] & {votingPositionId: ethers.BigNumber})

export type RecomputeZooVotes0Function = ([votingPositionId: ethers.BigNumber] & {votingPositionId: ethers.BigNumber})

export type RemoveStakerPosition0Function = ([stakingPositionId: ethers.BigNumber, staker: string] & {stakingPositionId: ethers.BigNumber, staker: string})

export type SharesToTokens0Function = ([sharesAmount: ethers.BigNumber] & {sharesAmount: ethers.BigNumber})

export type TokensToShares0Function = ([tokens: ethers.BigNumber] & {tokens: ethers.BigNumber})

export type UpdateInfo0Function = ([stakingPositionId: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber})

export type UpdateInfoAboutStakedNumber0Function = ([collection: string] & {collection: string})

export type WithdrawDaiFromVoting0Function = ([votingPositionId: ethers.BigNumber, voter: string, beneficiary: string, daiNumber: ethers.BigNumber, toSwap: boolean] & {votingPositionId: ethers.BigNumber, voter: string, beneficiary: string, daiNumber: ethers.BigNumber, toSwap: boolean})

export type WithdrawZooFromVoting0Function = ([votingPositionId: ethers.BigNumber, voter: string, zooNumber: ethers.BigNumber, beneficiary: string] & {votingPositionId: ethers.BigNumber, voter: string, zooNumber: ethers.BigNumber, beneficiary: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "_createVotingPosition(uint256,address,uint256,uint256)": {
    sighash: abi.getSighash("_createVotingPosition(uint256,address,uint256,uint256)"),
    decode(input: string): _createVotingPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "addDaiToVoting(uint256,address,uint256,uint256)": {
    sighash: abi.getSighash("addDaiToVoting(uint256,address,uint256,uint256)"),
    decode(input: string): AddDaiToVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "addZooToVoting(uint256,address,uint256)": {
    sighash: abi.getSighash("addZooToVoting(uint256,address,uint256)"),
    decode(input: string): AddZooToVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "calculateIncentiveRewardForStaker(uint256)": {
    sighash: abi.getSighash("calculateIncentiveRewardForStaker(uint256)"),
    decode(input: string): CalculateIncentiveRewardForStaker0Function {
      return decodeFunction(input)
    }
  }
  ,
  "calculateIncentiveRewardForVoter(uint256)": {
    sighash: abi.getSighash("calculateIncentiveRewardForVoter(uint256)"),
    decode(input: string): CalculateIncentiveRewardForVoter0Function {
      return decodeFunction(input)
    }
  }
  ,
  "chooseWinnerInPair(uint256)": {
    sighash: abi.getSighash("chooseWinnerInPair(uint256)"),
    decode(input: string): ChooseWinnerInPair0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimRewardFromStaking(uint256,address,address)": {
    sighash: abi.getSighash("claimRewardFromStaking(uint256,address,address)"),
    decode(input: string): ClaimRewardFromStaking0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimRewardFromVoting(uint256,address,address)": {
    sighash: abi.getSighash("claimRewardFromVoting(uint256,address,address)"),
    decode(input: string): ClaimRewardFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "createStakerPosition(address,address)": {
    sighash: abi.getSighash("createStakerPosition(address,address)"),
    decode(input: string): CreateStakerPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "createVotingPosition(uint256,address,uint256)": {
    sighash: abi.getSighash("createVotingPosition(uint256,address,uint256)"),
    decode(input: string): CreateVotingPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "init(address,address,address,address)": {
    sighash: abi.getSighash("init(address,address,address,address)"),
    decode(input: string): Init0Function {
      return decodeFunction(input)
    }
  }
  ,
  "pairNft(uint256)": {
    sighash: abi.getSighash("pairNft(uint256)"),
    decode(input: string): PairNft0Function {
      return decodeFunction(input)
    }
  }
  ,
  "recomputeDaiVotes(uint256)": {
    sighash: abi.getSighash("recomputeDaiVotes(uint256)"),
    decode(input: string): RecomputeDaiVotes0Function {
      return decodeFunction(input)
    }
  }
  ,
  "recomputeZooVotes(uint256)": {
    sighash: abi.getSighash("recomputeZooVotes(uint256)"),
    decode(input: string): RecomputeZooVotes0Function {
      return decodeFunction(input)
    }
  }
  ,
  "removeStakerPosition(uint256,address)": {
    sighash: abi.getSighash("removeStakerPosition(uint256,address)"),
    decode(input: string): RemoveStakerPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "requestRandom()": {
    sighash: abi.getSighash("requestRandom()"),
  }
  ,
  "sharesToTokens(uint256)": {
    sighash: abi.getSighash("sharesToTokens(uint256)"),
    decode(input: string): SharesToTokens0Function {
      return decodeFunction(input)
    }
  }
  ,
  "tokensToShares(uint256)": {
    sighash: abi.getSighash("tokensToShares(uint256)"),
    decode(input: string): TokensToShares0Function {
      return decodeFunction(input)
    }
  }
  ,
  "updateEpoch()": {
    sighash: abi.getSighash("updateEpoch()"),
  }
  ,
  "updateInfo(uint256)": {
    sighash: abi.getSighash("updateInfo(uint256)"),
    decode(input: string): UpdateInfo0Function {
      return decodeFunction(input)
    }
  }
  ,
  "updateInfoAboutStakedNumber(address)": {
    sighash: abi.getSighash("updateInfoAboutStakedNumber(address)"),
    decode(input: string): UpdateInfoAboutStakedNumber0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdrawDaiFromVoting(uint256,address,address,uint256,bool)": {
    sighash: abi.getSighash("withdrawDaiFromVoting(uint256,address,address,uint256,bool)"),
    decode(input: string): WithdrawDaiFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdrawZooFromVoting(uint256,address,uint256,address)": {
    sighash: abi.getSighash("withdrawZooFromVoting(uint256,address,uint256,address)"),
    decode(input: string): WithdrawZooFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async activeStakerPositions(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("activeStakerPositions", [arg0])
  }

  async baseStakerReward(): Promise<ethers.BigNumber> {
    return this.call("baseStakerReward", [])
  }

  async baseVoterReward(): Promise<ethers.BigNumber> {
    return this.call("baseVoterReward", [])
  }

  async computeLastEpoch(votingPositionId: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("computeLastEpoch", [votingPositionId])
  }

  async currentEpoch(): Promise<ethers.BigNumber> {
    return this.call("currentEpoch", [])
  }

  async dai(): Promise<string> {
    return this.call("dai", [])
  }

  async epochDuration(): Promise<ethers.BigNumber> {
    return this.call("epochDuration", [])
  }

  async epochStartDate(): Promise<ethers.BigNumber> {
    return this.call("epochStartDate", [])
  }

  async epochsStarts(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("epochsStarts", [arg0])
  }

  async fifthStageDuration(): Promise<ethers.BigNumber> {
    return this.call("fifthStageDuration", [])
  }

  async firstStageDuration(): Promise<ethers.BigNumber> {
    return this.call("firstStageDuration", [])
  }

  async fourthStageDuration(): Promise<ethers.BigNumber> {
    return this.call("fourthStageDuration", [])
  }

  async gasPool(): Promise<string> {
    return this.call("gasPool", [])
  }

  async getCurrentStage(): Promise<number> {
    return this.call("getCurrentStage", [])
  }

  async getNftPairLength(epoch: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("getNftPairLength", [epoch])
  }

  async getPendingStakerReward(stakingPositionId: ethers.BigNumber): Promise<([stakerReward: ethers.BigNumber, end: ethers.BigNumber] & {stakerReward: ethers.BigNumber, end: ethers.BigNumber})> {
    return this.call("getPendingStakerReward", [stakingPositionId])
  }

  async getPendingVoterReward(votingPositionId: ethers.BigNumber): Promise<([yTokens: ethers.BigNumber, wells: ethers.BigNumber, glmr: ethers.BigNumber] & {yTokens: ethers.BigNumber, wells: ethers.BigNumber, glmr: ethers.BigNumber})> {
    return this.call("getPendingVoterReward", [votingPositionId])
  }

  async getStakerPositionsLength(): Promise<ethers.BigNumber> {
    return this.call("getStakerPositionsLength", [])
  }

  async glmrClaimedByEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("glmrClaimedByEpoch", [arg0])
  }

  async jackpotA(): Promise<string> {
    return this.call("jackpotA", [])
  }

  async jackpotB(): Promise<string> {
    return this.call("jackpotB", [])
  }

  async jackpotRewardsAtEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("jackpotRewardsAtEpoch", [arg0])
  }

  async lastUpdatesOfStakedNumbers(arg0: string): Promise<ethers.BigNumber> {
    return this.call("lastUpdatesOfStakedNumbers", [arg0])
  }

  async nftStakingPosition(): Promise<string> {
    return this.call("nftStakingPosition", [])
  }

  async nftVotingPosition(): Promise<string> {
    return this.call("nftVotingPosition", [])
  }

  async nftsInGame(): Promise<ethers.BigNumber> {
    return this.call("nftsInGame", [])
  }

  async numberOfNftsWithNonZeroVotes(): Promise<ethers.BigNumber> {
    return this.call("numberOfNftsWithNonZeroVotes", [])
  }

  async numberOfPlayedPairsInEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("numberOfPlayedPairsInEpoch", [arg0])
  }

  async numberOfStakedNftsInCollection(arg0: ethers.BigNumber, arg1: string): Promise<ethers.BigNumber> {
    return this.call("numberOfStakedNftsInCollection", [arg0, arg1])
  }

  async numberOfStakingPositions(): Promise<ethers.BigNumber> {
    return this.call("numberOfStakingPositions", [])
  }

  async numberOfVotingPositions(): Promise<ethers.BigNumber> {
    return this.call("numberOfVotingPositions", [])
  }

  async pairsInEpoch(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean] & {token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean})> {
    return this.call("pairsInEpoch", [arg0, arg1])
  }

  async rewardsForEpoch(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber] & {yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber})> {
    return this.call("rewardsForEpoch", [arg0, arg1])
  }

  async secondStageDuration(): Promise<ethers.BigNumber> {
    return this.call("secondStageDuration", [])
  }

  async stakingPositionsValues(arg0: ethers.BigNumber): Promise<([startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber] & {startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber})> {
    return this.call("stakingPositionsValues", [arg0])
  }

  async team(): Promise<string> {
    return this.call("team", [])
  }

  async thirdStageDuration(): Promise<ethers.BigNumber> {
    return this.call("thirdStageDuration", [])
  }

  async tokenController(): Promise<string> {
    return this.call("tokenController", [])
  }

  async treasury(): Promise<string> {
    return this.call("treasury", [])
  }

  async vault(): Promise<string> {
    return this.call("vault", [])
  }

  async veZoo(): Promise<string> {
    return this.call("veZoo", [])
  }

  async votingPositionsValues(arg0: ethers.BigNumber): Promise<([stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber})> {
    return this.call("votingPositionsValues", [arg0])
  }

  async wGlmr(): Promise<string> {
    return this.call("wGlmr", [])
  }

  async well(): Promise<string> {
    return this.call("well", [])
  }

  async wellClaimedByEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("wellClaimedByEpoch", [arg0])
  }

  async xZoo(): Promise<string> {
    return this.call("xZoo", [])
  }

  async xZooRewards(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("xZooRewards", [arg0])
  }

  async zoo(): Promise<string> {
    return this.call("zoo", [])
  }

  async zooFunctions(): Promise<string> {
    return this.call("zooFunctions", [])
  }

  async zooGovernance(): Promise<string> {
    return this.call("zooGovernance", [])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "_zoo",
          "type": "address"
        },
        {
          "internalType": "contract IERC20Metadata",
          "name": "_dai",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_vault",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zooGovernance",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_treasuryPool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_gasFeePool",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_teamAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftStakingPosition",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftVotingPosition",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_veZoo",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_controller",
          "type": "address"
        },
        {
          "internalType": "contract IERC20Metadata",
          "name": "_well",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "name": "AddedDaiToVoting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "name": "AddedZooToVoting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fighter1",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fighter2",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "winner",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pairIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "playedPairsAmount",
          "type": "uint256"
        }
      ],
      "name": "ChosenWinner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "yTokenReward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "daiReward",
          "type": "uint256"
        }
      ],
      "name": "ClaimedRewardFromStaking",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "daiReward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "ClaimedRewardFromVoting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "CreatedStakerPosition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "daiAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "CreatedVotingPosition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newEpoch",
          "type": "uint256"
        }
      ],
      "name": "EpochUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "zooReturned",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "daiReceived",
          "type": "uint256"
        }
      ],
      "name": "LiquidatedVotingPosition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fighter1",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "fighter2",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "pairIndex",
          "type": "uint256"
        }
      ],
      "name": "PairedNft",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newVotes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldVotes",
          "type": "uint256"
        }
      ],
      "name": "RecomputedDaiVotes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newVotes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldVotes",
          "type": "uint256"
        }
      ],
      "name": "RecomputedZooVotes",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "RemovedStakerPosition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "daiNumber",
          "type": "uint256"
        }
      ],
      "name": "WithdrawedDaiFromVoting",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "currentEpoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "zooNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "WithdrawedZooFromVoting",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "yTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_createVotingPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "activeStakerPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_yTokens",
          "type": "uint256"
        }
      ],
      "name": "addDaiToVoting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addZooToVoting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseStakerReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseVoterReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "calculateIncentiveRewardForStaker",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "calculateIncentiveRewardForVoter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "pairIndex",
          "type": "uint256"
        }
      ],
      "name": "chooseWinnerInPair",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "claimRewardFromStaking",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "daiReward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "claimRewardFromVoting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "daiReward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "computeLastEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lastEpochNumber",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "createStakerPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "createVotingPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dai",
      "outputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "epochDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "epochStartDate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "epochsStarts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fifthStageDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "firstStageDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fourthStageDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gasPool",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentStage",
      "outputs": [
        {
          "internalType": "enum Stage",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        }
      ],
      "name": "getNftPairLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "length",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "getPendingStakerReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "stakerReward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "getPendingVoterReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "yTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "wells",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "glmr",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakerPositionsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "glmrClaimedByEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_xZoo",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_jackpotA",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_jackpotB",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_wglmr",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "jackpotA",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "jackpotB",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "jackpotRewardsAtEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastUpdatesOfStakedNumbers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nftStakingPosition",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nftVotingPosition",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nftsInGame",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfNftsWithNonZeroVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "numberOfPlayedPairsInEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "numberOfStakedNftsInCollection",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfStakingPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfVotingPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "pairNft",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pairsInEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "token1",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "token2",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "playedInEpoch",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "win",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "recomputeDaiVotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        }
      ],
      "name": "recomputeZooVotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "staker",
          "type": "address"
        }
      ],
      "name": "removeStakerPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requestRandom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "rewardsForEpoch",
      "outputs": [
        {
          "internalType": "int256",
          "name": "yTokensSaldo",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "yTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokensAtBattleStart",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerShareAtBattleStart",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerShareCoef",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "secondStageDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "sharesAmount",
          "type": "uint256"
        }
      ],
      "name": "sharesToTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "stakingPositionsValues",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "startEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastRewardedEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastUpdateEpoch",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "lastEpochOfIncentiveReward",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "team",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "thirdStageDuration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenController",
      "outputs": [
        {
          "internalType": "contract ControllerInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "tokensToShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treasury",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "updateEpoch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        }
      ],
      "name": "updateInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        }
      ],
      "name": "updateInfoAboutStakedNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vault",
      "outputs": [
        {
          "internalType": "contract VaultAPI",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "veZoo",
      "outputs": [
        {
          "internalType": "contract ListingList",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "votingPositionsValues",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "daiInvested",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "yTokensNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "zooInvested",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "daiVotes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "endEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastRewardedEpoch",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastEpochYTokensWereDeductedForRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "yTokensRewardDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastEpochOfIncentiveReward",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wGlmr",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "well",
      "outputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "wellClaimedByEpoch",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "daiNumber",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "toSwap",
          "type": "bool"
        }
      ],
      "name": "withdrawDaiFromVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "zooNumber",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "withdrawZooFromVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "xZoo",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "xZooRewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zoo",
      "outputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zooFunctions",
      "outputs": [
        {
          "internalType": "contract IZooFunctions",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zooGovernance",
      "outputs": [
        {
          "internalType": "contract ZooGovernance",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
}
