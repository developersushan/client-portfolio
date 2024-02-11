import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiRefreshCcw ,FiClock,FiCheck} from "react-icons/fi";
import GigSlider from '../../Components/GigSlider';

const ViewGig = () => {
  const {id} = useParams()
  const [viewData,setViewData] = useState('')
  const [open,setOpen] =useState('')
  async function fetchData(){
    const res = await fetch(`http://localhost:8500/addGig/${id}`)
    const data = await res.json()
    // console.log(data)
    setViewData(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  const data = viewData?.basic
  const data1 = viewData?.standard
  const data2 = viewData?.premium


  const handlePackage=(type)=>{
    switch (type) {
      case "basic":
      setOpen("basic")
        break;
        case "standard":
        setOpen("standard")
        break;
        case "premium" :
        setOpen("premium")
        break
      default:
        setOpen("basic")
        
    }
  }
  
  return (
    <div className='py-4 mx-auto w-full 2xl:w-8/12 xl:8/12 lg:8/12 xl:px-3 lg:px-3 '>
      <div className='md:flex gap-20 py-4 relative '>
        <div className='w-full md:w-8/12 px-4 md:-px0'>
        <h2 className='text-2xl md:text-4xl md:mb-0 font-semibold '>{viewData.title}</h2>
          <div className=' mt-4 '>
          <GigSlider viewData={viewData}></GigSlider>
          </div>
        <p >{viewData.description}</p>
        </div>
        <div className='w-full md:w-4/12 md:mt-0 mt-5 px-4 md:px-0 '>
          <div className='sticky top-20 border border-gray-400 rounded'>
          <div className='flex border-b-[1px] border-gray-400 items-center'>
            <div onClick={()=>handlePackage('basic')} className='w-4/12 py-2 border-r-[1px] border-gray-400 cursor-pointer'>
            <h3 className='  text-center text-md sm:text-xl text-gray-500 font-semibold uppercase'>basic</h3>
            </div>
            <div onClick={()=>handlePackage('standard')} className='w-4/12 py-2 border-r-[1px] border-gray-400 cursor-pointer '>
            <h3 className='text-center text-gray-500 font-semibold  text-md sm:text-xl uppercase'>standard</h3>
            </div>
            <div onClick={()=>handlePackage('premium')} className='w-4/12  cursor-pointer'>
            <h3 className=' text-center  text-md sm:text-xl text-gray-500 font-semibold  uppercase'>premium</h3>
            </div>
          </div>
          {/*basic data start*/}
          <div className={`px-4 py-2 ${open==="basic"?'':`${open==="standard"?`${open==="basic"?'hidden':'hidden'}`:''} ${open==="premium"?`${open==="basic"?'hidden':'hidden'}`:''}`} `}>
            <div className='flex justify-between'>
            <h3 className='text-lg'>{data?.basicTitle}</h3>
            <h4 className='text-xl font-semibold text-gray-600 '>$ {data?.basicPrice}</h4>
            </div>
            <p className='text-sm text-gray-500'>{data?.basicDescription}</p>
            <div className='flex items-center gap-4 mt-3'>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiClock/></span> {data?.basicDelivery} Days Delivery</p>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiRefreshCcw/></span>{data?.basicRevision}</p>
            </div>
            {/* {
              data?.comparePackage?.val.map((item,i)=>( */}
                <div className=' mt-2'>
                  <h3 className='flex items-center gap-2 text-gray-500' ><span className='text-black text-xl font-bold'><FiCheck /></span> {data?.ComparePackage}</h3>
                </div>
              {/* ))
            } */}
          </div>
          {/*basic data end*/}

                    {/*standard data start*/}
                    <div className={`px-4 py-2 ${open==="standard"?'':'hidden'}`}>
            <div className='flex justify-between'>
            <h3 className='text-lg'>{data1?.standardTitle}</h3>
            <h4 className='text-xl font-semibold text-gray-600 '>$ {data1?.standardPrice}</h4>
            </div>
            <p className='text-sm text-gray-500'>{data1?.standardDescription}</p>
            <div className='flex items-center gap-4 mt-3'>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiClock/></span> {data1?.standardDelivery} Days Delivery</p>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiRefreshCcw/></span>{data1?.standardRevision}</p>
            </div>
            {/* {
              data1?.comparePackageStand?.valStand.map((item,i)=>( */}
                <div className=' mt-2' >
                  <h3 className='flex items-center gap-2 text-gray-500' ><span className='text-black text-xl font-bold'><FiCheck /></span> {data1?.StandardPackage}</h3>
                </div>
            {/* //   ))
            // } */}
          </div>
          {/*standard data end*/}
                              {/*premium data start*/}
                              <div className={`px-4 py-2 ${open==="premium"?'':'hidden'}`}>
            <div className='flex justify-between'>
            <h3 className='text-lg'>{data2?.premiumTitle}</h3>
            <h4 className='text-xl font-semibold text-gray-600 '>$ {data2?.premiumPrice}</h4>
            </div>
            <p className='text-sm text-gray-500'>{data2?.premiumDescription}</p>
            <div className='flex items-center gap-4 mt-3'>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiClock/></span> {data2?.premiumDelivery} Days Delivery</p>
              <p className='flex items-center gap-2 font-semibold text-gray-600'><span className='text-gray-600 font-semibold'> <FiRefreshCcw/></span>{data2?.premiumRevision} </p>
            </div>
            {/* {
              data2?.PremiumPackage?.map((item,i)=>( */}
                <div className=' mt-2' >
                  <h3 className='flex items-center gap-2 text-gray-500' ><span className='text-black text-xl font-bold'><FiCheck /></span> {data2?.PremiumPackage}</h3>
                </div>
              {/* ))
            } */}
          </div>
          {/*premium data end*/}

          <div className='px-4 py-2 text-center mx-auto' >
            <Link to="/contact">
            <button className='text-center bg-black w-full text-white py-2 rounded'>Continue</button>
            </Link>
            
            <button className='py-2 text-sm text-gray-500'>Compare Packages</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewGig
