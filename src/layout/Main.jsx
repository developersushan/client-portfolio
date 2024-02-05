import { Outlet, useLocation,  } from "react-router-dom"
import Header from "../Pages/Shared/Header/Header"
import Footer from "../Pages/Shared/Footer/Footer"
import axios from "axios"

const Main = () => {
  const location = useLocation()

  const handleClick =()=>{
  axios.post('http://localhost:8500/clickCount')
  .then(res =>res)
  .catch(err =>console.log(err))
  }
  return (
    <div >
      <div onClick={(event)=>handleClick(event)} className="bg-white shadow-lg sticky top-0 z-50  text-black">
        {location.pathname ==="/admin" || location.pathname==="/login"? '':
        <Header></Header>
        }
      
      </div>
      <div className="bg-white text-black">
      <Outlet></Outlet>
      </div>
      <div onClick={(event)=>handleClick(event)} className="bg-gray-500 bg-opacity-30">
        {
          location.pathname==="/admin"||location.pathname==="/login" ? '':
       <Footer></Footer>
        }
      </div>
    </div>
  )
}

export default Main
