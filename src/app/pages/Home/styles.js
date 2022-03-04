import styled from 'styled-components'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'

export const StyledPromoWrapper = styled(Grid)`
  && {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const StyledPageHeaderText = styled(Typography)`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: bold;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 30px;
  }
`
export const StyledText = styled(Typography)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
  }
`
export const StyledInputsWrapper = styled(Grid)`
  flex-direction: row;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: stretch;
  }
`

export const StyledCheckboxFormControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: flex-end;
  }
`

export const StyledFormControlLabel = styled(FormControlLabel)`
  flex-direction: column-reverse;

  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: row-reverse;
    margin: 0;
  }
`

export const StyledCheckbox = styled(Checkbox)`
  padding: 3px;
  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 5px;
  }
`
