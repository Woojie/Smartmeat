import React from 'react'

import CalcForm from './CalcForm'


const Calculator = (props) => {
  return(
    <div >
      <div className="d-flex flex-column align-items-center justify-content-center h-75">
        <div className="row">
          <p className="h1 d-block mx-auto">Instant Calculator</p>
        </div>

        <div className="row">
          <CalcForm getCalculation = {props.getCalculation} />
        </div>
      </div>
    </div>
    
  )

}

export default Calculator