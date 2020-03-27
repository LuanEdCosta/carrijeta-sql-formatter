import { SET_THEME } from '../ActionTypes'
import { THEME_KEY } from '../../config/localStorageKeys'

export const setTheme = (newTheme) => {
  localStorage.setItem(THEME_KEY, JSON.stringify(newTheme))

  return {
    type: SET_THEME,
    payload: newTheme,
  }
}
