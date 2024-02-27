import profile from "./../../Assests/my_profile.jpg";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
function About() {
  return (
    <section id="about" className="about  pt-sm-5 pt-4  mt-sm-5 before-after position-relative  text-white overflow-hidden" >
      
      <div class=" mt-5 ">
      <div class="row container m-auto  position-relative pt-sm-5">
      <h3 className="sec-head text-white mb-5 position-relative">About Me</h3></div>
        <div class="row container m-auto row-1 position-relative pt-sm-5">
          <div class="col-1-inner p-md-5 p-4">
            <h5>-Front end Developer</h5>
            <h3 className="f-70">
              Sonu <br />
              Ahirwar
            </h3>
          </div>
          <div class="col-3-inner position-relative">
            <img src={profile} className="w-100" alt="my-profile" />
            <div className="social-div position-absolute bg-color-dark ">
         
              <a href="https://www.link.com">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div class="col-2-inner  p-md-5 p-4">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
            </p>
            <button class="dark-btn">Learn More </button>

          </div>
        </div>

        <div class="row  container m-auto position-relative pt-5 pb-5 mb-sm-5 mt-sm-0 mt-3">
          <div className="col-lg-4 col-one">
            <h3 className=" f-70 txt-animation d-flex position-relative justify-content-md-start justify-content-center">
              <span className="one">D</span>
              <span className="two">E</span>
              <span className="three">S</span>
              <span className="four">I</span>
              <span className="five">G</span>
              <span className="six">N</span>
            </h3>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4 mb-lg-0 mb-5  col-two">
            <h6>Creative Ideas</h6>
            <h6>Creative Ideas</h6>
            <h6>Creative Ideas</h6>
            <h6>Creative Ideas</h6>
          </div>
          <div className="col-lg-4  col-three">
            <div className=" color-dark bg-white  p-md-5 p-4">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
            </p>
            <div className="circle rounded-circle mt-4 bg-color-dark"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
