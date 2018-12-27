import React from 'react'
import { Bar } from 'react-chartjs-2'

class GlobalChart extends React.Component {
  componentDidMount() {
    this.props.grabAllReports()
  }
  render() {
    let carbon = 0
    let petrol = 0
    this.props.reports.forEach((report)=>{
      carbon += report.carbon
      petrol += report.petrol
    })
  
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
      <div>
      <h1>Global Community</h1>
      <h4> Total Carbon Emission Breakthrough</h4>
      <h5>Total: {carbon}kg</h5>
      <Bar data={chartData} />
      </div>
    )
  }
}

export default GlobalChart