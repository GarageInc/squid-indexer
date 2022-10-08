import { ethers } from 'ethers'

import * as arenaAbi from './abi/battle-arena-abi'
export const CHAIN_NODE = 'wss://moonbeam.public.blastapi.io'

const BATTLE_STAKER_MOONBEAM = '0xadE4d5E40b04a090BF28401B3f6D0B0A5dEdF47e'
const BATTLE_VOTER_MOONBEAM = '0x7d7a4Bc16e52fA29BFbDd1FC5015DB15A9b677b9'
const BATTLE_ARENA_MOONBEAM = '0x918173037D276943Ef262B3A9a3462f37C0aEadA'

export const arenaContract = new ethers.Contract(
  BATTLE_STAKER_MOONBEAM.toLowerCase(),
  arenaAbi.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
)
