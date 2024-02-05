import React from 'react'
import CountDown from '../CountDown'
import ChartList from '../ChartList'
import Table from '../Table'


const MainDashboard = () => {
  return (
    <div className='z-40'>
      <div>
        <CountDown/>
      </div>
      <div>
        <ChartList/>
      </div>
      <div>
        <Table/>
      </div>
    </div>
  )
}

export default MainDashboard
