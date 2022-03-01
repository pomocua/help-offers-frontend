import React from 'react'
import {Alert, Grid} from '@mui/material'
import {Card, PageLayout} from '../../components'
import global from '../../../config/constants/helpOffer.json'
import {StyledPageHeaderText, StyledPromoWrapper, StyledText} from './styles'

import {useGetOffersQuery} from '../../../features/api/apiSlice'
import {Filter} from './components'
import OffersSkeleton from './components/OffersSkeleton/OffersSkeleton'

const Home = () => {
  const offersData = useGetOffersQuery()
  console.log(offersData.error)
  return (
    <PageLayout>
      <StyledPromoWrapper container>
        <StyledPageHeaderText variant="h1">
          {global.home.H1Text}
        </StyledPageHeaderText>
        <StyledText variant="body1">{global.home.text}</StyledText>
      </StyledPromoWrapper>
      <Filter />
      <Grid container alignItems="stretch" spacing={2}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {offersData.isUninitialized || offersData.isLoading ? (
          <OffersSkeleton />
        ) : offersData.isError ? (
          <Grid item xs={12} md={12}>
            <Alert severity="error">Error</Alert>
          </Grid>
        ) : (
          offersData.data?.map((offer) => {
            return (
              <Grid item xs={12} md={4} key={offer.id}>
                <Card {...offer} />
              </Grid>
            )
          })
        )}
      </Grid>
    </PageLayout>
  )
}

export default Home
