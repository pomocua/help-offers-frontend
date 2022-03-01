import styled, {css} from 'styled-components'
import {Card, Typography} from '@mui/material'

const common = css`
  font-size: 14px;
`

export const StyledCard = styled(Card)`
  border: 1px solid ${(props) => props.theme.palette.grey['400']};
  height: 100%;
`

export const StyledHeader = styled(Typography).attrs({
  variant: 'h6',
})`
  ${common};
  font-weight: bold;
`

export const StyledText = styled(Typography).attrs({
  variant: 'body1',
})`
  ${common};
`

export const StyledPhoneText = styled(StyledHeader)`
  margin-bottom: 8px;
`

export const StyledPhoneNumber = styled(StyledPhoneText)`
  text-decoration: underline;
  display: inline-block;
`

export const StyledAdditionalText = styled(Typography)`
  font-size: 12px;
`
