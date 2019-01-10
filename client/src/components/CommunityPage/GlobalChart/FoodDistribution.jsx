import React from 'react'
import { Bar } from 'react-chartjs-2'


const FoodDistribution = ({totalHamburger, totalSteak, totalBeef}) => {
  
  const chartData = {
    labels: [
      `Hamburger`,
      `Steak`,
      `Hamburger`,
    ],
    datasets: [{
      label: "Food Eaten per week",
      data:[totalHamburger, totalSteak, totalBeef],
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
      <h5> Types of Food Consumed</h5>
      <Bar data={chartData} />
    </React.Fragment>
  )
}
export default FoodDistribution