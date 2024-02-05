import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const ManagementCount = () => {
  const [complete,setComplete] =useState([])
  const [partner,setPartner] =useState([])
  const [client,setClient] =useState([])
  const [award,setAward] =useState([])
  const [clicked,setClicked] =useState([])

//complete count show
  useEffect(()=>{
    axios.get('http://localhost:8500/completeCount')
    .then(res=>{
      setComplete(res.data)
    })
    .then(err=>console.log(err))
  },[])
//partner count show
  useEffect(()=>{
    axios.get('http://localhost:8500/partner')
    .then(res=>{
      setPartner(res.data)
    })
    .then(err=>console.log(err))
  },[])
  //client count show
  useEffect(()=>{
    axios.get('http://localhost:8500/client')
    .then(res=>{
      setClient(res.data)
    })
    .then(err=>console.log(err))
  },[])
  //award count show
  useEffect(()=>{
    axios.get('http://localhost:8500/award')
    .then(res=>{
      setAward(res.data)
    })
    .then(err=>console.log(err))
  },[])
  const handleSubmitCount =(e)=>{
    e.preventDefault()
    const form = e.target
    const complete = form.complete.value
    const user = {complete}
    axios.post('http://localhost:8500/completeCount',user)
    .then(res=>{
      if(res){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
        // window.location.reload()
      }

    })
    .then(err=>console.log(err))

  }

  const handleSubmitPartner =(e)=>{
    e.preventDefault()
    const form = e.target
    const partner = form.partner.value
    const user ={partner}
    axios.post('http://localhost:8500/partner',user)
    .then(res=>{
      if(res){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
        // window.location.reload()
      }

    })
    .then(err=>console.log(err))

  }

  const handleSubmitClient =(e)=>{
    e.preventDefault()
    const form = e.target
    const client = form.client.value
    const user ={client}

    axios.post('http://localhost:8500/client',user)
    .then(res=>{
      if(res){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
        // window.location.reload()
      }

    })
    .then(err=>console.log(err))

  }
  const handleSubmitAward =(e)=>{
    e.preventDefault()
    const form = e.target
    const award = form.award.value
    const user ={award}
    axios.post('http://localhost:8500/award',user)
    .then(res=>{
      if(res){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
        // window.location.reload()
      }

    })
    .then(err=>console.log(err))

  }

  //delete api all function
  const handleCompleteDelete = (event,id)=>{
    axios.delete(`http://localhost:8500/completeCount/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err=>console.log(err))
  }
  const handlePartnerDelete =(event,id)=>{
    axios.delete(`http://localhost:8500/partner/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err=>console.log(err))
  }

  const handleClientDelete =(event,id)=>{
    axios.delete(`http://localhost:8500/client/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err=>console.log(err))
  }
  const handleAwardDelete =(event,id)=>{
    axios.delete(`http://localhost:8500/award/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err=>console.log(err))
  }


        //complete count show
        useEffect(()=>{
          axios.get('http://localhost:8500/clickCount')
          .then(res=>{
            setClicked(res.data)
          })
          .then(err=>console.log(err))
        },[])
      const clickCount = clicked.map((item )=> item)

      const handleClickAllDelete =()=>{
        axios.delete(`http://localhost:8500/clickCount`)
        .then(res=>{
          res
          // setClicked(res.data)
        })
        .then(err=>console.log(err))
      }
  return (
    <div>
    <div className='w-4/12 mx-auto border '>
     <div>
      <h3 className='text-xl font-medium'>Complete Project</h3>
      <div>
        <form onSubmit={handleSubmitCount} action="" className='w-full'>
          <label htmlFor="">complete count:</label>
        <input type="number" name='complete' className='w-full py-2 text-xl bg-transparent border border-red-500 rounded px-2 ' placeholder='complete count'/>
        <input type="submit" className='text-md bg-green-400 px-4 mt-3 py-2 text-white rounded hover:bg-pink-500 cursor-pointer' value="submit" />
        </form>

        <div className='mt-3'>
          {complete.map((item)=>{
            return(
              <div key={item._id} className='flex items-center justify-between px-4 py-2 border border-green-300'>
                <h4 className=''> complete count: {item.complete}</h4>
                <button onClick={()=>handleCompleteDelete(event,item._id)} className='text-red-500'>delete</button>
              </div>
            )
          })}
        </div>
      </div>
     </div>

     <div>
      <div>
        <form onSubmit={handleSubmitPartner} action="" className='w-full'>
          <label htmlFor="">complete Partner:</label>
        <input type="number" name='partner' className='w-full py-2 text-xl bg-transparent border border-red-500 rounded px-2 ' placeholder='complete partner'/>
        <input type="submit" className='text-md bg-green-400 px-4 mt-3 py-2 text-white rounded hover:bg-pink-500 cursor-pointer' value="submit" />
        </form>

        <div className='mt-3'>
          {partner.map((item)=>{
            return(
              <div key={item._id} className='flex items-center justify-between px-4 py-2 border border-green-300'>
                <h4 className=''> Partner count: {item.partner}</h4>
                <button onClick={()=>handlePartnerDelete(event,item._id)} className='text-red-500'>delete</button>
              </div>
            )
          })}
        </div>
      </div>
     </div>

     <div>

      <div>
        <form onSubmit={handleSubmitClient} action="" className='w-full'>
          <label htmlFor="">complete client:</label>
        <input type="number" name='client' className='w-full py-2 text-xl bg-transparent border border-red-500 rounded px-2 ' placeholder='complete client'/>
        <input type="submit" className='text-md bg-green-400 px-4 mt-3 py-2 text-white rounded hover:bg-pink-500 cursor-pointer' value="submit" />
        </form>


        <div className='mt-3'>
          {client.map((item)=>{
            return(
              <div key={item._id} className='flex items-center justify-between px-4 py-2 border border-green-300'>
                <h4 className=''> Client count: {item.client}</h4>
                <button onClick={()=>handleClientDelete(event,item._id)} className='text-red-500'>delete</button>
              </div>
            )
          })}
        </div>
      </div>
     </div>

     <div>

      <div>
        <form onSubmit={handleSubmitAward} action="" className='w-full'>
          <label htmlFor="">complete award:</label>
        <input type="number" name='award' className='w-full py-2 text-xl bg-transparent border border-red-500 rounded px-2 ' placeholder='complete award'/>
        <input type="submit" className='text-md bg-green-400 px-4 mt-3 py-2 text-white rounded hover:bg-pink-500 cursor-pointer' value="submit" />
        </form>


        <div className='mt-3'>
          {award.map((item)=>{
            return(
              <div key={item._id} className='flex items-center justify-between px-4 py-2 border border-green-300'>
                <h4 className=''> Award count: {item.award}</h4>
                <button onClick={()=>handleAwardDelete(event,item._id)} className='text-red-500'>delete</button>
              </div>
            )
          })}
        </div>
      </div>
     </div>

    </div>
    <div className='my-5'>
      <h1 className='bg-indigo-500 text-white text-center text-xl py-2'>click count manage</h1>
      <div className='flex w-4/12 mx-auto my-3 border py-5 bg-orange-500 rounded px-3 justify-between text-white'>
        <h1>All Click :{clickCount.length} </h1>
        <button onClick={handleClickAllDelete} className='bg-pink-600 px-2 block rounded py-1'>All delete</button>
      </div>
     </div>
    </div>

  )
}

export default ManagementCount
