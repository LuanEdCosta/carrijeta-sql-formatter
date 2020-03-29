import React, { useState, useCallback, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import SQL_TYPES from '../../config/SqlTypes'
import Header from '../../components/Header'
import {
  useStopTyping,
  useFormatSql,
  useCopyToClipboard,
  useReadFileContent,
} from '../../hooks'
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

const Home = () => {
  const { t } = useTranslation(['Home', 'SqlTypes'])

  const inputRef = useRef(null)
  const hadInvertedTypes = useRef(false)
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [inputType, setInputType] = useState(SQL_TYPES.DEFAULT)
  const [outputType, setOutputType] = useState(SQL_TYPES.DELPHI)

  const onCopyOutputText = useCopyToClipboard('outputText')
  const onFormatSql = useFormatSql(setOutputText, inputType, outputType)

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

  const onFileSelected = useReadFileContent((readEvent) => {
    onChangeInputText(readEvent.target.result)
  })

  const onInvertTypes = useCallback(() => {
    setInputType(outputType)
    setOutputType(inputType)
    setInputText(outputText)
    setOutputText(inputText)
    hadInvertedTypes.current = true
  }, [inputText, inputType, outputText, outputType])

  const onFormatWhenInvertTypes = useCallback(() => {
    if (hadInvertedTypes.current) {
      onChangeInputText(inputText)
      hadInvertedTypes.current = false
    }
  }, [inputText, onChangeInputText])

  useEffect(onFormatWhenInvertTypes, [inputType, outputType])

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
              <Action>{t(`SqlTypes:${inputType}`)}</Action>
            </LeftAlignedActions>

            <CenterAlignedActions>
              <Action onClick={onInvertTypes} round>
                <FontAwesomeIcon icon="exchange-alt" />
              </Action>
            </CenterAlignedActions>

            <RightAlignedActions>
              <Action>{t(`SqlTypes:${outputType}`)}</Action>

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
                {isTyping ? t('formatting') : outputText}
              </OutputText>
            </OutputContainer>
          </InputAndOutputContainer>
        </FormatContainer>
      </Content>
    </Container>
  )
}

export default Home
