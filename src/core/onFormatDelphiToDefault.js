export default (inputText) => {
  if (!inputText || !inputText.trim()) return ''
  let outputText = inputText

  const semicolonRegexp = new RegExp(';', 'gi')
  const endOfLineRegexp = new RegExp('#13', 'gi')
  const singleQuoteRegexp = new RegExp(`'`, 'gi')
  const singleQuoteCodeRegexp = new RegExp('#39', 'gi')
  const plusRegexp = new RegExp('\\+', 'gi')

  outputText = outputText.replace(semicolonRegexp, '')
  outputText = outputText.replace(endOfLineRegexp, '')
  outputText = outputText.replace(singleQuoteRegexp, '')
  outputText = outputText.replace(singleQuoteCodeRegexp, `'`)
  outputText = outputText.replace(plusRegexp, '')

  outputText = outputText
    .split('\n')
    .map((line) => line.trimRight())
    .join('\n')

  return outputText
}
