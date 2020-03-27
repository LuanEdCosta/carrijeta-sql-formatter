import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../styles/Metrics'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4.8rem 0 1.6rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 1;
  background-color: ${({ theme }) => theme.background2};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

export const AppName = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryText};
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
`

export const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const Action = styled.a`
  border-radius: 100%;
  overflow: hidden;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  margin-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.hoverAlpha01};
  }
`
