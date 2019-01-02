import React from 'react'
import ModalAlterReport from './ModalAlterReport'

const Report = ( {user:{email, reports, alteredReports}, getCalculation, calculator, alterReport} ) => {
  
  if (reports === undefined || reports[0] === undefined ) {
    return (
      <div>

      </div>
    )
  } else {
  return (
    <div>
      <a className="btn btn-secondary d-block" data-toggle="collapse" href="#latest-report" role="button" aria-expanded="false" aria-controls="collapseExample">
        Latest Report
      </a>
      
      <div className="collapse" id="latest-report">
          <p className="mt-2"><strong>{reports[reports.length - 1].carbon}kg</strong> of GHG produced per year.</p>

          <button type="button" className="btn btn-outline-info mr-2" data-toggle="modal" data-target="#saveReportModal">Alter Report</button>

          <button className="btn btn-outline-danger">Delete Report</button>
          
          <p><em>Note: You can only edit the latest report on the community page, for more, please go to your profile!</em></p>

          <ModalAlterReport
            getCalculation={getCalculation}
            alteredReports={alteredReports}
            calculator={calculator}
            report={reports[reports.length - 1]}
            email={email}
            alterReport={alterReport}
          />
      </div>
    </div>

  //    <div className="accordion">
  //      <div className="card">
  //        <div className="card-header" id="headingOne">
  //          <h5 className="mb-0">
  //            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
  //              Report ID: {reports[reports.length-1].id}
  //            </button>
  //          </h5>
  //        </div>

  //      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
  //        <div className="card-body">
  //          <h5><b>{reports[reports.length-1].carbon}kg</b> of GHG produced per year.</h5>
  //            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#saveReportModal">Alter Report</button>
  //            <button className="btn btn-danger">Delete Report</button>
  //            <ModalAlterReport 
  //              getCalculation={getCalculation} 
  //              alteredReports = {alteredReports}
  //              calculator={calculator} 
  //              report={reports[reports.length-1]} 
  //              email={email} 
  //              alterReport={alterReport}
  //            />
  //        </div>
  //      </div>
  //    </div>
  //  </div>    
  )
  }
}

export default Report