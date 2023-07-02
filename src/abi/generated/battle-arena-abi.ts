import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-arena-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddedDaiToVoting: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber})>(
        abi, '0x1d03858b1af71b9f83373629186fe045c96007edce3f99556c60a76639bcaf28'
    ),
    AddedZooToVoting: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, amount: ethers.BigNumber, votes: ethers.BigNumber})>(
        abi, '0x82df25b7f45da31cc58fb9f87357804f1c2a5cb3f9a69eb9a40c37a63b1678d4'
    ),
    ChosenWinner: new LogEvent<([currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, winner: boolean, pairIndex: ethers.BigNumber, playedPairsAmount: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, winner: boolean, pairIndex: ethers.BigNumber, playedPairsAmount: ethers.BigNumber})>(
        abi, '0xbaed9bd5f3813cca0e419e31ac73c48bc898771193fa08277415687e83afa046'
    ),
    ClaimedRewardFromStaking: new LogEvent<([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber, beneficiary: string, yTokenReward: ethers.BigNumber, daiReward: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber, beneficiary: string, yTokenReward: ethers.BigNumber, daiReward: ethers.BigNumber})>(
        abi, '0x72370b2e498530bdf665e81df67622d50b6dfbe0e4b2abbc9284df9952d1edbf'
    ),
    ClaimedRewardFromVoting: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, daiReward: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, daiReward: ethers.BigNumber, votingPositionId: ethers.BigNumber})>(
        abi, '0x1d0bffcf6d165af6657af11cb6bb1cfbbee8a3e339879b2fa2adfde883aa3b27'
    ),
    CreatedStakerPosition: new LogEvent<([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber})>(
        abi, '0x9bcb54784d094150c14d1da4bd72f56a5a8d94496476002b5fa75eb9c5b388a7'
    ),
    CreatedVotingPosition: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, daiAmount: ethers.BigNumber, votes: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, daiAmount: ethers.BigNumber, votes: ethers.BigNumber, votingPositionId: ethers.BigNumber})>(
        abi, '0xd49ecac0046d6bbff8e6657b20e5d0e572df838799141361f8fff74ef54f41a1'
    ),
    EpochUpdated: new LogEvent<([date: ethers.BigNumber, newEpoch: ethers.BigNumber] & {date: ethers.BigNumber, newEpoch: ethers.BigNumber})>(
        abi, '0xabb37912485bfb13380247be2f4101619759991c9a13ef282eeb05108378b579'
    ),
    LiquidatedVotingPosition: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, zooReturned: ethers.BigNumber, daiReceived: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, zooReturned: ethers.BigNumber, daiReceived: ethers.BigNumber})>(
        abi, '0xda8c7615b4714716776d71a0bfd6c6ec0590fceeda9e7f98c3ef2dd63e897abb'
    ),
    PairedNft: new LogEvent<([currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, pairIndex: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, fighter1: ethers.BigNumber, fighter2: ethers.BigNumber, pairIndex: ethers.BigNumber})>(
        abi, '0x7ec50af65d0267242014512e6be4fcb82b74f2b42eb9a0c4cb9732d991ff977d'
    ),
    RecomputedDaiVotes: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber})>(
        abi, '0xf029f94644de62a10b294f58918be5ffb1de384cb52b16c040e5e4f0db00d111'
    ),
    RecomputedZooVotes: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, newVotes: ethers.BigNumber, oldVotes: ethers.BigNumber})>(
        abi, '0xfcf3cb2b242b4bc4d492f35431c0ae55787ec4fab59fde11a0bf28e72b8b9984'
    ),
    RemovedStakerPosition: new LogEvent<([currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, staker: string, stakingPositionId: ethers.BigNumber})>(
        abi, '0x6598995c7063bd79f4636516f5e4a2d87258a000c6f74b3fead6fe0b65e1ca9f'
    ),
    WithdrawedDaiFromVoting: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, beneficiary: string, votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber})>(
        abi, '0x9d89527c9e43c9013a3d54e5add147970669fd8414d34b2f4ed31c3650516ef7'
    ),
    WithdrawedZooFromVoting: new LogEvent<([currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string] & {currentEpoch: ethers.BigNumber, voter: string, stakingPositionId: ethers.BigNumber, votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string})>(
        abi, '0x4ec4eee6fa63a5202dedd45915a5c6755fd62c2ff8eeba763b7d374824caa26c'
    ),
}

