import styled from 'styled-components'
import { ContainerWithHeader } from '../../components/Containers'

const BREAKPOINTS = {
  FIRST: '850px',
  SECOND: '660px',
}

export const Container = styled(ContainerWithHeader)`
  height: 100%;
`

export const Content = styled.div`
  padding: 24px 5%;
`

export const ImportActions = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const FormatContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background2};
  border-radius: 8px;
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
  @media only screen and (max-width: ${BREAKPOINTS.FIRST}) {
    align-items: center;
    flex-direction: column;
  }
`

export const LeftAlignedActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const RightAlignedActions = styled.div`
  display: flex;
  flex: 1;
  @media only screen and (max-width: ${BREAKPOINTS.FIRST}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const CenterAlignedActions = styled.div`
  margin: 0 16px;
`

export const Action = styled.div`
  border-radius: ${({ round }) => (round ? '100%' : '5px')};
  padding: ${({ round }) => (round ? '0' : '8px 16px')};
  width: ${({ round }) => (round ? '4rem' : 'auto')};
  height: ${({ round }) => (round ? '4rem' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  text-transform: uppercase;
  span {
    margin-left: 1.6rem;
  }
  &:hover {
    background: ${({ theme }) => theme.hoverAlpha01};
  }
`

export const ImportAction = styled(Action)`
  border: 1px solid ${({ theme }) => theme.border};
`

export const CopyAction = styled(Action)`
  margin-left: auto;
`

export const InputAndOutputContainer = styled.div`
  display: flex;
  flex: 1;
  @media only screen and (max-width: ${BREAKPOINTS.FIRST}) {
    flex-direction: column;
  }
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
  min-height: 160px;
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
export const OutputText = styled.code`
  background: ${({ theme }) => theme.background3};
  color: ${({ theme, usePlaceholderStyle }) =>
    usePlaceholderStyle ? theme.placeholder : theme.primaryText};
  text-transform: uppercase;
  font-size: 1.8rem;
  padding: 2.4rem;
  overflow: hidden;
  word-break: break-all;
  white-space: pre-wrap;
  flex: 1;
  min-height: 160px;
`
