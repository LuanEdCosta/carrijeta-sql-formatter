import { useCallback } from 'react'
import SQL_TYPES from '../config/SqlTypes'
import { onFormatDefaultToDelphi, onFormatDelphiToDefault } from '../core'

export default (setFormattedSql, inputType, outputType, options) => {
  const onFormatSql = useCallback(
    (inputText) => {
      let outputText = ''

      switch (true) {
        case inputType === SQL_TYPES.DEFAULT &&
          outputType === SQL_TYPES.DELPHI: {
          outputText = onFormatDefaultToDelphi(inputText, options)
          break
        }
        case inputType === SQL_TYPES.DELPHI &&
          outputType === SQL_TYPES.DEFAULT: {
          outputText = onFormatDelphiToDefault(inputText, options)
          break
        }
        default:
          outputText = ''
      }

      setFormattedSql(outputText)
    },
    [inputType, options, outputType, setFormattedSql],
  )

  return onFormatSql
}
