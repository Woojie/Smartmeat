import React from 'react'
import { Doughnut } from 'react-chartjs-2'



const DoughnutChart = ({ firstName, carbon, alteredCarbon, userCarbon, userCarbonDitched }) => {
  
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