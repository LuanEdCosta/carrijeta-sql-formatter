import { useCallback } from 'react'

const END_OF_SQL = `';`
const END_OF_LINE = `'#13+`

export default (setFormattedSql) => {
  const onFormatSql = useCallback(
    (sqlText) => {
      if (!sqlText || !sqlText.trim()) {
        setFormattedSql('')
        return
      }

      let formattedSql = ''
      const linesArray = sqlText.split('\n')

      if (linesArray.length > 1) {
        let biggestLine = ''
        const whiteSpacesForEachLine = Array(linesArray.length)
          .join('.')
          .split('.')

        linesArray.forEach((line) => {
          if (line.length > biggestLine.length) {
            biggestLine = line
          }
        })

        linesArray.forEach((line, index) => {
          const lineLengthDifference = biggestLine.length - line.length
          const numberOfWhiteSpaces = lineLengthDifference + 4
          whiteSpacesForEachLine[index] = Array(numberOfWhiteSpaces).join(' ')
        })

        linesArray.forEach((line, index) => {
          const lineWhiteSpaces = whiteSpacesForEachLine[index]
          const newLine = `'${line}${lineWhiteSpaces}${END_OF_LINE}\n`

          if (index !== linesArray.length - 1) {
            if (!line || !line.trim()) {
              formattedSql += `'${lineWhiteSpaces}${END_OF_LINE}\n`
            } else {
              formattedSql += newLine
            }
          } else {
            formattedSql += `'${line}${lineWhiteSpaces}${END_OF_SQL}`
          }
        })
      } else {
        formattedSql = `'${sqlText}${END_OF_SQL}`
      }

      setFormattedSql(formattedSql)
    },
    [setFormattedSql],
  )

  return onFormatSql
}
