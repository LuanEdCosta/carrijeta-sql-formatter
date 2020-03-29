import { END_OF_SQL, END_OF_LINE } from './constants/DelphiConstants'

export default (inputText) => {
  if (!inputText || !inputText.trim()) return ''
  let outputText = inputText

  const endOfSqlRegexp = new RegExp(END_OF_SQL, 'gi')
  const endOfLineRegexp = new RegExp(END_OF_LINE, 'gi')
  const singleQuoteRegexp = new RegExp(`'`, 'gi')
  const plusRegexp = new RegExp('\\+', 'gi')

  outputText = outputText.replace(endOfSqlRegexp, '')
  outputText = outputText.replace(endOfLineRegexp, '')
  outputText = outputText.replace(singleQuoteRegexp, '')
  outputText = outputText.replace(plusRegexp, '')

  return outputText.trimRight()
}
