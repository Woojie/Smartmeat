import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation } from '../../store'
import Calculator from './Calculator'

const HomePage = (props) => (
  <div> 

    <Calculator getCalculation={getCalculation} />
    <button onClick={()=>props.dispatch(logout())}>Logout </button>
  </div>
  
)

const mapStatetoProps = ({calculator:{result, carbonCost}}) => {
  return {
    result,
    carbonCost,
  }
}

export default connect(mapStatetoProps)(HomePage)