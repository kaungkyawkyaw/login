import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SectionOne from  "../components/SectionOne"

const Home = () => {
  return (
    <>
    <div className=" relative">
      <SectionOne/>
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
    </>
  )
}

export default Home