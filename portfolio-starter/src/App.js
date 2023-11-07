import { useContext } from "react";
import './App.css';
import Contact from './Compoents/Contact/Contact';
import Experience from './Compoents/Experience/Experience';
import Footer from './Compoents/Footer/Footer';
import Intro from './Compoents/Intro/Intro';
import Navbar from "./Compoents/Navbar/Navbar";
import Portfolio from './Compoents/Portfolio/Portfolio';
import Services from './Compoents/Services/Services';
import Testimonial from './Compoents/Testimonials/Testimonial';
import Works from './Compoents/Works/Works';
import { themeContext } from "./Context";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
