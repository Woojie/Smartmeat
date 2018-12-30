import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import DoughnutChart from './Charts/DoughnutChart'

const Results = ({carbon, petrol, order, quantity, frequency, saveReport, userEmail, reports}) => {
  let [modal, modalClose] = React.useState(false)
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)

  let report = reports === undefined ? "" : [reports.length === 0 ? {
    email: userEmail,
    carbon, 
    petrol, 
    order,  
    quantity,
    frequency,
    id:uuidv4()
  } : reports.concat({
    email: userEmail,
    carbon, 
    petrol, 
    order, 
    quantity,
    frequency,
    id:uuidv4()
  })]
  return(

    modal ? <Redirect to="/community" exact /> 
    :(
    <div className='row' id='results'>
    <div className='col'>
    <h3>Results</h3>
    <span>In total, your consumption produced <b>{carbon}kg</b> of greenhouse gas emissions per year. </span>
    <h3 className='comparisonHeaders'>In Comparison:</h3>
    <img src='./images/car.svg' alt="car" />
    <br />
    <span>This is the equivalent of driving <b>{drive}km</b> on a standard vehicle in the city in Canada. </span> 
    <br />

    <span>You can heat, cool and drive an average Canadian household for {directHousehold}days. </span>
    <img src='./images/house.svg' alt="house" />
    <br />
    <h2 className='comparisonHeaders'>Breakdown of how the emission is produced:</h2>
    <DoughnutChart data={carbon} />

    <h2>You vs the World</h2>
    <p>Per capita, a person produces 4.4 tonnes GHG emssion/year, your food consumption alone would make up {globalCitizen}% of that figure</p>
    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#saveReportModal"  onClick={() => saveReport(report, userEmail)}>Save Report</button>
    </div>

    <div className="modal fade" id="saveReportModal" tabIndex="-1" role="dialog" aria-labelledby="saveReportModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Thank You!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Thank you for using the Carbon Emissions Calculator, now that you know just much emission is produced upon eating meat, would you like to try and ditch your consumption just a little bit to see how much difference it would make?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <Link to="/community"><button data-dismiss="modal" type="button" className="btn btn-primary" onClick={() => modalClose(true)} >YES!</button></Link>
      </div>
    </div>
  </div>
</div>
  </div>
    )
  )
}

export default Results