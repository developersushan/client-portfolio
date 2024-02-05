import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountDown = () => {
    const [scrollCount,setScrollCount] = useState(false)

    const [complete,setComplete] =useState([])
    const [partner,setPartner] =useState([])
    const [client,setClient] =useState([])
    const [award,setAward] =useState([])
  
    //complete count show
    useEffect(()=>{
      axios.get('http://localhost:8500/completeCount')
      .then(res=>{
        setComplete(res.data)
      })
      .then(err=>console.log(err))
    },[])
  //partner count show
    useEffect(()=>{
      axios.get('http://localhost:8500/partner')
      .then(res=>{
        setPartner(res.data)
      })
      .then(err=>console.log(err))
    },[])
    //client count show
    useEffect(()=>{
      axios.get('http://localhost:8500/client')
      .then(res=>{
        setClient(res.data)
      })
      .then(err=>console.log(err))
    },[])
    //award count show
    useEffect(()=>{
      axios.get('http://localhost:8500/award')
      .then(res=>{
        setAward(res.data)
      })
      .then(err=>console.log(err))
    },[])
    const completeCount = complete.map(item => item.complete)
    const partnerCount = partner.map(item => item.partner)
    const clientCount = client.map(item => item.client)
    const awardCount = award.map(item => item.award)
    
    return (
        <div data-aos="fade-up" className='grid md:grid-cols-4 grid-cols-2 py-2 md:py-4 w-full gap-10'>
            <div className=" backdrop-blur-md  py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-3xl md:text-4xl font-semibold"><CountUp start={0} end={`${completeCount}`} duration={10} delay={2} />+</h3>}</ScrollTrigger>
                <h3 className="text-md md:text-xl   text-gray-400">
                Completed Projects
                </h3>
            </div>
            <div className=" backdrop-blur-md  py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-3xl md:text-4xl font-semibold"><CountUp start={0} end={`${partnerCount}`} duration={5} delay={2} />+</h3>}</ScrollTrigger>
                <h3 className=" text-md md:text-xl text-gray-400 font-semibold">
                Partners & Clients
                </h3>
            </div>
            <div className=" backdrop-blur-md  py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-3xl md:text-4xl font-semibold"><CountUp start={0} end={`${clientCount}`} duration={5} delay={2} /></h3>}</ScrollTrigger>
                <h3 className="text-md md:text-lg text-gray-400 font-semibold">
                Headquarters
                </h3>
            </div>
            <div className=" backdrop-blur-md  py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-3xl md:text-4xl font-semibold"><CountUp start={0} end={`${awardCount}`} duration={15} delay={2} /></h3>}</ScrollTrigger>
                <h3 className="text-md md:text-lg text-gray-400 font-semibold">
                Award Winner
                </h3>
            </div>
        </div>
    )
}

export default CountDown
