import React from 'react'
import { deleteReport } from '../../../store/index'


const Results = ({ carbon, petrol, number, user, id, order, date }) => {
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)
  let newDate = new Date(date)

  return(
    <React.Fragment>
    <div className="card">
    <div className="card-header" id={`heading${number}`}>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapse${number}`} aria-expanded="false" aria-controls={`collapse1${number}`}>
        Report #{number+1} with { order } on { newDate.toDateString() }
        </button>
      </h5>
    </div>

    <div id={`collapse${number}`} className="collapse" aria-labelledby={`heading${number}`} data-parent="#accordionExample">
      <div className="card-body">
      <h5><b>{carbon} kg</b> of GHG produced per year.</h5>
      <h4>In Comparison:</h4>
      <h5><b>{drive} km</b> travelled by car </h5>
      <h5>Heat, cool and travel Canadian household for {directHousehold} days. </h5>
      <h5><b>{globalCitizen}%</b> of an average human's yearly GHG emssion.</h5>
      <button className="btn btn-outline-danger" onClick={()=>deleteReport(user, id)}>Delete Report</button>
      <p></p>
      </div>
    </div>
  </div>

  </React.Fragment>
  )
}

export default Results