import React from 'react'
import {connect} from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation, saveReport } from '../../store'
import Calculator from './Calculator'
import Results from './Results'


const HomePage = ({carbon, petrol, dispatch, userEmail, reports}) => {
  let results = carbon === 0  ? "" : (
    <Results carbon={carbon} petrol={petrol} saveReport={saveReport} userEmail={userEmail} reports={reports} />
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

const mapStatetoProps = ({calculator:{result, carbonCost}, login:{user}}) => {
  return {
    carbon: result,
    petrol:carbonCost,
    userEmail: user.email,
    reports: user.reports
  }
}

export default connect(mapStatetoProps)(HomePage)