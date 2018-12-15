import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import jwt_decode from 'jwt-decode'

import {startLogin, finishLogin, startSignup, finishSignup, startCheckForUser, checkForUser} from './actions'
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

export const searchForUser = (decodedToken) => {
  store.dispatch(startCheckForUser())
  store.dispatch(checkForUser(decodedToken))
}

const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store