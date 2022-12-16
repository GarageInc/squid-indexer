import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './jackpot.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Claimed: new LogEvent<([id: ethers.BigNumber, epoch: ethers.BigNumber, owner: string, beneficiary: string, rewards: ethers.BigNumber] & {id: ethers.BigNumber, epoch: ethers.BigNumber, owner: string, beneficiary: string, rewards: ethers.BigNumber})>(
        abi, '0xf960c21aca9260721d7642bfc1e7e7f5e4e20cd2bd47ad9bc2d1f5309eb89489'
    ),
    NftBattleArenaSet: new LogEvent<([nftBattleArena: string] & {nftBattleArena: string})>(
        abi, '0x7a005c6c9516d93fdd58518d35c24fb68736a79353ade45cada8120e6e1f19c8'
    ),
    Staked: new LogEvent<([positionId: ethers.BigNumber, staker: string, beneficiary: string, jackpotPositionId: ethers.BigNumber] & {positionId: ethers.BigNumber, staker: string, beneficiary: string, jackpotPositionId: ethers.BigNumber})>(
        abi, '0x7edb7e181699d1db1f6e3ac27fb17e1db8ac69aeb22eec366e72528c0886726a'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unstaked: new LogEvent<([jackpotPositionId: ethers.BigNumber, owner: string, beneficiary: string, zooPositionId: ethers.BigNumber] & {jackpotPositionId: ethers.BigNumber, owner: string, beneficiary: string, zooPositionId: ethers.BigNumber})>(
        abi, '0x88567e6595ad345e5250569a2c8d8a50ed9db24198350fa907e42d73faf012d5'
    ),
    WinnerChosen: new LogEvent<([epoch: ethers.BigNumber, winner: ethers.BigNumber] & {epoch: ethers.BigNumber, winner: ethers.BigNumber})>(
        abi, '0xb335e3fa5339ae555551fd7188c64789952d156cf098d055f26dbe00422d6652'
    ),
}

export const functions = {
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    arena: new Func<[], {}, string>(
        abi, '0xfd3705f9'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    checkReward: new Func<[id: ethers.BigNumber, epoch: ethers.BigNumber], {id: ethers.BigNumber, epoch: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xbfd8222a'
    ),
    chooseWinner: new Func<[epoch: ethers.BigNumber], {epoch: ethers.BigNumber}, []>(
        abi, '0x9e2f04bf'
    ),
    claimReward: new Func<[id: ethers.BigNumber, epoch: ethers.BigNumber, beneficiary: string], {id: ethers.BigNumber, epoch: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0xeedfcb5e'
    ),
    claimedBy: new Func<[ethers.BigNumber, ethers.BigNumber], {}, boolean>(
        abi, '0xd00ee1fb'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    positionContract: new Func<[], {}, string>(
        abi, '0xe9eb3ba5'
    ),
    positionIndex: new Func<[], {}, ethers.BigNumber>(
        abi, '0x57921ea3'
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
    stake: new Func<[id: ethers.BigNumber, beneficiary: string], {id: ethers.BigNumber, beneficiary: string}, ethers.BigNumber>(
        abi, '0x7acb7757'
    ),
    stakedPositionsById: new Func<[ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xc44ba812'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenOfOwner: new Func<[string], {}, ethers.BigNumber>(
        abi, '0x294cdf0d'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    unstake: new Func<[id: ethers.BigNumber, beneficiary: string], {id: ethers.BigNumber, beneficiary: string}, []>(
        abi, '0x8381e182'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    winners: new Func<[ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xa2fb1175'
    ),
    zooFunctions: new Func<[], {}, string>(
        abi, '0xeb09da31'
    ),
}

export class Contract extends ContractBase {

    arena(): Promise<string> {
        return this.eth_call(functions.arena, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    checkReward(id: ethers.BigNumber, epoch: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.checkReward, [id, epoch])
    }

    claimedBy(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.claimedBy, [arg0, arg1])
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

    positionContract(): Promise<string> {
        return this.eth_call(functions.positionContract, [])
    }

    positionIndex(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.positionIndex, [])
    }

    stakedPositionsById(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.stakedPositionsById, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenOfOwner(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwner, [arg0])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }

    winners(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.winners, [arg0])
    }

    zooFunctions(): Promise<string> {
        return this.eth_call(functions.zooFunctions, [])
    }
}
