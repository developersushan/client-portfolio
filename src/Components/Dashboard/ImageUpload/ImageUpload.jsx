import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const ImageUpload = () => {
  const [file,setFile] = useState()
  const [showImage,setShowImage] = useState([])
  const handleImageUpload =(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('file',file)
    axios.post('http://localhost:8500/upload',formData)
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
    axios.get('http://localhost:8500/image')
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
        axios.delete(`http://localhost:8500/image/${id}`)
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
  return (
    <div>
      <div className='px-4'>
        <h3 className='text-2xl rounded-md text-white bg-indigo-500 capitalize py-4 px-3 font-semibold'>gallery Image upload</h3>
        <form onSubmit={handleImageUpload} className='py-3 border shadow-lg px-4 w-6/12 mx-auto my-4' action="">
          <div className='w-full'>
            <label htmlFor="" className='capitalize text-xl'>image upload</label>
          <input type="file" name="file" onChange={(e)=>setFile(e.target.files[0])} className='w-full border border-indigo-500 py-2 px-2 rounded' />
          </div>
          <input type="submit" className='bg-green-500 cursor-pointer mt-7 px-8 py-2 rounded text-white' value="Upload" />
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
    </div>
  )
}

export default ImageUpload
