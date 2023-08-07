import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '6e9d706b59msha973d623968e76bp191ddajsnf038202ffd9f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

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
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;