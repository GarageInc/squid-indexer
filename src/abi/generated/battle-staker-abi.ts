import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-staker-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ClaimedIncentiveRewardFromVoting: new LogEvent<([staker: string, beneficiary: string, zooReward: ethers.BigNumber, stakingPositionId: ethers.BigNumber] & {staker: string, beneficiary: string, zooReward: ethers.BigNumber, stakingPositionId: ethers.BigNumber})>(
        abi, '0xf5488fb0cc1505f7ab04ca944cedbda860fd03eccadddedb24e31fc6002c890e'
    ),
    NftBattleArenaSet: new LogEvent<([nftBattleArena: string] & {nftBattleArena: string})>(
        abi, '0x7a005c6c9516d93fdd58518d35c24fb68736a79353ade45cada8120e6e1f19c8'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    batchClaimIncentiveStakerReward: new Func<[stakingPositionIds: Array<ethers.BigNumber>, beneficiary: string], {stakingPositionIds: Array<ethers.BigNumber>, beneficiary: string}, ethers.BigNumber>(
        abi, '0xa514e0a6'
    ),
    batchClaimRewardsFromStaking: new Func<[stakingPositionIds: Array<ethers.BigNumber>, beneficiary: string], {stakingPositionIds: Array<ethers.BigNumber>, beneficiary: string}, []>(
        abi, '0xaa7c9aa1'
    ),
    batchUnstakeNft: new Func<[stakingPositionIds: Array<ethers.BigNumber>], {stakingPositionIds: Array<ethers.BigNumber>}, []>(
        abi, '0x04f38b95'
    ),
    claimIncentiveStakerReward: new Func<[stakingPositionId: ethers.BigNumber, beneficiary: string], {stakingPositionId: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x3158ad6d'
    ),
    claimRewardFromStaking: new Func<[stakingPositionId: ethers.BigNumber, beneficiary: string], {stakingPositionId: ethers.BigNumber, beneficiary: string}, []>(
        abi, '0x90db6f36'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    listingList: new Func<[], {}, string>(
        abi, '0x95749f9c'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nftBattleArena: new Func<[], {}, string>(
        abi, '0x2cd779f3'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    positions: new Func<[ethers.BigNumber], {}, ([token: string, id: ethers.BigNumber] & {token: string, id: ethers.BigNumber})>(
        abi, '0x99fbab88'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
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
    setNftBattleArena: new Func<[_nftBattleArena: string], {_nftBattleArena: string}, []>(
        abi, '0x3f05b6bb'
    ),
    stakeNft: new Func<[token: string, id: ethers.BigNumber], {token: string, id: ethers.BigNumber}, []>(
        abi, '0x3660130b'
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
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unstakeNft: new Func<[stakingPositionId: ethers.BigNumber], {stakingPositionId: ethers.BigNumber}, []>(
        abi, '0x6b426000'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    listingList(): Promise<string> {
        return this.eth_call(functions.listingList, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nftBattleArena(): Promise<string> {
        return this.eth_call(functions.nftBattleArena, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    positions(arg0: ethers.BigNumber): Promise<([token: string, id: ethers.BigNumber] & {token: string, id: ethers.BigNumber})> {
        return this.eth_call(functions.positions, [arg0])
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
