import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { signUserUp } from '../store'

const LoginForm = () => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")

  return(
    <Fragment>
      <h1 className='login'>Sign Up</h1>
      <form className='login'>
        <input type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="enter email" />
        <input type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter password" />
        <button type="submit" onClick={(e)=>signUserUp(e, email, password)}  >Sign Up</button>
      </form>
      <h4>Already a user? Login<a href="/login">here</a>.</h4>
    </Fragment>
  )
}

const mapFunctoProps = dispatch => {
  return {
    signUserUp: (e, email, password) => signUserUp(e, email, password)
  }
}

export default connect(mapFunctoProps)(LoginForm)