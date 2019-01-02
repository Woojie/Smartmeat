import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { signUserUp } from '../store'

const LoginForm = () => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")

  return(
    <Fragment>
      <div className="main-body light pt-5">
        <form className="d-flex flex-column align-items-center justify-content-center pt-5">
          <p className="text-center h4 pt-5">Sign Up</p>
          <div className="form-group">
            <input className="form-control" type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <input className="form-control" type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter your password" />
          </div>

          <button className="btn btn-secondary mb-2 mainColor" type="submit" onClick={(e)=>signUserUp(e, email, password)}  >Sign Up</button>
          <p>Already a user? Login <a href="/login"> <b className='mainColor'>here</b></a>.</p>
        </form>
      </div>
    </Fragment>
  )
}

const mapFunctoProps = dispatch => {
  return {
    signUserUp: (e, email, password) => signUserUp(e, email, password)
  }
}

export default connect(mapFunctoProps)(LoginForm)