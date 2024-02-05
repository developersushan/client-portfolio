import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get( `http://localhost:8500/contact`)
        .then(res =>{
            setUsers(res.data)
        })
        .then(err=>console.log(err))

    },[])
    const handleDelete =(event,id)=>{
        axios.delete(`http://localhost:8500/contact/${id}`)
        .then(result =>{
            if(result){
                document.getElementById('main').style.display="none"
            }
            console.log('delete done')
        })
        .then(err =>console.log(err))

    }
  return (
    <div className='px-10 mt-10 pb-10'>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((item)=>(

            <tr key={item._id} id='main' className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {item.firstName} {item.lastName}
            </th>
            <td className="px-6 py-4">
               {item.email}
            </td>
            <td className="px-6 py-4">
                {item.number}
            </td>
            <td className="px-6 py-4">
                <a onClick={()=>handleDelete(event,item._id)} href="#" className="font-medium text-pink-600 dark:text-pink-500 hover:underline">Delete</a>
            </td>
            </tr>
            ))}


        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table
