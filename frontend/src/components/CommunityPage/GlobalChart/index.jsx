import React from 'react'
import Breakup from './Breakup'
import FoodDistribution from './FoodDistribution'

class GlobalChart extends React.Component {
  componentDidMount() {
    this.props.grabAllReports()
  }

  render() {
    let reports = this.props.reports.reports === undefined ? [] : this.props.reports.reports
    let altReports = this.props.reports.altReports === undefined ? [] : this.props.reports.altReports
    let carbon = 0
    let alteredCarbon = 0
    let petrol = 0
    let totalHamburger = 0
    let totalSteak = 0
    let totalBeef = 0
    reports.forEach((report)=> {
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
    altReports.forEach((report)=> {
      alteredCarbon += report.result
    })
    return(
      <div>
      <h1>Global Community</h1>
      <h4>Total: {carbon}kg</h4>
      <br />
      <Breakup carbon={carbon} alteredCarbon={alteredCarbon} />
      <FoodDistribution 
        totalBeef={totalBeef} 
        totalHamburger={totalHamburger} 
        totalSteak={totalSteak} 
      />
      </div>
    )
  }
}

export default GlobalChart