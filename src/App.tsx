import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './app/pages'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
const App = () => {
  return (
    <BrowserRouter basename="/help-offers-frontend">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
