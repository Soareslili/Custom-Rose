import Hero from "./components/Home/Hero"

import { Footer } from "./components/Layout/Footer";
import Header from "./components/Layout/Header"
import About from "./components/pages/About"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import ArtistsPage from "./components/pages/Artists";
import PortfolioPage from "./components/pages/Portfolio";
import PricingPage from "./components/pages/Pricing";
import ContactPage from "./components/pages/Contact";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";



function App() {

useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AOS.init />
      <div className="min-h-screen flex flex-col">

        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/artists" element={<ArtistsPage/>} />
            <Route path="/portfolio" element={<PortfolioPage/>} />
            <Route path="/pricing" element={<PricingPage/>}/>
            <Route path="/contact" element={<ContactPage/>} />

          </Routes>
        </main>
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
