import React from 'react'
import Breakup from './Breakup'

class GlobalChart extends React.Component {
  componentDidMount() {
    this.props.grabAllReports()
  }
  
  render() {

    let reports = this.props.reports.reports === undefined ? [] : this.props.reports.reports
    let altReports = this.props.reports.altReports === undefined ? [] : this.props.reports.altReports
    let email = this.props.email


    let carbon = 0
    let alteredCarbon = 0
    let userCarbon = 0
    let userCarbonDitched = 0

    reports.forEach((report) => {
      
      let findAlteration = altReports.filter((altReport)=>report.id === altReport.id)
      if (findAlteration.length === 0 && email === report.email) {
        userCarbon += report.carbon
      } else if (findAlteration.length !== 0 && email === findAlteration[0].email) {
        let alteredUserResult = report.carbon - findAlteration[0].result
        userCarbonDitched += alteredUserResult
        userCarbon += (report.carbon - alteredUserResult )
      } else if (findAlteration.length === 0 && email !==report.email) {
        carbon += report.carbon
      } else if (findAlteration.length !== 0 && email !==findAlteration[0].email) {
        let alteredResult = report.carbon - findAlteration[0].result
        alteredCarbon += alteredResult
        carbon += (report.carbon - alteredResult)
      }

    })

    let directHousehold = Math.round((userCarbonDitched+alteredCarbon) / 31)

    
    
    return(
        <div>
          <p className="h1 text-center my-5">Global Community</p>

          <p>Total: <strong>{carbon + userCarbon} kg</strong> of greenhouse gas emissions created by SmartMeat users.</p>

          <p><strong>{userCarbonDitched + alteredCarbon} kg</strong> of greenhouse gas emissions saved by SmartMeat Users!!</p>
          
          <p>With the amount saved, you can heat, cool and drive an average Canadian household for <strong>{directHousehold} days!</strong></p>

          <Breakup 
            firstName = {this.props.firstName}
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