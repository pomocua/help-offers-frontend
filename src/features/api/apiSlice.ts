import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import queryString from 'query-string'
import fetchMock from 'fetch-mock'
import {
  CitiesResponse,
  FilterOffersQueryObject,
  OfferResponse,
  OffersResponse,
} from '../../types/types'
import {
  apiCitiesResponseData,
  apiOfferResponseData,
  apiOffersResponseData,
} from './mockedData'

const addQuery = (queryObject: any): any => {
  return queryObject ? `?${queryString.stringify(queryObject)}` : ''
}

const settings = {
  delay: 300,
}

fetchMock
  .get('path:/fakeapi/offers', apiOffersResponseData, settings)
  .get(
    'path:/fakeapi/offers?city=W&availablePlaces=3&invitePeriodFIVE_DAYS&withAnimals=false',
    apiOffersResponseData,
    settings,
  )
  .get('path:/fakeapi/offers/1', apiOfferResponseData, settings)
  .get('path:/fakeapi/cities', apiCitiesResponseData, settings)
  .post('path:/fakeapi/offers', apiCitiesResponseData, settings)

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: '/fakeapi'}),
  endpoints: (builder) => ({
    getOffers: builder.query({
      query: (filterOffersQuery: FilterOffersQueryObject) =>
        `/offers${addQuery(filterOffersQuery)}`,
      transformResponse: (res: OffersResponse) => res.offers,
    }),
    getOffer: builder.query({
      query: (id) => `/offers/${id}`,
      transformResponse: (res: OfferResponse) => res.offer,
    }),
    filterOffers: builder.mutation({
      query: (filterOffersQuery: FilterOffersQueryObject) => ({
        url: `/offers`,
        method: 'POST',
        body: filterOffersQuery,
      }),
    }),
    getCities: builder.query({
      query: () => `/cities`,
      transformResponse: (res: CitiesResponse) => res.cities,
    }),
  }),
})

export const {
  useGetOffersQuery,
  useGetOfferQuery,
  useFilterOffersMutation,
  useGetCitiesQuery,
} = apiSlice
