import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import RealTimeLineChart from './RealTimeLineChart'

const ChartList = () => {
  return (
    <div className='flex gap-4 px-10 mt-10'>
      <div className='w-5/12 shadow-lg -z-10 bg-gray-100'>
        <RealTimeLineChart/>
      </div>
      <div className='w-4/12 shadow-lg -z-10 bg-gray-100'>
        <LineChart/>
      </div>
      <div className='w-3/12 bg-slate-100 -z-10 shadow-lg'>
        <PieChart/>
      </div>
    </div>
  )
}

export default ChartList
