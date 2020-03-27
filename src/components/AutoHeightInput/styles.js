import styled from 'styled-components'

export const TextInput = styled.textarea`
  overflow: hidden;
  resize: none;
  min-height: ${({ scrollHeight }) => {
    if (scrollHeight) return `${scrollHeight}px`
    return 'auto'
  }};
`
