import React, {Component} from 'react'


class Calculator extends Component {
  state={
    order: "hamburger",
    quantity: 1,
    frequency: 1,

  }

  handleOrderSelect = (e) => {this.setState({order:e.target.value})}
  handleQuantitySelect = (e) => {this.setState({quantity:e.target.value})}
  handleFrequencySelect = (e) => {this.setState({frequency:e.target.value})}

  render(){


  return(
    <div>
      <h1>
        Instant Calculator <br />
      </h1>
      <form>
        <label>what are you ordering?</label>
        <select name="order" value={this.state.order} onChange={this.handleOrderSelect}>
          <option value='hamburger'>Hamburger</option>
          <option value='steak'>Steak</option>
          <option value='beef'>Beef, per serving</option>
        </select>
        <br />
        <label>how many you ordering</label>
        <select name="quantity" value={this.state.quantity} onChange={this.handleQuantitySelect}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'> 4</option>
          </select>
          <br />
        <label>how many times per week</label>
        <select name="frequency" value={this.state.frequency} onChange={this.handleFrequencySelect}> 
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
      </form>
    </div>
  )
}
}

export default Calculator