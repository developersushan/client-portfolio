import axios from "axios"
import About from "../../Components/About"
import Banner from "../../Components/Banner"
import Services from "../../Components/Services"
import Special from "../../Components/Special"


const Home = () => {
  const handleClick =()=>{
    axios.post('http://localhost:8500/clickCount')
    .then(res =>res)
    .catch(err =>console.log(err))
    }
  return (
    <div onClick={(event)=>handleClick(event)} className="w-full">
      <Banner></Banner>
      <Special></Special>
      <About></About>
      <Services></Services>
      
    </div>
  )
}

export default Home
