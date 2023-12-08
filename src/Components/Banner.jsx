import HeroImage from '../assets/hero-img.png';
import Analytics from '../assets/icon animation/icon animation/google-analytics.png';
import GoogleTag from '../assets/icon animation/icon animation/Google-Tag-Manager.png';
import GoogleAds from '../assets/icon animation/icon animation/google_aads-merketing.png';
import Meta from '../assets/icon animation/icon animation/meta_PNG4.png';
import resume from '../assets/Entry_Level_Digital_Marketing_Resume_Example_48e4296164.jpeg'
const Banner = () => {

  const downloadFile =()=>{
    const resumeFilePath = resume;
    const link = document.createElement('a')
    link.href = resumeFilePath;
    link.download = resumeFilePath;
    link.click()
  }
  return (
    <div className='w-8/12 mx-auto text-center'>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center items-center py-8">
      <div className='text-left' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
        <h2 className='text-2xl font-semibold text-orange-500'>Hello, I am</h2>
        <h1 className='text-3xl sm:text-5xl font-semibold mb-4 mt-2 leading-tight'>Prokash kumar, Digital Marketing Expert</h1>
        <p className='mb-4'>Mauris elementum ex vitae arcu finibus, non dictum elit luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecaturpis dui, tincidunt sagitti.</p>
        <div className='flex gap-6'>
            <button onClick={downloadFile} className="header-button  rounded text-xl font-semibold">Download Cv</button>
            <button className=" w-[150px] border-2 hover:bg-white hover:text-black duration-100 delay-150 transition ease-in p-2 rounded text-xl font-semibold">Contact Me</button>
        </div>
      </div>
      <div className="banner-hero relative " data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
            <img className='figma absolute top-[2rem] left-6' src={GoogleTag} width={100} height={100} alt="" />
            <img className='PhotoShop absolute top-[2rem] right-6' src={Analytics} width={100} height={100} alt="" />
            <img className='Illustrator absolute top-[14rem] left-[-5rem]' src={GoogleAds} width={100} height={100} alt="" />
            <img className='Sketch absolute bottom-[14rem] right-[-5rem]' src={Meta} width={100} height={100} alt="" />
        <div className='relative left-[8rem]'>
            <img src={HeroImage} className='' width={400} height={400} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner
