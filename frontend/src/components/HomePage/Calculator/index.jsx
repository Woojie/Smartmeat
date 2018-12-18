import React from 'react'

import CalcForm from './CalcForm'


const Calculator = (props) => {
  return(
    <div>
      <h1>
        Instant Calculator <br />
      </h1>
     <CalcForm getCalculation = {props.getCalculation} />
    </div>
  )

}

export default Calculator