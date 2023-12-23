import { useEffect, useState } from "react"
import AOS from 'aos';
const Special = () => {
    const [social,setSocial] = useState([])
    async function fetchData(){
        const res = await fetch('/public/social.json')
        const data = await res.json()
        setSocial(data)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className=" shadow-md w-full bg-none  ">
      <div className="w-8/12  py-2 mx-auto text-center">
        <div className="hed md:w-1/2 mx-auto py-9">
            <h3 className="text-orange-500 text-lg font-semibold">What The Special</h3>
            <h2 className="text-2xl sm:text-4xl font-semibold font_style">Want to boost your business growth? Solution is here</h2>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className="mt-7 mb-7 grid  lg:grid-cols-2 auto-rows-[minmax(0,2fr)] md:grid-cols-2 gap-8 sm:grid-cols-1 grid-cols-1">
            {
                social.map(item => {
                    return(
                    <div key={item.id} className="text-left special box p-5 bg-white box rounded  transition hover:scale-90 duration-200 delay-100 ">
                        <img src={item.picture} width={100}  alt="" />
                        <h3 className="text-3xl font-medium mt-4 mb-2">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    )
                })
            }
        </div>
      </div>

    </div>
  )
}

export default Special
