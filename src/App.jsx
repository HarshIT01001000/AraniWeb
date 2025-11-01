import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import CrousalPage from "./Components/CrousalPage";
import DecorArticle from "./Components/DecorArticle";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import OnDemand from "./Components/OnDemand";
import ProductsForHomePage from "./Components/ProductsForHomePage";
import Services from "./Components/Services";
import Layout from "./Layout";

function App() {
  return (
    <div className="bg-white text-black">
        <Hero></Hero>
        <OnDemand></OnDemand>
        <ProductsForHomePage></ProductsForHomePage>
        <CrousalPage></CrousalPage>
        <DecorArticle></DecorArticle>
    </div>
  );
}

export default App;
