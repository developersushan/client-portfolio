import React, { useState } from 'react'
import { FiGrid ,FiArrowRightCircle} from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Sidebar from '../../Components/Dashboard/Sidebar';
import MainDashboard from '../../Components/Dashboard/MainDashboard';
import UserProfile from '../../Components/Dashboard/UserProfile';
import Authentication from '../../Components/Dashboard/Authentication';
import Social from '../../Components/Dashboard/Social';
import Account from '../../Components/Dashboard/Account';
const Dashboard = () => {
  const [isSelected,setSelected] = useState(0)
  console.log(isSelected)
  let RenderComponent = ({index})=>{
    switch(index){
      case (0):return <MainDashboard/>
      break;
      case (1):return <MainDashboard/>
      break;
      case (2):return <UserProfile/>
      break;
      case (3):return <Authentication/>
      break;
      case (4):return <Account/>
      break;
      case (5):return <Social/>
      break;
      case (2):return <UserProfile/>
      break;
      case (2):return <UserProfile/>
      break;
      case (2):return <UserProfile/>
      break;

      default:
        break;
    }

  }

  return (
    <div>
      <div className='flex '>
        <div className='w-2/12 min-h-screen'>
        <div className='flex shadow-md mb-4 items-center py-3 justify-around'>
          <h3 className='text-2xl font-semibold'>Admin Panel</h3>

        </div>
        <Sidebar isSelected={isSelected} setSelected={setSelected}/>
        </div>
        <div className='bg-red-300 w-10/12'>
          <div className='bg-white flex  py-3 px-2 shadow-md'>
          <div className='flex w-2/12 items-center gap-8'>
            <button><span className='text-2xl'><FiArrowRightCircle /></span></button>
            <button  className='duration-100 hover:rotate-90 transform hover:text-pink-500'><span className='text-3xl '><FiGrid /></span></button>
            </div>
            <div className='w-6/12 flex justify-center '>
              <div className='w-6/12 relative'>
              <input type="text" className='w-full bg-transparent border focus:border-indigo-500 outline-none border-red-300 pl-2 pr-8 py-1  rounded-full'  placeholder='Search......' />
              <span className='absolute top-2 text-gray-400 text-xl px-2 right-0'><HiMagnifyingGlass /></span>
              </div>
            </div>
            <div className='flex justify-end w-4/12'>
              <div>
                profile
              </div>
            </div>
          
          </div>
          <RenderComponent index={isSelected}></RenderComponent>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
