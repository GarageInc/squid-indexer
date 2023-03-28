import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './xZoo.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Claimed: new LogEvent<([staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})>(
        abi, '0x2f6639d24651730c7bf57c95ddbf96d66d11477e4ec626876f92c22e5f365e68'
    ),
    NftBattleArenaSet: new LogEvent<([nftBattleArena: string] & {nftBattleArena: string})>(
        abi, '0x7a005c6c9516d93fdd58518d35c24fb68736a79353ade45cada8120e6e1f19c8'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    ZooStaked: new LogEvent<([staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})>(
        abi, '0xb0f38e7266c13e7919926b80638ae0e3920d3be832e21a1176fe2adfee3995cc'
    ),
    ZooWithdrawal: new LogEvent<([staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {staker: string, beneficiary: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})>(
        abi, '0x23f46302ba0e9bff14c2280af975e37499ad0457af9876536f6b21d453292f1f'
    ),
}

export const functions = {
    addZoo: new Func<[positionId: ethers.BigNumber, amount: ethers.BigNumber], {positionId: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0xc40b6b91'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    arena: new Func<[], {}, string>(
        abi, '0xfd3705f9'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    claimRewards: new Func<[positionId: ethers.BigNumber, beneficiary: string], {positionId: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x6c7b69cb'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getPendingReward: new Func<[positionId: ethers.BigNumber], {positionId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x7211bbc9'
    ),
    indexCounter: new Func<[], {}, ethers.BigNumber>(
        abi, '0x871d1794'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    lastEpochWhereTotalStakedUpdated: new Func<[], {}, ethers.BigNumber>(
        abi, '0x0f5bef1b'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, data: string], {from: string, to: string, tokenId: ethers.BigNumber, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setNftBattleArena: new Func<[_nftBattleArena: string], {_nftBattleArena: string}, []>(
        abi, '0x3f05b6bb'
    ),
    stablecoin: new Func<[], {}, string>(
        abi, '0xe9cbd822'
    ),
    stakeZoo: new Func<[amount: ethers.BigNumber, beneficiary: string], {amount: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x72b52567'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenOfOwnerByIndex: new Func<[_: string, _: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalStakedZoo: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x666ae487'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    unlockAndClaim: new Func<[positionId: ethers.BigNumber, beneficiary: string], {positionId: ethers.BigNumber, beneficiary: string}, ([amountOfZoo: ethers.BigNumber, rewardsForClaimer: ethers.BigNumber] & {amountOfZoo: ethers.BigNumber, rewardsForClaimer: ethers.BigNumber})>(
        abi, '0x4da8cfa9'
    ),
    unlockZoo: new Func<[positionId: ethers.BigNumber, beneficiary: string], {positionId: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x6b1be8ba'
    ),
    updateTotalStakedUpdated: new Func<[], {}, []>(
        abi, '0x5beb192c'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    withdrawZoo: new Func<[positionId: ethers.BigNumber, amount: ethers.BigNumber, beneficiary: string], {positionId: ethers.BigNumber, amount: ethers.BigNumber, beneficiary: string}, []>(
        abi, '0x2f1741e5'
    ),
    xZooPositions: new Func<[_: ethers.BigNumber], {}, ([amount: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, yTokensDebt: ethers.BigNumber] & {amount: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, yTokensDebt: ethers.BigNumber})>(
        abi, '0xa268ba99'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
}

export class Contract extends ContractBase {

    arena(): Promise<string> {
        return this.eth_call(functions.arena, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getPendingReward(positionId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getPendingReward, [positionId])
    }

    indexCounter(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.indexCounter, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    lastEpochWhereTotalStakedUpdated(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lastEpochWhereTotalStakedUpdated, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    stablecoin(): Promise<string> {
        return this.eth_call(functions.stablecoin, [])
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

    totalStakedZoo(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalStakedZoo, [arg0])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }

    xZooPositions(arg0: ethers.BigNumber): Promise<([amount: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, yTokensDebt: ethers.BigNumber] & {amount: ethers.BigNumber, startEpoch: ethers.BigNumber, endEpoch: ethers.BigNumber, yTokensDebt: ethers.BigNumber})> {
        return this.eth_call(functions.xZooPositions, [arg0])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }
}
