import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-functions-abi.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    arenaFee: new Func<[], {}, bigint>(
        abi, '0x55e514c3'
    ),
    battles: new Func<[], {}, string>(
        abi, '0x47aef0a9'
    ),
    bronzeLeague: new Func<[], {}, bigint>(
        abi, '0xc1ec8e1c'
    ),
    bronzeZooRewards: new Func<[], {}, bigint>(
        abi, '0x996fedb3'
    ),
    computePseudoRandom: new Func<[], {}, bigint>(
        abi, '0x69166757'
    ),
    computeVotesByDai: new Func<[amount: bigint], {amount: bigint}, bigint>(
        abi, '0x35c837fe'
    ),
    computeVotesByZoo: new Func<[amount: bigint], {amount: bigint}, bigint>(
        abi, '0x40b21b99'
    ),
    decideWins: new Func<[votesForA: bigint, votesForB: bigint, random: bigint], {votesForA: bigint, votesForB: bigint, random: bigint}, boolean>(
        abi, '0x3f9039f4'
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
    getArenaFee: new Func<[], {}, bigint>(
        abi, '0xad7f1788'
    ),
    getLeagueZooRewards: new Func<[league: number], {league: number}, bigint>(
        abi, '0x96af94c6'
    ),
    getNftLeague: new Func<[votes: bigint], {votes: bigint}, number>(
        abi, '0xe429d957'
    ),
    getRandomResult: new Func<[], {}, bigint>(
        abi, '0x7390c786'
    ),
    getRandomResultByEpoch: new Func<[epoch: bigint], {epoch: bigint}, bigint>(
        abi, '0x8d2a8213'
    ),
    getStageDurations: new Func<[], {}, ([_: bigint, _: bigint, _: bigint, _: bigint, _: bigint, epochDuration: bigint] & {epochDuration: bigint})>(
        abi, '0xe2dd9351'
    ),
    goldLeague: new Func<[], {}, bigint>(
        abi, '0x11e6a492'
    ),
    goldZooRewards: new Func<[], {}, bigint>(
        abi, '0x36b7b73a'
    ),
    init: new Func<[_nftBattleArena: string, owner: string], {_nftBattleArena: string, owner: string}, []>(
        abi, '0xf09a4016'
    ),
    isRandomRequested: new Func<[], {}, boolean>(
        abi, '0xff0a5662'
    ),
    masterZooRewards: new Func<[], {}, bigint>(
        abi, '0x51089d5c'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    platinumLeague: new Func<[], {}, bigint>(
        abi, '0x4a4373dd'
    ),
    platinumZooRewards: new Func<[], {}, bigint>(
        abi, '0x71a0840b'
    ),
    randomNumberByEpoch: new Func<[_: bigint], {}, bigint>(
        abi, '0x5a91f742'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    requestRandomNumber: new Func<[], {}, []>(
        abi, '0x8678a7b2'
    ),
    resetRandom: new Func<[], {}, []>(
        abi, '0xc07c1604'
    ),
    secondStageDuration: new Func<[], {}, bigint>(
        abi, '0x65794de3'
    ),
    setArenaFee: new Func<[_arenaFee: bigint], {_arenaFee: bigint}, []>(
        abi, '0x50fd01aa'
    ),
    setLeagueRange: new Func<[amount: Array<bigint>], {amount: Array<bigint>}, []>(
        abi, '0x23682577'
    ),
    setStageDuration: new Func<[stage: number, duration: bigint], {stage: number, duration: bigint}, []>(
        abi, '0x65b2bd47'
    ),
    setZooRewards: new Func<[league: number, zooRewards: bigint], {league: number, zooRewards: bigint}, []>(
        abi, '0xa2d2859d'
    ),
    silverLeague: new Func<[], {}, bigint>(
        abi, '0xf3817376'
    ),
    silverZooRewards: new Func<[], {}, bigint>(
        abi, '0x8b3b321f'
    ),
    thirdStageDuration: new Func<[], {}, bigint>(
        abi, '0xb5ce3600'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    woodenLeague: new Func<[], {}, bigint>(
        abi, '0xf03d596d'
    ),
    woodenZooRewards: new Func<[], {}, bigint>(
        abi, '0xf6ef4b05'
    ),
}

export class Contract extends ContractBase {

    arenaFee(): Promise<bigint> {
        return this.eth_call(functions.arenaFee, [])
    }

    battles(): Promise<string> {
        return this.eth_call(functions.battles, [])
    }

    bronzeLeague(): Promise<bigint> {
        return this.eth_call(functions.bronzeLeague, [])
    }

    bronzeZooRewards(): Promise<bigint> {
        return this.eth_call(functions.bronzeZooRewards, [])
    }

    computePseudoRandom(): Promise<bigint> {
        return this.eth_call(functions.computePseudoRandom, [])
    }

    computeVotesByDai(amount: bigint): Promise<bigint> {
        return this.eth_call(functions.computeVotesByDai, [amount])
    }

    computeVotesByZoo(amount: bigint): Promise<bigint> {
        return this.eth_call(functions.computeVotesByZoo, [amount])
    }

    decideWins(votesForA: bigint, votesForB: bigint, random: bigint): Promise<boolean> {
        return this.eth_call(functions.decideWins, [votesForA, votesForB, random])
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

    getArenaFee(): Promise<bigint> {
        return this.eth_call(functions.getArenaFee, [])
    }

    getLeagueZooRewards(league: number): Promise<bigint> {
        return this.eth_call(functions.getLeagueZooRewards, [league])
    }

    getNftLeague(votes: bigint): Promise<number> {
        return this.eth_call(functions.getNftLeague, [votes])
    }

    getRandomResult(): Promise<bigint> {
        return this.eth_call(functions.getRandomResult, [])
    }

    getRandomResultByEpoch(epoch: bigint): Promise<bigint> {
        return this.eth_call(functions.getRandomResultByEpoch, [epoch])
    }

    getStageDurations(): Promise<([_: bigint, _: bigint, _: bigint, _: bigint, _: bigint, epochDuration: bigint] & {epochDuration: bigint})> {
        return this.eth_call(functions.getStageDurations, [])
    }

    goldLeague(): Promise<bigint> {
        return this.eth_call(functions.goldLeague, [])
    }

    goldZooRewards(): Promise<bigint> {
        return this.eth_call(functions.goldZooRewards, [])
    }

    isRandomRequested(): Promise<boolean> {
        return this.eth_call(functions.isRandomRequested, [])
    }

    masterZooRewards(): Promise<bigint> {
        return this.eth_call(functions.masterZooRewards, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    platinumLeague(): Promise<bigint> {
        return this.eth_call(functions.platinumLeague, [])
    }

    platinumZooRewards(): Promise<bigint> {
        return this.eth_call(functions.platinumZooRewards, [])
    }

    randomNumberByEpoch(arg0: bigint): Promise<bigint> {
        return this.eth_call(functions.randomNumberByEpoch, [arg0])
    }

    secondStageDuration(): Promise<bigint> {
        return this.eth_call(functions.secondStageDuration, [])
    }

    silverLeague(): Promise<bigint> {
        return this.eth_call(functions.silverLeague, [])
    }

    silverZooRewards(): Promise<bigint> {
        return this.eth_call(functions.silverZooRewards, [])
    }

    thirdStageDuration(): Promise<bigint> {
        return this.eth_call(functions.thirdStageDuration, [])
    }

    woodenLeague(): Promise<bigint> {
        return this.eth_call(functions.woodenLeague, [])
    }

    woodenZooRewards(): Promise<bigint> {
        return this.eth_call(functions.woodenZooRewards, [])
    }
}
