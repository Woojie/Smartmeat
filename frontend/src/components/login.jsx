import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { logUserIn } from '../store'

const LoginForm = ({loginError, logUserIn}) => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")
  let errorMessage = !loginError ? "" 
  : (<div className="alert alert-danger" role="alert">Login Failed, Email and Password does not match.</div>) 

  return(
    <Fragment>
      <h1 className='login'>Log in</h1>
      <form className='login'>
        <input type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="enter email" />
        <input type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter password" />
        <button type="submit" onClick={(e) => logUserIn(e, email, password)} >Login</button>
        {errorMessage}
      </form>
      <h4>Not a user? Sign up <a href="/signup">here</a>.</h4>
    </Fragment>
  )
}
const mapStateToProps = ({login:{loginError}}) => {
  return {
    loginError,
  }
}

const mapFunctoProps = dispatch => {
  return {
  logUserIn: (e, email, password) => logUserIn(e, email, password)
  }
}

export default connect( mapStateToProps, mapFunctoProps, null, {pure:false})(LoginForm)