import React from 'react'
import { connect } from 'react-redux'

import Report from './Report'
import GlobalChart from './GlobalChart'
import { alterReport } from '../../store'
import { grabAllReports } from '../../actions/globalReport'
import { getCalculation } from '../../actions/calculator'


const CommunityPage = ({user, reports, calculator, getCalculation, grabAllReports}) => {
  let alterReportText = user.reports === undefined ? "Login to alter reports!"
  : "Alter the report below to see how much you save!"
  return (
    <div className="py-5 light">
      <div className="pt-5 container">
        <p className="h5 text-center">{alterReportText}</p>
        <Report alterReport={alterReport} getCalculation={getCalculation} calculator={calculator} user={user}/>
        <GlobalChart grabAllReports={grabAllReports} reports={reports.reports} email={user.email} firstName = {user.firstName} />
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

export default connect(mapStateToProps, {getCalculation, grabAllReports})(CommunityPage)