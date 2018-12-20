import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation } from '../../store'
import Calculator from './Calculator'
import Results from './Results'


const HomePage = ({carbon, petrol, dispatch}) => {
  
  let results = carbon === 0  ? "" : (
    <Results carbon={carbon} petrol={petrol} />
  )

  let style = {width: "50%", height: "auto"}
  return(
  <div style={style}> 
    <Calculator getCalculation={getCalculation} />
    {results}
    <button onClick={()=>dispatch(logout())}>Logout </button>
  </div>
  )
  
}

const mapStatetoProps = ({calculator:{result, carbonCost}}) => {
  return {
    carbon: result,
    petrol:carbonCost,
  }
}

export default connect(mapStatetoProps)(HomePage)