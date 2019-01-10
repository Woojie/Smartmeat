import React from 'react'

import CalcForm from './CalcForm'


const Calculator = (props) => {
  return(
      <div className="py-5 d-flex flex-column align-items-center">
        <p className="pt-5 h1 d-block mx-auto text-center">Instant Calculator</p>
        <CalcForm getCalculation = {props.getCalculation} />
      </div>
  )

}

export default Calculator