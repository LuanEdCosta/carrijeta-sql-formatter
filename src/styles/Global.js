import { createGlobalStyle, css } from 'styled-components'

const fontStyle = css`
  color: ${({ theme }) => theme.primaryText};
  line-height: 1.5;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const GlobalStyle = createGlobalStyle`
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
    font-family: 'Roboto Mono', monospace;
    background: ${({ theme }) => theme.background};
    height: 100%;
    ${fontStyle}
  }

  textarea, input, button, code {
    font-family: 'Roboto Mono', monospace;
    ${fontStyle}
  }
`
