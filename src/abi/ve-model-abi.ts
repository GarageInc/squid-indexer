import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Approval0Event = ([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})

export type ApprovalForAll0Event = ([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})

export type ContractDisallowed0Event = ([collection: string, royalteRecipient: string] & {collection: string, royalteRecipient: string})

export type NewContractAllowed0Event = ([collection: string, royalteRecipient: string] & {collection: string, royalteRecipient: string})

export type OwnershipTransferred0Event = ([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})

export type RoyalteRecipientChanged0Event = ([collection: string, recipient: string] & {collection: string, recipient: string})

export type Transfer0Event = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type VotedForCollection0Event = ([collection: string, voter: string, amount: ethers.BigNumber] & {collection: string, voter: string, amount: ethers.BigNumber})

export type ZooUnlocked0Event = ([voter: string, collection: string, amount: ethers.BigNumber, positionId: ethers.BigNumber] & {voter: string, collection: string, amount: ethers.BigNumber, positionId: ethers.BigNumber})

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
  "ContractDisallowed(address,address)": {
    topic: abi.getEventTopic("ContractDisallowed(address,address)"),
    decode(data: EvmLog): ContractDisallowed0Event {
      return decodeEvent("ContractDisallowed(address,address)", data)
    }
  }
  ,
  "NewContractAllowed(address,address)": {
    topic: abi.getEventTopic("NewContractAllowed(address,address)"),
    decode(data: EvmLog): NewContractAllowed0Event {
      return decodeEvent("NewContractAllowed(address,address)", data)
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
  "RoyalteRecipientChanged(address,address)": {
    topic: abi.getEventTopic("RoyalteRecipientChanged(address,address)"),
    decode(data: EvmLog): RoyalteRecipientChanged0Event {
      return decodeEvent("RoyalteRecipientChanged(address,address)", data)
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
  "VotedForCollection(address,address,uint256)": {
    topic: abi.getEventTopic("VotedForCollection(address,address,uint256)"),
    decode(data: EvmLog): VotedForCollection0Event {
      return decodeEvent("VotedForCollection(address,address,uint256)", data)
    }
  }
  ,
  "ZooUnlocked(address,address,uint256,uint256)": {
    topic: abi.getEventTopic("ZooUnlocked(address,address,uint256,uint256)"),
    decode(data: EvmLog): ZooUnlocked0Event {
      return decodeEvent("ZooUnlocked(address,address,uint256,uint256)", data)
    }
  }
  ,
}

export type AllowNewContractForStaking0Function = ([collection: string, _royalteRecipient: string] & {collection: string, _royalteRecipient: string})

export type Approve0Function = ([to: string, tokenId: ethers.BigNumber] & {to: string, tokenId: ethers.BigNumber})

export type BatchAllowNewContract0Function = ([tokens: Array<string>, royalteRecipients: Array<string>] & {tokens: Array<string>, royalteRecipients: Array<string>})

export type DisallowContractFromStaking0Function = ([collection: string, recipient: string] & {collection: string, recipient: string})

export type Prolongate0Function = ([positionId: ethers.BigNumber, lockTime: ethers.BigNumber] & {positionId: ethers.BigNumber, lockTime: ethers.BigNumber})

export type SafeTransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type SafeTransferFrom1Function = ([from: string, to: string, tokenId: ethers.BigNumber, _data: string] & {from: string, to: string, tokenId: ethers.BigNumber, _data: string})

export type SetApprovalForAll0Function = ([operator: string, approved: boolean] & {operator: string, approved: boolean})

export type SetRoyalteRecipient0Function = ([collection: string, recipient: string] & {collection: string, recipient: string})

export type TransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type TransferOwnership0Function = ([newOwner: string] & {newOwner: string})

export type UnlockZoo0Function = ([positionId: ethers.BigNumber] & {positionId: ethers.BigNumber})

export type UpdateCurrentEpochAndReturnPoolWeight0Function = ([collection: string] & {collection: string})

export type VoteForNftCollection0Function = ([collection: string, amount: ethers.BigNumber, lockTime: ethers.BigNumber] & {collection: string, amount: ethers.BigNumber, lockTime: ethers.BigNumber})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "allowNewContractForStaking(address,address)": {
    sighash: abi.getSighash("allowNewContractForStaking(address,address)"),
    decode(input: string): AllowNewContractForStaking0Function {
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
  "batchAllowNewContract(address[],address[])": {
    sighash: abi.getSighash("batchAllowNewContract(address[],address[])"),
    decode(input: string): BatchAllowNewContract0Function {
      return decodeFunction(input)
    }
  }
  ,
  "disallowContractFromStaking(address,address)": {
    sighash: abi.getSighash("disallowContractFromStaking(address,address)"),
    decode(input: string): DisallowContractFromStaking0Function {
      return decodeFunction(input)
    }
  }
  ,
  "prolongate(uint256,uint256)": {
    sighash: abi.getSighash("prolongate(uint256,uint256)"),
    decode(input: string): Prolongate0Function {
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
  "setRoyalteRecipient(address,address)": {
    sighash: abi.getSighash("setRoyalteRecipient(address,address)"),
    decode(input: string): SetRoyalteRecipient0Function {
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
  "unlockZoo(uint256)": {
    sighash: abi.getSighash("unlockZoo(uint256)"),
    decode(input: string): UnlockZoo0Function {
      return decodeFunction(input)
    }
  }
  ,
  "updateCurrentEpochAndReturnPoolWeight(address)": {
    sighash: abi.getSighash("updateCurrentEpochAndReturnPoolWeight(address)"),
    decode(input: string): UpdateCurrentEpochAndReturnPoolWeight0Function {
      return decodeFunction(input)
    }
  }
  ,
  "voteForNftCollection(address,uint256,uint256)": {
    sighash: abi.getSighash("voteForNftCollection(address,uint256,uint256)"),
    decode(input: string): VoteForNftCollection0Function {
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

  async collectionRecords(arg0: string, arg1: ethers.BigNumber): Promise<([decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber] & {decayRate: ethers.BigNumber, rateOfIncrease: ethers.BigNumber, weightAtTheStart: ethers.BigNumber})> {
    return this.call("collectionRecords", [arg0, arg1])
  }

  async eligibleCollections(arg0: string): Promise<boolean> {
    return this.call("eligibleCollections", [arg0])
  }

  async endEpochOfIncentiveRewards(): Promise<ethers.BigNumber> {
    return this.call("endEpochOfIncentiveRewards", [])
  }

  async epochDuration(): Promise<ethers.BigNumber> {
    return this.call("epochDuration", [])
  }

  async getApproved(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("getApproved", [tokenId])
  }

  async getEpochNumber(timestamp: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("getEpochNumber", [timestamp])
  }

  async getVectorForEpoch(collection: string, epochIndex: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("getVectorForEpoch", [collection, epochIndex])
  }

  async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
    return this.call("isApprovedForAll", [owner, operator])
  }

  async lastUpdatedEpochsForCollection(arg0: string): Promise<ethers.BigNumber> {
    return this.call("lastUpdatedEpochsForCollection", [arg0])
  }

  async maxTimelock(): Promise<ethers.BigNumber> {
    return this.call("maxTimelock", [])
  }

  async minTimelock(): Promise<ethers.BigNumber> {
    return this.call("minTimelock", [])
  }

  async name(): Promise<string> {
    return this.call("name", [])
  }

  async owner(): Promise<string> {
    return this.call("owner", [])
  }

  async ownerOf(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("ownerOf", [tokenId])
  }

  async poolWeight(collection: string, epochIndex: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("poolWeight", [collection, epochIndex])
  }

  async royalteRecipient(arg0: string): Promise<string> {
    return this.call("royalteRecipient", [arg0])
  }

  async startDate(): Promise<ethers.BigNumber> {
    return this.call("startDate", [])
  }

  async supportsInterface(interfaceId: string): Promise<boolean> {
    return this.call("supportsInterface", [interfaceId])
  }

  async symbol(): Promise<string> {
    return this.call("symbol", [])
  }

  async tokenOfOwnerByIndex(arg0: string, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("tokenOfOwnerByIndex", [arg0, arg1])
  }

  async tokenURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("tokenURI", [tokenId])
  }

  async vePositionIndex(): Promise<ethers.BigNumber> {
    return this.call("vePositionIndex", [])
  }

  async vePositions(arg0: ethers.BigNumber): Promise<([expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber] & {expirationDate: ethers.BigNumber, zooLocked: ethers.BigNumber, collection: string, decayRate: ethers.BigNumber})> {
    return this.call("vePositions", [arg0])
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
          "internalType": "address",
          "name": "_zoo",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minTimelock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxTimelock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_incentiveRewardsDuration",
          "type": "uint256"
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
          "indexed": true,
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "royalteRecipient",
          "type": "address"
        }
      ],
      "name": "ContractDisallowed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "royalteRecipient",
          "type": "address"
        }
      ],
      "name": "NewContractAllowed",
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
          "name": "collection",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "RoyalteRecipientChanged",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "VotedForCollection",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "name": "ZooUnlocked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_royalteRecipient",
          "type": "address"
        }
      ],
      "name": "allowNewContractForStaking",
      "outputs": [],
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
          "internalType": "address[]",
          "name": "tokens",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "royalteRecipients",
          "type": "address[]"
        }
      ],
      "name": "batchAllowNewContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "collectionRecords",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "decayRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rateOfIncrease",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weightAtTheStart",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "disallowContractFromStaking",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "eligibleCollections",
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
      "name": "endEpochOfIncentiveRewards",
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
      "inputs": [],
      "name": "epochDuration",
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
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getEpochNumber",
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
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "epochIndex",
          "type": "uint256"
        }
      ],
      "name": "getVectorForEpoch",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastUpdatedEpochsForCollection",
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
      "inputs": [],
      "name": "maxTimelock",
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
      "inputs": [],
      "name": "minTimelock",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "epochIndex",
          "type": "uint256"
        }
      ],
      "name": "poolWeight",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockTime",
          "type": "uint256"
        }
      ],
      "name": "prolongate",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "royalteRecipient",
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
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "setRoyalteRecipient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startDate",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "name": "unlockZoo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        }
      ],
      "name": "updateCurrentEpochAndReturnPoolWeight",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vePositionIndex",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vePositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "expirationDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "zooLocked",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "decayRate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "collection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockTime",
          "type": "uint256"
        }
      ],
      "name": "voteForNftCollection",
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
