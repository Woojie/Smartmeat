import React from 'react'
import { connect } from 'react-redux'

import Report from './Report'
import GlobalChart from './GlobalChart'
import { getCalculation, grabAllReports, alterReport } from '../../store'


const CommunityPage = ({user, reports, calculator}) => {

  return (
    <div className="py-5 light">
      <div className="pt-5 container">
        <p className="h5 text-center">Alter the report below to see how much you save!</p>
        <Report alterReport={alterReport} getCalculation={getCalculation} calculator={calculator} user={user}/>
        <GlobalChart grabAllReports={grabAllReports} reports={reports.reports} email={user.email} />
      </div>
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