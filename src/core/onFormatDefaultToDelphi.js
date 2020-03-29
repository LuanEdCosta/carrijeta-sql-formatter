import {
  END_OF_SQL,
  END_OF_LINE,
  SINGLE_QUOTE_CODE,
} from './constants/DelphiConstants'

export default (inputText) => {
  if (!inputText || !inputText.trim()) return ''
  const linesArray = inputText.split('\n')
  let outputText = ''

  if (linesArray.length > 1) {
    const whiteSpacesForEachLine = Array(linesArray.length).join('.').split('.')
    let biggestLine = ''

    // Modify each line of the inputText
    const modifiedLinesArray = linesArray.map((line) => {
      const singleQuoteCodeRegexp = new RegExp(`'`, 'gi')

      // Replace ' by '#39'
      const modifiedLine = line.replace(
        singleQuoteCodeRegexp,
        `'${SINGLE_QUOTE_CODE}'`,
      )

      return modifiedLine
    })

    // Finds the biggest line
    modifiedLinesArray.forEach((line) => {
      if (line.length > biggestLine.length) {
        biggestLine = line
      }
    })

    // Clculates the number of white spaces to put in the end of each line
    modifiedLinesArray.forEach((line, index) => {
      const lineLengthDifference = biggestLine.length - line.length
      const numberOfWhiteSpaces = lineLengthDifference + 4
      whiteSpacesForEachLine[index] = Array(numberOfWhiteSpaces).join(' ')
    })

    outputText = modifiedLinesArray
      .map((line, index) => {
        const lineWhiteSpaces = whiteSpacesForEachLine[index]
        const isTheLastLine = index === modifiedLinesArray.length - 1
        const lineIsEmpty = !line || !line.trim()

        if (lineIsEmpty) return `'${lineWhiteSpaces}${END_OF_LINE}`
        if (isTheLastLine) return `'${line}${lineWhiteSpaces}${END_OF_SQL}`
        return `'${line}${lineWhiteSpaces}${END_OF_LINE}`
      })
      .join('\n')
  } else {
    return `'${inputText}${END_OF_SQL}`
  }

  return outputText
}
