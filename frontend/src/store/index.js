import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { startSignup, finishSignup, validateEmailError, validateNamesError, validatePasswordError, userExists } from './actions'
import { startLogin, finishLogin, startCheckForUser, checkForUser, validateLogin } from './actions/login'
import { startCalculate, finishCalculate } from './actions/calculator'
import { startReport, finishReport, startAlterReport,  finishAlterReport, startDeleteReport, finishDeleteReport } from './actions/saveReport'
import { getAllReports, finishGettingReports } from './actions/globalReport'
import { allReducers } from './reducers'
import setAuthToken from '../setAuthToken'
import func from './func'

export const logUserIn = (e, email, password) => {

  store.dispatch(startLogin())
  e.preventDefault()
  axios.post('http://localhost:3030/user/login', {email, password})
  .then((res)=>{
    if(res.data.message){
      store.dispatch(validateLogin())

    }else{
    const {token, user} = res.data
    setAuthToken(token)

    localStorage.setItem('token', token)
    store.dispatch(finishLogin(user))
    }
  })
  .catch(error => console.log("error:", error))
}

export const signUserUp = (e, email, password, firstName, lastName) => {
  e.preventDefault()
  store.dispatch(startSignup())
  axios.post('http://localhost:3030/user/', {email, password, firstName, lastName})
  .then((res)=>{
    
    if(res.data.error) {
      store.dispatch(userExists())
    }else if (res.data.emailError || res.data.passwordError || res.data.namesError) {
      console.log(res.data)
      if (res.data.emailError) {
        store.dispatch(validateEmailError())
      }
      if (res.data.passwordError) {
        store.dispatch(validatePasswordError())
      }
      if (res.data.namesError) {
        store.dispatch(validateNamesError())
      }
    }else {

    store.dispatch(finishSignup())
  }
  })
}

export const searchForUser = (token) => {
  store.dispatch(startCheckForUser())
  setAuthToken(token)
  axios.get('http://localhost:3030/user/')
  .then((res)=>{
    if(res.data.error) {

      localStorage.removeItem('token')
    }
    store.dispatch(checkForUser(token, res.data))
  })
  
}

export const getCalculation = (e, order, quantity, frequency) => {
  if (e !== 0) {
    e.preventDefault()
  }
  store.dispatch(startCalculate())
  let result = func.calculate(order, quantity, frequency)
  let carbonCost = func.calculate(order, quantity, frequency) * 0.43
  store.dispatch(finishCalculate(Number(result), carbonCost, order, Number(quantity), Number(frequency)))
}

export const saveReport = (report, email) => {
  store.dispatch(startReport())
  if (report === "") {

  }else {
    axios.put('http://localhost:3030/report/report', {report, email})
    .then((res)=>{
      store.dispatch(finishReport(res.data))
    })
  }
}

export const grabAllReports = () => {
  store.dispatch(getAllReports())
  axios.get('http://localhost:3030/report/allReports')
  .then((res)=>store.dispatch(finishGettingReports(res.data)))
}

export const alterReport = (oldReport, newReport, alteredReports, email) => {
    store.dispatch(startAlterReport())
    let newAlteredReports = func.alterReport(oldReport, newReport, alteredReports, email)
    
    axios.put('http://localhost:3030/report/alterReport', {email, oldReport, newAlteredReports})
    .then((res)=> {
      store.dispatch(finishAlterReport(res.data))
    })
    .then(  
      axios.get('http://localhost:3030/report/allReports')
      .then((res)=>store.dispatch(finishGettingReports(res.data))
    ))
}

export const deleteReport = (user, id) => {
 store.dispatch(startDeleteReport())
 let alteredUser = func.deleteReport(user, id)
 let email = user.email
 console.log(alteredUser)
    axios.put('http://localhost:3030/report/deleteReport', {email, alteredUser})
  .then((res)=> store.dispatch(finishDeleteReport(res.data)))
}

const store = createStore(
  allReducers,
  applyMiddleware(logger, thunk)
)

export default store