import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ve-model-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ContractDisallowed: new LogEvent<([collection: string, royalteRecipient: string] & {collection: string, royalteRecipient: string})>(
        abi, '0xed56dcf731f82025e5167f49bf3757c45a353b06a7eb49f07b16bd1892fc0b76'
    ),
    NewContractAllowed: new LogEvent<([collection: string, royalteRecipient: string] & {collection: string, royalteRecipient: string})>(
        abi, '0x8158d99f2329effc889e3e6ffc3c31903fb2bcba179a7041e58f8a9cec06786e'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    RoyalteRecipientChanged: new LogEvent<([collection: string, recipient: string] & {collection: string, recipient: string})>(
        abi, '0x6f0fdbd47473e03fab56da29ca709c25e097617616ec19757e8e686962a923bb'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    VotedForCollection: new LogEvent<([collection: string, voter: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {collection: string, voter: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})>(
        abi, '0x93ecaff21ddd137f6b58113bb9d38c2deceb49a6de98ca29260756dc5322c5e5'
    ),
    ZooUnlocked: new LogEvent<([voter: string, collection: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {voter: string, collection: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})>(
        abi, '0xa57ac690002d7c98f53310bae856dfdcfc2e886783284ffb51df5da0cfd5b636'
    ),
}

export const functions = {
    allowNewContractForStaking: new Func<[collection: string, _royalteRecipient: string], {collection: string, _royalteRecipient: string}, []>(
        abi, '0xae11d18a'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    batchAllowNewContract: new Func<[tokens: Array<string>, royalteRecipients: Array<string>], {tokens: Array<string>, royalteRecipients: Array<string>}, []>(
        abi, '0x9f94ad9c'
    ),
    collectionRecords: new Func<[string, ethers.BigNumber], {}, ([decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber] & {decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber})>(
        abi, '0xd13d9cab'
    ),
    disallowContractFromStaking: new Func<[collection: string, recipient: string], {collection: string, recipient: string}, []>(
        abi, '0x2f6ea097'
    ),
    eligibleCollections: new Func<[string], {}, boolean>(
        abi, '0x65845b78'
    ),
    endEpochOfIncentiveRewards: new Func<[], {}, ethers.BigNumber>(
        abi, '0xf6065663'
    ),
    epochDuration: new Func<[], {}, ethers.BigNumber>(
        abi, '0x4ff0876a'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getEpochNumber: new Func<[timestamp: ethers.BigNumber], {timestamp: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x1c552f00'
    ),
    getVectorForEpoch: new Func<[collection: string, epochIndex: ethers.BigNumber], {collection: string, epochIndex: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x5364600c'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    lastUpdatedEpochsForCollection: new Func<[string], {}, ethers.BigNumber>(
        abi, '0x1a70ff3b'
    ),
    maxTimelock: new Func<[], {}, ethers.BigNumber>(
        abi, '0xbc1fd34b'
    ),
    minTimelock: new Func<[], {}, ethers.BigNumber>(
        abi, '0x25429e7d'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    poolWeight: new Func<[collection: string, epochIndex: ethers.BigNumber], {collection: string, epochIndex: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xda452523'
    ),
    prolongate: new Func<[positionId: ethers.BigNumber, lockTime: ethers.BigNumber], {positionId: ethers.BigNumber, lockTime: ethers.BigNumber}, []>(
        abi, '0xba34b2b1'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    royalteRecipient: new Func<[string], {}, string>(
        abi, '0xb79c5f5d'
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
    setRoyalteRecipient: new Func<[collection: string, recipient: string], {collection: string, recipient: string}, []>(
        abi, '0x5cfd894b'
    ),
    startDate: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0b97bc86'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenOfOwnerByIndex: new Func<[string, ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unlockZoo: new Func<[positionId: ethers.BigNumber], {positionId: ethers.BigNumber}, []>(
        abi, '0xe608ba3c'
    ),
    updateCurrentEpochAndReturnPoolWeight: new Func<[collection: string], {collection: string}, ethers.BigNumber>(
        abi, '0xc23ce493'
    ),
    vePositionIndex: new Func<[], {}, ethers.BigNumber>(
        abi, '0x141d7e8b'
    ),
    vePositions: new Func<[ethers.BigNumber], {}, ([expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber] & {expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber})>(
        abi, '0xc87489ab'
    ),
    voteForNftCollection: new Func<[collection: string, amount: ethers.BigNumber, lockTime: ethers.BigNumber], {collection: string, amount: ethers.BigNumber, lockTime: ethers.BigNumber}, []>(
        abi, '0x768e7f15'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    collectionRecords(arg0: string, arg1: ethers.BigNumber): Promise<([decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber] & {decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber})> {
        return this.eth_call(functions.collectionRecords, [arg0, arg1])
    }

    eligibleCollections(arg0: string): Promise<boolean> {
        return this.eth_call(functions.eligibleCollections, [arg0])
    }

    endEpochOfIncentiveRewards(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.endEpochOfIncentiveRewards, [])
    }

    epochDuration(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.epochDuration, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getEpochNumber(timestamp: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getEpochNumber, [timestamp])
    }

    getVectorForEpoch(collection: string, epochIndex: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getVectorForEpoch, [collection, epochIndex])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    lastUpdatedEpochsForCollection(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lastUpdatedEpochsForCollection, [arg0])
    }

    maxTimelock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.maxTimelock, [])
    }

    minTimelock(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.minTimelock, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    poolWeight(collection: string, epochIndex: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.poolWeight, [collection, epochIndex])
    }

    royalteRecipient(arg0: string): Promise<string> {
        return this.eth_call(functions.royalteRecipient, [arg0])
    }

    startDate(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.startDate, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenOfOwnerByIndex(arg0: string, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [arg0, arg1])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    vePositionIndex(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.vePositionIndex, [])
    }

    vePositions(arg0: ethers.BigNumber): Promise<([expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber] & {expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber})> {
        return this.eth_call(functions.vePositions, [arg0])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }
}
