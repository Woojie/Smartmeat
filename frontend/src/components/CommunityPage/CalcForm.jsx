import React, {Component} from 'react'

class CalcForm extends Component {
  state={
    order: "hamburger",
    quantity: 1,
    frequency: 1,
    loading: false
  }
  componentDidMount(){
    let { order, quantity, frequency } = this.props
    this.setState({
      order,
      quantity,
      frequency,
      oldOrder:order,
      oldQuantity: quantity,
      oldFrequency: frequency
    })
    this.props.getCalculation(0, '', 0, 0)
  }

  
  handleOrderSelect = (e) => {this.setState({order:e.target.value})}
  handleQuantitySelect = (e) => {this.setState({quantity:e.target.value})}
  handleFrequencySelect = (e) => {this.setState({frequency:e.target.value})}

  render(){
    let { order, quantity, frequency, oldFrequency, oldOrder, oldQuantity } = this.state
    let calc = this.props.result === 0 ? "" : `You will save ${this.props.result}kg of GHG!`
  
    return(

    <form 
      onSubmit={()=> {this.setState({
        loading: true
        }, ()=>{
          setTimeout(()=>{
            this.setState({
              loading:false
            })
          }, 5000)

        })}}
    >
    <div className="form-group">
      <label>What are you ordering? <i>Old Order: {oldOrder}</i></label>
      <select className="form-control" name="order" value={order} onChange={this.handleOrderSelect}>
        <option value='hamburger'>Hamburger</option>
        <option value='steak'>Steak</option>
        <option value='beef'>Beef, per serving</option>
        <option value='cheeseburger'>Cheeseburger</option>
        <option value='chickenburger'>Chicken burger</option>
        <option value='eggs'>Eggs</option>
        <option value='tunasandwich'>Tuna sandwich</option>
        <option value='coffee'>Coffee</option>
        <option value='blt'>BLT</option>
      </select>
    

      <label>How many you ordering<i>Old quantity: {oldQuantity}</i></label>
      <select className="form-control" name="quantity" value={quantity} onChange={this.handleQuantitySelect}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}> 4</option>
      </select>
  
      <label>How many times per week <i>Old frequency {oldFrequency}</i></label>
      <select className="form-control" name="frequency" value={frequency} onChange={this.handleFrequencySelect}> 
        <option value={1}>Once a week</option>
        <option value={2}>Twice a week</option>
        <option value={3}>Three times a week</option>
        <option value={7}>Every day</option>
      </select>
      </div>
      <button type='button' className='btn btn-success' onClick={(e)=>this.props.getCalculation(e, order, quantity, frequency)}>Calculate</button>
      
      {calc}
    </form>

    )
  }
}
export default CalcForm