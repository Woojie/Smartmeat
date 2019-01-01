import { Doughnut} from 'react-chartjs-2'
import React from 'react'


const DoughnutChart = ({data}) => {
  const percent = {
    foodProduction: Math.round(data * 0.83),
    wsAndRetail: Math.round(data * 0.05),
    finalDelivery: Math.round(data * 0.04),
    supplyChain: Math.round(data * 0.08)
  }
  const {foodProduction, wsAndRetail, finalDelivery, supplyChain} = percent
  const chartData = {
    labels: [
      `Food Production: ${foodProduction} kg of Carbon`,
      `Whole Sale and retail: ${wsAndRetail} kg of Carbon`,
      `Final delivery transport: ${finalDelivery}kg of Carbon`,
      `Supply chain transport: ${supplyChain}kg of Carbon`
    ],
    datasets: [{
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
  const chartOptions = {
    maintainAspectRatio: false

  }

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col" />
        <div className="col-6">
          <Doughnut data={chartData}  />
        </div>
        <div className="col" />
      </div>
    </div>
  )
}

export default DoughnutChart