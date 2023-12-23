import React, { useEffect, useState } from 'react'

const Sidebar = ({isSelected,setSelected}) => {
    const [sidebarUser,setSidebarUser] = useState([])
    useEffect(()=>{
        const fetchingSidebar =async()=>{
            const res = await fetch('http://localhost:5173/sidebar.json')
            const data = await res.json()
            setSidebarUser(data)
        }
        fetchingSidebar()
    },[])

  return (
    <div className='px-4 py-8'>
      <div>
        <ul>
            {
                sidebarUser.map((item)=>(  <li onClick={()=>setSelected(item.id)} key={item.id} className=' border-b-[1px] border-gray-300 py-2 hover:bg-indigo-500 hover:px-4 duration-200 hover:text-white rounded-md cursor-pointer'>{item.title}</li>))
            }


        </ul>
      </div>
    </div>
  )
}

export default Sidebar
