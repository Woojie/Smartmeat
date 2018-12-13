import logger from 'redux-logger'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import {startLogin, finishLogin} from './actions'
import { allReducers } from './reducers'

export const logUserIn = (e, email, password) => {

  store.dispatch(startLogin())
  e.preventDefault()
  axios.post('http://localhost:3030/user/login', {email, password})
  .then((res)=>{
    console.log(res.data)
    localStorage.setItem('token', res.data.token)
    store.dispatch(finishLogin(res.data.token))
  })
  .catch(error => console.log("error:", error))

}




const store = createStore(
  allReducers,
  applyMiddleware(logger)
)

export default store