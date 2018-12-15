import React from 'react'


const HomePage = (props) => (
  <div>
    hello
    <button onClick={()=>localStorage.removeItem('token')}>Logout </button>
  </div>
  
)

export default HomePage