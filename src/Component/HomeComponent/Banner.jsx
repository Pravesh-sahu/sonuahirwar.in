import profile from "./../../Assests/my_profile.jpg";

function Banner() {

  return (
    <section className=" sec-1 text-light pt-sm-5 pt-2 pb-5">
      <div class="container pt-3 pb-3">
        <div class="row flex-lg-row flex-column-reverse ">
          <div class="col-lg">
            <div className="img-main mt-lg-0 mt-5 m-lg-0 m-auto position-relative">
              <img src={profile} alt="my-profile" className="w-md-100 w-75 object-fit-contain" />
            </div>
          </div>
          <div class="col-lg ">
          <div class="col-sm txt-animation">
            <h3 className="fw-light d-flex ">
               <span>-</span>
              <span>F</span>
              <span>r</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>

            </h3>
            </div>
            <h1 className="fw-bold">
              Sonu
              <br />
              <span className="last-name">Ahirwar.</span>
            </h1>
            <p className="opacity-75">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
            <button className="mt-3 border-0 text-white">About Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
