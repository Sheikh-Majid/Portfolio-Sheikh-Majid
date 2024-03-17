import React from 'react'
import "./About.css"
import sheikh from "../../image/sheikh.jpg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <> 
      <Jump> 
          <div className='about' id='about'>
          <div className="row">
              <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>   
                    <img src={sheikh}  alt='Profile Pic' />
              </div>
              <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                      <h1>About Me</h1>
                         <p>
                 Hi , My Name is Sheikh Majid Tarique . I am from Azamgarh. Currently Staying in Greater Noida For My Graduation
                As far as my education qualification is concerned, I am B.Tech Final Year Student From GNIOT College, Greater Noida in 'Electronics & Communication
                '.I am good in programming languages  Java and very much interested in HTML, CSS, JavaScript , Node.js & MongodB etc.
              </p>
              </div>
    
      
          </div>
        </div>
        </Jump>
      </>
  )
}

export default About