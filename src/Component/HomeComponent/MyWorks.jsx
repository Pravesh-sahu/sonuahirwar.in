import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiPaperArrow } from "react-icons/gi";
import project1 from "./../../Assests/project1.png";
import project2 from "./../../Assests/raans.png";
import project3 from "./../../Assests/project3.png";
import project4 from "./../../Assests/project4.png";
import project5 from "./../../Assests/naturalcraft.png";
import project6 from "./../../Assests/project6.png";
import project7 from "./../../Assests/naturals.png";
import project8 from "./../../Assests/project8.png"; 


function About() { 
  
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <GiPaperArrow />,
    nextArrow: <GiPaperArrow />,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 480,
             settings: {
              slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,  
                    autoplay: false,
                    autoplaySpeed: 2000,
                    centerMode: true,
                    centerPadding: '30px', // Adjust the padding as needed
                    cssEase: 'linear', // for smoother transitions
                    
                }
        }
    ]
  };

  return (
    <section id="MyWorks" className="myworks  pt-sm-5 pt-1  mt-5  text-white">
         <div class="row-1 container  pb-sm-5 mb-sm-5 ">
  
          <h3 className="sec-head text-white mb-5 position-relative">My Works</h3>
        </div> 
      <div class="container full-width pt-sm-5 pt-1 mt-5">
        <div class="row slider-right position-relative z-1">
        <Slider {...settings}>
          <div className="slide">
                <a href="https://nilohealth.com/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project1} className="w-100" alt="my-profile" />
              <div className="content"><h5>NILOHEALTH</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>

          <div className="slide">
                <a href="https://raan.com/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project2} className="w-100" alt="my-profile" />
              <div className="content"><h5>RAAN</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="https://podcastmonkey.co/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project7} className="w-100" alt="my-profile" />
              <div className="content"><h5>POADCASTMONKEY</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="https://hastee.com/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project3} className="w-100" alt="my-profile" />
              <div className="content"><h5>HASTEE</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="https://www.jusre.be/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project4} className="w-100" alt="my-profile" />
              <div className="content"><h5>JUSRE</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="https://thenaturalcraft.com/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project5} className="w-100" alt="my-profile" />
              <div className="content"><h5>NATURAL CRAFT</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
          <div className="slide">
                <a href="https://visitas.haciendaguzman.com/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project6} className="w-100" alt="my-profile" />
              <div className="content"><h5>Haciendaguzman</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>
      
          <div className="slide">
                <a href="https://cosmoclinic.it/"  className="d-block position-relative h-100 overflow-hidden">
              <img src={project8} className="w-100" alt="my-profile" />
              <div className="content"><h5>COSMO CLINIC</h5><button className="dark-btn mt-2">Visit Website</button></div>
            </a>
          </div>

          </Slider>

     
        </div>
      </div>
    </section>
  );
}

export default About;
