import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service"
import ScrollToTop from "../src/components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
     <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service/>}/>
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
      <Footer />
       <WhatsAppButton />
    </>
  );
}
