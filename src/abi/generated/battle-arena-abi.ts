import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-arena-abi.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AddedDaiToVoting: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, amount: bigint, votes: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, amount: bigint, votes: bigint})>(
        abi, '0x1d03858b1af71b9f83373629186fe045c96007edce3f99556c60a76639bcaf28'
    ),
    AddedZooToVoting: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, amount: bigint, votes: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, amount: bigint, votes: bigint})>(
        abi, '0x82df25b7f45da31cc58fb9f87357804f1c2a5cb3f9a69eb9a40c37a63b1678d4'
    ),
    ChosenWinner: new LogEvent<([currentEpoch: bigint, fighter1: bigint, fighter2: bigint, winner: boolean, pairIndex: bigint, playedPairsAmount: bigint] & {currentEpoch: bigint, fighter1: bigint, fighter2: bigint, winner: boolean, pairIndex: bigint, playedPairsAmount: bigint})>(
        abi, '0xbaed9bd5f3813cca0e419e31ac73c48bc898771193fa08277415687e83afa046'
    ),
    ClaimedRewardFromStaking: new LogEvent<([currentEpoch: bigint, staker: string, stakingPositionId: bigint, beneficiary: string, yTokenReward: bigint, daiReward: bigint] & {currentEpoch: bigint, staker: string, stakingPositionId: bigint, beneficiary: string, yTokenReward: bigint, daiReward: bigint})>(
        abi, '0x72370b2e498530bdf665e81df67622d50b6dfbe0e4b2abbc9284df9952d1edbf'
    ),
    ClaimedRewardFromVoting: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, daiReward: bigint, votingPositionId: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, daiReward: bigint, votingPositionId: bigint})>(
        abi, '0x1d0bffcf6d165af6657af11cb6bb1cfbbee8a3e339879b2fa2adfde883aa3b27'
    ),
    CreatedStakerPosition: new LogEvent<([currentEpoch: bigint, staker: string, stakingPositionId: bigint] & {currentEpoch: bigint, staker: string, stakingPositionId: bigint})>(
        abi, '0x9bcb54784d094150c14d1da4bd72f56a5a8d94496476002b5fa75eb9c5b388a7'
    ),
    CreatedVotingPosition: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, daiAmount: bigint, votes: bigint, votingPositionId: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, daiAmount: bigint, votes: bigint, votingPositionId: bigint})>(
        abi, '0xd49ecac0046d6bbff8e6657b20e5d0e572df838799141361f8fff74ef54f41a1'
    ),
    EpochUpdated: new LogEvent<([date: bigint, newEpoch: bigint] & {date: bigint, newEpoch: bigint})>(
        abi, '0xabb37912485bfb13380247be2f4101619759991c9a13ef282eeb05108378b579'
    ),
    LiquidatedVotingPosition: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, votingPositionId: bigint, zooReturned: bigint, daiReceived: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, votingPositionId: bigint, zooReturned: bigint, daiReceived: bigint})>(
        abi, '0xda8c7615b4714716776d71a0bfd6c6ec0590fceeda9e7f98c3ef2dd63e897abb'
    ),
    PairedNft: new LogEvent<([currentEpoch: bigint, fighter1: bigint, fighter2: bigint, pairIndex: bigint] & {currentEpoch: bigint, fighter1: bigint, fighter2: bigint, pairIndex: bigint})>(
        abi, '0x7ec50af65d0267242014512e6be4fcb82b74f2b42eb9a0c4cb9732d991ff977d'
    ),
    RecomputedDaiVotes: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, newVotes: bigint, oldVotes: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, newVotes: bigint, oldVotes: bigint})>(
        abi, '0xf029f94644de62a10b294f58918be5ffb1de384cb52b16c040e5e4f0db00d111'
    ),
    RecomputedZooVotes: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, newVotes: bigint, oldVotes: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, newVotes: bigint, oldVotes: bigint})>(
        abi, '0xfcf3cb2b242b4bc4d492f35431c0ae55787ec4fab59fde11a0bf28e72b8b9984'
    ),
    RemovedStakerPosition: new LogEvent<([currentEpoch: bigint, staker: string, stakingPositionId: bigint] & {currentEpoch: bigint, staker: string, stakingPositionId: bigint})>(
        abi, '0x6598995c7063bd79f4636516f5e4a2d87258a000c6f74b3fead6fe0b65e1ca9f'
    ),
    WithdrawedDaiFromVoting: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, votingPositionId: bigint, daiNumber: bigint] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, beneficiary: string, votingPositionId: bigint, daiNumber: bigint})>(
        abi, '0x9d89527c9e43c9013a3d54e5add147970669fd8414d34b2f4ed31c3650516ef7'
    ),
    WithdrawedZooFromVoting: new LogEvent<([currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, zooNumber: bigint, beneficiary: string] & {currentEpoch: bigint, voter: string, stakingPositionId: bigint, votingPositionId: bigint, zooNumber: bigint, beneficiary: string})>(
        abi, '0x4ec4eee6fa63a5202dedd45915a5c6755fd62c2ff8eeba763b7d374824caa26c'
    ),
}

