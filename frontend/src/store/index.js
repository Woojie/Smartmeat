import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import jwt_decode from 'jwt-decode'

import { startSignup, finishSignup, } from './actions'
import { startLogin, finishLogin, startCheckForUser, checkForUser } from './actions/login'
import { allReducers } from './reducers'
import setAuthToken from '../setAuthToken'

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
  store.dispatch(checkForUser(token, jwt_decode(token)))
}

const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store