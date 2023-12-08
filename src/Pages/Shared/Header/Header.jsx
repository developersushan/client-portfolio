import { useState } from "react";
import { menuItem } from "../../../hooks/HeaderHooks"
import { FiAlignJustify,FiX } from "react-icons/fi";
const Header = () => {
const [open,setOpen] = useState(false)
  return (
    <div className="lg:w-8/12 md:w-full mx-auto text-center py-2">
      <header className="flex items-center  justify-between">
            <div className="">
                <h2 className="text-4xl font-bold text-orange-500">Prokash</h2>
            </div>
            <div className="hidden sm:flex gap-10  items-center list-none">
                {menuItem}
            </div>
            <div className="sm:hidden relative">
              <button onClick={()=>setOpen(!open)} className="text-4xl sm:hidden">
                <span className={`${open?'hidden':''}`}>
             <FiAlignJustify />
                </span>
             <span className={`${open?'':'hidden'}`}><FiX/></span>
              </button>
              <div className={`block list-none text-left w-48 py-2 px-2 rounded bg-white text-black absolute z-50 right-[-41px]  ${open?'translate-x-0 duration-300':'translate-x-52 duration-500 opacity-0'}`}>
                {menuItem}
              </div>
            </div>
      </header>
    </div>
  )
}

export default Header
