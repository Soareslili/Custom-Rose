import Hero from "./components/Home/Hero"

import { Footer } from "./components/Layout/Footer";
import Header from "./components/Layout/Header"
import About from "./components/pages/About"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">

        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
