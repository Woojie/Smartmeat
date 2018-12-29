import React from 'react'
import ModalAlterReport from './ModalAlterReport'

const Report = ( {user:{email, reports, alteredReports}, getCalculation, calculator, alterReport} ) => {
  
  return (
    <div className='accordion'>
      <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Report ID: {reports[reports.length-1].id}
        </button>
      </h5>
    </div>
    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <h5><b>{reports[reports.length-1].carbon}kg</b> of GHG produced per year.</h5>
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#saveReportModal">Alter Report</button>
          <button className="btn btn-danger">Delete Report</button>
          <p>Note: You can only edit the latest report on the community page, for more, please go to your profile!</p>
          <ModalAlterReport 
            getCalculation={getCalculation} 
            alteredReports = {alteredReports}
            calculator={calculator} 
            report={reports[reports.length-1]} 
            email={email} 
            alterReport={alterReport}
          />
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Report ID #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Report ID #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>

    </div>

    
  )
}

export default Report