import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'


import { signUserUp } from '../store'

const SignupForm = ({validateError, userExists, successfulLogin, namesError, passwordError}) => {
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
  [password, getPassword] = useState(""),
  [firstName, getFirstName] = useState(""),
  [lastName, getLastName] = useState("")


  const signUpError = validateError ? <div className="invalid-feedback">Please use a valid email address</div> 
  : ""
  const passwordValidation = passwordError ? <div className="invalid-feedback">Must be at least 5 characters</div> 
  : ""
  const namesValidation = namesError ? <div className="invalid-feedback">Fill out both names!</div> 
  : ""
  const userAlreadyExistError = userExists ? <div className="alert alert-danger">This email is already signed up! Please use another or proceed to the login page.</div>
  : ""
  const successfullyLogged = successfulLogin ? <div className="invalid-feedback">Successfully Signed Up! Will Redirect to the Login page in 3 seconds!</div> 
  : "" 
  return(
    <Fragment>

      <div className="main-body light pt-5">
        <form className="d-flex flex-column align-items-center justify-content-center pt-5">
          <p className="text-center h4 pt-5">Sign Up</p>
          <div className="form-group">
            <input className={validateError ? "form-control is-invalid":"form-control"} type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="Enter your email" required />
            {signUpError}
          </div>

          <div className="form-group">
            <input className={passwordError ? "form-control is-invalid":"form-control"} type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter your password" rquired />
            {passwordValidation}
          </div>
          
          <div className="form-group">
            <input className={namesError ? "form-control is-invalid":"form-control"} type="text" onChange={(e)=>getFirstName(e.target.value)} placeholder="Enter your first name" required />
          </div>

          <div className="form-group">
            <input className={namesError ? "form-control is-invalid":"form-control"} type="text" onChange={(e)=>getLastName(e.target.value)} placeholder="Enter your last name" required />
            {namesValidation}
          </div>
          <button className="btn btn-secondary mb-2" type="submit" onClick={(e)=>signUserUp( e, email, password, firstName, lastName )}  >Sign Up</button>
          
          <p>Already a user? Login <a href="/login"> <b className='primary'>here</b></a>.</p>
          
        </form>
        {userAlreadyExistError}

        {successfullyLogged}
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({signin:{validateError, userExists, successfulLogin, passwordError, namesError}}) => {
  return {
    validateError,
    userExists,
    successfulLogin,
    passwordError,
    namesError
  }
}

const mapFuncToProps = dispatch => {
  return {
    signUserUp: (e, email, password) => signUserUp(e, email, password)
  }
}

export default connect(mapStateToProps, mapFuncToProps)(SignupForm)