import { SET_THEME } from '../ActionTypes'
import { DARK_THEME_COLORS, THEME_NAMES } from '../../styles/Colors'
import { THEME_KEY } from '../../config/localStorageKeys'

const theme = localStorage.getItem(THEME_KEY)

const initialState = theme
  ? JSON.parse(theme)
  : {
      name: THEME_NAMES.DARK,
      colors: DARK_THEME_COLORS,
    }

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_THEME:
      return { ...state, ...payload }
    default:
      return state
  }
}
