import React from 'react'
import ScrollSlide from './ScrollSlide'
import GigBox from './GigBox'

const Services = () => {
  return (
    <div className='shadow-md bg-none  '>
        
        <div className='md:w-8/12 w-full py-2 px-4 md:-px0 mx-auto text-center'>
            <div className='bg-[#dfdfdf] rounded'>
            <ScrollSlide></ScrollSlide>
            </div>
            <div>
              <h4 className='text-xl text-orange-500 py-2'>Services</h4>
              <h3 className=' text-2xl md:text-4xl '>Stay up to date with our fresh news</h3>
            </div>
            <GigBox></GigBox>
            
        </div>
    </div>
  )
}

export default Services
