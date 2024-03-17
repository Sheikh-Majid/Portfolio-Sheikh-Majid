import React from 'react'
import "./Project.css";
import Spin from "react-reveal/Spin";
import ecommerce from "../../image/ecommerce.png"
import gif from "../../image/gif.jpg";
import Education from "../../image/Education.jpg"

const Project = () => {
  return (
      <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
        <Spin> 
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={ecommerce}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Sheikh Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://ecommerce-backend-mxdo.onrender.com/"
                  >
                    View
                              </a>
                                 <a
                    className="ad-btn"
                    href="https://github.com/Smtprogrammar12/Production-Mern-Ecommerce-App-2024"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={Education}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React </span>

                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Online Eduction App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href=""
                  >
                    View
                              </a>
                              
                                 <a
                    className="ad-btn"
                    href="https://github.com/Smtprogrammar12/Online-Education-Platform"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fronted</span>
                  <img
                    src={gif}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                  <span className="card-detail-badge">JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">GIF Random Generator</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                              </a>
                                 <a
                    className="ad-btn"
                    href="https://github.com/Smtprogrammar12/GIF-GENERATOR"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  )
}

export default Project