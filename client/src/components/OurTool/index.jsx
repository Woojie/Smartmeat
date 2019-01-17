import React from 'react'
import { connect } from 'react-redux'


import { saveReport } from '../../store'
import { getCalculation } from '../../actions/calculator'
import Calculator from './Calculator'
import Results from './Results'


const OurTool = ({ carbon, petrol,  userEmail, reports, order, quantity, frequency,getCalculation }) => {
  
  let results = carbon === 0  ? "" : 
    <Results 
      carbon={carbon} 
      petrol={petrol}
      order = {order}
      quantity = {quantity}
      frequency = {frequency} 
      saveReport={saveReport} 
      userEmail={userEmail} 
      reports={reports} />
  

  return(
  <div className="light main-body">
    <Calculator getCalculation={getCalculation} />
    {results}
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

export default connect(mapStatetoProps, {getCalculation})(OurTool)