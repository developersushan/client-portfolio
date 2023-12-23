import { menuItemFooter } from "../../../hooks/HeaderHooks"

const Footer = () => {
  return (
    <div className="sm:w-8/12 w-full mx-auto text-center py-4">
      <div className="sm:flex justify-around">
        <div className="cols-1">
            <h2 className="text-4xl hidden sm:block font-bold text-[#794FFC]">prokash</h2>
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
      <p className="sm:mt-8">© Copyright 2023  - All Rights Reserved</p>
    </div>
  )
}

export default Footer
