import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'

const HomePage = ({dispatch}) => (
  <div> 

    hello
    <button onClick={()=>dispatch(logout())}>Logout </button>
  </div>
  
)



export default connect()(HomePage)