import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="p-4 mt-4">
      <div className="social-div    d-flex justify-content-center ">
        <a href="https://www.link.com" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" className="d-flex align-items-center bg-color-dark p-2 rounded">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
