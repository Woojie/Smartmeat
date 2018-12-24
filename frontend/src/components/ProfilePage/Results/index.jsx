import React from 'react'
import DoughnutChart from './Charts/DoughnutChart'

const Results = ({carbon, petrol, number}) => {
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)

  return(
    <div className='row'>
    <div className='col'>
    <h3>Report #{number+1}</h3>
    <span>In total, your consumption produced <b>{carbon}kg</b> of greenhouse gas emissions per year. </span>
    <h3>In Comparison:</h3>
    <span>This is the equivalent of driving <b>{drive}km</b> on a standard vehicle in the city in Canada. </span>
    <br />
    <span>You can heat, cool and drive an average Canadian household for {directHousehold}days. </span>

    <h2>Breakdown of how the emission is produced:</h2>
    <DoughnutChart data={carbon} />

    <h2>You vs the World</h2>
    <p>Per capita, a person produces 4.4 tonnes GHG emssion/year, your food consumption alone would make up {globalCitizen}% of that figure</p>
    <button>Delete Report</button>
    <button>Alter Report</button>

    </div>
    <br />
  </div>
  )
}

export default Results