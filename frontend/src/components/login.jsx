import React, { useState } from 'react'

const LoginForm = () => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")

  return(
    <form>
      <input type="email" onChange={(e)=>getEmail(e.target.value)} placeholder="enter email" />
      <input type="password" onChange={(e)=>getPassword(e.target.value)} placeholder="Enter password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm