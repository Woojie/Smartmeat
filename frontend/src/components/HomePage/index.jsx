import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../../store/actions/login'
import { getCalculation, saveReport } from '../../store'
import Calculator from './Calculator'
import Results from './Results'


const HomePage = ({carbon, petrol, dispatch, userEmail, reports, order, quantity, frequency}) => {
  
  let results = carbon === 0  ? "" : (
    <Results 
      carbon={carbon} 
      petrol={petrol}
      order = {order}
      quantity = {quantity}
      frequency = {frequency} 
      saveReport={saveReport} 
      userEmail={userEmail} 
      reports={reports} />
  )

  return(
  <div className='container' id='mainBody' data-spy="scroll"> 
    <Calculator getCalculation={getCalculation} />
    {results} <br />
    <button type="button" className="btn btn-dark" onClick={()=>dispatch(logout())}>Logout </button>
  </div>
  )
}

const mapStatetoProps = ({calculator:{result, carbonCost, order, quantity, frequency}, login:{user}}) => {
  return {
    carbon: result,
    petrol:carbonCost,
    order, 
    quantity,
    frequency,
    userEmail: user.email,
    reports: user.reports
  }
}

export default connect(mapStatetoProps)(HomePage)