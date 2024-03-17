import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import My_Resume from "../../image/My_Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from '../../context/ThemeContext';
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light")); 
  };
  return (
    <div>
       <>
        <div className='container-fluid Home-container ' id='home'>
          <div className='theme-btn' onClick={handleTheme}>
           {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
          </div>
          <div className='conatiner Home-content'>
            
            <Fade right> 
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
          options={{
          strings: ['Full Stack Developer !', 'MERN Full Stack Developer !' , 'React  Developer !' ],
          autoStart: true,
           loop: true,
  }}
/>
              </h1>
              </Fade>
            
          </div>
       
          <div className='Home-btn'>
            <a className='btn btn-hire'
               href="https://api.whatsapp.com/send?phone=8076892367"
                rel="noreferrer"
                target="_blank"
            >
             Hire Me
            </a>
            <a className='btn btn-resume'
            href={My_Resume} download='Sheikh-Majid-Resume.pdf'>
             My Resume
            </a>
          </div>
       
        </div>
       
       </>
    </div>
  )
}

export default Home