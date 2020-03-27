import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { Container, AppName, HeaderActions, Action } from './styles'
import { useThemeSwitcher } from '../../hooks'

const Header = () => {
  const onSwitchTheme = useThemeSwitcher()
  const theme = useTheme()

  return (
    <Container>
      <AppName href="/">Carrijeta SQL Formatter</AppName>

      <HeaderActions>
        <Action
          href="https://luanedcosta.github.io/carrijeta-sql-formatter/"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'github']} color={theme.primaryText} />
        </Action>

        <Action onClick={onSwitchTheme}>
          <FontAwesomeIcon icon="palette" color={theme.primaryText} />
        </Action>
      </HeaderActions>
    </Container>
  )
}

Header.defaultProps = {}

Header.propTypes = {}

export default Header
