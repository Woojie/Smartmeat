import React from 'react'
import { connect } from 'react-redux'

import Report from './Report'
import GlobalChart from './GlobalChart'
import { getCalculation, grabAllReports } from '../../store'


const CommunityPage = ({user, reports}) => {

  return (
    <div  className='container' id='mainBody'>
      <h1>Community</h1>
      <br />
      <Report getCalculation={getCalculation}  user={user}/>
      <GlobalChart grabAllReports={grabAllReports} reports={reports.reports} />
    </div>
  )
}
const mapStateToProps = ({reports}) => {
  return {
    reports,
  }
}

export default connect(mapStateToProps)(CommunityPage)