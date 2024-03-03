import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../Assests/Brand.png';
import React, { useState, useEffect } from 'react';
function Header() {
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (isMain) {
      document.body.classList.add('open');
      htmlElement.classList.add('scroll-off'); // Add class to HTML element
    } else {
      document.body.classList.remove('open');
      htmlElement.classList.remove('scroll-off'); // Remove class from HTML element
    }
  }, [isMain]);

  const handleClick = () => {
    setIsMain(prevState => !prevState);
  };


  useEffect(() => {
    const scrollToSection = () => {
      const url = window.location.href;
      const hashIndex = url.indexOf('#');
      if (hashIndex !== -1) {
        const targetSectionId = url.substring(hashIndex + 1);
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToSection();

    // Clean up the event listener if necessary
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" className='before-after'>
      <Container>
        <Navbar.Brand href="/" className='z-1'><img src={logo} alt='logo'/></Navbar.Brand>
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
            <Nav.Link href="/" className='mx-lg--3 position-relative' onClick={handleClick}>HOME</Nav.Link>
            <Nav.Link href="/#service" className='mx-lg-3 position-relative t'onClick={handleClick}>SERVICES</Nav.Link>
            <Nav.Link href="/#about" className='mx-lg-3 position-relative' onClick={handleClick}>ABOUT</Nav.Link>
            <Nav.Link href="/#MyWorks" className='mx-lg-3 position-relative' onClick={handleClick}>MY WORKS</Nav.Link>
            <Nav.Link href="/#contact" className='mx-lg-3 position-relative' onClick={handleClick}>CONTACT</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
