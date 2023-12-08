import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const CountDown = () => {
    const [scrollCount,setScrollCount] = useState(false)
    return (
        <div data-aos="fade-up" className='grid grid-cols-4 py-4 w-full gap-10'>
            <div className=" backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={356} duration={10} delay={2} />+</h3>}</ScrollTrigger>
                <h3 className="text-xl   text-gray-400">
                Completed Projects
                </h3>
            </div>
            <div className=" backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={89} duration={5} delay={2} />+</h3>}</ScrollTrigger>
                <h3 className="text-xl text-gray-400 font-semibold">
                Partners & Clients
                </h3>
            </div>
            <div className=" backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={150} duration={5} delay={2} /></h3>}</ScrollTrigger>
                <h3 className="text-lg text-gray-400 font-semibold">
                Headquarters
                </h3>
            </div>
            <div className=" backdrop-blur-md text-white py-6 px-8 rounded-md shadow-lg">
                <ScrollTrigger onEnter={() => setScrollCount(true)} onExit={() => setScrollCount(false)}> {scrollCount && <h3 className="text-4xl font-semibold"><CountUp start={0} end={89} duration={15} delay={2} /></h3>}</ScrollTrigger>
                <h3 className="text-lg text-gray-400 font-semibold">
                Award Winner
                </h3>
            </div>
        </div>
    )
}

export default CountDown
