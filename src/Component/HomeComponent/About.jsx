import profile from "./../../Assests/about.png";
import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
function About() {
  return (
    <section
      id="about"
      className="about  pt-sm-5 pt-4  mt-sm-5 before-after position-relative  text-white overflow-hidden"
    >
      <div class=" mt-5 ">
        <div class="row container m-auto  position-relative pt-sm-5">
          <h3 className="sec-head text-white mb-5 position-relative">
            About Me
          </h3>
        </div>
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
              <a href="https://www.linkedin.com/in/sonu-ahirwar-4628331a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/sonuahirwar_?igsh=dWp6bTJha2lqeDhy">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/sonu.ahirwar.5070">
                <FaFacebook />
              </a>
              <a href=" https://wa.me/7354859868">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div class="col-2-inner  p-md-5 p-4">
            <p>
              As a front-end developer, I specialize in bringing the visual and
              interactive elements of websites and applications to life. With
              expertise in HTML, CSS, and JavaScript, I meticulously craft user
              interfaces that are not only visually appealing but also intuitive
              and responsive.
            </p>
            <a href="/Technolgies">
              <button class="dark-btn">Technolgies</button>
            </a>
          </div>
        </div>

        <div class="row  container m-auto position-relative pt-5   mt-sm-0 mt-3">
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
            <h6>User-Centric Approach</h6>
            <h6>Responsive Design</h6>
            <h6>Premium Look</h6>
          </div>
          <div className="col-lg-4  col-three">
            <div className=" color-dark bg-white  p-md-5 p-4">
              <p>
                Responsive design ensures accessibility on all devices, while a
                premium look builds trust and leaves a lasting impression.
                Together, they create a cohesive and captivating web presence,
                inspiring and delighting users at every turn.
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
