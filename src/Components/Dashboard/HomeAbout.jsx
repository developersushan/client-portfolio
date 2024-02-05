import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const HomeAbout = () => {
    const [social,setSocial] = useState([])
    const [file,setFile] = useState()
    const [showImage,setShowImage] = useState([])


    const handleImageUpload =(e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('file',file)
      axios.post('http://localhost:8500/uploadAbout',formData)
      .then(res=>{
        if(res){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          window.location.reload()
        }
  
      })
      .then(err=>console.log(err))
    }
    useEffect(()=>{
        axios.get('http://localhost:8500/aboutImage')
        .then(res=>{
          console.log(res.data)
          setShowImage(res.data)
        })
        .then(err=>console.log(err))
      },[])
      const handleImageDelete =(event,id)=>{
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            //delete api integration
            axios.delete(`http://localhost:8500/aboutImage/${id}`)
            .then(result=>{
              console.log(result.data)
              if(result){
                event.target.parentNode.style.display="none"
              }
            })
            .then(err=>console.log(err))
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
    
    
      }


    async function fetchData(){
        const res = await fetch('http://localhost:8500/addAbout')
        const data = await res.json()
        setSocial(data)
        console.log(data)
    }
    console.log(social)
    useEffect(()=>{
        fetchData()
    },[])
    const handleFrom =(e)=>{
        e.preventDefault()
        const form = e.target
        const subTitle = form.subtitle.value
        const title = form.title.value
        const description = form.description.value
        const user = {subTitle,title,description}
        // console.log(user)

        fetch('http://localhost:8500/addAbout', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            form.reset()
            console.log('success full ')
            // window.location.reload()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: ' update home about section please reload',
              showConfirmButton: false,
              timer: 2000
            })
        })

    }
    const handleDelete =(event,id)=>{
        console.log('delete')
        fetch(`http://localhost:8500/addAbout/${id}`, {
            method:"DELETE",
        })
        .then(res =>res.json())
        .then(result =>{
            console.log('success full ')
            if(result){
                event.target.parentNode.style.display="none"
            }
        })
    }
  return (
    <div className='mt-5'>
      <div className='px-3'>
        <h3 className='bg-pink-500 rounded-md text-white text-2xl py-2 px-3'>Home About Text Edit:</h3>
        <div className='px-4'>
        <form onSubmit={handleImageUpload} className='py-3 border shadow-lg px-4 w-6/12 mx-auto my-4' action="">
          <div className='w-full'>
            <label htmlFor="" className='capitalize text-xl'>image upload</label>
          <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])} className='w-full border border-indigo-500 py-2 px-2 rounded' />
          </div>
          <input type="submit" className='bg-green-500 cursor-pointer mt-7 px-8 py-2 rounded text-white' value="Upload" />
        </form>
      </div>
        <div className='w-6/12 py-5  shadow-lg mx-auto px-5 flex justify-center mt-3'>
            <form action="" onSubmit={handleFrom} className='w-full '>
                <div className='w-full'>
                    <label htmlFor="" className='text-base capitalize'>sub title:</label>
                    <input type="text" name='subtitle' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write the sub Title' />
                </div>
                <div className='w-full'>
                    <label htmlFor="" className='text-base capitalize'>title:</label>
                    <input type="text" name='title' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title first text' />
                </div>

                <div className='w-full'>
                    <label htmlFor="" className='text-base capitalize'>Description:</label>
                    <textarea name="description" className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a description' id="" cols="30" rows="5"></textarea>
                </div>
                <input type="submit" className='mt-3 bg-cyan-400 text-sm px-4 py-2 rounded text-white hover:bg-cyan-500 duration-200 transition ease-in cursor-pointer' value="Save Change" />
            </form>
        </div>

      <div className='px-4 grid grid-cols-6 gap-4  '>
        {
          showImage.map((item)=>{
            return(
              <div key={item._id}>
                <img className='shadow-lg rounded-md h-[150px] object-cover' width={400} src={`http://localhost:8500/${item.filename}`} alt="" />
                
                  <button onClick={()=>handleImageDelete(event,item._id)} className='bg-pink-500 px-3 text-sm py-1 text-white rounded-md'>delete</button>
                
              </div>
            )
          })
        }
      </div>

        <div className='mx-auto w-6/12 mt-3'>
            <div className=''>
                {
                    social.map((item)=>(
                        <div key={item._id} className={`flex items-center bg-slate-300 px-4 py-3 rounded  gap-4 mt-3`}>
                            <h3 className='w-2/12'>sub Title: {item.subTitle}</h3>
                            <h3 className='w-3/12'>Title: {item.title}</h3>
                            <p className='w-6/12'>Description: {item.description}</p>
                            <button className='w-1/12 bg-pink-500 px-2 py-1 text-sm text-white rounded hover:bg-green-500' onClick={()=>handleDelete(event,item._id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
