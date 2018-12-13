import { combineReducers } from 'redux'
import { loginReducer } from './login'

export const allReducers = combineReducers({
  login:loginReducer
})