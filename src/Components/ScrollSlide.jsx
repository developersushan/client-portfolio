import React from 'react'
import Marquee from 'react-fast-marquee'
import Image1 from '../assets/scrollItem/instagram-marketing-1-removebg-preview.png'
import Image2 from '../assets/scrollItem/Ads_logo_horizontal.png'
import Image3 from '../assets/scrollItem/analytics-consulting.png'
import Image4 from '../assets/scrollItem/facebook-advertising-removebg-preview.png'
import Image5 from '../assets/scrollItem/facebook-marketing-removebg-preview.png'
import Image6 from '../assets/scrollItem/LinkedIn-Marketing-Featured-Image-removebg-preview.png'
import Image7 from '../assets/scrollItem/Logos-730x480_Artboard-19.png'
import Image8 from '../assets/scrollItem/social-removebg-preview.png'
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
