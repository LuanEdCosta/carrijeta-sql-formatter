import { css } from 'styled-components'

export const ScrollStyle01 = css`
  &:hover {
    ::-webkit-scrollbar {
      display: block;
    }
  }

  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.background2};
    width: 12px;
    height: 12px;
    display: none;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background3};
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-resizer {
    display: none;
  }
`
