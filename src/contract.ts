import { ethers } from 'ethers'

import * as arenaAbi from './abi/battle-arena-abi'
import * as vemodelAbi from './abi/ve-model-abi'
export const CHAIN_NODE = 'wss://moonbeam.api.onfinality.io/public-ws' //'wss://moonbeam.public.blastapi.io'

const BATTLE_ARENA_MOONBEAM = '0x918173037D276943Ef262B3A9a3462f37C0aEadA'
const VE_MODEL_MOONBEAM = '0xD2B6eCC67D4587C47b6a7e64566d83F707817249'

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
