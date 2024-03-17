import React from 'react'
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
      <>
          <div className='container eduction' id='education'>
              <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                  Eduction Details
              </h2>
              <hr/>
           

          <VerticalTimeline>
              <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2020 - 2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.TECH - EC</h3>
                      <h4 className="vertical-timeline-element-subtitle">GNIOT , GREATER NOIDA</h4>
                     <p> PERCENTAGE - 75%</p>
    
                  </VerticalTimelineElement>
                  
                           <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2017 - 2019"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">INTERMEDIATE</h3>
                      <h4 className="vertical-timeline-element-subtitle">SYB ,AZAMGARH</h4>
                       <p> PERCENTAGE - 64%</p>
    
                  </VerticalTimelineElement>
                  
                           <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2014-2016"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">HIGH-SCHOOL</h3>
                      <h4 className="vertical-timeline-element-subtitle">NCSCS , AZAMGARH</h4>
                       <p> PERCENTAGE - 60%</p>
                      
    
  </VerticalTimelineElement>
              </VerticalTimeline>
              
              </div> 
      </>
  )
}

export default Education