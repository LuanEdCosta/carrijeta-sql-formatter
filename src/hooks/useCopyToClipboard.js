import { useCallback } from 'react'

export default (elementId) => {
  const onCopyToClipboard = useCallback(() => {
    const element = document.getElementById(elementId)

    if (window.getSelection && document.createRange) {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(element)
      selection.removeAllRanges()
      selection.addRange(range)
    } else if (document.body.createTextRange) {
      const range = document.body.createTextRange()
      range.moveToElementText(element)
      range.select()
    }

    document.execCommand('copy')
  }, [elementId])

  return onCopyToClipboard
}
