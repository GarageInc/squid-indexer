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
  }).then((result) => result.json())

export const getMoonbeamNftAPI = (token: string, id: string) =>
  `https://moonbeamapi.nftscan.com/api/v2/assets/${token}/${id}?show_attribute=true`
