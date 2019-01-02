import React from 'react'
import { Bar } from 'react-chartjs-2'


const Breakup = ({ email, carbon, alteredCarbon, userCarbon, userCarbonDitched }) => {
  carbon = carbon - alteredCarbon
  const percent = {
    foodProduction: Math.round(carbon * 0.83),
    wsAndRetail: Math.round(carbon * 0.05),
    finalDelivery: Math.round(carbon * 0.04),
    supplyChain: Math.round(carbon * 0.08),
    altFoodProduction: Math.round(alteredCarbon * 0.83),
    altWsAndRetail: Math.round(alteredCarbon * 0.05),
    altFinalDelivery: Math.round(alteredCarbon * 0.04),
    altSupplyChain: Math.round(alteredCarbon * 0.08),
    userFoodProduction: Math.round(userCarbon * 0.83),
    userWsAndRetail: Math.round(userCarbon * 0.05),
    userFinalDelivery: Math.round(userCarbon * 0.04),
    userSupplyChain: Math.round(userCarbon * 0.08),
    userDitchedAltFoodProduction: Math.round(userCarbonDitched * 0.83),
    userDitchedAltWsAndRetail: Math.round(userCarbonDitched * 0.05),
    userDitchedAltFinalDelivery: Math.round(userCarbonDitched * 0.04),
    userDitchedAltSupplyChain: Math.round(userCarbonDitched * 0.08)
  }
  const {
    foodProduction, wsAndRetail, finalDelivery, supplyChain, 
    altFoodProduction, altWsAndRetail, altFinalDelivery, altSupplyChain,
    userFoodProduction, userWsAndRetail, userFinalDelivery, userSupplyChain,
    userDitchedAltFoodProduction, userDitchedAltWsAndRetail, userDitchedAltFinalDelivery, userDitchedAltSupplyChain
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
        '#4286f4',
        '#4286f4',
        '#4286f4',
        '#4286f4'
        ],
        hoverBackgroundColor: [
        '#5690ef',
        '#5690ef',
        '#5690ef',
        '#5690ef'
        ]
    },
    {
      label: [`${email}'s Carbon Emission`],
      data:[userFoodProduction, userWsAndRetail, userFinalDelivery, userSupplyChain],
      backgroundColor: [
        '#1aad13',
        '#1aad13',
        '#1aad13',
        '#1aad13'

        ],
        hoverBackgroundColor: [
        '#42e23b',
        '#42e23b',
        '#42e23b',
        '#42e23b'
        ]
    },
    {
      label: [`${email}'s total Carbon Ditched`],
      data:[userDitchedAltFoodProduction, userDitchedAltWsAndRetail, userDitchedAltFinalDelivery, userDitchedAltSupplyChain],
      backgroundColor: [
        '#510707',
        '#510707',
        '#510707',
        '#510707'

        ],
        hoverBackgroundColor: [
        '#af0a0a',
        '#af0a0a',
        '#af0a0a',
        '#af0a0a'
        ]
    },
    {
      label: ["Total User Ditched"],
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

  const noUserChartData = {
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
        '#4286f4',
        '#4286f4',
        '#4286f4',
        '#4286f4'
        ],
        hoverBackgroundColor: [
        '#5690ef',
        '#5690ef',
        '#5690ef',
        '#5690ef'
        ]
    },
    {
      label: ["Total User Ditched"],
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
    }]},

    maintainAspectRatio: false
  }

  return(
    <React.Fragment>
          <div className="row">
            <div className="col-12">
              <Bar data={email === undefined ? noUserChartData : chartData} height={450} options={chartOptions}/>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Breakup