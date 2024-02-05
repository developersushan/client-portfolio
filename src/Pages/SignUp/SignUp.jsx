import React, { useContext, useState } from 'react'
import { FiEye ,FiEyeOff } from "react-icons/fi";
import { AuthProviders } from '../../Providers/AuthContext';
import Swal from 'sweetalert2';
const SignUp = () => {
    const {createUser , verifyEmail} = useContext(AuthProviders)
const [showPassword,setShowPassword]  = useState(false)
  const handleFrom =(e)=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value 
    const password = form.password.value
    const user = {email,password}
    console.log(user)
    createUser(email,password)
    .then(result =>{
        const user =result.user
        console.log(user)
        form.reset()
        verify()
    })
    .catch(error=>console.log(error))

  }

  const verify =()=>{
    verifyEmail()
    .then(()=>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Registrar successful please verify your email and login now',
            showConfirmButton: false,
            timer: 2000
          })
    })
    .catch(error=>console.error(error))
}
  
const handleEyeOpen =()=>{
  setShowPassword((prev)=>!prev)
}
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-slate-200 px-5 w-4/12 rounded shadow-lg py-10'>
      <form onSubmit={handleFrom} className="max-w-sm mx-auto py-4">
        <h2 className='py-4 text-2xl font-medium text-pink-500'>Login</h2>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email"  name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <div className='relative'>
    <input type={`${showPassword ? 'text':'password'}`}  id="password" name='password' className="pr-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    <div onClick={handleEyeOpen} className='absolute top-3 right-2 flex items-center'>
      
        <span  className={`${showPassword ? 'hidden' :''} cursor-pointer text-white`}><FiEye/></span>
         <span className={`${showPassword ? 'opacity-100 text-white':'hidden opacity-0'} cursor-pointer `}><FiEyeOff/></span>
      
      
     
    </div>
    </div>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-indigo-500 px-8 py-2 rounded hover:bg-pink-500">Login</button>
</form>
      </div>
    </div>
  )
}

export default SignUp
