import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Approval0Event = ([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})

export type ApprovalForAll0Event = ([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})

export type Claimed0Event = ([id: ethers.BigNumber, epoch: ethers.BigNumber, owner: string, beneficiary: string, rewards: ethers.BigNumber] & {id: ethers.BigNumber, epoch: ethers.BigNumber, owner: string, beneficiary: string, rewards: ethers.BigNumber})

export type NftBattleArenaSet0Event = ([nftBattleArena: string] & {nftBattleArena: string})

export type Staked0Event = ([positionId: ethers.BigNumber, staker: string, beneficiary: string, jackpotPositionId: ethers.BigNumber] & {positionId: ethers.BigNumber, staker: string, beneficiary: string, jackpotPositionId: ethers.BigNumber})

export type Transfer0Event = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type Unstaked0Event = ([jackpotPositionId: ethers.BigNumber, owner: string, beneficiary: string, zooPositionId: ethers.BigNumber] & {jackpotPositionId: ethers.BigNumber, owner: string, beneficiary: string, zooPositionId: ethers.BigNumber})

export type WinnerChoosed0Event = ([epoch: ethers.BigNumber, winner: ethers.BigNumber] & {epoch: ethers.BigNumber, winner: ethers.BigNumber})

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
  "Claimed(uint256,uint256,address,address,uint256)": {
    topic: abi.getEventTopic("Claimed(uint256,uint256,address,address,uint256)"),
    decode(data: EvmLog): Claimed0Event {
      return decodeEvent("Claimed(uint256,uint256,address,address,uint256)", data)
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
  "Staked(uint256,address,address,uint256)": {
    topic: abi.getEventTopic("Staked(uint256,address,address,uint256)"),
    decode(data: EvmLog): Staked0Event {
      return decodeEvent("Staked(uint256,address,address,uint256)", data)
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
  "Unstaked(uint256,address,address,uint256)": {
    topic: abi.getEventTopic("Unstaked(uint256,address,address,uint256)"),
    decode(data: EvmLog): Unstaked0Event {
      return decodeEvent("Unstaked(uint256,address,address,uint256)", data)
    }
  }
  ,
  "WinnerChoosed(uint256,uint256)": {
    topic: abi.getEventTopic("WinnerChoosed(uint256,uint256)"),
    decode(data: EvmLog): WinnerChoosed0Event {
      return decodeEvent("WinnerChoosed(uint256,uint256)", data)
    }
  }
  ,
}

export type Approve0Function = ([to: string, tokenId: ethers.BigNumber] & {to: string, tokenId: ethers.BigNumber})

export type ChooseWinner0Function = ([epoch: ethers.BigNumber] & {epoch: ethers.BigNumber})

export type ClaimReward0Function = ([id: ethers.BigNumber, epoch: ethers.BigNumber, beneficiary: string] & {id: ethers.BigNumber, epoch: ethers.BigNumber, beneficiary: string})

export type SafeTransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type SafeTransferFrom1Function = ([from: string, to: string, tokenId: ethers.BigNumber, _data: string] & {from: string, to: string, tokenId: ethers.BigNumber, _data: string})

export type SetApprovalForAll0Function = ([operator: string, approved: boolean] & {operator: string, approved: boolean})

export type SetNftBattleArena0Function = ([_nftBattleArena: string] & {_nftBattleArena: string})

export type Stake0Function = ([id: ethers.BigNumber, beneficiary: string] & {id: ethers.BigNumber, beneficiary: string})

export type TransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type Unstake0Function = ([id: ethers.BigNumber, beneficiary: string] & {id: ethers.BigNumber, beneficiary: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "approve(address,uint256)": {
    sighash: abi.getSighash("approve(address,uint256)"),
    decode(input: string): Approve0Function {
      return decodeFunction(input)
    }
  }
  ,
  "chooseWinner(uint256)": {
    sighash: abi.getSighash("chooseWinner(uint256)"),
    decode(input: string): ChooseWinner0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimReward(uint256,uint256,address)": {
    sighash: abi.getSighash("claimReward(uint256,uint256,address)"),
    decode(input: string): ClaimReward0Function {
      return decodeFunction(input)
    }
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
  "stake(uint256,address)": {
    sighash: abi.getSighash("stake(uint256,address)"),
    decode(input: string): Stake0Function {
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
  "unstake(uint256,address)": {
    sighash: abi.getSighash("unstake(uint256,address)"),
    decode(input: string): Unstake0Function {
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

  async arena(): Promise<string> {
    return this.call("arena", [])
  }

  async balanceOf(owner: string): Promise<ethers.BigNumber> {
    return this.call("balanceOf", [owner])
  }

  async checkReward(id: ethers.BigNumber, epoch: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("checkReward", [id, epoch])
  }

  async claimedBy(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<boolean> {
    return this.call("claimedBy", [arg0, arg1])
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

  async ownerOf(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("ownerOf", [tokenId])
  }

  async positionContract(): Promise<string> {
    return this.call("positionContract", [])
  }

  async positionIndex(): Promise<ethers.BigNumber> {
    return this.call("positionIndex", [])
  }

  async stakedPositionsById(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("stakedPositionsById", [arg0])
  }

  async supportsInterface(interfaceId: string): Promise<boolean> {
    return this.call("supportsInterface", [interfaceId])
  }

  async symbol(): Promise<string> {
    return this.call("symbol", [])
  }

  async tokenOfOwner(arg0: string): Promise<ethers.BigNumber> {
    return this.call("tokenOfOwner", [arg0])
  }

  async tokenURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("tokenURI", [tokenId])
  }

  async vault(): Promise<string> {
    return this.call("vault", [])
  }

  async winners(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("winners", [arg0])
  }

  async zooFunctions(): Promise<string> {
    return this.call("zooFunctions", [])
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
          "name": "_positionContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_vault",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_functions",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewards",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "jackpotPositionId",
          "type": "uint256"
        }
      ],
      "name": "Staked",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "jackpotPositionId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "zooPositionId",
          "type": "uint256"
        }
      ],
      "name": "Unstaked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "winner",
          "type": "uint256"
        }
      ],
      "name": "WinnerChoosed",
      "type": "event"
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
      "inputs": [],
      "name": "arena",
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        }
      ],
      "name": "checkReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "yvTokensReward",
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
          "name": "epoch",
          "type": "uint256"
        }
      ],
      "name": "chooseWinner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "claimReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rewards",
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
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "claimedBy",
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
      "name": "positionContract",
      "outputs": [
        {
          "internalType": "contract IERC721",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "positionIndex",
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "stake",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "stakedPositionsById",
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
        }
      ],
      "name": "tokenOfOwner",
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vault",
      "outputs": [
        {
          "internalType": "contract VaultAPI",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "winners",
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
      "name": "zooFunctions",
      "outputs": [
        {
          "internalType": "contract IZooFunctions",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
