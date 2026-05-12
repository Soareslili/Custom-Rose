import Hero from "./components/Home/Hero"
import Header from "./components/Layout/Header"
import About from "./components/pages/About"

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>
        

      </div>
    </BrowserRouter>
  )
}

export default App
