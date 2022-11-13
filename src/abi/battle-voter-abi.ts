import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Approval0Event = ([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})

export type ApprovalForAll0Event = ([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})

export type NftBattleArenaSet0Event = ([nftBattleArena: string] & {nftBattleArena: string})

export type OwnershipTransferred0Event = ([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})

export type Transfer0Event = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "Approval(address,address,uint256)": {
    topic: abi.getEventTopic("Approval(address,address,uint256)"),
    decode(data: EvmLog): Approval0Event {
      return decodeEvent("Approval(address,address,uint256)", data)
    }
  }
  ,
  "ApprovalForAll(address,address,bool)": {
    topic: abi.getEventTopic("ApprovalForAll(address,address,bool)"),
    decode(data: EvmLog): ApprovalForAll0Event {
      return decodeEvent("ApprovalForAll(address,address,bool)", data)
    }
  }
  ,
  "NftBattleArenaSet(address)": {
    topic: abi.getEventTopic("NftBattleArenaSet(address)"),
    decode(data: EvmLog): NftBattleArenaSet0Event {
      return decodeEvent("NftBattleArenaSet(address)", data)
    }
  }
  ,
  "OwnershipTransferred(address,address)": {
    topic: abi.getEventTopic("OwnershipTransferred(address,address)"),
    decode(data: EvmLog): OwnershipTransferred0Event {
      return decodeEvent("OwnershipTransferred(address,address)", data)
    }
  }
  ,
  "Transfer(address,address,uint256)": {
    topic: abi.getEventTopic("Transfer(address,address,uint256)"),
    decode(data: EvmLog): Transfer0Event {
      return decodeEvent("Transfer(address,address,uint256)", data)
    }
  }
  ,
}

export type AddDaiToPosition0Function = ([votingPositionId: ethers.BigNumber, amount: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, amount: ethers.BigNumber})

export type AddZooToPosition0Function = ([votingPositionId: ethers.BigNumber, amount: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, amount: ethers.BigNumber})

export type Approve0Function = ([to: string, tokenId: ethers.BigNumber] & {to: string, tokenId: ethers.BigNumber})

export type BatchClaimIncentiveVoterReward0Function = ([votingPositionIds: Array<ethers.BigNumber>, beneficiary: string] & {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string})

export type BatchClaimRewardsFromVotings0Function = ([votingPositionIds: Array<ethers.BigNumber>, beneficiary: string] & {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string})

export type BatchWithdrawDaiFromVoting0Function = ([votingPositionIds: Array<ethers.BigNumber>, beneficiary: string, daiNumber: ethers.BigNumber] & {votingPositionIds: Array<ethers.BigNumber>, beneficiary: string, daiNumber: ethers.BigNumber})

export type BatchWithdrawZooFromVoting0Function = ([votingPositionIds: Array<ethers.BigNumber>, zooNumber: ethers.BigNumber, beneficiary: string] & {votingPositionIds: Array<ethers.BigNumber>, zooNumber: ethers.BigNumber, beneficiary: string})

export type ClaimIncentiveVoterReward0Function = ([votingPositionId: ethers.BigNumber, beneficiary: string] & {votingPositionId: ethers.BigNumber, beneficiary: string})

export type ClaimRewardFromVoting0Function = ([votingPositionId: ethers.BigNumber, beneficiary: string] & {votingPositionId: ethers.BigNumber, beneficiary: string})

export type CreateNewVotingPosition0Function = ([stakingPositionId: ethers.BigNumber, amount: ethers.BigNumber] & {stakingPositionId: ethers.BigNumber, amount: ethers.BigNumber})

export type SafeTransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type SafeTransferFrom1Function = ([from: string, to: string, tokenId: ethers.BigNumber, _data: string] & {from: string, to: string, tokenId: ethers.BigNumber, _data: string})

export type SetApprovalForAll0Function = ([operator: string, approved: boolean] & {operator: string, approved: boolean})

export type SetNftBattleArena0Function = ([_nftBattleArena: string] & {_nftBattleArena: string})

export type SwapVotesFromPosition0Function = ([votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber, newStakingPositionId: ethers.BigNumber, beneficiary: string, newVotingPosition: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, daiNumber: ethers.BigNumber, newStakingPositionId: ethers.BigNumber, beneficiary: string, newVotingPosition: ethers.BigNumber})

export type TransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type TransferOwnership0Function = ([newOwner: string] & {newOwner: string})

export type WithdrawDaiFromVotingPosition0Function = ([votingPositionId: ethers.BigNumber, beneficiary: string, daiNumber: ethers.BigNumber] & {votingPositionId: ethers.BigNumber, beneficiary: string, daiNumber: ethers.BigNumber})

