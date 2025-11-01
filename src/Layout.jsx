// Layout.jsx
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";   

export default function Layout({ children }) {
  return (
    <div className="bg-white text-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
