import React from 'react'
import { Bar } from 'react-chartjs-2'


const Breakup = ({ carbon, alteredCarbon, userCarbon, userCarbonDitched }) => {
  
  carbon = carbon - alteredCarbon
  const percent = {
    foodProduction: Math.round(carbon * 0.83),
    wsAndRetail: Math.round(carbon * 0.05),
    finalDelivery: Math.round(carbon * 0.04),
    supplyChain: Math.round(carbon * 0.08),
    altFoodProduction: Math.round(alteredCarbon * 0.83),
    altWsAndRetail: Math.round(alteredCarbon * 0.05),
    altFinalDelivery: Math.round(alteredCarbon * 0.04),
    altSupplyChain: Math.round(alteredCarbon * 0.08)
  }
  const {
    foodProduction, wsAndRetail, finalDelivery, supplyChain, 
    altFoodProduction, altWsAndRetail, altFinalDelivery, altSupplyChain
  } = percent
  
  const chartData = {
    labels: [
      `Food Production`,
      `Whole Sale and retail`,
      `Final delivery transport`,
      `Supply chain transport`
    ],
    datasets: [{
      label: ["Carbon Emissions produced per year/kg"],
      data:[foodProduction, wsAndRetail, finalDelivery, supplyChain],
      backgroundColor: [
        '#80B641',
        '#36A2EB',
        '#FFCE56',
        '#4286f4'
        ],
        hoverBackgroundColor: [
        '#ABD038',
        '#36A2EB',
        '#FFCE56',
        '#5690ef'
        ]
    },
    {
      label: ["User Ditched"],
      data:[altFoodProduction, altWsAndRetail, altFinalDelivery, altSupplyChain],
      backgroundColor: [
        '#980101',
        '#980101',
        '#980101',
        '#980101'

        ],
        hoverBackgroundColor: [
        '#f90000',
        '#f90000',
        '#f90000',
        '#f90000'
        ]
    }
    ]
  }
  
  const chartOptions = {
    scales: {
      xAxes: [{
        stacked: true
    }],
    yAxes: [{
        stacked: true
    }]

    }
  }

  return(
    <React.Fragment>
      <h5> Total Carbon Emission Breakup</h5>
      <Bar data={chartData} options={chartOptions} />
    </React.Fragment>
  )
}

export default Breakup