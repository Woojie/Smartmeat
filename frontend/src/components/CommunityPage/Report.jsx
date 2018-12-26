import React from 'react'
import ModalAlterReport from './ModalAlterReport'

const Report = ( {user:{email, reports}, getCalculation} ) => {
  
  return (
    <div>
      <h2>Report ID: {reports[reports.length-1].id}</h2>
      <h5><b>{reports[reports.length-1].carbon}kg</b> of GHG produced per year.</h5>
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#saveReportModal">Alter Report</button>
      <button>Delete Report</button>
      <p>Note: You can only edit the latest report on the community page, for more, please go to your profile!</p>
      <ModalAlterReport getCalculation={getCalculation} report={reports[reports.length-1]} email={email} />
      
    </div>

    
  )
}

export default Report