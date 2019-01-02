import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'

import { startSignup, finishSignup, validateError, userExists } from './actions'
import { startLogin, finishLogin, startCheckForUser, checkForUser, validateLogin } from './actions/login'
import { startCalculate, finishCalculate } from './actions/calculator'
import { startReport, finishReport, startAlterReport,  finishAlterReport } from './actions/saveReport'
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
      console.log(res.data.message)
    }else{
    const {token, user} = res.data
    setAuthToken(token)

    localStorage.setItem('token', token)
    store.dispatch(finishLogin(user))
    }
  })
  .catch(error => console.log("error:", error))
}

export const signUserUp = (e, email, password) => {
  e.preventDefault()
  store.dispatch(startSignup())
  axios.post('http://localhost:3030/user/', {email, password})
  .then((res)=>{
    if(res.data.error) {
      store.dispatch(userExists())
    }else if (res.data.emailError) {
      store.dispatch(validateError())
    }else {
    console.log("user signed up!")
    store.dispatch(finishSignup())
  }
  })
}

export const searchForUser = (token) => {
  store.dispatch(startCheckForUser())
  setAuthToken(token)
  axios.get('http://localhost:3030/user/')
  .then((res)=>{
    console.log(res.data)
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
    console.log("Not Logged In")
  }else {
    axios.put('http://localhost:3030/user/report', {report, email})
    .then((res)=>{
      store.dispatch(finishReport(res.data))
    })
  }
}

export const grabAllReports = () => {
  store.dispatch(getAllReports())
  axios.get('http://localhost:3030/user/allReports')
  .then((res)=>store.dispatch(finishGettingReports(res.data)))
}

export const alterReport = (oldReport, newReport, alteredReports, email) => {
    store.dispatch(startAlterReport())
    newReport.email = email
    newReport.id = oldReport.id
    let newAlteredReports = alteredReports.concat(newReport)
    
    axios.put('http://localhost:3030/user/alterReport', {email, oldReport, newAlteredReports})
    .then((res)=> {
      store.dispatch(finishAlterReport(res.data))
    })
    .then(  
      axios.get('http://localhost:3030/user/allReports')
      .then((res)=>store.dispatch(finishGettingReports(res.data))
    ))
    
}

const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store