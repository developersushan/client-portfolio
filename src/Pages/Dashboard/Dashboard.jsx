import React, { useContext, useState } from 'react'
import { FiGrid ,FiArrowRightCircle} from "react-icons/fi";
import { HiMagnifyingGlass,HiBellAlert,HiEnvelopeOpen } from "react-icons/hi2";

import Sidebar from '../../Components/Dashboard/Sidebar';
import MainDashboard from '../../Components/Dashboard/MainDashboard/MainDashboard';
import UserProfile from '../../Components/Dashboard/UserProfile/UserProfile';
// import Authentication from '../../Components/Dashboard/Authentication/Authentication';
import Social from '../../Components/Dashboard/Social/Social';
import GigManagement from '../../Components/Dashboard/GigManagement/GigManagement';
import HomeManagement from '../../Components/Dashboard/HomeManagement/HomeManagement';
import ImageUpload from '../../Components/Dashboard/ImageUpload/ImageUpload';
import { AuthProviders } from '../../Providers/AuthContext';
import ManagementCount from '../../Components/Dashboard/ManagementCount/ManagementCount';
const Dashboard = () => {
  const {user,logOut} = useContext(AuthProviders)
  // console.log(user)
  const [showUserProfile,setShowUserProfile] = useState(false)
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
      case (3):return <ManagementCount/>
      break;
      case (4):return <GigManagement/>
      break;
      case (5):return <Social/>
      break;
      case (6):return <HomeManagement/>
      break;
      case (7):return <ImageUpload/>
      break;
      case (8):return <UserProfile/>
      break;

      default:
        break;
    }

  }

  const handleUserMenu =()=>{
    setShowUserProfile((prev) =>!prev)
  }
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error =>console.error(error))
  }
  return (
    <div>
      <div className='flex '>
        <div className='w-2/12 shadow-xl  shadow-indigo-500 min-h-screen'>
        <div className='flex shadow-md mb-8 fixed w-2/12 z-50 bg-white  items-center py-4 justify-around'>
          <h3 className='text-2xl font-semibold'>Admin Panel</h3>
        </div>
        <div className='mt-10 fixed w-2/12'>
        <Sidebar isSelected={isSelected} setSelected={setSelected}/>
        </div>
        </div>
        <div className=' w-10/12 z-50'>
          <div className='bg-white flex  fixed w-10/12 py-3 px-2 shadow-md'>
          <div className='flex w-2/12 items-center gap-8'>
            <button><span className='text-2xl'><FiArrowRightCircle /></span></button>
            <button  className='duration-100 hover:rotate-90 transform hover:text-pink-500'><span className='text-3xl '><FiGrid /></span></button>
            </div>
            <div className='w-6/12 flex justify-center '>
              <div className='w-6/12 relative'>
              <input type="text" className='w-full bg-transparent border focus:border-indigo-500cd outline-none border-red-300 pl-2 pr-8 py-1  rounded-full'  placeholder='Search......' />
              <span className='absolute top-2 text-gray-400 text-xl px-2 right-0'><HiMagnifyingGlass /></span>
              </div>
            </div>
            <div className='flex justify-end px-4 w-4/12 '>
              <div className=' flex items-center gap-6'>
            {user?.email && <p>welcome, <span className='text-pink-600'>{user.email}</span> </p>}
                <div className='flex gap-3'>
                  <span className='text-xl text-gray-500'><HiBellAlert/></span>
                  <span className='text-xl text-gray-500'><HiEnvelopeOpen/></span>
                </div>
                <div className='relative'>
                  <img onClick={handleUserMenu} src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww" className='cursor-pointer w-[40px] h-[40px] object-cover rounded-full' alt="" />
                  {showUserProfile &&
                                    <div className='absolute bg-white py-3 px-1 shadow-md rounded right-0'>
                                    <ul>
                                      <li className='border-b border-pink-500 py-2 px-3 text-sm hover:bg-indigo-500 rounded hover:text-white'><a className='px-4  py-4' href="">Profile</a></li>
                                      <li className='border-b border-pink-500 py-2 px-3 text-sm hover:bg-indigo-500 rounded hover:text-white'><a className='px-4  py-4' href="">Message</a></li>
                                      <li className='border-b border-pink-500 py-2 px-3 text-sm hover:bg-indigo-500 rounded hover:text-white'><a className='px-4  py-4' onClick={handleLogOut} href="#">LogOut</a></li>
                                    </ul>
                                  </div>
                  }

                </div>
              </div>
            </div>
          
          </div>
          <div className=' mt-20 -z-40'>
          <RenderComponent index={isSelected}></RenderComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
