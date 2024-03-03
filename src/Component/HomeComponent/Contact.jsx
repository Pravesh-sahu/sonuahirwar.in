import contact from "./../../Assests/contact.jpg";

function Banner() {
  return (
    <section  id="contact" className="contact mb-sm-5 pb-sm-5 before-after text-white pt-5 mt-sm-5 ">
      <div  className="container pt-3 pb-3 mb-5">
        <h3 className="sec-head text-white mb-5 position-relative">let's Start!!!</h3>
        <div className="row position-relative">
          <div className="col col-1">
            <img src={contact} className="w-100" alt="contact" />
          </div>
          <div className="col col-2  position-absolute d-block p-md-5 p-4">
            <form action="https://formspree.io/f/xyyrjayb" method="POST">
              <h3 className="mb-4">Ready to talk?</h3>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control border-bottom border-0 rounded-0 shadow-none"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group mb-5">
                <input
                  type="email"
                  className="form-control border-bottom border-0 rounded-0 shadow-none"
                  name="_replyto"
                  placeholder="Enter email"
                  required
                />
              </div>
              <button className="dark-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Banner;
