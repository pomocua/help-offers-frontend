import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio} from '@mui/material'
import {v4 as uuid} from 'uuid'

const RadioGroup = ({label, items}) => {
  const [_value, setValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={_value}
        onChange={handleChange}
      >
        {items.map((item) => {
          return (
            <FormControlLabel
              key={uuid()}
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioGroup
