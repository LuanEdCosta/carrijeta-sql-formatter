import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from './styles'

const AutoHeightInput = (props) => {
  const { style, text, setText } = props

  const inputRef = useRef(null)

  const onGetScrollHeight = useCallback(() => {
    if (inputRef && inputRef.current) return inputRef.current.scrollHeight
    return null
  }, [])

  return (
    <TextInput
      ref={inputRef}
      style={style}
      value={text}
      onChange={(e) => setText(e.target.value)}
      scrollHeight={onGetScrollHeight()}
    />
  )
}

AutoHeightInput.defaultProps = {
  style: null,
}

AutoHeightInput.propTypes = {
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
}

export default AutoHeightInput
