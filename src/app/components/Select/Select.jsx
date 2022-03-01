import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem} from '@mui/material'

const Select = ({label, items}) => {
  const [value, setValue] = useState('')
  const [options] = useState(items)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl>
        <InputLabel id={`${label}-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-label`}
          id={label}
          value={value}
          onChange={handleChange}
          label={label}
        >
          {options.map((option) => {
            return <MenuItem value={option.value}>{option.label}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  )
}

export default Select
