import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setTheme } from '../store/actions'
import useDispatchCallback from './useDispatchCallback'
import {
  THEME_NAMES,
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS,
} from '../styles/Colors'

export default () => {
  const onSetTheme = useDispatchCallback(setTheme)
  const { name } = useSelector(({ ThemeReducer }) => ThemeReducer)

  const onSwtchTheme = useCallback(() => {
    const isUsingLightMode = name === THEME_NAMES.LIGHT
    onSetTheme({
      name: isUsingLightMode ? THEME_NAMES.DARK : THEME_NAMES.LIGHT,
      colors: isUsingLightMode ? DARK_THEME_COLORS : LIGHT_THEME_COLORS,
    })
  }, [name, onSetTheme])

  return onSwtchTheme
}
