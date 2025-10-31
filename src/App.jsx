import DecorArticle from './Components/DecorArticle'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='bg-white text-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <DecorArticle></DecorArticle>
      <Footer></Footer>
    </div>
  )
}

export default App
