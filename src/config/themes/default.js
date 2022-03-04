import {createTheme} from '@mui/material'
import {orange} from '@mui/material/colors'

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  typography: {
    fontFamily: 'Ukraine',
    h1: {fontFamily: 'UkraineHead'},
    h2: {fontFamily: 'UkraineHead'},
    h3: {fontFamily: 'UkraineHead'},
    h4: {fontFamily: 'UkraineHead'},
    h5: {fontFamily: 'UkraineHead'},
    h6: {fontFamily: 'UkraineHead'},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    // Name of the component
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: `translate(14px, 9px) scale(1)`,
          '&.Mui-focused': {transform: `translate(14px, -9px) scale(0.75)`},
          '&.MuiFormLabel-filled': {
            transform: `translate(14px, -9px) scale(0.75)`,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          transform: `translate(14px, -9px) scale(0.75)`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        input: {
          // Some CSS
          padding: '10px 10px',
        },
      },
    },
  },
})
