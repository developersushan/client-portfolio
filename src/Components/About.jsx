import { useEffect, useState } from "react"
import CountDown from "./CountDown"
import axios from "axios"

const About = () => {
  const [aboutUser,setAboutUser] = useState([])
  const [images,setImages] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8500/aboutImage')
    .then(res =>{
      setImages(res.data)
    })
    .then(err =>console.log(err))
  },[])

  useEffect(()=>{
    axios.get('http://localhost:8500/addAbout')
    .then(res =>{
      setAboutUser(res.data)
    })
    .then(err =>console.log(err))
  },[])
  return (
    <div className="xl:bg-white  bg-none py-8" >
      <div className="w-full md:w-8/12 py-2 mx-auto text-center px-4 md:px-0">
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 mb-4">
        {
          images.map((item,index)=>{
            return(
              <div className='mx-auto' key={item._id}>
                <img className='rounded h-[350px] md:h-[650px] object-cover md:object-fill' width={500} src={`http://localhost:8500/${item.filename}`} alt=""  />
            </div>
            )
          })
        }
          {
            aboutUser.map((item)=>(
              <div key={item._id} className="text-left">
              <h2 className="text-xl text-orange-500 capitalize mt-2 sm:mt-0 sm:mb-6">{item.subTitle}</h2>
              <h3 className="text-2xl md:text-5xl mb-2 sm:mb-8">{item.title}</h3>
              <p>{item.description}</p>
             
            </div>
            ))
          }

        </div>
        <CountDown></CountDown>
      </div>
    </div>
  )
}

export default About
