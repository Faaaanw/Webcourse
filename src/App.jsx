import { Routes, Route} from "react-router"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimonialPage from "./pages/TestimonialPage"
import FaqPages from "./pages/FaqPages"
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage"


function App() {
  return (
      <div>
        <NavbarComponent/>
        

        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/kelas" Component={KelasPage}/>
          <Route path="/testimonial" Component={TestimonialPage}/>
          <Route path="/faq" Component={FaqPages}/>
          <Route path="/syaratketen" Component={SyaratKetentuanPage}/>
        </Routes>

        <FooterComponent/>
      </div>
    
      
  );
}

export default App
