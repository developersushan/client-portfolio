import React, { useEffect, useState } from 'react'

const ContactUs = () => {
    const [contactUs,setContactUs] = useState([])
    useEffect(()=>{
      const fetchData= async()=>{
        const res = await fetch('http://localhost:5173/contactUs.json')
        const data = await res.json()
        // console.log(data)
        setContactUs(data)
      }
      fetchData()
    },[])
  return (
    <div className='bg-white'>
      <h3 className='text-2xl font-semibold '>Contact Us</h3>
      {
        contactUs.map((item) =>(
          <div key={item.id} className='mt-4'>
          <div className='text-gray-700'>
            <p>Name : {item.name}</p>
            <p>Email: {item.email}</p>
          </div>  
          <div className='text-gray-700'>
            <h2>Address: {item.address}</h2>
            <p>WhatsApp: {item.phone}</p>
          </div>

           </div>
        ))
      }
      <div className='mt-3 border-t-[1px] border-gray-300 py-4'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11790.715682934093!2d90.16825372816947!3d24.320412123085166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560fcf8d3654b7%3A0x4b393fee08e00f89!2sSakhipur!5e0!3m2!1sen!2sbd!4v1703138887867!5m2!1sen!2sbd" className='w-full md:w-[600px]'  height="300" style={{border:0,borderRadius:'5px',boxShadow:'5px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default ContactUs
