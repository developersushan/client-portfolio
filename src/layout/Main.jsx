import { Outlet } from "react-router-dom"
import Header from "../Pages/Shared/Header/Header"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <div className="bg-white shadow-xl sticky top-0 z-50  text-black">
      <Header></Header>
      </div>
      <div className="bg-white text-black">
      <Outlet></Outlet>
      </div>
      <div className="">
      <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
