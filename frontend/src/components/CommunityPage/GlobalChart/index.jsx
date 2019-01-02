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
  
    reports.forEach((report)=> {
      if (email === report.email) {
        userCarbon += report.carbon
      }else {
      carbon += report.carbon
  
      }

    })
    altReports.forEach((report)=> {
      if (email  === report.email) {
        userCarbonDitched += report.result
        
      } else {
      alteredCarbon += report.result
      }

    })
  
    let directHousehold = Math.round((alteredCarbon+userCarbonDitched) / 41)

    
    
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