import { END_OF_SQL, END_OF_LINE } from './constants/DelphiConstants'

export default (inputText) => {
  if (!inputText || !inputText.trim()) return ''

  let formattedSql = ''
  const linesArray = inputText.split('\n')

  if (linesArray.length > 1) {
    let biggestLine = ''
    const whiteSpacesForEachLine = Array(linesArray.length).join('.').split('.')

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
    formattedSql = `'${inputText}${END_OF_SQL}`
  }

  return formattedSql
}
