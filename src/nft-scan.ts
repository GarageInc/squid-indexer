import { BigNumber } from 'ethers'
import fetch from 'node-fetch'

export const SupportedChainId = {
  MOONBEAM: 1284,
  ARBITRUM_ONE: 42161,
}

export const X_NFTSCAN = 'cuM8mT3aegGUGrpnWlZZg7R6'

export const fetchNftScan = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': X_NFTSCAN,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((result: any) => result.json())

export const getMoonbeamNftAPI = (token: string, id: string) =>
  `https://moonbeamapi.nftscan.com/api/v2/assets/${token}/${id}?show_attribute=true`

const BACKEND_URL = 'https://stage-api.zoodao.com/v1/nfts/save'

export const saveToBackend = async (token: string, id: BigNumber, chainId: number) => {
  return fetch(BACKEND_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      id: id.toString(),
      chainId,
    }),
  })
}
