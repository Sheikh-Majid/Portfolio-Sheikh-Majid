import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Project from "./Pages/Projects/Project";
import TechStack from "./Pages/TechStack/TechStack";
import Works from "./Pages/Works/Works";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./Components/MobileNav/MobileNav";
import './App.css'
import  { Toaster } from 'react-hot-toast';


function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Toaster/>
        <MobileNav/>
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Project />
        <Education />
        <Works />
        <Contact/>
      </div>
       <div className="footer pb-3 ms-3">
          <Tada> 
            <h4 className="text-center">Made With 😍 Sheikh-Majid &copy; 2024</h4>
         </Tada>
      </div>
      </div>
      <div>
        <ScrollToTop smooth
          color="Black"
          style={{ backgroundColor: "#138781", }}
          
          className="scroll"
        />
      </div>
    
    </>
  );
}

export default App;
