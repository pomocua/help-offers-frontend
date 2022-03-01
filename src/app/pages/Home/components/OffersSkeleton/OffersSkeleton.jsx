import React from 'react'
import {Grid} from '@mui/material'
import {v4} from 'uuid'
import {StyledSkeleton} from './styles'

const OffersSkeleton = () => {
  return ['', '', '']?.map(() => {
    return (
      <Grid item xs={12} md={4} key={v4()}>
        <StyledSkeleton variant="rectangular" width="100%" height="150px" />
      </Grid>
    )
  })
}

export default OffersSkeleton
