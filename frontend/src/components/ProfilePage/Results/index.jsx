import React from 'react'


const Results = ({carbon, petrol, number}) => {
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)

  return(
    <React.Fragment>
    <div className='row'>
    <div className='col'>
    <h3>Report #{number+1}</h3>
    <h5><b>{carbon}kg</b> of GHG produced per year.</h5>
    <h4>In Comparison:</h4>

    <h5><b>{drive}km</b> travelled by car </h5>
    <h5>Heat, cool and travel Canadian household for {directHousehold}days. </h5>
    <h5>{globalCitizen}% of an average human's yearly GHG emssion.</h5>
    <button>Alter Report</button>
    <button>Delete Report</button>


    </div>

  </div>
  <br />
  <br />
  </React.Fragment>
  )
}

export default Results