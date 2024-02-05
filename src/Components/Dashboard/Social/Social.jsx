import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Social = () => {
  const [facebook,setFacebook] = useState([])
  const [instagram,setInstagram] = useState([])
  const [linkedin,setLinkedin] = useState([])
  const [twitter,setTwitter] = useState([])
  const handleFacebook =(e)=>{
    e.preventDefault()
    const form = e.target
    const facebook = form.facebook.value
    const user ={facebook}
    console.log(facebook)
    axios.post('http://localhost:8500/facebook',user)
    .then(res=>{
      if(res){
        form.reset()
      }
    })
    .then(err =>console.log(err))

  }
  useEffect(()=>{
    axios.get('http://localhost:8500/facebook')
    .then(res=>{
      console.log(res.data)
      setFacebook(res.data)
    })
    .then(err=>console.log(err))
  },[])
  const handleInstagram =(e)=>{
    e.preventDefault()
    const form = e.target
    const instagram = form.instagram.value
    const user ={instagram}
    console.log(instagram)
    axios.post('http://localhost:8500/instagram',user)
    .then(res=>{
      if(res){
        form.reset()
      }
    })
    .then(err =>console.log(err))

  }
  useEffect(()=>{
    axios.get('http://localhost:8500/instagram')
    .then(res=>{
      console.log(res.data)
      setInstagram(res.data)
    })
    .then(err=>console.log(err))
  },[])
  const handleLinkedin =(e)=>{
    e.preventDefault()
    const form = e.target
    const linkedin = form.linkedin.value
    const user ={linkedin}
    console.log(linkedin)
    axios.post('http://localhost:8500/linkedin',user)
    .then(res=>{
      if(res){
        form.reset()
      }
    })
    .then(err =>console.log(err))

  }
  useEffect(()=>{
    axios.get('http://localhost:8500/linkedin')
    .then(res=>{
      console.log(res.data)
      setLinkedin(res.data)
    })
    .then(err=>console.log(err))
  },[])
  const handleTwitter =(e)=>{
    e.preventDefault()
    const form = e.target
    const twitter = form.twitter.value
    const user ={twitter}
    console.log(twitter)
    axios.post('http://localhost:8500/twitter',user)
    .then(res=>{
      if(res){
        form.reset()
      }
    })
    .then(err =>console.log(err))

  }
  useEffect(()=>{
    axios.get('http://localhost:8500/twitter')
    .then(res=>{
      console.log(res.data)
      setTwitter(res.data)
    })
    .then(err=>console.log(err))
  },[])

  const handleDeleteFacebook =(event,id)=>{
    axios.delete(`http://localhost:8500/facebook/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err =>console.log(err))
  }
  const handleDeleteInstagram =(event,id)=>{
    axios.delete(`http://localhost:8500/instagram/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err =>console.log(err))
  }
  const handleDeleteLinkedin =(event,id)=>{
    axios.delete(`http://localhost:8500/linkedin/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err =>console.log(err))
  }
  const handleDeleteTwitter =(event,id)=>{
    axios.delete(`http://localhost:8500/twitter/${id}`)
    .then(result=>{
      if(result){
        event.target.parentNode.style.display="none"
      }
    })
    .then(err =>console.log(err))
  }

  return (
    <div className=' mx-auto '>
      <h2 className='text-xl text-center  font-semibold py-3'>social media link added:</h2>
      <div className='w-6/12 mx-auto  border border-gray-300 p-3'>
        <div className='w-full py-3'>
          <form action="" onSubmit={handleFacebook}>
          <label htmlFor="" className='text-left mb-2'>Facebook Link:*</label>
          <input type="text" name='facebook' className='w-full p-2 rounded outline-none focus:border bg-transparent border border-gray-400  focus:border-pink-500' placeholder='facebook link upload'/>
          <div className='mt-4'>
            <button type='submit'  className='cursor-pointer bg-indigo-500 px-5 py-2 rounded text-white'>upload</button>
          </div>
          </form>
          <div>
            {facebook.map(item =>{
              return(
                <div key={item._id}>
                  <h2>Facebook link: {item.facebook}</h2>
                  <button className='bg-pink-500 px-4 py-1 rounded text-white' onClick={()=>handleDeleteFacebook(event,item._id)}>delete</button>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-full py-3'>
          <form action="" onSubmit={handleInstagram}>
          <label htmlFor="" className='text-left mb-2'>Instagram Link:*</label>
          <input type="text" name='instagram' className='w-full p-2 rounded outline-none focus:border bg-transparent border border-gray-400  focus:border-pink-500' placeholder='instagram link upload'/>
          <div className='mt-4'>
            <button type='submit'  className='cursor-pointer bg-indigo-500 px-5 py-2 rounded text-white'>upload</button>
          </div>
          </form>
          <div>
            {instagram.map(item =>{
              return(
                <div key={item._id}>
                  <h2>Instagram link: {item.instagram}</h2>
                  <button className='bg-pink-500 px-4 py-1 rounded text-white' onClick={()=>handleDeleteInstagram(event,item._id)}>delete</button>
                </div>
              )
            })}
          </div>
        </div>

        <div className='w-full py-3'>
          <form action="" onSubmit={handleLinkedin}>
          <label htmlFor="" className='text-left mb-2'>Linkedin Link:*</label>
          <input type="text" name='linkedin' className='w-full p-2 rounded outline-none focus:border bg-transparent border border-gray-400  focus:border-pink-500' placeholder='linkedin link upload'/>
          <div className='mt-4'>
            <button type='submit'  className='cursor-pointer bg-indigo-500 px-5 py-2 rounded text-white'>upload</button>
          </div>
          </form>
          <div>
            {linkedin.map(item =>{
              return(
                <div key={item._id}>
                  <h2>Linkedin link: {item.linkedin}</h2>
                  <button className='bg-pink-500 px-4 py-1 rounded text-white' onClick={()=>handleDeleteLinkedin(event,item._id)}>delete</button>
                </div>
              )
            })}
          </div>
        </div>

        <div className='w-full py-3'>
          <form action="" onSubmit={handleTwitter}>
          <label htmlFor="" className='text-left mb-2'>Twitter Link:*</label>
          <input type="text" name='twitter' className='w-full p-2 rounded outline-none focus:border bg-transparent border border-gray-400  focus:border-pink-500' placeholder='twitter link upload'/>
          <div className='mt-4'>
            <button type='submit'  className='cursor-pointer bg-indigo-500 px-5 py-2 rounded text-white'>upload</button>
          </div>
          </form>
          <div>
            {twitter.map(item =>{
              return(
                <div key={item._id}>
                  <h2>Twitter link: {item.twitter}</h2>
                  <button className='bg-pink-500 px-4 py-1 rounded text-white' onClick={()=>handleDeleteTwitter(event,item._id)}>delete</button>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Social
