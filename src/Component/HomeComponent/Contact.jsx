import contact from "./../../Assests/contact.jpg";
function Banner() {
  return (
    <section id="contact" className="contact  mb-sm-5 pb-sm-5 before-after   text-white">
      <div class="container pt-3 pb-3 mb-5">
      <h3 className="sec-head text-white mb-5 position-relative">lets's Start!!!</h3>
        <div class="row position-relative ">
          <div class="col col-1">
            <img src={contact} className="w-100" alt="contact" />
          </div>
          <div class="col col-2 position-absolute p-md-5 p-4">
            <form>
              <h3 className="mb-4">Ready to talk?</h3>
              <div class="form-group mb-4">
                <input
                  type="text"
                  class="form-control border-bottom border-0 rounded-0 shadow-none"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group mb-5">
                <input
                  type="email"
                  class="form-control  border-bottom border-0 rounded-0 shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {/* <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <button class="dark-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
