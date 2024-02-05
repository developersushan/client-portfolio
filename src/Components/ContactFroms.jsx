
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';

const ContactFroms = () => {

const [error,setError] =useState('')
const [inputValue, setInputValue] = useState('');
const [isValid, setIsValid] = useState(true);


const form = useRef();
const handleFromSubmit =(event)=>{
  event.preventDefault()
  const inputFrom = event.target
  const firstName = inputFrom.from_first_name.value;
  const lastName = inputFrom.from_last_name.value
  const email = inputFrom.from_email.value
  const number =  inputFrom.from_number.value
  const message = inputFrom.message.value
  const users = {firstName,lastName,email,number,message}

  axios.post('http://localhost:8500/contact',users)
  .then(res=>{
    console.log('successfully done')
  })
  .then(err =>console.log(err))
  
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return setError('Please enter your valid email ')
  }
  const numberRegex = /^[1-9]\d*$/;
  if(numberRegex.test(number)){
    return 
  }
  emailjs.sendForm('service_78ikmz7', 'template_yzadwri', form.current, 'ZTG23n_BHzhkJXix2')
  .then((result) => {
      // console.log(result.text);
      result
  // toast.success('message successfully sent !')
  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
  inputFrom.reset()

  }, (error) => {
      console.log(error.text);
  });
  // console.log(users)

}
const handleInputChange = (e) => {
  const value = e.target.value;
  // Define a regex pattern for positive integers
  const numberRegex = /^[0-9]+$/;

  // Test if the input value matches the regex pattern
  const isValidInput = numberRegex.test(value);

  // Update state to reflect the validity of the input
  setIsValid(isValidInput);

  // Update state to store the current input value
  setInputValue(value);
};
  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold mb-4'>Contact Form</h3>
        <form ref={form} onSubmit={handleFromSubmit} >
          <div className='flex gap-5'>
          <div className='w-full'>
              <label htmlFor="">First Name:*</label>
              <input  name='from_first_name' className='w-full py-1.5 px-3 bg-white rounded text-gray-500 text-sm font-normal border-[1px] border-gray-300 focus:border-1  outline-none input-field' type="text" placeholder='First Name' />
            </div>
            <div className='w-full'>
              <label htmlFor="">Last Name:*</label>
              <input  name='from_last_name' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' type="text" placeholder='Last Name' />
            </div>
          </div>
          <div className='w-full mt-2'>
              <label htmlFor="">Email:*</label>
              <input  name='from_email' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1 input-field outline-none' type="email" placeholder=' example@gmai.com' />
              <p className='text-red-600'>{error}</p>
            </div>
            <div className='w-full mt-2'>
              <label htmlFor="">Phone:*</label>
              <input value={inputValue} onChange={handleInputChange} name='from_number' className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' type="text" placeholder='whatsapp number' />
              {!isValid && <p style={{ color: 'red' }}>Please enter a valid number.</p>}
            </div>
            <div className='w-full mt-2'>
            <label htmlFor="">Message:*</label>
          <textarea  className=' w-full py-1.5 bg-white px-3 rounded text-gray-500 text-sm font-normal border-[1px] shadow-md border-gray-300 focus:border-1  input-field outline-none' placeholder='Type the write message .....' name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button type='submit' className='btn-btn py-2 px-3 border bg-[#794FFC] text-white rounded mt-2'>Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ContactFroms
