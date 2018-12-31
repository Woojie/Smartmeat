import React from 'react'
import Breakup from './Breakup'

class GlobalChart extends React.Component {
  componentDidMount() {
    this.props.grabAllReports()
    console.log('hello')
  }


  render() {
    let reports = this.props.reports.reports === undefined ? [] : this.props.reports.reports
    let altReports = this.props.reports.altReports === undefined ? [] : this.props.reports.altReports
    let email = this.props.email


    let carbon = 0
    let alteredCarbon = 0
    let userCarbon = 0
    let userCarbonDitched = 0
    let petrol = 0
    reports.forEach((report)=> {
      if (email === report.email) {
        userCarbon += report.carbon
      }else {
      carbon += report.carbon
      petrol += report.petrol
  
      }

    })
    altReports.forEach((report)=> {
      if (email  === report.email) {
        userCarbonDitched += report.result
        console.log('user', userCarbonDitched)
      } else {
      alteredCarbon += report.result
      console.log('all', alteredCarbon)
      }

    })
  
    
    
    
    return(
      <div>
      <h1>Global Community</h1>
      <h4>Total: {carbon + userCarbon}kg of greenhouse gas emissions created by SmartMeat users.</h4>
      <br />
      <Breakup 
        email={email}
        carbon={carbon} 
        alteredCarbon={alteredCarbon} 
        userCarbon = {userCarbon} 
        userCarbonDitched = {userCarbonDitched} />
      </div>
    )
  }
}

export default GlobalChart