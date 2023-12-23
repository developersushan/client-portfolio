import { Outlet, useLocation,  } from "react-router-dom"
import Header from "../Pages/Shared/Header/Header"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  const location = useLocation()
  return (
    <div>
      <div className="bg-white shadow-lg sticky top-0 z-50  text-black">
        {location.pathname ==="/admin"? '':
        <Header></Header>
        }
      
      </div>
      <div className="bg-white text-black">
      <Outlet></Outlet>
      </div>
      <div className="bg-gray-500 bg-opacity-30">
        {
          location.pathname==="/admin" ? '':
       <Footer></Footer>
        }
      </div>
    </div>
  )
}

export default Main
