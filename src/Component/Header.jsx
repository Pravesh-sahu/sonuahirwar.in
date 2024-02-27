import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../Assests/logo.jpg';
import React, { useState, useEffect } from 'react';
function Header() {
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    if (isMain) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  }, [isMain]);

  const handleClick = () => {
    setIsMain(prevState => !prevState);
  };




  return (
    <Navbar bg="light" expand="lg" className='before-after'>
      <Container>
        <Navbar.Brand href="#home" className='z-1'><img src={logo} alt='logo'/></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <div class="switch" onClick={handleClick}>
    <input type="checkbox"/>
    <div>
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
    </div>
</div>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end main-menu'>
          <Nav >
            <Nav.Link href="#home" className='mx-lg--3 position-relative'>HOME</Nav.Link>
            <Nav.Link href="#service" className='mx-lg-3 position-relative'>SERVICES</Nav.Link>
            <Nav.Link href="#about" className='mx-lg-3 position-relative'>ABOUT</Nav.Link>
            <Nav.Link href="#MyWorks" className='mx-lg-3 position-relative'>MY WORKS</Nav.Link>
            <Nav.Link href="#contact" className='mx-lg-3 position-relative'>CONTACT</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
