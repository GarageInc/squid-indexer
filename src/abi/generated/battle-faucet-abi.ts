import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-faucet-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    NftsGiven: new LogEvent<([user: string] & {user: string})>(
        abi, '0x1fdfc6b27ac00bd63dda50d1485d1a7d83097461b01b49ddae3528473473260b'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    ZooGiven: new LogEvent<([user: string] & {user: string})>(
        abi, '0x65782f1f2dcfe07678a3af25c55e44c3fcd17924c1dfcf8ae712e50ccf6ceb3e'
    ),
}

export const functions = {
    addToWhiteList: new Func<[user: string], {user: string}, []>(
        abi, '0x47ee0394'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    attemptLimit: new Func<[], {}, ethers.BigNumber>(
        abi, '0x489b99d8'
    ),
    attemptLimitNft: new Func<[], {}, ethers.BigNumber>(
        abi, '0xba583244'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    batchAddToWhiteList: new Func<[users: Array<string>], {users: Array<string>}, []>(
        abi, '0x0641b525'
    ),
    batchFaucet: new Func<[recipients: Array<string>, sendAmount: ethers.BigNumber], {recipients: Array<string>, sendAmount: ethers.BigNumber}, []>(
        abi, '0xd5388522'
    ),
    batchMint: new Func<[recipients: Array<string>, nftAmount: ethers.BigNumber], {recipients: Array<string>, nftAmount: ethers.BigNumber}, []>(
        abi, '0x83b74baa'
    ),
    changeAttemptLimit: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0xc37af30f'
    ),
    collectionList: new Func<[ethers.BigNumber], {}, string>(
        abi, '0x752d121c'
    ),
    dai: new Func<[], {}, string>(
        abi, '0xf4b9fa75'
    ),
    faucetAmount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x9c281430'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getNfts: new Func<[], {}, []>(
        abi, '0xd8cb55e3'
    ),
    getZoo: new Func<[], {}, []>(
        abi, '0xd0f3b32e'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    mint: new Func<[recipient: string], {recipient: string}, []>(
        abi, '0x6a627842'
    ),
    multiMint: new Func<[recipient: string], {recipient: string}, []>(
        abi, '0x955313e4'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    returnTokens: new Func<[zooAmount: ethers.BigNumber, daiAmount: ethers.BigNumber], {zooAmount: ethers.BigNumber, daiAmount: ethers.BigNumber}, []>(
        abi, '0x60fd520f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setFaucetAmount: new Func<[amount: ethers.BigNumber], {amount: ethers.BigNumber}, []>(
        abi, '0x81d2fd9c'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
}

export class Contract extends ContractBase {

    attemptLimit(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.attemptLimit, [])
    }

    attemptLimitNft(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.attemptLimitNft, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    collectionList(arg0: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.collectionList, [arg0])
    }

    dai(): Promise<string> {
        return this.eth_call(functions.dai, [])
    }

    faucetAmount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.faucetAmount, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }
}
