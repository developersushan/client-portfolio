
import React from 'react'

const ContactFroms = () => {
const handleFromSubmit =(event)=>{
  event.preventDefault()
  const form = event.target
  const firstName = form.firstName.value
  const lastName = form.lastName.value
  const email = form.email.value
  const number =  form.number.value
  const message = form.message.value
  const users = {firstName,lastName,email,number,message}
  console.log(users)
}
  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold mb-4'>Contact Form</h3>
        <form onSubmit={handleFromSubmit} >
          <div className='flex gap-5'>
          <div className='w-full'>
              <label htmlFor="">First Name:*</label>
              <input  name='firstName' className='w-full py-1.5 px-3 bg-white rounded text-gray-500 text-sm font-normal border-[1px] border-gray-300 focus:border-1  outline-none input-field' type="text" placeholder='First Name' />
            </div>
            <div className='w-full'>
              <label htmlFor="">Last Name:*</label>
              <input  name='lastName' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' type="text" placeholder='Last Name' />
            </div>
          </div>
          <div className='w-full mt-2'>
              <label htmlFor="">Email:*</label>
              <input  name='email' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1 input-field outline-none' type="email" placeholder=' example@gmai.com' />
            </div>
            <div className='w-full mt-2'>
              <label htmlFor="">Phone:*</label>
              <input  name='number' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' type="number" placeholder='+8880198565248' />
            </div>
            <div className='w-full mt-2'>
            <label htmlFor="">Message:*</label>
          <textarea  className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button type='submit' className='btn-btn py-2 px-3 border bg-[#794FFC] text-white rounded mt-2'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactFroms
