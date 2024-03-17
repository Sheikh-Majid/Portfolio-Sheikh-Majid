import React from 'react'
import "./Menu.css";
import sheikh from "../../image/sheikh.jpg";
import { FcHome , FcBiotech,
  FcBusinessContact,
    FcAbout,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
  
import { Link } from 'react-scroll';

const Menu = ({toggle}) => {
  return (
    <>
      {
        toggle ? (
            <>
            <div className='navbar-profile-pic'>
        <img src={sheikh}  alt='Profile Pic' />
      </div>

         <div className='nav-items'>
                <div className='nav-item'>
                <div className='nav-link'>
                  
                  <Link to='home'
                   spy={true} 
                 smooth={true} 
                    offset={-100} 
                     duration={100} 
                  >    <FcHome />
                    Home
                  </Link>
                        
                    </div>
                    <div className='nav-link'>
                  <Link to='about'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                   duration={100} 
                  >
                      <FcAbout/>
                        About
                  </Link>
                    </div>
                    <div className='nav-link'>
                  <Link  to='education'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                  <FcReadingEbook />
                     Education
                  </Link>
                    </div>
                    <div className='nav-link'>
                  <Link
                   to='tech'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                   duration={100} 
                  >
                   <FcBiotech />
                    Tech Stack
                  </Link>
                    </div>
                    <div className='nav-link'>
                  <Link
                   to='projects'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                  <FcVideoProjector />
                    Projects
                  </Link>
                    </div>
                    <div className='nav-link'>
                  <Link
                  to='works'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                   <FcPortraitMode />
                    Work Experince
                  </Link>
                    </div>
                    <div className='nav-link'>
                 
                  <Link
                   to='contact'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                    duration={100} 
                  >
                   <FcBusinessContact />
                    Contact
                  </Link>
                  
                    </div>
                </div>
            </div>
            </>
        ):(  
          <>
            <div className='nav-items'>
                <div className='nav-item'>
                  <div className='nav-link'>
                    
                     <Link to='home'
                   spy={true} 
                 smooth={true} 
                    offset={-100} 
                     duration={100} 
                  >    <FcHome title='Home' />
                    
                  </Link>
                        
                        
                    </div>
                  <div className='nav-link'>
                     <Link to='about'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                   duration={100} 
                  >
                      <FcAbout title='About'/>
                      
                  </Link>
                          
                        
                    </div>
                  <div className='nav-link'>
                    
                     <Link  to='education'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                  <FcReadingEbook title='Education' />
                   
                  </Link>
                       
                    
                    </div>
                  <div className='nav-link'>
                     <Link
                   to='tech'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                   duration={100} 
                  >
                   <FcBiotech title='Teck Stack' />
                   
                  </Link>
                          
                    
                    </div>
                  <div className='nav-link'>
                     <Link
                   to='projects'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                  <FcVideoProjector title='Project' />
                    
                  </Link>
                         
                    
                    </div>
                  <div className='nav-link'>
                    <Link
                  to='works'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                     duration={100} 
                  >
                   <FcPortraitMode  title='Work Experience'/>
                    
                  </Link>
                       
                    
                    </div>
                  <div className='nav-link'>
                    
                     <Link
                   to='contact'
                   spy={true} 
                 smooth={true} 
                    offset={-100}
                    duration={100} 
                  >
                   <FcBusinessContact title='Contact' />
                    
                  </Link>
                    </div>
                </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default Menu