import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Contato from "./pages/contato"
import Sobre from "./pages/sobre"


function App() {

  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/contato" element={<Contato />} />
   </Routes>
   </BrowserRouter>

    </div>
  )
}

export default App
