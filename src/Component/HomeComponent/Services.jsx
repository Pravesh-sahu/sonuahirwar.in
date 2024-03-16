import design from "./../../Assests/design.gif";
import development from "./../../Assests/development.gif";
import maintainance from "./../../Assests/maintainance.gif";
import ui from "./../../Assests/ui.gif";
function Banner() { 
  return (

    <section className=" service   before-after  text-center">
      <div className="service-inner-sec   pb-5">
        <div class="container  pt-3 pb-3">
          <div class="row position-relative p-md-5 p-3 pb-5 pt-5">
            <div class="col">
              <h2>
                I Can Create Amazing
                <br /> Web Experiences{" "}
              </h2>
              <p>
                Passionate front-end developer with a knack for turning ideas
                into captivating digital experiences. Dedicated to crafting
                clean, efficient code and pixel-perfect designs.
              </p>
              <a href="#MyWorks">
                <button className="dark-btn">Explore My Projects</button>
              </a>
            </div>   
          </div>
        </div>
      </div>

      <div id="service" class="pt-sm-5 pt-1 pb-3 service-inner-sec-2">
        <div class="row-1 container  pb-sm-5 mb-sm-5 pb-1">
          <h3 className="sec-head text-white  position-relative">Services</h3>
        </div>
        <div class="row-1 container pt-5 mb-3">
          <div class="col-sm-4  p-3 pt-4 pb-4">
            <img src={development} alt="logo" className="w-50" />
            <h3>Web Development</h3>
            <p>
              Web development is the backbone of the digital world, where ideas
              come to life through code and creativity.
            </p>
          </div>

          <div class="col-sm-4  p-3 pt-4 pb-4">
            <img src={design} alt="logo" className="w-50" />
            <h3>Web Design</h3>
            <p>
              Web design is the art of blending creativity with functionality to
              create visually captivating and user-friendly digital experiences.
            </p>
          </div>

          <div class="col-sm-4  p-3 pt-4 pb-4">
            <img src={maintainance} alt="logo" className="w-50" />
            <h3>Web Maintenance</h3>
            <p>
              Web maintenance is the backbone of a successful online presence,
              ensuring that websites and applications continue to perform
              optimally long after their initial launch.
            </p>
          </div>
          <div class="col-sm-4  p-3 pt-4 pb-4">
            <img src={ui} alt="logo" className="w-50" />
            <h3>UI/UX</h3>
            <p>
              UI/UX design is the cornerstone of creating intuitive and engaging
              digital experiences for users. 
            </p>
          </div>
        </div>
        <a href="/Technologies">
          {" "}
          <button className="mt-5 white-btn border-0 text-white">
            Technologies
          </button>
        </a>
      </div>
    </section>
  );
}

export default Banner;
