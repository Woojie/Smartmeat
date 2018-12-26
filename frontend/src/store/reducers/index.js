import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { signinReducer } from './signup'
import { calculatorReducer } from './calculator'


export const allReducers = combineReducers({
  login: loginReducer,
  signin: signinReducer,
  calculator: calculatorReducer,
})