import React from 'react'
import { Doughnut } from 'react-chartjs-2'



const DoughnutChart = ({ firstName, carbon, alteredCarbon, userCarbon, userCarbonDitched }) => {
  
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
      `Carbon Produced`,
      `Carbon Ditched`,
      `${firstName}'s Carbon Produced `,
      `${firstName}'s Carbon Ditched`
    ],
    datasets: [{
      label: ["Carbon Emissions produced per year/kg"],
      data:[carbon, alteredCarbon, userCarbon, userCarbonDitched],
      backgroundColor: [
        '#4286f4',
        '#db0707',
        '#765600',
        '#0e991e'
        ],
        hoverBackgroundColor: [
        '#5690ef',
        '#711818',
        '#d1ae50',
        '#45e157'
        ]
    }
    ]
  }

  const noUserChartData = {
    labels: [
      `Carbon Produced`,
      `Carbon Ditched`,

    ],
    datasets: [{
      label: ["Carbon Emissions produced per year/kg"],
      data:[(carbon + userCarbon), (alteredCarbon + userCarbonDitched)],
      backgroundColor: [
        '#694000',
        '#076c13',

        ],
        hoverBackgroundColor: [
        '#d68300',
        '#0dd525',

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
              <Doughnut data={firstName === undefined ? noUserChartData : chartData} height={450} options={chartOptions}/>
            </div>
          </div>
    </React.Fragment>
  )
}

export default DoughnutChart