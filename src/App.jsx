import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import DecorArticle from './Components/DecorArticle'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProductSec from './Components/ProductSec'

function App() {

  return (
    <div className='bg-white text-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <DecorArticle></DecorArticle>
      <Footer></Footer>
      <ContactUs></ContactUs>
      <ProductSec></ProductSec>
      <AboutUs></AboutUs>
    </div>
  )
}

export default App
