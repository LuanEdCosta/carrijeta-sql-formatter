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
  ImportActions,
  ImportAction,
  CopyAction,
} from './styles'
import { useStopTyping, useFormatSql, useCopyToClipboard } from '../../hooks'

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

  const onFileSelected = useCallback(
    (e) => {
      if (typeof window.FileReader === 'function') {
        const [file] = e.target.files
        const fileReader = new FileReader()
        fileReader.onload = (readEvent) => {
          onChangeInputText(readEvent.target.result)
        }
        fileReader.readAsText(file)
      } else {
        // eslint-disable-next-line no-alert
        alert(t('Error:readFile'))
      }
    },
    [onChangeInputText, t],
  )

  const onCopyOutputText = useCopyToClipboard('outputText')

  return (
    <Container>
      <Header />

      <Content>
        <ImportActions>
          <ImportAction as="label" htmlFor="fileInput">
            <FontAwesomeIcon icon="file-upload" />
            <span>{t('importSqlFile')}</span>
            <input
              style={{ display: 'none' }}
              onChange={onFileSelected}
              accept=".sql"
              id="fileInput"
              type="file"
            />
          </ImportAction>
        </ImportActions>

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

              <CopyAction onClick={onCopyOutputText}>
                <FontAwesomeIcon icon="copy" />
                <span>{t('Glossary:copy')}</span>
              </CopyAction>
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
                spellCheck="false"
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
              />

              <InputFooter>
                <CharactersCount>
                  <FontAwesomeIcon icon="text-width" />
                  <span>{t('charCount', { count: inputText.length })}</span>
                </CharactersCount>
              </InputFooter>
            </InputContainer>

            <OutputContainer>
              <OutputText usePlaceholderStyle={isTyping} id="outputText">
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
