import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles'
import {ThemeProvider as SThemeProvider} from 'styled-components'

import App from './App'
import {store} from './app/store'
import {theme} from './config/themes/default'

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <SThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById('root'),
)
