import React, { useState, Fragment } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")

  const logUserIn = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/user/login', {email, password})
    .then((res)=>localStorage.setItem('token', res.data.token))
  }

  return(
    <Fragment>
      <h1>Sign Up</h1>
      <form>
        <input type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="enter email" />
        <input type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter password" />
        <button type="submit" onClick={logUserIn} >Login</button>
      </form>
      <h4>Already a user? Sign up <a href="/login">here</a>.</h4>
    </Fragment>
  )
}

export default LoginForm