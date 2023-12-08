import About from "../../Components/About"
import Banner from "../../Components/Banner"
import Services from "../../Components/Services"
import Special from "../../Components/Special"


const Home = () => {
  return (
    <div className="w-full">
      <Banner></Banner>
      <Special></Special>
      <About></About>
      <Services></Services>
      
    </div>
  )
}

export default Home
