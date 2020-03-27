import { createStore, combineReducers } from 'redux'
import ThemeReducer from './reducers/ThemeReducer'

const reducers = combineReducers({ ThemeReducer })

export default createStore(reducers)
