import { useState, useCallback } from 'react'

export default (onSetText, callback, setIsTyping, delay = 600) => {
  const [timer, setTimer] = useState(0)

  const onSetTextAndTimer = useCallback(
    (text) => {
      clearTimeout(timer)

      if (onSetText) onSetText(text)
      if (setIsTyping) setIsTyping(true)

      setTimer(
        setTimeout(() => {
          if (callback) callback(text)
          if (setIsTyping) setIsTyping(false)
        }, delay),
      )
    },
    [callback, delay, onSetText, setIsTyping, timer],
  )

  return onSetTextAndTimer
}
