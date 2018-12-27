import React from 'react'
import { Bar } from 'react-chartjs-2'


const Breakup = ({carbon}) => {

  const percent = {
    foodProduction: Math.round(carbon * 0.83),
    wsAndRetail: Math.round(carbon * 0.05),
    finalDelivery: Math.round(carbon * 0.04),
    supplyChain: Math.round(carbon * 0.08)
  }
  const {foodProduction, wsAndRetail, finalDelivery, supplyChain} = percent
  
  
  const chartData = {
    labels: [
      `Food Production`,
      `Whole Sale and retail`,
      `Final delivery transport`,
      `Supply chain transport`
    ],
    datasets: [{
      label: "Carbon Emissions produced per year/kg",
      data:[foodProduction, wsAndRetail, finalDelivery, supplyChain],
      backgroundColor: [
        '#80B641',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#ABD038',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
  }

  return(
    <React.Fragment>
      <h5> Total Carbon Emission Breakup</h5>
      <Bar data={chartData} />
    </React.Fragment>
  )
}

export default Breakup