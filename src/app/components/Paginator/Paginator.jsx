import React from 'react'
import {Grid} from '@mui/material'
import {StyledPaginationWrapper} from './styles'
import {Pagination} from '../Pagination'

const Paginator = ({children}) => {
  return (
    <div>
      <StyledPaginationWrapper>
        <Pagination />
      </StyledPaginationWrapper>
      <Grid container alignItems="stretch" spacing={2}>
        {children}
      </Grid>
      <StyledPaginationWrapper>
        <Pagination />
      </StyledPaginationWrapper>
    </div>
  )
}

export default Paginator
