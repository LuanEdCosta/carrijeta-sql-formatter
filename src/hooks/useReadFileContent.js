/* eslint-disable no-alert */

import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export default (onLoadFile) => {
  const { t } = useTranslation('Error')

  const onReadFileContent = useCallback(
    (e) => {
      if (typeof window.FileReader === 'function') {
        const [file] = e.target.files
        const fileReader = new FileReader()
        fileReader.onload = onLoadFile
        fileReader.readAsText(file)
      } else {
        alert(t('readFile'))
      }
    },
    [onLoadFile, t],
  )

  return onReadFileContent
}
