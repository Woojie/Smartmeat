import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import DoughnutChart from './Charts/DoughnutChart'

const Results = ({carbon, petrol, order, quantity, frequency, saveReport, userEmail, reports}) => {
  let [modal, modalClose] = React.useState(false)
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)
  let modalText = reports === undefined ? "In order to save reports, you must log in!" 
  : "Thank you for using the Carbon Emissions Calculator, now that you know just much emission is produced upon eating meat, would you like to try and ditch your consumption just a little bit to see how much difference it would make?" 
  let hiddenButton = {
    display: reports === undefined ? "none" : ""
  }
  let report;
  if (reports === undefined) {
    report = ""
  }else if (reports.length === 0) {
    report = {
      email: userEmail,
      carbon, 
      petrol, 
      order,  
      quantity,
      frequency,
      date: new Date(),
      id:uuidv4()
    }
  }else {
    report = reports.concat({
      email: userEmail,
      carbon, 
      petrol, 
      order, 
      quantity,
      frequency,
      date: new Date(),
      id:uuidv4()
    })
  }

  return(

    modal ? <Redirect to="/community" exact /> 
    :(
    <div className="container pb-5">
      <p className="h3">Results:</p>

      <p>In total, your consumption produced <strong>{carbon} kg</strong> of greenhouse gas emissions per year. </p>
      
      <p className="h3">In Comparison:</p>
      <img src="./images/car2.svg" className="img-fluid" alt="Responsive image"/>
      <p id='carText'>This is the equivalent of driving <strong>{drive} km</strong> on a standard vehicle in the city in Canada.  </p> 

      <img src="./images/house1.svg" className="img-fluid" alt="Responsive image"/>
      <p id='householdText'>You can heat and cool an average Canadian household for <strong>{directHousehold}</strong> days.</p>
      
      <p className="h4 text-center">Breakdown of how the emission is produced:</p>

      <DoughnutChart data={carbon} />
      
      <p className="h5 text-center">You vs the World</p>

      <p>Per capita, a person produces 4.4 tonnes GHG emssion/year, your food consumption alone would make up {globalCitizen}% of that figure</p>

      <button type="button" className="btn btn-info mx-auto d-block" data-toggle="modal" data-target="#saveReportModal"  onClick={() => saveReport(report, userEmail)}>Save Report</button>

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
              {modalText}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <Link to="/community">
                <button style={hiddenButton}  data-dismiss="modal" type="button" className="btn btn-primary" onClick={() => modalClose(true)}> 
                  YES!
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
    )
  )
}

export default Results