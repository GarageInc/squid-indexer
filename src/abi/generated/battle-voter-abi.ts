import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './battle-voter-abi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ClaimedIncentiveRewardFromVoting: new LogEvent<([voter: string, beneficiary: string, zooReward: ethers.BigNumber, votingPositionId: ethers.BigNumber] & {voter: string, beneficiary: string, zooReward: ethers.BigNumber, votingPositionId: ethers.BigNumber})>(
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
    addDaiToPosition: new Func<[votingPositionId: ethers.BigNumber, amount: ethers.BigNumber], {votingPositionId: ethers.BigNumber, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x3837b833'
    ),
    addZooToPosition: new Func<[votingPositionId: ethers.BigNumber, amount: ethers.BigNumber], {votingPositionId: ethers.BigNumber, amount: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x9b6bdd87'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    batchClaimIncentiveVoterReward: new Func<[votingPositionIds: Array<ethers.BigNumber>, beneficiary: string], {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string}, ethers.BigNumber>(
        abi, '0xd93652b1'
    ),
    batchClaimRewardsFromVotings: new Func<[votingPositionIds: Array<ethers.BigNumber>, beneficiary: string], {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string}, ethers.BigNumber>(
        abi, '0x5ec86c1c'
    ),
    batchWithdrawDaiFromVoting: new Func<[votingPositionIds: Array<ethers.BigNumber>, beneficiary: string, daiNumber: ethers.BigNumber], {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string, daiNumber: ethers.BigNumber}, []>(
        abi, '0xf6277d1a'
    ),
    batchWithdrawZooFromVoting: new Func<[votingPositionIds: Array<ethers.BigNumber>, zooNumber: ethers.BigNumber, beneficiary: string], {votingPositionIds: Array<ethers.BigNumber>, zooNumber: ethers.BigNumber, beneficiary: string}, []>(
        abi, '0x7cfab486'
    ),
    claimIncentiveVoterReward: new Func<[votingPositionId: ethers.BigNumber, beneficiary: string], {votingPositionId: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0xf82e6029'
    ),
    claimRewardFromVoting: new Func<[votingPositionId: ethers.BigNumber, beneficiary: string], {votingPositionId: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x110f633f'
    ),
    createNewVotingPosition: new Func<[stakingPositionId: ethers.BigNumber, amount: ethers.BigNumber, allowToSwapVotes: boolean], {stakingPositionId: ethers.BigNumber, amount: ethers.BigNumber, allowToSwapVotes: boolean}, []>(
        abi, '0x8cedae92'
    ),
    dai: new Func<[], {}, string>(
        abi, '0xf4b9fa75'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    isAllowedToSwapVotes: new Func<[_: ethers.BigNumber], {}, boolean>(
        abi, '0x56b8e713'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    lpZoo: new Func<[], {}, string>(
        abi, '0x47761012'
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
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
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
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    swapVotesFromPositionForOwner: new Func<[votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber, newStakingPositionId: ethers.BigNumber, beneficiary: string, newVotingPosition: ethers.BigNumber, allowToSwapVotes: boolean], {votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber, newStakingPositionId: ethers.BigNumber, beneficiary: string, newVotingPosition: ethers.BigNumber, allowToSwapVotes: boolean}, []>(
        abi, '0xbeef4d85'
    ),
    swapVotesFromPositionForUnstackedNft: new Func<[votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber], {votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber}, []>(
        abi, '0x298341a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    team: new Func<[], {}, string>(
        abi, '0x85f2aef2'
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
    withdrawDaiFromVotingPosition: new Func<[votingPositionId: ethers.BigNumber, beneficiary: string, daiNumber: ethers.BigNumber], {votingPositionId: ethers.BigNumber, beneficiary: string, daiNumber: ethers.BigNumber}, []>(
        abi, '0x17f84552'
    ),
    withdrawZooFromVotingPosition: new Func<[votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string], {votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string}, []>(
        abi, '0xb8bb0856'
    ),
    zoo: new Func<[], {}, string>(
        abi, '0x7b6a8777'
    ),
    zooFunctions: new Func<[], {}, string>(
        abi, '0xeb09da31'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    dai(): Promise<string> {
        return this.eth_call(functions.dai, [])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    isAllowedToSwapVotes(arg0: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.isAllowedToSwapVotes, [arg0])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    lpZoo(): Promise<string> {
        return this.eth_call(functions.lpZoo, [])
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

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    team(): Promise<string> {
        return this.eth_call(functions.team, [])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    zoo(): Promise<string> {
        return this.eth_call(functions.zoo, [])
    }

    zooFunctions(): Promise<string> {
        return this.eth_call(functions.zooFunctions, [])
    }
}