export type WithdrawZooFromVotingPosition0Function = ([votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string] & {votingPositionId: ethers.BigNumber, zooNumber: ethers.BigNumber, beneficiary: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "addDaiToPosition(uint256,uint256)": {
    sighash: abi.getSighash("addDaiToPosition(uint256,uint256)"),
    decode(input: string): AddDaiToPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "addZooToPosition(uint256,uint256)": {
    sighash: abi.getSighash("addZooToPosition(uint256,uint256)"),
    decode(input: string): AddZooToPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "approve(address,uint256)": {
    sighash: abi.getSighash("approve(address,uint256)"),
    decode(input: string): Approve0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batchClaimIncentiveVoterReward(uint256[],address)": {
    sighash: abi.getSighash("batchClaimIncentiveVoterReward(uint256[],address)"),
    decode(input: string): BatchClaimIncentiveVoterReward0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batchClaimRewardsFromVotings(uint256[],address)": {
    sighash: abi.getSighash("batchClaimRewardsFromVotings(uint256[],address)"),
    decode(input: string): BatchClaimRewardsFromVotings0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batchWithdrawDaiFromVoting(uint256[],address,uint256)": {
    sighash: abi.getSighash("batchWithdrawDaiFromVoting(uint256[],address,uint256)"),
    decode(input: string): BatchWithdrawDaiFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batchWithdrawZooFromVoting(uint256[],uint256,address)": {
    sighash: abi.getSighash("batchWithdrawZooFromVoting(uint256[],uint256,address)"),
    decode(input: string): BatchWithdrawZooFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimIncentiveVoterReward(uint256,address)": {
    sighash: abi.getSighash("claimIncentiveVoterReward(uint256,address)"),
    decode(input: string): ClaimIncentiveVoterReward0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimRewardFromVoting(uint256,address)": {
    sighash: abi.getSighash("claimRewardFromVoting(uint256,address)"),
    decode(input: string): ClaimRewardFromVoting0Function {
      return decodeFunction(input)
    }
  }
  ,
  "createNewVotingPosition(uint256,uint256)": {
    sighash: abi.getSighash("createNewVotingPosition(uint256,uint256)"),
    decode(input: string): CreateNewVotingPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "renounceOwnership()": {
    sighash: abi.getSighash("renounceOwnership()"),
  }
  ,
  "safeTransferFrom(address,address,uint256)": {
    sighash: abi.getSighash("safeTransferFrom(address,address,uint256)"),
    decode(input: string): SafeTransferFrom0Function {
      return decodeFunction(input)
    }
  }
  ,
  "safeTransferFrom(address,address,uint256,bytes)": {
    sighash: abi.getSighash("safeTransferFrom(address,address,uint256,bytes)"),
    decode(input: string): SafeTransferFrom1Function {
      return decodeFunction(input)
    }
  }
  ,
  "setApprovalForAll(address,bool)": {
    sighash: abi.getSighash("setApprovalForAll(address,bool)"),
    decode(input: string): SetApprovalForAll0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setNftBattleArena(address)": {
    sighash: abi.getSighash("setNftBattleArena(address)"),
    decode(input: string): SetNftBattleArena0Function {
      return decodeFunction(input)
    }
  }
  ,
  "swapVotesFromPosition(uint256,uint256,uint256,address,uint256)": {
    sighash: abi.getSighash("swapVotesFromPosition(uint256,uint256,uint256,address,uint256)"),
    decode(input: string): SwapVotesFromPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "transferFrom(address,address,uint256)": {
    sighash: abi.getSighash("transferFrom(address,address,uint256)"),
    decode(input: string): TransferFrom0Function {
      return decodeFunction(input)
    }
  }
  ,
  "transferOwnership(address)": {
    sighash: abi.getSighash("transferOwnership(address)"),
    decode(input: string): TransferOwnership0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdrawDaiFromVotingPosition(uint256,address,uint256)": {
    sighash: abi.getSighash("withdrawDaiFromVotingPosition(uint256,address,uint256)"),
    decode(input: string): WithdrawDaiFromVotingPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdrawZooFromVotingPosition(uint256,uint256,address)": {
    sighash: abi.getSighash("withdrawZooFromVotingPosition(uint256,uint256,address)"),
    decode(input: string): WithdrawZooFromVotingPosition0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async balanceOf(owner: string): Promise<ethers.BigNumber> {
    return this.call("balanceOf", [owner])
  }

  async dai(): Promise<string> {
    return this.call("dai", [])
  }

  async getApproved(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("getApproved", [tokenId])
  }

  async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
    return this.call("isApprovedForAll", [owner, operator])
  }

  async name(): Promise<string> {
    return this.call("name", [])
  }

  async nftBattleArena(): Promise<string> {
    return this.call("nftBattleArena", [])
  }

  async owner(): Promise<string> {
    return this.call("owner", [])
  }

  async ownerOf(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("ownerOf", [tokenId])
  }

  async supportsInterface(interfaceId: string): Promise<boolean> {
    return this.call("supportsInterface", [interfaceId])
  }

  async symbol(): Promise<string> {
    return this.call("symbol", [])
  }

  async tokenURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("tokenURI", [tokenId])
  }

  async zoo(): Promise<string> {
    return this.call("zoo", [])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_dai",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_zoo",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "nftBattleArena",
          "type": "address"
        }
      ],
      "name": "NftBattleArenaSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addDaiToPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addZooToPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "votingPositionIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "batchClaimIncentiveVoterReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "votingPositionIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "batchClaimRewardsFromVotings",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "votingPositionIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "daiNumber",
          "type": "uint256"
        }
      ],
      "name": "batchWithdrawDaiFromVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "votingPositionIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "zooNumber",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "batchWithdrawZooFromVoting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "claimIncentiveVoterReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "claimRewardFromVoting",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "createNewVotingPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dai",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nftBattleArena",
      "outputs": [
        {
          "internalType": "contract NftBattleArena",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nftBattleArena",
          "type": "address"
        }
      ],
      "name": "setNftBattleArena",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "daiNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newStakingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newVotingPosition",
          "type": "uint256"
        }
      ],
      "name": "swapVotesFromPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "daiNumber",
          "type": "uint256"
        }
      ],
      "name": "withdrawDaiFromVotingPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "votingPositionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "zooNumber",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "withdrawZooFromVotingPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "zoo",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
