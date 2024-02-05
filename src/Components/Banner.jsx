import HeroImage from '../assets/hero-img.png';
import Analytics from '../assets/icon animation/icon animation/google-analytics.png';
import GoogleTag from '../assets/icon animation/icon animation/Google-Tag-Manager.png';
import GoogleAds from '../assets/icon animation/icon animation/google_aads-merketing.png';
import Meta from '../assets/icon animation/icon animation/meta_PNG4.png';
import resume from '../assets/Entry_Level_Digital_Marketing_Resume_Example_48e4296164.jpeg'
import MainHero from '../assets/main details/received_636727880185486-removebg-preview.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Banner = () => {
  const [bannerText,setBannerText] =useState([])
  const [images,setImages] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8500/bannerImage')
    .then(res =>{
      setImages(res.data)
    })
    .then(err =>console.log(err))
  },[])


  async function fetchData(){
    const res = await fetch('http://localhost:8500/banner/')
    const data = await res.json()
    setBannerText(data)
}
useEffect(()=>{
    fetchData()
},[])

  const downloadFile =()=>{
    const resumeFilePath = resume;
    const link = document.createElement('a')
    link.href = resumeFilePath;
    link.download = resumeFilePath;
    link.click()
  }
  return (
<div className=''>
<div className='w-full md:w-8/12 mx-auto pb-20 text-black text-center px-4 md:px-0'>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center items-center py-8">
      <div className='text-left' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
        {
          bannerText.map((item)=>(
            <div key={item._id}>
                      <h2 className='text-2xl font-semibold text-[#794FFC]'>{item.subTitle}</h2>
        <h1 className='text-3xl sm:text-5xl font_style font-semibold mb-4 mt-2 leading-tight'>{item.title}<span className='text-[#794FFC]'>{item.titleColor}</span> {item.titleSecond} <span className='text-[#794FFC]'>{item.titleColorSecond}</span></h1>
        <p className='mb-4'>{item.description}</p>
            </div>
          ))
        }
        <div className='flex gap-6'>
            <button onClick={downloadFile} className="  py-2 px-3 border bg-[#794FFC] text-white rounded ">Download Cv</button>
            <Link to='/contact' className=" py-2 px-3 border bg-[#794FFC] text-white rounded ">Contact Me</Link>
        </div>
      </div>
      <div className="banner-hero relative  mt-2 md:mt-0" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <img className='figma absolute top-[2rem] left-6' src={GoogleTag} width={100} height={100} alt="" />
            <img className='PhotoShop absolute top-[2rem] right-6' src={Analytics} width={100} height={100} alt="" />
            <img className='Illustrator absolute top-[14rem] left-[-5rem]' src={GoogleAds} width={100} height={100} alt="" />
            <img className='Sketch absolute bottom-[14rem] right-[-5rem]' src={Meta} width={100} height={100} alt="" />
        <div className='relative left-[0rem] md:left-[8rem]'>
        {
          images.map((item,index)=>{
            return(
              <div className='mx-auto' key={item._id}>
                <img className='' width={400} height={400}  src={`http://localhost:8500/${item.filename}`} alt=""  />
            </div>
            )
          })
        }
            {/* <img src={HeroImage} className='' alt="" /> */}
        </div>
      </div>
    </div>
    </div>
</div>
  )
}

export default Banner
