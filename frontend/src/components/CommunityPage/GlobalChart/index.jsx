import React from 'react'
import Breakup from './Breakup'

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
    reports.forEach((report)=> {
      carbon += report.carbon
      petrol += report.petrol
    })
    altReports.forEach((report)=> {
      alteredCarbon += report.result
    })
    return(
        <div>
          <p className="h1 text-center my-5">Global Community</p>

          <p>Total: <strong>{carbon + userCarbon}kg</strong> of greenhouse gas emissions created by SmartMeat users.</p>

          <p><strong>{userCarbonDitched + alteredCarbon}kg</strong> of greenhouse gas emissions saved by SmartMeat Users!!</p>
          
          <p>With the amount saved, you can heat, cool and drive an average Canadian household for <strong>{directHousehold}days!</strong></p>

          <Breakup 
            email={email}
            carbon={carbon} 
            alteredCarbon={alteredCarbon} 
            userCarbon = {userCarbon} 
            userCarbonDitched = {userCarbonDitched} 
          />
        </div>
    )
  }
}

export default GlobalChart