import React, { useEffect, useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import { useLocation, useNavigate,  } from 'react-router-dom';
const GigBox = () => {
    const [user,setUser] = useState([])
    const [active,setActive] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    async function fetchGig(){
        const res = await fetch('/services.json')
        const data = await res.json()
        console.log(data)
        setUser(location.pathname==='/gig_gallery'?data.slice(0,20):data.slice(0,3))
    }
    useEffect(()=>{
        fetchGig()
    },[])

  const handleButton = (index) => {
    console.log(" Item clicked: ", index); 
  };
  const handleNavigate =()=>{
    navigate('/gig_gallery')
  }
  return (
    <div className='p-3'>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3'>
        {
            user.map(item=>{
                return(
                    <div key={item.id} className='shadow-xl md:bg-[#2D2E32] bg-white rounded  mx-auto text-center md:text-white text-black  p-4'>
                        <div className='overflow-hidden'>
                            <img className='scale-105 hover:scale-125  w-full transition duration-300 ease-in delay-100' src={item.img} width={400} alt="" />
                        </div>
                        <h2 className='text-xl font-semibold text-left mt-2'>{item.title}</h2>
                        <div className='flex justify-start px-1 mt-3'>
                          <button onClick={()=>handleButton(index)} className={`text-xl ${active ?'active':''}`}><FiThumbsUp/></button>
                        </div>
                    </div>
                )
            })
        }
      </div>
      {location.pathname==='/gig_gallery'? '':
            <div className='mt-6 py-4 '>
            <button onClick={handleNavigate} className=" w-[150px] border-2 hover:bg-white hover:text-black duration-100 delay-150 transition ease-in p-2 rounded text-xl font-semibold">view All Gigs</button>
          </div>
      }

    </div>
  )
}

export default GigBox
