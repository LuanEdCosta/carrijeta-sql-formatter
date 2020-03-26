import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.background};
    font-size: 1.6rem;
  }
`
