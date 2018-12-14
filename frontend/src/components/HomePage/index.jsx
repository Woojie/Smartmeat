import React from 'react'


const HomePage = (props) => (
  <div>
    hello
    <button onClick={localStorage.setItem('token', null)}>Logout </button>
  </div>
  
)

export default HomePage