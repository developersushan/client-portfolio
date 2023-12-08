import React from 'react'
import Marquee from 'react-fast-marquee'
import Image1 from '../assets/scrollItem/logo-10.png'
import Image2 from '../assets/scrollItem/logo-11.png'
import Image3 from '../assets/scrollItem/logo-2.png'
import Image4 from '../assets/scrollItem/logo-3.png'
import Image5 from '../assets/scrollItem/logo-4.png'
import Image6 from '../assets/scrollItem/logo-5.png'
import Image7 from '../assets/scrollItem/logo-6.png'
import Image8 from '../assets/scrollItem/logo-8.png'
const ScrollSlide = () => {
  return (
    <div data-aos="zoom-in" className=''>
      <Marquee pauseOnHover={true}  speed={80}>
        <div>
            <img src={Image1} width={300} alt="" />
        </div>
        <div>
            <img src={Image2} width={300} alt="" />
        </div>
        <div>
            <img src={Image3} width={300} alt="" />
        </div>
        <div>
            <img src={Image4} width={300} alt="" />
        </div>
        <div>
            <img src={Image5} width={300} alt="" />
        </div>
        <div>
            <img src={Image6} width={300} alt="" />
        </div>
        <div>
            <img src={Image7} width={300} alt="" />
        </div>
        <div>
            <img src={Image8} width={300} alt="" />
        </div>
      </Marquee>
    </div>
  )
}

export default ScrollSlide
