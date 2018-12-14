import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { signinReducer } from './signup'

export const allReducers = combineReducers({
  login: loginReducer,
  signin: signinReducer
})