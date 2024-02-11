import React, { useEffect, useRef, useState } from 'react'
import ComparePackage from './ComparePackage'
import CompareStandard from './CompareStandard'
import ComparePremium from './ComparePremium'
import axios from 'axios'
import Swal from 'sweetalert2'

const GigManage = () => {
    const [basicDelivery,setBasicDelivery] =useState([])
    const [user,setUser] = useState([])
    const fileInputRef = useRef(null)
    const [val,setVal] = useState([])
    const [valStand,setValStand] = useState([])
    const [valPremium,setValPremium] = useState([])

    async function fetchData(){
        const res = await fetch('/selectData.json')
        const data = await res.json()
        setBasicDelivery(data[0])
        // console.log(data[0])
    }
   
    useEffect(()=>{
        fetchData()
    },[])
const base = basicDelivery.basic;
console.log({val})
    const handleFrom =(e)=>{
        e.preventDefault()

        // console.log(compare)
        // console.log(stCompare)
        // console.log(PreCompare)
        const form = e.target
        const formData = new FormData()
        const file = form.file.files

        const title = form.title.value
        const description = form.description.value
        const basicTitle = form.basicTitle.value
        const basicPrice = form.basicPrice.value
        const basicDescription = form.basicDescription.value
        const basicDelivery = form.basicDelivery.value
        const basicRevision = form.basicRevision.value
        const standardTitle = form.standardTitle.value
        const standardPrice = form.standardPrice.value
        const standardDescription = form.standardDescription.value
        const standardDelivery = form.standardDelivery.value
        const standardRevision = form.standardRevision.value
        const premiumTitle = form.premiumTitle.value
        const premiumPrice = form.premiumPrice.value
        const premiumDescription = form.premiumDescription.value
        const premiumDelivery = form.premiumDelivery.value
        const premiumRevision = form.premiumRevision.value

        const ComparePackage = val
        const StandardPackage = valStand
        const PremiumPackage = valPremium
        formData.append('title', title);
        formData.append('description', description);
        formData.append('basicTitle', basicTitle);
        formData.append('basicPrice', basicPrice);
        formData.append('basicDescription', basicDescription);
        formData.append('basicDelivery', basicDelivery);
        formData.append('basicRevision', basicRevision);
        formData.append('standardTitle', standardTitle);
        formData.append('standardPrice', standardPrice);
        formData.append('standardDescription', standardDescription);
        formData.append('standardDelivery', standardDelivery);
        formData.append('standardRevision', standardRevision);
        formData.append('premiumTitle', premiumTitle);
        formData.append('premiumPrice', premiumPrice);
        formData.append('premiumDescription', premiumDescription);
        formData.append('premiumDelivery', premiumDelivery);
        formData.append('premiumRevision', premiumRevision);

        // const ComparePackage = val.map(item =>item)
        // const StandardPackage = valStand.map(item =>item)
        // const PremiumPackage = valPremium.map(item =>item)
        // console.log(PremiumPackage)
       formData.append('ComparePackage', ComparePackage);
        formData.append('StandardPackage', StandardPackage);
        formData.append('PremiumPackage', PremiumPackage);

        for (let i = 0; i < file.length; i++) {
          formData.append('file', file[i]);
        }
    console.log(formData)
        axios.post('http://localhost:8500/addGig',formData)
        .then(res=>{
            console.log(res)
                        form.reset()
            console.log('success full ')
            window.location.reload()
        })
        .then(err=>console.log(err))


    }


const handleBasic =(e)=>{
    console.log(e)
}
async function fetchGig(){
    const res = await fetch('http://localhost:8500/addGig')
    const data = await res.json()
    // console.log(data)
    setUser(data)
}
useEffect(()=>{
    fetchGig()
},[])

//handle gig delete function 
const handleDeleteGig =(event,id)=>{
    console.log(id)
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
            axios.delete(`http://localhost:8500/addGig/${id}`)
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
            <div>
              <h3 className='bg-indigo-500 rounded-md text-white text-2xl py-2 px-3'>Gig Manage:</h3>
        <div className='w-6/12 py-5  shadow-lg mx-auto px-5 flex justify-center mt-3'>
            <form action="" onSubmit={handleFrom}  className='w-full '>
                <div className='w-full'>
                    <label htmlFor="" className='text-base capitalize'>title:</label>
                    <input type="text" name='title' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title first text' />
                </div>

                <div className='w-full'>
                    <label htmlFor="" className='text-base capitalize'>Description:</label>
                    <textarea name="description" className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a description' id="" cols="30" rows="5"></textarea>
                </div>

                <input type="file" name="file"  multiple className='w-full border border-indigo-500 py-2 px-2 rounded' />
                <div className='card my-3 p-2 rounded'>
                </div>
                
                <div>
                    <h3 className='text-xl capitalize bg-indigo-400 py-3 text-white px-3 rounded'>basic:</h3>
                <div className='w-full'>
                <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>title:</label>
                    <input type="text" name='basicTitle' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' />
                    <label htmlFor="" className='text-base capitalize'>price:</label>
                    <input type="number" name='basicPrice' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='$00' />
                </div>
                    <label htmlFor="" className='text-base capitalize'>Description:</label>
                    <textarea name="basicDescription" className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a description' id="" cols="30" rows="3"></textarea>
                    <ComparePackage val={val} setVal={setVal}/>
                    <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>delivery time:</label>
                    <select  onChange={(e)=>handleBasic(e.target.value)} type="text" name='basicDelivery' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' >
                        {
                            basicDelivery?.basic?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="" className='text-base capitalize'>revision:</label>
                    <select type="number" onChange={e=>handleBasic(e.target.value)} name='basicRevision' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='select revision' >
                    {
                            basicDelivery?.basicRevision?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                </div>
                </div>

                <div className='mt-4'>
                    <h3 className='text-xl capitalize bg-pink-500 py-3 text-white px-3 rounded'>Standard:</h3>
                <div className='w-full'>
                <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>title:</label>
                    <input type="text" name='standardTitle' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' />
                    <label htmlFor="" className='text-base capitalize'>price:</label>
                    <input type="number" name='standardPrice' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='$00' />
                </div>
                    <label htmlFor="" className='text-base capitalize'>Description:</label>
                    <textarea name="standardDescription" className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a description' id="" cols="30" rows="3"></textarea>
                    <CompareStandard valStand={valStand} setValStand={setValStand}/>
                    <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>delivery time:</label>
                    <select type="text" onChange={(e)=>handleBasic(e.target.value)} name='standardDelivery' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' >
                    {
                            basicDelivery?.basic?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }

                    </select>
                    <label htmlFor="" className='text-base capitalize'>revision:</label>
                    <select type="number" onChange={(e)=>handleBasic(e.target.value)} name='standardRevision' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='select revision' >
                    {
                            basicDelivery?.basicRevision?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                </div>
                </div>

                <div className='mt-4'>
                    <h3 className='text-xl capitalize py-3 bg-orange-400 text-white px-3 rounded'>Premium:</h3>
                <div className='w-full'>
                <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>title:</label>
                    <input type="text" name='premiumTitle' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' />
                    <label htmlFor="" className='text-base capitalize'>price:</label>
                    <input type="number" name='premiumPrice' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='$00' />
                </div>
                    <label htmlFor="" className='text-base capitalize'>Description:</label>
                    <textarea name="premiumDescription" className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a description' id="" cols="30" rows="3"></textarea>
                    <ComparePremium valPremium={valPremium} setValPremium={setValPremium}/>
                    <div className='w-full flex mt-3 items-center gap-3'>
                    <label htmlFor="" className='text-base capitalize'>delivery time:</label>
                    <select type="text" onChange={(e)=>handleBasic(e.target.value)} name='premiumDelivery' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='write a title ' >
                    {
                            basicDelivery?.basic?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="" className='text-base capitalize'>revision:</label>
                    <select type="number" onChange={(e)=>handleBasic(e.target.value)} name='premiumRevision' className='w-full bg-transparent border border-indigo-500 px-2 rounded py-2 mt-1' placeholder='select revision' >
                    {
                            basicDelivery?.basicRevision?.map((opt,index)=>{
                                return(
                                    <option key={index} value={opt.value}>{opt.label}</option>
                                )
                            })
                        }
                    </select>
                </div>
                </div>
                </div>
                <input type="submit" className='mt-5 mb-4 bg-cyan-400 text-sm px-4 py-2 rounded text-white hover:bg-cyan-500 duration-200 transition ease-in cursor-pointer' value="Save Change" />
            </form>
        </div>
    </div>

        <div>
            <div className='bg-indigo-500 py-1 rounded'><h1 className='capitalize text-white text-xl  text-center my-3'>view all gigs</h1></div>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3'>
        {
            user.map(item=>{
                return(
                    <div key={item._id}  className='shadow-xl  bg-slate-200 rounded  mx-auto text-center  text-black  p-4'>

                      <div >
                      {item?.files?.slice(0,1)?.map((items,index)=>{
                        return(
                          <div key={index} className='overflow-hidden'>
                            {/* {console.log(items)} */}
                            <img className='scale-105 hover:scale-125  w-full transition duration-300 ease-in delay-100' src={`http://localhost:8500/${items?.filename}`} width={400} alt={items?.fieldname} />
                          </div>
                        )
                      })}
                        <h2 className='text-lg font-medium text-left mt-2'>{item.title}</h2>
                        
                      </div>
                      <button onClick={()=>handleDeleteGig(event,item._id)} className='bg-red-500 py-1 text-white capitalize text-xl rounded mt-4 cursor-pointer hover:bg-green-500 w-full'>delete</button>
                    </div>
                )
            })
        }
      </div>
        </div>
    </div>
  )
}

export default GigManage
