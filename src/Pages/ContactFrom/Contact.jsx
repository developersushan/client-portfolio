import React from 'react'
import ContactUs from '../../Components/ContactUs'
import ContactFroms from '../../Components/ContactFroms';

const Contact = () => {
  return (
    <div className="bg-[#EBEBEB] py-8" >
      <div className="w-full md:w-8/12 py-2 mx-auto  text-black">
        <div className=' md:flex gap-5 shadow-md '>
          <div className='bg-white p-5 rounded-sm w-full md:w-6/12'>
              <ContactUs/>
          </div>
          <div className=' bg-white p-5  w-full md:w-6/12'>
            <ContactFroms/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
