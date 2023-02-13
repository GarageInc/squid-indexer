import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-faucet-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    ZooGiven: new LogEvent<([user: string] & {user: string})>(
        abi, '0x65782f1f2dcfe07678a3af25c55e44c3fcd17924c1dfcf8ae712e50ccf6ceb3e'
    ),
}

export const functions = {
    addToWhiteList: new Func<[user: string], {user: string}, []>(
        abi, '0x47ee0394'
    ),
    attemptAmount: new Func<[string], {}, ethers.BigNumber>(
        abi, '0xd604721a'
    ),
    attemptLimit: new Func<[], {}, ethers.BigNumber>(
        abi, '0x489b99d8'
    ),
    batchAddToWhiteList: new Func<[users: Array<string>], {users: Array<string>}, []>(
        abi, '0x0641b525'
    ),
    batchFaucet: new Func<[recipients: Array<string>, sendAmount: ethers.BigNumber], {recipients: Array<string>, sendAmount: ethers.BigNumber}, []>(
        abi, '0xd5388522'
    ),
    changeAttemptLimit: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0xc37af30f'
    ),
    faucetAmount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x9c281430'
    ),
    getZoo: new Func<[], {}, []>(
        abi, '0xd0f3b32e'
    ),
    returnTokens: new Func<[zooAmount: ethers.BigNumber], {zooAmount: ethers.BigNumber}, []>(
        abi, '0x3ae1786f'
    ),
    setFaucetAmount: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0x81d2fd9c'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
}

export class Contract extends ContractBase {

    attemptAmount(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.attemptAmount, [arg0])
    }

    attemptLimit(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.attemptLimit, [])
    }

    faucetAmount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.faucetAmount, [])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }
}
