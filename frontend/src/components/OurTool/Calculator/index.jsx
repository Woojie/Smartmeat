import React from 'react'

import CalcForm from './CalcForm'


const Calculator = (props) => {
  return(
    <div className='container'>
      <div className='row'>
      <h1>
        Instant Calculator <br />
      </h1>
      </div>
      <div className='row'>
     <CalcForm getCalculation = {props.getCalculation} />
     </div>
    </div>
  )

}

export default Calculator