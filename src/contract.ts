import { ethers } from 'ethers'

import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
import * as faucetAbi from './abi/battle-faucet-abi'
import * as stakerAbi from './abi/battle-staker-abi'

export const CHAIN_NODE = 'wss://moonbeam.api.onfinality.io/public-ws' //'wss://moonbeam.public.blastapi.io'

const BATTLE_STAKER_MOONBEAM = '0xadE4d5E40b04a090BF28401B3f6D0B0A5dEdF47e'
const BATTLE_ARENA_MOONBEAM = '0x918173037D276943Ef262B3A9a3462f37C0aEadA'
const VE_MODEL_MOONBEAM = '0xD2B6eCC67D4587C47b6a7e64566d83F707817249'

export const FAUCET_MOONBEAM = '0x9182BB660E013BB0781152c88E364351e1b7b49d'

export const arenaContract = new ethers.Contract(
  BATTLE_ARENA_MOONBEAM.toLowerCase(),
  arenaAbi.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
)

export const veModelContract = new ethers.Contract(
  VE_MODEL_MOONBEAM.toLowerCase(),
  vemodelAbi.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
)

export const faucetContract = new ethers.Contract(
  FAUCET_MOONBEAM.toLowerCase(),
  faucetAbi.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
)

export const stakerContract = new ethers.Contract(
  BATTLE_STAKER_MOONBEAM.toLowerCase(),
  stakerAbi.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
)
