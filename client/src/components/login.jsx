import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { logUserIn } from '../store'

const LoginForm = ({loginError, logUserIn}) => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")
  let errorMessage = !loginError ? "" 
  : (<div className="alert alert-danger" id='alert' role="alert">Login Failed, Email and Password does not match.</div>) 

  return(
    <Fragment>
      <div className="main-body light pt-5">
        <form className="d-flex flex-column align-items-center justify-content-center pt-5">
          <p className="text-center h4 pt-5">Log In</p>

          <div className="form-group">
            <input className="form-control" type="email" onChange={(e) => getEmail(e.target.value)} placeholder="Email" />
          </div>

          <div className="form-group">
            <input className="form-control" type="password" onChange={(e) => getPassword(e.target.value)} placeholder="Password" />
          </div>

          <button className="btn btn-secondary mb-2" type="submit" onClick={(e) => logUserIn(e, email, password)} >Login</button>

          <p>Not a user? Sign up <a href="/signup"><b className="primary">here</b></a>.</p>
        </form>
        {errorMessage}
      </div>
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