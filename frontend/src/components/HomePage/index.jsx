import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import Calculator from './Calculator'

const HomePage = ({dispatch}) => (
  <div> 

    <Calculator />
    <button onClick={()=>dispatch(logout())}>Logout </button>
  </div>
  
)



export default connect()(HomePage)