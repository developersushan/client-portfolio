import { menuItemFooter } from "../../../hooks/HeaderHooks"
import Facebook from "../../../assets/main details/1.jpg"
import Instagram from "../../../assets/main details/2.jpg"
import Twitter from "../../../assets/main details/3.jpg"
import Linkedin from "../../../assets/main details/4.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Logo1 from '../../../assets/favicon/skilpro_logo_150.png'

const Footer = () => {
  const [facebook,setFacebook] = useState([])
  const [instagram,setInstagram] = useState([])
  const [linkedin,setLinkedin] = useState([])
  const [twitter,setTwitter] = useState([])

 

  useEffect(()=>{
    axios.get('http://localhost:8500/facebook')
    .then(res=>{
      setFacebook(res.data)
    })
    .then(err=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:8500/instagram')
    .then(res=>{
      setInstagram(res.data)
    })
    .then(err=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:8500/linkedin')
    .then(res=>{
      setLinkedin(res.data)
    })
    .then(err=>console.log(err))
  },[])
  useEffect(()=>{
    axios.get('http://localhost:8500/twitter')
    .then(res=>{
      setTwitter(res.data)
    })
    .then(err=>console.log(err))
  },[])
 
  const facebookView=facebook.map(fb=>(fb.facebook))
  const instagramView=instagram.map(fb=>(fb.instagram))
  const linkedinView=linkedin.map(fb=>(fb.linkedin))
  const twitterView=twitter.map(fb=>(fb.twitter))
  
  return (
    <div className="sm:w-8/12 w-full mx-auto text-center py-4">
      <div className="sm:flex justify-around">
        <div className="cols-1 flex items-center ">
        <img src={Logo1} width={100} height={100} className="w-[66px] h-[40px]" alt="" />
            <h2 className="text-xl hidden sm:block font-medium text-[#5ac8fa]">Skills Pro</h2>
        </div>
        <div className=" grid grid-cols-2 gap-5">
            <div className="text-left list-none leading-8">
            <h2 className="text-xl font-semibold  text-gray-400">Resources</h2>
                {menuItemFooter}
            </div>
            <div className="text-left leading-8" >
                <h2 className="text-xl font-semibold  text-gray-400">Keep up to date</h2>
                <p>Join our newsletter for regular updates. No spam ever.</p>
                <form action="#">
                    <div>
                        <label htmlFor="name">Email: </label><br />
                        <input type="email" className="border w-full outline-none focus:border-indigo-500 rounded p-1"  placeholder="example@gmail.com" />
                    </div>
                    <button type="submit" className="bg-indigo-500 px-6 py-1 rounded mt-5 hover:bg-indigo-600">Subscribe</button>
                </form>
            </div>
        </div>
        
      </div>
      <div className="text-left">
        <div className="flex items-center gap-3">
          <a href={`${facebookView}`} target="blank" >
          <img src={Facebook} width={30} className="rounded-full" alt="" />
          </a>

          <a href={`${instagramView}`} target="blank">
          <img src={Instagram} width={30} className="rounded-full" alt="" />
          </a>
          <Link to={`${linkedinView}`} >
          <img src={Linkedin} width={30} className="rounded-full" alt="" />
          </Link>
          <a href={`${twitterView}`} target="blank">
          <img src={Twitter} width={30} className="rounded-full" alt="" />
          </a>
          
        </div>
      </div>
      <p className="sm:mt-8 text-sm">© Copyright@ Reserved by sushan singh 2023- All Rights Reserved</p>
    </div>
  )
}

export default Footer