export const functions = {
    _createVotingPosition: new Func<[stakingPositionId: ethers.BigNumber, voter: string, yTokens: ethers.BigNumber, amount: ethers.BigNumber], {stakingPositionId: ethers.BigNumber, voter: string, yTokens: ethers.BigNumber, amount: ethers.BigNumber}, ([votes: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {votes: ethers.BigNumber, votingPositionId: ethers.BigNumber})>(
        abi, '0xf93a6dea'
    ),
    activeStakerPositions: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x40b68e93'
    ),
    addDaiToVoting: new Func<[votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber, _yTokens: ethers.BigNumber], {votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber, _yTokens: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x388c01f9'
    ),
    addVotesToVeZoo: new Func<[collection: string, amount: ethers.BigNumber], {collection: string, amount: ethers.BigNumber}, []>(
        abi, '0x1ce3b455'
    ),
    addZooToVoting: new Func<[votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber], {votingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x40ae78bb'
    ),
    baseStakerReward: new Func<[], {}, ethers.BigNumber>(
        abi, '0x6c6e7274'
    ),
    baseVoterReward: new Func<[], {}, ethers.BigNumber>(
        abi, '0x5bda4108'
    ),
    calculateIncentiveRewardForStaker: new Func<[stakingPositionId: ethers.BigNumber], {stakingPositionId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x993072bd'
    ),
    calculateIncentiveRewardForVoter: new Func<[votingPositionId: ethers.BigNumber], {votingPositionId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xaae76c28'
    ),
    chooseWinnerInPair: new Func<[pairIndex: ethers.BigNumber], {pairIndex: ethers.BigNumber}, []>(
        abi, '0xd7916725'
    ),
    claimRewardFromStaking: new Func<[stakingPositionId: ethers.BigNumber, staker: string, beneficiary: string], {stakingPositionId: ethers.BigNumber, staker: string, beneficiary: string}, ethers.BigNumber>(
        abi, '0xf5bf5ad6'
    ),
    claimRewardFromVoting: new Func<[votingPositionId: ethers.BigNumber, voter: string, beneficiary: string], {votingPositionId: ethers.BigNumber, voter: string, beneficiary: string}, ethers.BigNumber>(
        abi, '0x0e475be4'
    ),
    computeLastEpoch: new Func<[votingPositionId: ethers.BigNumber], {votingPositionId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x6bd66ba1'
    ),
    createStakerPosition: new Func<[staker: string, token: string], {staker: string, token: string}, ethers.BigNumber>(
        abi, '0xae035883'
    ),
    createVotingPosition: new Func<[stakingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber], {stakingPositionId: ethers.BigNumber, voter: string, amount: ethers.BigNumber}, ([votes: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {votes: ethers.BigNumber, votingPositionId: ethers.BigNumber})>(
        abi, '0x544bab91'
    ),
    currentEpoch: new Func<[], {}, ethers.BigNumber>(
        abi, '0x76671808'
    ),
    dai: new Func<[], {}, string>(
        abi, '0xf4b9fa75'
    ),
    endEpochOfIncentiveRewards: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf6065663'
    ),
    epochDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4ff0876a'
    ),
    epochStartDate: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3da55ed8'
    ),
    epochsStarts: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x3e9aa9d7'
    ),
    fifthStageDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0xebb667ef'
    ),
    firstStageDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4fd7718b'
    ),
    fourthStageDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0x25623a43'
    ),
    gauge: new Func<[], {}, string>(
        abi, '0xa6f19c84'
    ),
    getCurrentStage: new Func<[], {}, number>(
        abi, '0xeedbe31d'
    ),
    getNftPairLength: new Func<[epoch: ethers.BigNumber], {epoch: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xb1248a1c'
    ),
    getPendingStakerReward: new Func<[stakingPositionId: ethers.BigNumber], {stakingPositionId: ethers.BigNumber}, ([stakerReward: ethers.BigNumber, end: ethers.BigNumber] & {stakerReward: ethers.BigNumber, end: ethers.BigNumber})>(
        abi, '0x2f8816ee'
    ),
    getPendingVoterReward: new Func<[votingPositionId: ethers.BigNumber], {votingPositionId: ethers.BigNumber}, ([yTokens: ethers.BigNumber, zooRewards: ethers.BigNumber] & {yTokens: ethers.BigNumber, zooRewards: ethers.BigNumber})>(
        abi, '0x73d9181b'
    ),
    getStakerPositionsLength: new Func<[], {}, ethers.BigNumber>(
        abi, '0x519ee3e2'
    ),
    init: new Func<[_veBal: string, _gauge: string, _zooVoteRate: ethers.BigNumber, _zoo: string], {_veBal: string, _gauge: string, _zooVoteRate: ethers.BigNumber, _zoo: string}, []>(
        abi, '0x4b180da9'
    ),
    lastUpdatesOfStakedNumbers: new Func<[_: string], {}, ethers.BigNumber>(
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
    nftsInGame: new Func<[], {}, ethers.BigNumber>(
        abi, '0x1584d2ce'
    ),
    numberOfNftsWithNonZeroVotes: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0c2334d6'
    ),
    numberOfNftsWithNonZeroVotesPending: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0c41ef28'
    ),
    numberOfPlayedPairsInEpoch: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xc58cd7d0'
    ),
    numberOfStakedNftsInCollection: new Func<[_: ethers.BigNumber, _: string], {}, ethers.BigNumber>(
        abi, '0xecd92aea'
    ),
    numberOfStakingPositions: new Func<[], {}, ethers.BigNumber>(
        abi, '0x3b6cbd2a'
    ),
    numberOfVotingPositions: new Func<[], {}, ethers.BigNumber>(
        abi, '0xd95c0697'
    ),
    pairNft: new Func<[stakingPositionId: ethers.BigNumber], {stakingPositionId: ethers.BigNumber}, []>(
        abi, '0xa2522172'
    ),
    pairsInEpoch: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ([token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean] & {token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean})>(
        abi, '0xe911b5aa'
    ),
    pendingVotes: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x334a0193'
    ),
    pendingVotesEpoch: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xbd72836d'
    ),
    poolWeight: new Func<[_: string, _: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xda452523'
    ),
    recomputeDaiVotes: new Func<[votingPositionId: ethers.BigNumber], {votingPositionId: ethers.BigNumber}, []>(
        abi, '0x94b0c536'
    ),
    recomputeZooVotes: new Func<[votingPositionId: ethers.BigNumber], {votingPositionId: ethers.BigNumber}, []>(
        abi, '0xddccf6b9'
    ),
    removeStakerPosition: new Func<[stakingPositionId: ethers.BigNumber, staker: string], {stakingPositionId: ethers.BigNumber, staker: string}, []>(
        abi, '0x302c60de'
    ),
    removeVotesFromVeZoo: new Func<[collection: string, amount: ethers.BigNumber], {collection: string, amount: ethers.BigNumber}, []>(
        abi, '0xdca1bb94'
    ),
    requestRandom: new Func<[], {}, []>(
        abi, '0xda9f7550'
    ),
    rewardsForEpoch: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ([yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber, zooRewards: ethers.BigNumber, league: number] & {yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber, zooRewards: ethers.BigNumber, league: number})>(
        abi, '0x924298a6'
    ),
    secondStageDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0x65794de3'
    ),
    sharesToTokens: new Func<[sharesAmount: ethers.BigNumber], {sharesAmount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x27def4fd'
    ),
    stakingPositionsValues: new Func<[_: ethers.BigNumber], {}, ([startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber] & {startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber})>(
        abi, '0x8cc45764'
    ),
    thirdStageDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb5ce3600'
    ),
    tokensToShares: new Func<[tokens: ethers.BigNumber], {tokens: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xf3044ac7'
    ),
    treasury: new Func<[], {}, string>(
        abi, '0x61d027b3'
    ),
    updateEpoch: new Func<[], {}, []>(
        abi, '0x36f4fb02'
    ),
    updateInfo: new Func<[stakingPositionId: ethers.BigNumber], {stakingPositionId: ethers.BigNumber}, []>(
        abi, '0x316db7f2'
    ),
    updateInfoAboutStakedNumber: new Func<[collection: string], {collection: string}, []>(
        abi, '0x873b5fc0'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    veBal: new Func<[], {}, string>(
        abi, '0x34bce903'
    ),
    veZoo: new Func<[], {}, string>(
        abi, '0x1fe52bc3'
    ),
    voterIncentiveDebt: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xe54a2db9'
    ),
    votingPositionsValues: new Func<[_: ethers.BigNumber], {}, ([stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber})>(
        abi, '0xcc1bb749'
    ),
    withdrawDaiFromVoting: new Func<[votingPositionId: ethers.BigNumber, voter: string, beneficiary: string, daiNumber: ethers.BigNumber, toSwap: boolean], {votingPositionId: ethers.BigNumber, voter: string, beneficiary: string, daiNumber: ethers.BigNumber, toSwap: boolean}, []>(
        abi, '0x0063ec92'
    ),
    withdrawZooFromVoting: new Func<[votingPositionId: ethers.BigNumber, voter: string, zooNumber: ethers.BigNumber, beneficiary: string], {votingPositionId: ethers.BigNumber, voter: string, zooNumber: ethers.BigNumber, beneficiary: string}, []>(
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
    zooTokensRewardDebt: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xa2e0706a'
    ),
    zooVoteRate: new Func<[], {}, ethers.BigNumber>(
        abi, '0xb1f702f3'
    ),
}

