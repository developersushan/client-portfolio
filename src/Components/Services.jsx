import React from 'react'
import ScrollSlide from './ScrollSlide'
import GigBox from './GigBox'

const Services = () => {
  return (
    <div className='xl:bg-[#2D2E32] bg-none  '>
        
        <div className='lg:w-8/12  md:w-full py-2 mx-auto text-center'>
            <div className='bg-indigo-500 rounded'>
            <ScrollSlide></ScrollSlide>
            </div>
            <div>
              <h4 className='text-xl text-orange-500 py-2'>Services</h4>
              <h1 className=' text-2xl md:text-4xl '>Stay up to date with our fresh news</h1>
            </div>
            <GigBox></GigBox>
            
        </div>
    </div>
  )
}

export default Services
