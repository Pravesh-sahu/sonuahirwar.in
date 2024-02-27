import portfolioA from "./../../Assests/portfolioA.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section id="MyWorks" className="myworks  pt-sm-5 pt-1  mt-5  text-white">
         <div class="row-1 container  pb-sm-5 mb-sm-5 ">
          <h3 className="sec-head text-white mb-5 position-relative">My Works</h3>
        </div>
      <div class="container full-width pt-sm-5 pt-1 mt-5">
        <div class="row slider-right position-relative z-1">
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>

          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="#" className="d-block position-relative h-100 overflow-hidden">
              <img src={portfolioA} className="w-100" alt="my-profile" />
              <div className="content"><h5>NiloHealth</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>

          

     
        </div>
      </div>
    </section>
  );
}

export default About;
