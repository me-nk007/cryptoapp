import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '6e9d706b59msha973d623968e76bp191ddajsnf038202ffd9f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"
// 'https://coinranking1.p.rapidapi.com/coins'
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '6e9d706b59msha973d623968e76bp191ddajsnf038202ffd9f',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints:(builder) =>({
    getCryptos: builder.query({
      query: (count) =>createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
        query: (coinuuId)  =>createRequest(`/coin/${coinuuId}`),
    }),
    // getCryptoHistory: builder.query({
    //     // query: ({coinuuId, timePeriod})  =>createRequest(`
    //     // coin/${coinuuId}/history/${timePeriod}`),
    //     query: ({coinuuId, timePeriod})  =>createRequest(`
    //      coin/${coinuuId}/history?timePeriod=${timePeriod}`),
        
    // }),
    getCryptoHistory: builder.query({
      query: ({ coinuuId, timeperiod }) => createRequest(`coin/${coinuuId}/history?timeperiod=${timeperiod}`),
    }),

  })

})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;
// coin/${coinuuId}/history?timePeriod=${timePeriod}`),
// coin/${coinuuId}/history/${timePeriod}`),