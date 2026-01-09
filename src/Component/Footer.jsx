import { FaFacebook, FaLinkedin, FaInstagram ,FaWhatsapp} from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
function Footer() {
  return (
    <footer className="p-4 mt-4">
      {/* <div><a href="mailto:sonuahirwarak210@gmail.com">sonuahirwarak210@gmail.com</a></div> */}
      <div className="social-div    d-flex justify-content-center ">
        <a href="https://www.linkedin.com/in/sonu-ahirwar-4628331a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/sonuahirwar_/?igsh=dWp6bTJha2lqeDhy" target="_blank" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/sonu.ahirwar.5070" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaFacebook />
        </a>
        <a href="https://wa.me/7354859868" target="_blank" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaWhatsapp />
        </a>
            <a href="mailto:sonuahirwarak212@gmail.com"  className="d-flex align-items-center bg-color-dark p-2 rounded">
      <IoMailUnreadOutline />

        </a>
        
      </div>
    </footer>
  );
}
export default Footer;
