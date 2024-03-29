import React from 'react'
import ReactApexChart from 'react-apexcharts'

const PieChart = () => {
    const series =[44, 55, 41, 17, 15]
   const options={
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  
  return (
    <div className='z-40'>
       <ReactApexChart options={options} series={series} type="donut" />
    </div>
  )
}

export default PieChart
