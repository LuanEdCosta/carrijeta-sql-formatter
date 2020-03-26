import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../../styles/Global'
import { DARK_THEME_COLORS } from '../../styles/Colors'
import Home from '../Home'

const App = () => {
  return (
    <ThemeProvider theme={DARK_THEME_COLORS}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
