import React from "react";
import "./Contact.css";
import contactUs from "../../image/contactUs.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import toast from "react-hot-toast";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [name, setname] = useState("");
  // const [email, setEmail] = useState("");
  // const [msg, setMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i8k2zdc", "template_8pzwl96", form.current, {
        publicKey: "5SZjEx_QfHNXuWAWY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Message Send Successfully");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong while sending email");
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src={contactUs}
                      alt="contact-us"
                      className="contact-image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 second">
              <Rotate>
                <div className="card2 d-flex card border-0 px-5 py-4 mb-4">
                  <div className="row">
                    <div className="row  ">
                      <h6>
                        Contact With
                        <BsLinkedin
                          color="blue"
                          size={30}
                          className="ms-2"
                          title="Linkedin"
                          src="www.linkedin.com/in/sheikh-majid-tarique-11a1b2200"
                        />
                        <BsGithub
                          color="black"
                          size={30}
                          className="ms-2"
                          title="Github"
                        />
                        <FaYoutube
                          color="Red"
                          size={30}
                          className="ms-2"
                          title="Youtube"
                        />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <div className="row ">
                      <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <div>
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            className="mb-1 p-1  "
                          />
                        </div>
                        <label>Email</label>
                        <div>
                          <input
                            type="email"
                            name="user_email"
                            placeholder="Enter your Email Address"
                            className="mb-1 p-1"
                          />
                        </div>
                        <label>Message</label>
                        <div>
                          <textarea
                            name="message"
                            placeholder="Enter Your Message "
                            className=" p-1 "
                          />
                        </div>
                        <div>
                          <input
                            type="submit"
                            value="Send"
                            className="button "
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
