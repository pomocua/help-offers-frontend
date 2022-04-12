import React from 'react'
import {Alert, Grid} from '@mui/material'
import {useSelector} from 'react-redux'
import {Card, PageLayout} from '../../components'
import global from '../../../config/constants/helpOffer.json'
import {StyledPageHeaderText, StyledPromoWrapper, StyledText} from './styles'

import {Filter} from './components'
import OffersSkeleton from './components/OffersSkeleton/OffersSkeleton'
import {Paginator} from '../../components/Paginator'
import {selectOffers, useGetOffersQuery} from '../../../features/api/apiSlice'

const Home = () => {
  const offers = useGetOffersQuery()
  const offersFilter = useSelector((state) => state?.offers?.offersFilter)
  // console.log('OFFERS', offers)
  // console.log('OFFERS', offersFilter)
  // console.log(
  //   'useSelector!!!!!!!!!!!!!!!!!!!',
  //   useSelector((state) =>
  //     apiSlice.endpoints.getOffers.select(offersFilter)(state),
  //   ),
  // )
  console.log(
    'SELECTED',
    useSelector((state) => selectOffers(state, offersFilter)),
  )

  return (
    <PageLayout>
      <a href="mailto:noowaay.pl@gmail.com">noowaay.pl@gmail.com</a>
      <a href="tel:+48537157674">+48537157674</a>
      <StyledPromoWrapper container>
        <StyledPageHeaderText variant="h1">
          {global.home.H1Text}
        </StyledPageHeaderText>
        <StyledText variant="body1">{global.home.text}</StyledText>
      </StyledPromoWrapper>
      <Filter />
      <Paginator topPagination show>
        {/* eslint-disable-next-line no-nested-ternary */}
        {offers.isUninitialized || offers.isLoading ? (
          <OffersSkeleton />
        ) : offers.isError ? (
          <Grid item xs={12} md={12}>
            <Alert severity="error">Error</Alert>
          </Grid>
        ) : (
          <>
            {offers.data?.map((offer) => {
              return (
                <Grid item xs={12} md={4} key={offer.id}>
                  <Card {...offer} />
                </Grid>
              )
            })}
          </>
        )}
      </Paginator>
    </PageLayout>
  )
}

export default Home
