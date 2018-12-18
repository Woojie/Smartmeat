import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation } from '../../store'
import Calculator from './Calculator'

const HomePage = (props) => {

  let results = props.result === 0  ? "" : (
    <div>
      <h4>Results</h4>
      <p>Results:{props.result}</p>
      <p>Carbon:{props.carbonCost}</p>
    </div>
  )
  return(
  <div> 
    <Calculator getCalculation={getCalculation} />
    {results}
    <button onClick={()=>props.dispatch(logout())}>Logout </button>
  </div>
  )
  
}

const mapStatetoProps = ({calculator:{result, carbonCost}}) => {
  return {
    result,
    carbonCost,
  }
}

export default connect(mapStatetoProps)(HomePage)