import styled from 'styled-components'
import { ContainerWithHeader } from '../../components/Containers'

export const Container = styled(ContainerWithHeader)`
  height: 100%;
`

export const Content = styled.div`
  padding: 5%;
`

export const FormatContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.background2};
  min-height: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const FormatActions = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 8px;
  display: flex;
  justify-content: center;
`

export const LeftAlignedActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const RightAlignedActions = styled.div`
  flex: 1;
`

export const CenterAlignedActions = styled.div`
  margin: 0 16px;
`

export const Action = styled.div`
  border-radius: ${({ round }) => (round ? '100%' : '5px')};
  padding: ${({ round }) => (round ? '0' : '0 16px')};
  width: ${({ round }) => (round ? '4rem' : 'fit-content')};
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.hoverAlpha01};
  }
`

export const InputAndOutputContainer = styled.div`
  display: flex;
  flex: 1;
`

export const InputContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ClearInputAction = styled(Action)`
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 0.8rem;
  margin-right: 0.8rem;
`

export const InputComponent = styled.textarea`
  background: ${({ theme }) => theme.background3};
  padding: 2.4rem 5.6rem 2.4rem 2.4rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  overflow: hidden auto;
  resize: none;
  border: none;
  flex: 1;
`

export const InputFooter = styled.div`
  display: flex;
  padding: 8px 24px;
`

export const CharactersCount = styled.div`
  margin-left: auto;
  display: inline;
  color: ${({ theme }) => theme.secondaryText};
  span {
    margin-left: 0.8rem;
  }
`

export const OutputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const OutputText = styled.div`
  background: ${({ theme }) => theme.background3};
  color: ${({ theme, usePlaceholderStyle }) =>
    usePlaceholderStyle ? theme.placeholder : theme.primaryText};
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 2.4rem;
  overflow: hidden;
  word-break: break-all;
  white-space: pre-line;
  flex: 1;
`
