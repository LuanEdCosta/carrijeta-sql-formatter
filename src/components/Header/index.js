import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Container, AppName, HeaderActions, Action } from './styles'
import { useThemeSwitcher } from '../../hooks'

const repoUrl = 'https://github.com/LuanEdCosta/carrijeta-sql-formatter'

const Header = () => {
  const { t } = useTranslation()
  const onSwitchTheme = useThemeSwitcher()
  const theme = useTheme()

  return (
    <Container>
      <AppName href="/">{t('appName')}</AppName>

      <HeaderActions>
        <Action href={repoUrl} target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} color={theme.primaryText} />
        </Action>

        <Action onClick={onSwitchTheme}>
          <FontAwesomeIcon icon="palette" color={theme.primaryText} />
        </Action>
      </HeaderActions>
    </Container>
  )
}

export default Header
