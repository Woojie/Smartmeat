import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import {startLogin, finishLogin, startSignup, finishSignup} from './actions'
import { allReducers } from './reducers'

export const logUserIn = (e, email, password) => {

  store.dispatch(startLogin())
  e.preventDefault()
  axios.post('http://localhost:3030/user/login', {email, password})
  .then((res)=>{

    if(res.data.message){
      console.log(res.data.message)
    }else{
    localStorage.setItem('token', res.data.token)
    store.dispatch(finishLogin(res.data.token))
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


const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store