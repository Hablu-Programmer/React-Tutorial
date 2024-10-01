import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Components/Signup"
import Error from "./Components/Error"
function App() {
  return (
    <BrowserRouter>

      <Routes>
      
        <Route path="" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />}/>
          <Route path="*" element={<Error />} ></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
