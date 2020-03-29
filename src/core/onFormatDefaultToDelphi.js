export default (inputText) => {
  if (!inputText || !inputText.trim()) return ''
  const linesArray = inputText.split('\n')
  let outputText = ''

  if (linesArray.length > 1) {
    const whiteSpacesForEachLine = Array(linesArray.length).join('.').split('.')
    let biggestLine = ''

    // Modify each line of the inputText
    const modifiedLinesArray = linesArray.map((line) => {
      // Replace ' by '#39'
      const singleQuoteCodeRegexp = new RegExp(`'`, 'gi')
      const modifiedLine = line.replace(singleQuoteCodeRegexp, `'#39'`)
      return modifiedLine
    })

    // Finds the biggest line
    modifiedLinesArray.forEach((line) => {
      if (line.length > biggestLine.length) {
        biggestLine = line
      }
    })

    // Calculates the number of white spaces to put in the end of each line
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

        if (isTheLastLine) return `'${line}${lineWhiteSpaces}';`
        if (lineIsEmpty) return `'${lineWhiteSpaces}'#13+`
        return `'${line}${lineWhiteSpaces}'#13+`
      })
      .join('\n')
  } else {
    return `'${inputText}';`
  }

  return outputText
}
