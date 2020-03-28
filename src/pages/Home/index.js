import React, { useState, useCallback, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header'
import {
  Container,
  Content,
  FormatContainer,
  FormatActions,
  InputAndOutputContainer,
  InputContainer,
  OutputContainer,
  Action,
  LeftAlignedActions,
  RightAlignedActions,
  CenterAlignedActions,
  InputComponent,
  InputFooter,
  CharactersCount,
  ClearInputAction,
  OutputText,
} from './styles'
import { useStopTyping, useFormatSql } from '../../hooks'

const Home = () => {
  const { t } = useTranslation('Home')

  const inputRef = useRef(null)
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isTyping, setIsTyping] = useState('')

  const onFormatSql = useFormatSql(setOutputText)

  const onChangeInputText = useStopTyping(
    setInputText,
    onFormatSql,
    setIsTyping,
  )

  const onClearInputText = useCallback(() => {
    setInputText('')
    setOutputText('')
    setIsTyping(false)
    inputRef.current.focus()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <FormatContainer>
          <FormatActions>
            <LeftAlignedActions>
              <Action>{t('sqlTypes.normal')}</Action>
            </LeftAlignedActions>

            <CenterAlignedActions>
              <Action round>
                <FontAwesomeIcon icon="exchange-alt" />
              </Action>
            </CenterAlignedActions>

            <RightAlignedActions>
              <Action>{t('sqlTypes.delphi')}</Action>
            </RightAlignedActions>
          </FormatActions>

          <InputAndOutputContainer>
            <InputContainer>
              {!!inputText && (
                <ClearInputAction onClick={onClearInputText} round>
                  <FontAwesomeIcon icon="times" />
                </ClearInputAction>
              )}

              <InputComponent
                ref={inputRef}
                value={inputText}
                onChange={(e) => onChangeInputText(e.target.value)}
                placeholder={t('sqlPlaceholder')}
              />

              <InputFooter>
                <CharactersCount>
                  <FontAwesomeIcon icon="text-width" />
                  <span>{t('charCount', { count: inputText.length })}</span>
                </CharactersCount>
              </InputFooter>
            </InputContainer>

            <OutputContainer>
              <OutputText usePlaceholderStyle={isTyping}>
                {isTyping && !!inputText ? t('formatting') : outputText}
              </OutputText>
            </OutputContainer>
          </InputAndOutputContainer>
        </FormatContainer>
      </Content>
    </Container>
  )
}

export default Home