export const functions = {
    _createVotingPosition: new Func<[stakingPositionId: bigint, voter: string, yTokens: bigint, amount: bigint], {stakingPositionId: bigint, voter: string, yTokens: bigint, amount: bigint}, ([votes: bigint, votingPositionId: bigint] & {votes: bigint, votingPositionId: bigint})>(
        abi, '0xf93a6dea'
    ),
    activeStakerPositions: new Func<[_: bigint], {}, bigint>(
        abi, '0x40b68e93'
    ),
    addDaiToVoting: new Func<[votingPositionId: bigint, voter: string, amount: bigint, _yTokens: bigint], {votingPositionId: bigint, voter: string, amount: bigint, _yTokens: bigint}, bigint>(
        abi, '0x388c01f9'
    ),
    addVotesToVeZoo: new Func<[collection: string, amount: bigint], {collection: string, amount: bigint}, []>(
        abi, '0x1ce3b455'
    ),
    addZooToVoting: new Func<[votingPositionId: bigint, voter: string, amount: bigint], {votingPositionId: bigint, voter: string, amount: bigint}, bigint>(
        abi, '0x40ae78bb'
    ),
    baseStakerReward: new Func<[], {}, bigint>(
        abi, '0x6c6e7274'
    ),
    baseVoterReward: new Func<[], {}, bigint>(
        abi, '0x5bda4108'
    ),
    calculateIncentiveRewardForStaker: new Func<[stakingPositionId: bigint], {stakingPositionId: bigint}, bigint>(
        abi, '0x993072bd'
    ),
    calculateIncentiveRewardForVoter: new Func<[votingPositionId: bigint], {votingPositionId: bigint}, bigint>(
        abi, '0xaae76c28'
    ),
    chooseWinnerInPair: new Func<[pairIndex: bigint], {pairIndex: bigint}, []>(
        abi, '0xd7916725'
    ),
    claimRewardFromStaking: new Func<[stakingPositionId: bigint, staker: string, beneficiary: string], {stakingPositionId: bigint, staker: string, beneficiary: string}, bigint>(
        abi, '0xf5bf5ad6'
    ),
    claimRewardFromVoting: new Func<[votingPositionId: bigint, voter: string, beneficiary: string], {votingPositionId: bigint, voter: string, beneficiary: string}, bigint>(
        abi, '0x0e475be4'
    ),
    computeLastEpoch: new Func<[votingPositionId: bigint], {votingPositionId: bigint}, bigint>(
        abi, '0x6bd66ba1'
    ),
    createStakerPosition: new Func<[staker: string, token: string], {staker: string, token: string}, bigint>(
        abi, '0xae035883'
    ),
    createVotingPosition: new Func<[stakingPositionId: bigint, voter: string, amount: bigint], {stakingPositionId: bigint, voter: string, amount: bigint}, ([votes: bigint, votingPositionId: bigint] & {votes: bigint, votingPositionId: bigint})>(
        abi, '0x544bab91'
    ),
    currentEpoch: new Func<[], {}, bigint>(
        abi, '0x76671808'
    ),
    dai: new Func<[], {}, string>(
        abi, '0xf4b9fa75'
    ),
    endEpochOfIncentiveRewards: new Func<[], {}, bigint>(
        abi, '0xf6065663'
    ),
    epochDuration: new Func<[], {}, bigint>(
        abi, '0x4ff0876a'
    ),
    epochStartDate: new Func<[], {}, bigint>(
        abi, '0x3da55ed8'
    ),
    epochsStarts: new Func<[_: bigint], {}, bigint>(
        abi, '0x3e9aa9d7'
    ),
    fifthStageDuration: new Func<[], {}, bigint>(
        abi, '0xebb667ef'
    ),
    firstStageDuration: new Func<[], {}, bigint>(
        abi, '0x4fd7718b'
    ),
    fourthStageDuration: new Func<[], {}, bigint>(
        abi, '0x25623a43'
    ),
    getCurrentStage: new Func<[], {}, number>(
        abi, '0xeedbe31d'
    ),
    getNftPairLength: new Func<[epoch: bigint], {epoch: bigint}, bigint>(
        abi, '0xb1248a1c'
    ),
    getPendingStakerReward: new Func<[stakingPositionId: bigint], {stakingPositionId: bigint}, ([stakerReward: bigint, end: bigint] & {stakerReward: bigint, end: bigint})>(
        abi, '0x2f8816ee'
    ),
    getPendingVoterReward: new Func<[votingPositionId: bigint], {votingPositionId: bigint}, ([yTokens: bigint, zooRewards: bigint] & {yTokens: bigint, zooRewards: bigint})>(
        abi, '0x73d9181b'
    ),
    getStakerPositionsLength: new Func<[], {}, bigint>(
        abi, '0x519ee3e2'
    ),
    init: new Func<[_zooVoteRate: bigint, _zoo: string], {_zooVoteRate: bigint, _zoo: string}, []>(
        abi, '0xb792e6ec'
    ),
    lastUpdatesOfStakedNumbers: new Func<[_: string], {}, bigint>(
        abi, '0x009174ba'
    ),
    lpZoo: new Func<[], {}, string>(
        abi, '0x47761012'
    ),
    nftStakingPosition: new Func<[], {}, string>(
        abi, '0x9b932e7c'
    ),
    nftVotingPosition: new Func<[], {}, string>(
        abi, '0x5d551948'
    ),
    nftsInGame: new Func<[], {}, bigint>(
        abi, '0x1584d2ce'
    ),
    numberOfNftsWithNonZeroVotes: new Func<[], {}, bigint>(
        abi, '0x0c2334d6'
    ),
    numberOfNftsWithNonZeroVotesPending: new Func<[], {}, bigint>(
        abi, '0x0c41ef28'
    ),
    numberOfPlayedPairsInEpoch: new Func<[_: bigint], {}, bigint>(
        abi, '0xc58cd7d0'
    ),
    numberOfStakedNftsInCollection: new Func<[_: bigint, _: string], {}, bigint>(
        abi, '0xecd92aea'
    ),
    numberOfStakingPositions: new Func<[], {}, bigint>(
        abi, '0x3b6cbd2a'
    ),
    numberOfVotingPositions: new Func<[], {}, bigint>(
        abi, '0xd95c0697'
    ),
    pairNft: new Func<[stakingPositionId: bigint], {stakingPositionId: bigint}, []>(
        abi, '0xa2522172'
    ),
    pairsInEpoch: new Func<[_: bigint, _: bigint], {}, ([token1: bigint, token2: bigint, playedInEpoch: boolean, win: boolean] & {token1: bigint, token2: bigint, playedInEpoch: boolean, win: boolean})>(
        abi, '0xe911b5aa'
    ),
    pendingVotes: new Func<[_: bigint], {}, bigint>(
        abi, '0x334a0193'
    ),
    pendingVotesEpoch: new Func<[_: bigint], {}, bigint>(
        abi, '0xbd72836d'
    ),
    poolWeight: new Func<[_: string, _: bigint], {}, bigint>(
        abi, '0xda452523'
    ),
    recomputeDaiVotes: new Func<[votingPositionId: bigint], {votingPositionId: bigint}, []>(
        abi, '0x94b0c536'
    ),
    recomputeZooVotes: new Func<[votingPositionId: bigint], {votingPositionId: bigint}, []>(
        abi, '0xddccf6b9'
    ),
    removeStakerPosition: new Func<[stakingPositionId: bigint, staker: string], {stakingPositionId: bigint, staker: string}, []>(
        abi, '0x302c60de'
    ),
    removeVotesFromVeZoo: new Func<[collection: string, amount: bigint], {collection: string, amount: bigint}, []>(
        abi, '0xdca1bb94'
    ),
    requestRandom: new Func<[], {}, []>(
        abi, '0xda9f7550'
    ),
    rewardsForEpoch: new Func<[_: bigint, _: bigint], {}, ([yTokensSaldo: bigint, votes: bigint, yTokens: bigint, tokensAtBattleStart: bigint, pricePerShareAtBattleStart: bigint, pricePerShareCoef: bigint, zooRewards: bigint, league: number] & {yTokensSaldo: bigint, votes: bigint, yTokens: bigint, tokensAtBattleStart: bigint, pricePerShareAtBattleStart: bigint, pricePerShareCoef: bigint, zooRewards: bigint, league: number})>(
        abi, '0x924298a6'
    ),
    secondStageDuration: new Func<[], {}, bigint>(
        abi, '0x65794de3'
    ),
    sharesToTokens: new Func<[sharesAmount: bigint], {sharesAmount: bigint}, bigint>(
        abi, '0x27def4fd'
    ),
    stakingPositionsValues: new Func<[_: bigint], {}, ([startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastUpdateEpoch: bigint, collection: string, lastEpochOfIncentiveReward: bigint] & {startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastUpdateEpoch: bigint, collection: string, lastEpochOfIncentiveReward: bigint})>(
        abi, '0x8cc45764'
    ),
    thirdStageDuration: new Func<[], {}, bigint>(
        abi, '0xb5ce3600'
    ),
    tokensToShares: new Func<[tokens: bigint], {tokens: bigint}, bigint>(
        abi, '0xf3044ac7'
    ),
    treasury: new Func<[], {}, string>(
        abi, '0x61d027b3'
    ),
    updateEpoch: new Func<[], {}, []>(
        abi, '0x36f4fb02'
    ),
    updateInfo: new Func<[stakingPositionId: bigint], {stakingPositionId: bigint}, []>(
        abi, '0x316db7f2'
    ),
    updateInfoAboutStakedNumber: new Func<[collection: string], {collection: string}, bigint>(
        abi, '0x873b5fc0'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    veZoo: new Func<[], {}, string>(
        abi, '0x1fe52bc3'
    ),
    voterIncentiveDebt: new Func<[_: bigint], {}, bigint>(
        abi, '0xe54a2db9'
    ),
    votingPositionsValues: new Func<[_: bigint], {}, ([stakingPositionId: bigint, daiInvested: bigint, yTokensNumber: bigint, zooInvested: bigint, daiVotes: bigint, votes: bigint, startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastEpochYTokensWereDeductedForRewards: bigint, yTokensRewardDebt: bigint, lastEpochOfIncentiveReward: bigint] & {stakingPositionId: bigint, daiInvested: bigint, yTokensNumber: bigint, zooInvested: bigint, daiVotes: bigint, votes: bigint, startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastEpochYTokensWereDeductedForRewards: bigint, yTokensRewardDebt: bigint, lastEpochOfIncentiveReward: bigint})>(
        abi, '0xcc1bb749'
    ),
    withdrawDaiFromVoting: new Func<[votingPositionId: bigint, voter: string, beneficiary: string, daiNumber: bigint, toSwap: boolean], {votingPositionId: bigint, voter: string, beneficiary: string, daiNumber: bigint, toSwap: boolean}, []>(
        abi, '0x0063ec92'
    ),
    withdrawZooFromVoting: new Func<[votingPositionId: bigint, voter: string, zooNumber: bigint, beneficiary: string], {votingPositionId: bigint, voter: string, zooNumber: bigint, beneficiary: string}, []>(
        abi, '0x55652c95'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
    zooFunctions: new Func<[], {}, string>(
        abi, '0xeb09da31'
    ),
    zooGovernance: new Func<[], {}, string>(
        abi, '0x5df9c36b'
    ),
    zooTokensRewardDebt: new Func<[_: bigint], {}, bigint>(
        abi, '0xa2e0706a'
    ),
    zooVoteRate: new Func<[], {}, bigint>(
        abi, '0xb1f702f3'
    ),
}

export class Contract extends ContractBase {

    activeStakerPositions(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.activeStakerPositions, [arg0])
    }

    baseStakerReward(): Promise<bigint> {
        return this.eth_call(functions.baseStakerReward, [])
    }

    baseVoterReward(): Promise<bigint> {
        return this.eth_call(functions.baseVoterReward, [])
    }

    computeLastEpoch(votingPositionId: bigint): Promise<bigint> {
        return this.eth_call(functions.computeLastEpoch, [votingPositionId])
    }

    currentEpoch(): Promise<bigint> {
        return this.eth_call(functions.currentEpoch, [])
    }

    dai(): Promise<string> {
        return this.eth_call(functions.dai, [])
    }

    endEpochOfIncentiveRewards(): Promise<bigint> {
        return this.eth_call(functions.endEpochOfIncentiveRewards, [])
    }

    epochDuration(): Promise<bigint> {
        return this.eth_call(functions.epochDuration, [])
    }

    epochStartDate(): Promise<bigint> {
        return this.eth_call(functions.epochStartDate, [])
    }

    epochsStarts(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.epochsStarts, [arg0])
    }

    fifthStageDuration(): Promise<bigint> {
        return this.eth_call(functions.fifthStageDuration, [])
    }

    firstStageDuration(): Promise<bigint> {
        return this.eth_call(functions.firstStageDuration, [])
    }

    fourthStageDuration(): Promise<bigint> {
        return this.eth_call(functions.fourthStageDuration, [])
    }

    getCurrentStage(): Promise<number> {
        return this.eth_call(functions.getCurrentStage, [])
    }

    getNftPairLength(epoch: bigint): Promise<bigint> {
        return this.eth_call(functions.getNftPairLength, [epoch])
    }

    getPendingStakerReward(stakingPositionId: bigint): Promise<([stakerReward: bigint, end: bigint] & {stakerReward: bigint, end: bigint})> {
        return this.eth_call(functions.getPendingStakerReward, [stakingPositionId])
    }

    getPendingVoterReward(votingPositionId: bigint): Promise<([yTokens: bigint, zooRewards: bigint] & {yTokens: bigint, zooRewards: bigint})> {
        return this.eth_call(functions.getPendingVoterReward, [votingPositionId])
    }

    getStakerPositionsLength(): Promise<bigint> {
        return this.eth_call(functions.getStakerPositionsLength, [])
    }

    lastUpdatesOfStakedNumbers(arg0: string): Promise<bigint> {
        return this.eth_call(functions.lastUpdatesOfStakedNumbers, [arg0])
    }

    lpZoo(): Promise<string> {
        return this.eth_call(functions.lpZoo, [])
    }

    nftStakingPosition(): Promise<string> {
        return this.eth_call(functions.nftStakingPosition, [])
    }

    nftVotingPosition(): Promise<string> {
        return this.eth_call(functions.nftVotingPosition, [])
    }

    nftsInGame(): Promise<bigint> {
        return this.eth_call(functions.nftsInGame, [])
    }

    numberOfNftsWithNonZeroVotes(): Promise<bigint> {
        return this.eth_call(functions.numberOfNftsWithNonZeroVotes, [])
    }

    numberOfNftsWithNonZeroVotesPending(): Promise<bigint> {
        return this.eth_call(functions.numberOfNftsWithNonZeroVotesPending, [])
    }

    numberOfPlayedPairsInEpoch(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.numberOfPlayedPairsInEpoch, [arg0])
    }

    numberOfStakedNftsInCollection(arg0: bigint, arg1: string): Promise<bigint> {
        return this.eth_call(functions.numberOfStakedNftsInCollection, [arg0, arg1])
    }

    numberOfStakingPositions(): Promise<bigint> {
        return this.eth_call(functions.numberOfStakingPositions, [])
    }

    numberOfVotingPositions(): Promise<bigint> {
        return this.eth_call(functions.numberOfVotingPositions, [])
    }

    pairsInEpoch(arg0: bigint, arg1: bigint): Promise<([token1: bigint, token2: bigint, playedInEpoch: boolean, win: boolean] & {token1: bigint, token2: bigint, playedInEpoch: boolean, win: boolean})> {
        return this.eth_call(functions.pairsInEpoch, [arg0, arg1])
    }

    pendingVotes(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.pendingVotes, [arg0])
    }

    pendingVotesEpoch(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.pendingVotesEpoch, [arg0])
    }

    poolWeight(arg0: string, arg1: bigint): Promise<bigint> {
        return this.eth_call(functions.poolWeight, [arg0, arg1])
    }

    rewardsForEpoch(arg0: bigint, arg1: bigint): Promise<([yTokensSaldo: bigint, votes: bigint, yTokens: bigint, tokensAtBattleStart: bigint, pricePerShareAtBattleStart: bigint, pricePerShareCoef: bigint, zooRewards: bigint, league: number] & {yTokensSaldo: bigint, votes: bigint, yTokens: bigint, tokensAtBattleStart: bigint, pricePerShareAtBattleStart: bigint, pricePerShareCoef: bigint, zooRewards: bigint, league: number})> {
        return this.eth_call(functions.rewardsForEpoch, [arg0, arg1])
    }

    secondStageDuration(): Promise<bigint> {
        return this.eth_call(functions.secondStageDuration, [])
    }

    stakingPositionsValues(arg0: bigint): Promise<([startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastUpdateEpoch: bigint, collection: string, lastEpochOfIncentiveReward: bigint] & {startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastUpdateEpoch: bigint, collection: string, lastEpochOfIncentiveReward: bigint})> {
        return this.eth_call(functions.stakingPositionsValues, [arg0])
    }

    thirdStageDuration(): Promise<bigint> {
        return this.eth_call(functions.thirdStageDuration, [])
    }

    treasury(): Promise<string> {
        return this.eth_call(functions.treasury, [])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }

    veZoo(): Promise<string> {
        return this.eth_call(functions.veZoo, [])
    }

    voterIncentiveDebt(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.voterIncentiveDebt, [arg0])
    }

    votingPositionsValues(arg0: bigint): Promise<([stakingPositionId: bigint, daiInvested: bigint, yTokensNumber: bigint, zooInvested: bigint, daiVotes: bigint, votes: bigint, startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastEpochYTokensWereDeductedForRewards: bigint, yTokensRewardDebt: bigint, lastEpochOfIncentiveReward: bigint] & {stakingPositionId: bigint, daiInvested: bigint, yTokensNumber: bigint, zooInvested: bigint, daiVotes: bigint, votes: bigint, startEpoch: bigint, endEpoch: bigint, lastRewardedEpoch: bigint, lastEpochYTokensWereDeductedForRewards: bigint, yTokensRewardDebt: bigint, lastEpochOfIncentiveReward: bigint})> {
        return this.eth_call(functions.votingPositionsValues, [arg0])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }

    zooFunctions(): Promise<string> {
        return this.eth_call(functions.zooFunctions, [])
    }

    zooGovernance(): Promise<string> {
        return this.eth_call(functions.zooGovernance, [])
    }

    zooTokensRewardDebt(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.zooTokensRewardDebt, [arg0])
    }

    zooVoteRate(): Promise<bigint> {
        return this.eth_call(functions.zooVoteRate, [])
    }
}
