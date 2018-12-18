import React, {Component} from 'react'

import CalcForm from './CalcForm'

class Calculator extends Component {

  render(){
  return(
    <div>
      <h1>
        Instant Calculator <br />
      </h1>
     <CalcForm getCalculation = {this.props.getCalculation} />
    </div>
  )
}
}

export default Calculator