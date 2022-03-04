import React from 'react'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import {
  StyledCheckbox,
  StyledCheckboxFormControl,
  StyledFormControlLabel,
  StyledInputsWrapper,
} from '../../styles'
import global from '../../../../../config/constants/helpOffer.json'
import {useGetCitiesQuery} from '../../../../../features/api/apiSlice'
import {FilterInputsSkeleton} from './FilterInputsSkeleton'
import {StyledButtonsWrapper, StyledFilterButton, StyledPaper} from './styles'

const Filter = () => {
  const citiesFetched = useGetCitiesQuery()
  const [city, setCity] = React.useState('')
  const [duration, setDuration] = React.useState('')
  const [petChecked, setPetChecked] = React.useState(false)
  const [people, setPeople] = React.useState()

  const handlePeopleChange = (event) => {
    setPeople(Math.max(0, event.target.value))
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const handleDurationChange = (event) => {
    setDuration(event.target.value)
  }

  const handlePetChange = (event) => {
    setPetChecked(event.target.checked)
  }

  return (
    <StyledPaper>
      <StyledInputsWrapper container spacing={2}>
        {citiesFetched.isLoading ? (
          <FilterInputsSkeleton />
        ) : (
          <>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id={`${global.home.input.city.label.text}-label`}>
                  {global.home.input.city.label.text}
                </InputLabel>
                <Select
                  labelId={`${global.home.input.city.label.text}-label`}
                  id={global.home.input.city.label.text}
                  value={city}
                  onChange={handleCityChange}
                  label={global.home.input.city.label.text}
                >
                  {citiesFetched.data?.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                id="people"
                label={global.home.input.people.label.text}
                type="number"
                value={people}
                onChange={handlePeopleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel
                  id={`${global.home.input.duration.label.text}-label`}
                >
                  {global.home.input.duration.label.text}
                </InputLabel>
                <Select
                  labelId={`${global.home.input.duration.label.text}-label`}
                  id={global.home.input.duration.label.text}
                  value={duration}
                  onChange={handleDurationChange}
                  label={global.home.input.duration.label.text}
                >
                  {global.home.invitePeriod.options.map((item) => {
                    return <MenuItem value={item.id}>{item.label}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledCheckboxFormControl fullWidth>
                <StyledFormControlLabel
                  fullWidth
                  control={
                    <StyledCheckbox
                      checked={petChecked}
                      onChange={handlePetChange}
                      inputProps={{'aria-label': 'controlled'}}
                    />
                  }
                  label={global.home.input.pets.label.text}
                />
              </StyledCheckboxFormControl>
            </Grid>
          </>
        )}
      </StyledInputsWrapper>
      <StyledButtonsWrapper container>
        <StyledFilterButton variant="contained">
          {global.home.filterButtonText}
        </StyledFilterButton>
      </StyledButtonsWrapper>
    </StyledPaper>
  )
}

export default Filter
