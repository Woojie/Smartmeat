import React from 'react'
import Breakup from './Breakup'
import FoodDistribution from './FoodDistribution'

class GlobalChart extends React.Component {
  componentDidMount() {
    this.props.grabAllReports()
  }

  render() {
    let reports = this.props.reports
    let carbon = 0
    let petrol = 0
    let totalHamburger = 0
    let totalSteak = 0
    let totalBeef = 0

    reports.forEach((report)=>{
      carbon += report.carbon
      petrol += report.petrol
      if(report.order === "hamburger") {
        totalHamburger += report.quantity + report.frequency
      }else if(report.order === "steak") {
        totalSteak += report.quantity + report.frequency 
      }else {
        totalBeef += report.quantity + report.frequency 
      }

    })
    
    return(
      <div>
      <h1>Global Community</h1>
      <h4>Total: {carbon}kg</h4>
      <br />
      <Breakup carbon={carbon} />
      <FoodDistribution totalBeef={totalBeef} totalHamburger={totalHamburger} totalSteak={totalSteak} />
      </div>
    )
  }
}

export default GlobalChart