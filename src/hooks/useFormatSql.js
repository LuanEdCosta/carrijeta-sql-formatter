import { useCallback } from 'react'

export default (setFormattedSql) => {
  const onFormatSql = useCallback(
    (sqlText) => {
      if (!sqlText || !sqlText.trim()) {
        setFormattedSql('')
        return
      }

      let formattedSql = ''

      sqlText.split('\n').forEach((line) => {
        const newLine = `' ${line}\t'#13+\n`
        formattedSql += newLine
      })

      setFormattedSql(formattedSql)
    },
    [setFormattedSql],
  )

  return onFormatSql
}
