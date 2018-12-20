import React from 'react'
import DoughnutChart from './Charts/DoughnutChart'

const Results = ({carbon, petrol, saveReport, userEmail, reports}) => {
  let drive = Math.round(petrol * 9.9)
  let directHousehold = Math.round(carbon / 41)
  let globalCitizen = Math.round(carbon / 4400 * 100)
  let report =  reports.length === 0 ?{carbon, petrol,} : reports.concat({carbon, petrol,})
  console.log(reports)
  
  return(
    <div>
    <h3>Results</h3>
    <span>In total, your consumption produced <b>{carbon}kg</b> of greenhouse gas emissions per year. </span>
    <h3>In Comparison:</h3>
    <span>This is the equivalent of driving <b>{drive}km</b> on a standard vehicle in the city in Canada. </span>
    <br />
    <span>You can heat, cool and drive an average Canadian household for {directHousehold}days. </span>

    <h2>Breakdown of how the emssion is produced:</h2>
    <DoughnutChart data={carbon} />

    <h2>You vs the World</h2>
    <p>Per capita, a person produces 4.4 tonnes GHG emssion/year, your food consumption alone would make up {globalCitizen}% of that figure</p>
    <button onClick={() => saveReport(report, userEmail)}>Save Report</button>
  </div>
  )
}

export default Results