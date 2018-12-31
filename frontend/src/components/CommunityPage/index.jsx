import React from 'react'
import { connect } from 'react-redux'

import Report from './Report'
import GlobalChart from './GlobalChart'
import { getCalculation, grabAllReports, alterReport } from '../../store'


const CommunityPage = ({user, reports, calculator}) => {

  return (
    <div  className='container' id='mainBody'>
    
      <br />
      <Report alterReport={alterReport} getCalculation={getCalculation} calculator={calculator} user={user}/>
      <br />
      <GlobalChart grabAllReports={grabAllReports} reports={reports.reports} email={user.email} />
    </div>
  )
}
const mapStateToProps = ({reports, calculator}) => {
  return {
    reports,
    calculator
  }
}

export default connect(mapStateToProps)(CommunityPage)