import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles'
import {ThemeProvider as SThemeProvider} from 'styled-components'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './app/store'
import App from './App'
import {theme} from './config/themes/default'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <SThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </SThemeProvider>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
