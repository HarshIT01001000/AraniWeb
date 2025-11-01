import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProductSec from './Components/ProductSec'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import DecorArticle from './Components/DecorArticle'
import Layout from './Layout.jsx'
import Services from './Components/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Layout>
       <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductSec />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Services></Services>} />
      </Routes>
     </Layout>
    </BrowserRouter>
  </StrictMode>,
)
