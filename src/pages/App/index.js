import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GlobalStyle } from '../../styles/Global'
import Home from '../Home'

const App = () => {
  const { colors } = useSelector(({ ThemeReducer }) => ThemeReducer)

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
