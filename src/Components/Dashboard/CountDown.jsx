import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { HiOutlineUsers } from "react-icons/hi2";
const CountDown = () => {
  const [users,setUsers] = useState([])
  const [complete,setComplete] =useState([])
  const [clicked,setClicked] =useState([])

  useEffect(()=>{
      axios.get( `http://localhost:8500/contact`)
      .then(res =>{
          setUsers(res.data)
      })
      .then(err=>console.log(err))

  },[])
  const client = users.map(item=>item)

      //complete count show
      useEffect(()=>{
        axios.get('http://localhost:8500/completeCount')
        .then(res=>{
          setComplete(res.data)
        })
        .then(err=>console.log(err))
      },[])
    const completeCount = complete.map(item => item.complete)


      //complete count show
      useEffect(()=>{
        axios.get('http://localhost:8500/clickCount')
        .then(res=>{
          setClicked(res.data)
        })
        .then(err=>console.log(err))
      },[])
    const clickCount = clicked.map(item => item.clicked)
    

  return (
    <div>
            <div className='grid grid-cols-4 gap-10 px-10 mt-4'>
        <div className='bg-pink-500 flex items-end justify-between text-white rounded-md py-5 px-5'>
          <div>
            <span className='text-4xl'><HiOutlineUsers/></span>
            <h2>User's</h2>
          </div>
          <h1 className='text-3xl'>
          <CountUp start={0} end={189} duration={2.75}/>k
          </h1>
        </div>
        <div className='bg-indigo-500 flex items-end justify-between text-white rounded-md py-5 px-5'>
        <div>
            <span className='text-4xl'><HiOutlineUsers/></span>
            <h2>Client</h2>
          </div>
          <h1 className='text-3xl'>
          <CountUp start={0} end={`${client.length}`} duration={2.75}/>
          </h1>
        </div>
        <div className='bg-orange-500 flex items-end justify-between text-white rounded-md py-5 px-5'>
        <div>
            <span className='text-4xl'><HiOutlineUsers/></span>
            <h2>Click</h2>
          </div>
          <h1 className='text-3xl'>
          <CountUp start={0} end={`${clickCount.length}`} duration={2.75}/>
          </h1>
        </div>
        <div className='bg-green-500 flex items-end justify-between text-white rounded-md py-5 px-5'>
        <div>
            <span className='text-4xl'><HiOutlineUsers/></span>
            <h2>Project</h2>
          </div>
          <h1 className='text-3xl'>
          <CountUp start={0} end={`${completeCount}`} duration={2.75}/>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default CountDown
