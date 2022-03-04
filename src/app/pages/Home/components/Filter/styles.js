import styled from 'styled-components'
import {Button, Grid, Paper} from '@mui/material'

export const StyledPaper = styled(Paper).attrs(() => ({elevation: 4}))`
  position: relative;
  margin: 0 -10px 30px;
  padding: 20px 10px 40px;
`

export const StyledButtonsWrapper = styled(Grid).attrs(() => ({
  container: 'true',
  spacing: 0,
}))`
  position: absolute;
  bottom: -18px;
  width: auto;
  left: 0;
  right: 0;
  justify-content: center;
`

export const StyledFilterButton = styled(Button).attrs(() => ({elevation: 6}))`
  border-radius: 40px;
  padding: 8px 16px;
`
