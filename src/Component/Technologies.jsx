import react from "./../Assests/react.gif";
import design from "./../Assests/design.gif";
import development from "./../Assests/development.gif";
import wordpress from "./../Assests/wordpress.gif";
import css from "./../Assests/css.gif";
import java from "./../Assests/java.gif";
import boot from "./../Assests/boot.gif";
import hub from "./../Assests/hub.gif";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
function Banner() { 
  return (
    <>
      <section className=" service    before-after  text-center pt-lg-5 position-relative  tech-sec">
        <div id="service" class="technologies pt-sm-5 pt-5 pb-3 service-inner-sec-2">
          
          <div className="d-flex container align-items-center h3 text-white mb-5">
            <MdOutlineKeyboardArrowLeft />
            <a
              href="/"
              className="text-left  text-decoration-none  d-flex "
            >
              Back
            </a>
          </div>
          <div class="row-1 container  pb-sm-5 mb-sm-5 pb-1">
            <h3 className="sec-head text-white  position-relative">
              Technologies
            </h3>
          </div>

          <div class="row-1 container pt-5 mb-3">
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={react} alt="logo" className="w-50" />
              <h3>React JS</h3>
              <p>
                React.js is a powerful JavaScript library developed by Facebook
                for building dynamic user interfaces. With its component-based
                architecture, React allows developers to create reusable UI
                components.
              </p>
            </div>
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={design} alt="logo" className="w-50" />
              <h3>JQuery</h3>
              <p>
                jQuery is a lightweight JavaScript library simplifying DOM
                manipulation and event handling. With concise syntax, it
                streamlines web development tasks and ensures cross-browser
                compatibility.
              </p>
            </div>
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={css} alt="logo" className="w-50" />
              <h3>CSS</h3>
              <p>
                CSS is a stylesheet language used for styling HTML documents,
                controlling layout, colors, and typography. It separates content
                from presentation, enabling consistent design across multiple
                web pages.
              </p>
            </div>

            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={development} alt="logo" className="w-50" />
              <h3>HTMl</h3>
              <p>
                HTML, or HyperText Markup Language, is the standard markup
                language for creating web pages and web applications. It
                structures content using elements such as headings, paragraphs,
                and images, facilitating the display and interaction of
                information on the internet.
              </p>
            </div>
          </div>
          <div class="row-1 container pt-sm-5 pt-1 mb-3">
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={java} alt="logo" className="w-50" />
              <h3>JavaScript</h3>
              <p>
                JavaScript is a high-level, interpreted scripting language
                primarily used for web development.It adds interactivity and
                dynamic behavior to web pages, enabling features like form
                validation and DOM manipulation.
              </p>
            </div>
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={boot} alt="logo" className="w-50" />
              <h3>Bootstrap</h3>
              <p>
                Bootstrap is a popular front-end framework for building
                responsive and mobile-first websites and web applications. It
                provides a set of pre-designed HTML, CSS, and JavaScript
                components, such as grids, forms, and navigation bars, to
                streamline development.
              </p>
            </div>
            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={wordpress} alt="logo" className="w-50" />
              <h3>Wordpress</h3>
              <p>
                WordPress is a popular open-source content management system
                (CMS) known for its flexibility and ease of use. It allows users
                to create and manage websites, blogs, and online stores with
                customizable themes and plugins.
              </p>
            </div>

            <div class="col-sm-4  p-3 pt-4 pb-4">
              <img src={hub} alt="logo" className="w-50" />
              <h3>Hubspot</h3>
              <p>
                HubSpot is a leading inbound marketing and sales platform known
                for its suite of tools for marketing automation, CRM, and
                customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
