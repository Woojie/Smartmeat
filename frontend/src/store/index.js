import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import jwt_decode from 'jwt-decode'

import { startSignup, finishSignup, } from './actions'
import { startLogin, finishLogin, startCheckForUser, checkForUser } from './actions/login'
import { startCalculate, finishCalculate } from './actions/calculator'
import { startReport, finishReport } from './actions/saveReport'
import { allReducers } from './reducers'
import setAuthToken from '../setAuthToken'
import func from './func'

export const logUserIn = (e, email, password) => {

  store.dispatch(startLogin())
  e.preventDefault()
  axios.post('http://localhost:3030/user/login', {email, password})
  .then((res)=>{

    if(res.data.message){
      console.log(res.data.message)
    }else{
    const {token} = res.data
    setAuthToken(token)
    const decoded = jwt_decode(token)

    localStorage.setItem('token', token)
    store.dispatch(finishLogin(decoded))
    }
  })
  .catch(error => console.log("error:", error))
}

export const signUserUp = (e, email, password) => {
  e.preventDefault()
  store.dispatch(startSignup())
  axios.post('http://localhost:3030/user/', {email, password})
  .then((res)=>{
    if(res.data.error){
      console.log(res.data.error)
    }else{
    console.log("user signed up!")
    store.dispatch(finishSignup())
  }
  })
}

export const searchForUser = (token) => {
  store.dispatch(startCheckForUser())
  setAuthToken(token)
  axios.get('http://localhost:3030/user/')
  .then((res)=>console.log(res))
  store.dispatch(checkForUser(token, jwt_decode(token)))
}

export const getCalculation = (e, order, quantity, frequency) => {
  e.preventDefault()
  store.dispatch(startCalculate())
  
  store.dispatch(finishCalculate(func.calculate(order, quantity, frequency), func.calculate(order, quantity, frequency) * 0.43))

}

export const saveReport = (report, email) => {
  console.log(email)
  store.dispatch(startReport())
  axios.put('http://localhost:3030/user/report', {report, email})
  .then((res)=>store.dispatch(finishReport(res.data)))
}

const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store