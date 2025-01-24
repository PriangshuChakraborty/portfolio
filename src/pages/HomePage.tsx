import Hero from "../components/Hero/Hero"
import Navbar from "../components/Layout/Navbar"


const HomePage = () => {
  return (
    <div className=" select-none">
        <Navbar />
        <Hero/>
    </div>
  )
}

export default HomePage