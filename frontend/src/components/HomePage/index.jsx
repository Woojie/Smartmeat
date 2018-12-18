import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation } from '../../store'
import Calculator from './Calculator'
import DoughnutChart from './Charts/DoughnutChart'

const HomePage = ({result, carbonCost, dispatch}) => {
  
  let results = result === 0  ? "" : (
    <div>
      <h4>Results</h4>
      <p>Results:{result}</p>
      <p>Carbon:{carbonCost}</p>
    </div>
  )
  let doughChart = result === 0 ? "" : <DoughnutChart data={result} />
  return(
  <div> 
    <Calculator getCalculation={getCalculation} />
    {results}
    {doughChart}
    <button onClick={()=>dispatch(logout())}>Logout </button>
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