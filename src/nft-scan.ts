import fetch from 'node-fetch'

export const X_NFTSCAN = 'rQB9CURvvzljLfntrYixcWH0'

export const fetchNftScan = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': X_NFTSCAN,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((result: any) => result.json())

export const getArbitrumNftAPI = (token: string, id: string) =>
  `https://arbitrumapi.nftscan.com/api/v2/assets/${token}/${id}?show_attribute=true`
