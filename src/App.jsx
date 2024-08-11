import './App.css'
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { OurProgram } from "./components/OurProgram.jsx";
import { About } from "./components/About.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Testimonial } from "./components/Testimonial.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

const  App =()=> {


  return (
    <>
     <Header title={'education'} icons={'ri-school-line'}/>
     <Home />
     <OurProgram />
     <About />
     <Gallery />
     <Testimonial />
     <Contact />
     <Footer />
    </>
  )
}

export default App
