import React, { useEffect, useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
const GigBox = () => {
    const [user,setUser] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    async function fetchGig(){
        const res = await fetch('http://localhost:8500/addGig')
        const data = await res.json()
        // console.log(data)
        setUser(location.pathname==='/gig_gallery'?data.slice(0,20):data.slice(0,3))
    }
    useEffect(()=>{
        fetchGig()
    },[])

  const handleNavigate =()=>{
    navigate('/gig_gallery')
  }


 

    return (
    <div className='p-3'>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3'>
        {
            user.map(item=>{
                return(
                    <div key={item._id}  className=' gig-shadow  bg-white rounded  mx-auto text-center  text-black  pb-4'>

                      <Link to={`/view_gig/${item._id}`}>
                      {item?.files?.slice(0,1)?.map((items,index)=>{
                        return(
                          <div key={index} className='overflow-hidden'>
                            {/* {console.log(items)} */}
                            <img className='scale-105 hover:scale-125 object-cover   w-full transition duration-300 ease-in delay-100' src={`http://localhost:8500/${items?.filename}`} width={400} alt={items?.fieldname} />
                          </div>
                        )
                      })}
                        <h2 className='text-lg font-medium text-left mt-2 px-3'>{item.title}</h2>
                        <div className='flex justify-end px-3'>
                          
                          <span className='font-semibold'>${item?.basic?.basicPrice}</span>
                        </div>
                      </Link>
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
