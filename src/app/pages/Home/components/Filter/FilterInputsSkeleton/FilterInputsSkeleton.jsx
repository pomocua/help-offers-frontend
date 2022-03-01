import React from 'react'

import {Grid} from '@mui/material'
import {StyledSkeleton} from './styles'

const FilterInputsSkeleton = () => {
  return (
    <>
      {['', '', '', ''].map(() => {
        return (
          <Grid item xs={12} md={3}>
            <StyledSkeleton />
          </Grid>
        )
      })}
    </>
  )
}

export default FilterInputsSkeleton
