import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { signinReducer } from './signup'
import { calculatorReducer } from './calculator'
import { reportReducer } from './saveReport'

export const allReducers = combineReducers({
  login: loginReducer,
  signin: signinReducer,
  calculator: calculatorReducer,
  saveReport: reportReducer
})