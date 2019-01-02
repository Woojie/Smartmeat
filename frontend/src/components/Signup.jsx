import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'


import { signUserUp } from '../store'

const SignupForm = ({validateError, userExists, successfulLogin}) => {
  if (successfulLogin) {
    let waitFiveSeconds = () => {
      return new Promise (resolve => {
        setTimeout(()=>{
          resolve()
        }, 3000)
      })
    }
    waitFiveSeconds()
    .then(()=>window.location.href="/login")
  }
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")
  const signUpError = validateError ? <div className="alert alert-danger" role="alert">Please use a valid email address</div> : ""
  const userAlreadyExistError = userExists ? <div className="alert alert-danger" role="alert">This email is already signed up! Please use another or proceed to the login page.</div>
  : ""
  const successfullyLogged = successfulLogin ? <div className="alert alert-success" role="alert">Successfully Signed Up! Will Redirect to the Login page in 3 seconds!</div> : "" 
  return(
    <Fragment>
      <div className="main-body light pt-5">
        <form className="d-flex flex-column align-items-center justify-content-center pt-5">
          <p className="text-center h4 pt-5">Sign Up</p>
          <div className="form-group">
            <input className="form-control" type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="Enter your email" />
            {signUpError}
          </div>

          <div className="form-group">
            <input className="form-control" type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          {userAlreadyExistError}
          <button className="btn btn-secondary mb-2 mainColor" type="submit" onClick={(e)=>signUserUp(e, email, password)}  >Sign Up</button>
          {successfullyLogged}
          <p>Already a user? Login <a href="/login"> <b className='mainColor'>here</b></a>.</p>
        </form>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({signin:{validateError, userExists, successfulLogin}}) => {
  return {
    validateError,
    userExists,
    successfulLogin
  }
}

const mapFuncToProps = dispatch => {
  return {
    signUserUp: (e, email, password) => signUserUp(e, email, password)
  }
}

export default connect(mapStateToProps, mapFuncToProps)(SignupForm)