export class Contract extends ContractBase {

    activeStakerPositions(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.activeStakerPositions, [arg0])
    }

    baseStakerReward(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.baseStakerReward, [])
    }

    baseVoterReward(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.baseVoterReward, [])
    }

    computeLastEpoch(votingPositionId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.computeLastEpoch, [votingPositionId])
    }

    currentEpoch(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.currentEpoch, [])
    }

    dai(): Promise<string> {
        return this.eth_call(functions.dai, [])
    }

    endEpochOfIncentiveRewards(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.endEpochOfIncentiveRewards, [])
    }

    epochDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.epochDuration, [])
    }

    epochStartDate(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.epochStartDate, [])
    }

    epochsStarts(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.epochsStarts, [arg0])
    }

    fifthStageDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fifthStageDuration, [])
    }

    firstStageDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.firstStageDuration, [])
    }

    fourthStageDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fourthStageDuration, [])
    }

    gauge(): Promise<string> {
        return this.eth_call(functions.gauge, [])
    }

    getCurrentStage(): Promise<number> {
        return this.eth_call(functions.getCurrentStage, [])
    }

    getNftPairLength(epoch: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getNftPairLength, [epoch])
    }

    getPendingStakerReward(stakingPositionId: ethers.BigNumber): Promise<([stakerReward: ethers.BigNumber, end: ethers.BigNumber] & {stakerReward: ethers.BigNumber, end: ethers.BigNumber})> {
        return this.eth_call(functions.getPendingStakerReward, [stakingPositionId])
    }

    getPendingVoterReward(votingPositionId: ethers.BigNumber): Promise<([yTokens: ethers.BigNumber, zooRewards: ethers.BigNumber] & {yTokens: ethers.BigNumber, zooRewards: ethers.BigNumber})> {
        return this.eth_call(functions.getPendingVoterReward, [votingPositionId])
    }

    getStakerPositionsLength(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getStakerPositionsLength, [])
    }

    lastUpdatesOfStakedNumbers(arg0: string): Promise<ethers.BigNumber> {
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

    nftsInGame(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.nftsInGame, [])
    }

    numberOfNftsWithNonZeroVotes(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfNftsWithNonZeroVotes, [])
    }

    numberOfNftsWithNonZeroVotesPending(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfNftsWithNonZeroVotesPending, [])
    }

    numberOfPlayedPairsInEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfPlayedPairsInEpoch, [arg0])
    }

    numberOfStakedNftsInCollection(arg0: ethers.BigNumber, arg1: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfStakedNftsInCollection, [arg0, arg1])
    }

    numberOfStakingPositions(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfStakingPositions, [])
    }

    numberOfVotingPositions(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.numberOfVotingPositions, [])
    }

    pairsInEpoch(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean] & {token1: ethers.BigNumber, token2: ethers.BigNumber, playedInEpoch: boolean, win: boolean})> {
        return this.eth_call(functions.pairsInEpoch, [arg0, arg1])
    }

    pendingVotes(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.pendingVotes, [arg0])
    }

    pendingVotesEpoch(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.pendingVotesEpoch, [arg0])
    }

    poolWeight(arg0: string, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.poolWeight, [arg0, arg1])
    }

    rewardsForEpoch(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<([yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber, zooRewards: ethers.BigNumber, league: number] & {yTokensSaldo: ethers.BigNumber, votes: ethers.BigNumber, yTokens: ethers.BigNumber, tokensAtBattleStart: ethers.BigNumber, pricePerShareAtBattleStart: ethers.BigNumber, pricePerShareCoef: ethers.BigNumber, zooRewards: ethers.BigNumber, league: number})> {
        return this.eth_call(functions.rewardsForEpoch, [arg0, arg1])
    }

    secondStageDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.secondStageDuration, [])
    }

    stakingPositionsValues(arg0: ethers.BigNumber): Promise<([startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber] & {startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastUpdateEpoch: ethers.BigNumber, collection: string, lastEpochOfIncentiveReward: ethers.BigNumber})> {
        return this.eth_call(functions.stakingPositionsValues, [arg0])
    }

    thirdStageDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.thirdStageDuration, [])
    }

    treasury(): Promise<string> {
        return this.eth_call(functions.treasury, [])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }

    veBal(): Promise<string> {
        return this.eth_call(functions.veBal, [])
    }

    veZoo(): Promise<string> {
        return this.eth_call(functions.veZoo, [])
    }

    voterIncentiveDebt(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.voterIncentiveDebt, [arg0])
    }

    votingPositionsValues(arg0: ethers.BigNumber): Promise<([stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, daiInvested: ethers.BigNumber, yTokensNumber: ethers.BigNumber, zooInvested: ethers.BigNumber, daiVotes: ethers.BigNumber, votes: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, lastRewardedEpoch: ethers.BigNumber, lastEpochYTokensWereDeductedForRewards: ethers.BigNumber, yTokensRewardDebt: ethers.BigNumber, lastEpochOfIncentiveReward: ethers.BigNumber})> {
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

    zooTokensRewardDebt(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.zooTokensRewardDebt, [arg0])
    }

    zooVoteRate(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.zooVoteRate, [])
    }
}
