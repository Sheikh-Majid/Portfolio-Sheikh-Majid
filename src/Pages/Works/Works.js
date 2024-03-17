import React from 'react'
import "./works.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Works = () => {
  return (
      <>
          <div className='container work col-md-12' id='works'>
              <h1 className='text-center text-uppercase'> Work Experience</h1>
              <hr />

              <h4 className='mt-3 mb-1 text-center text-uppercase mt-3 '>
                  Internship detail
              </h4>
              <hr />
              <div className='align-content-center mt-3'>
                  <VerticalTimeline>
                              <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="10 Dec ,2023 - 10 Jan ,2024"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<VscWorkspaceTrusted />}
  >
    <h3 className="vertical-timeline-element-title">WED DEVELOPMENT</h3>
                      <h5 className="vertical-timeline-element-subtitle">BHARAT INTERN PVT LTD.</h5>
                     
    
                  </VerticalTimelineElement>
                  </VerticalTimeline>
              </div>
              <p className='content mt-5 mb-2 '>
                  As , I am Final Year Student. So, Right Now I Don't have any professional experience.But if I get Opportunity to work with Your Organization. Then I will take professional experience and also Contribute to company goals
                  , Thankyou
              </p>
      </div>
      </>
  )
}

export default Works