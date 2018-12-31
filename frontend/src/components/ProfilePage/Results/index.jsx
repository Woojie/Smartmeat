import React from 'react'


const Results = ({carbon, petrol, number}) => {
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)

  return(
    <React.Fragment>
    <div className="card">
    <div className="card-header" id={`heading${number}`}>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#collapse${number}`} aria-expanded="false" aria-controls={`collapse1${number}`}>
        Report #{number+1}
        </button>
      </h5>
    </div>
    <div id={`collapse${number}`} className="collapse" aria-labelledby={`heading${number}`} data-parent="#accordionExample">
      <div className="card-body">
      <h5><b>{carbon}kg</b> of GHG produced per year.</h5>
      <h4>In Comparison:</h4>
      <h5><b>{drive}km</b> travelled by car </h5>
      <h5>Heat, cool and travel Canadian household for {directHousehold}days. </h5>
      <h5>{globalCitizen}% of an average human's yearly GHG emssion.</h5>
      <button>Delete Report</button>
      </div>
    </div>
  </div>

  </React.Fragment>
  )
}

export default Results