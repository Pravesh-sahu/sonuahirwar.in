import Header from "./Component/Header"
import Footer from "./Component/Footer"

import './App.css';
import Home from './Component/Home';
import './custom';
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const containerElements = document.querySelectorAll(".container");
      containerElements.forEach((container) => {
        const elementTop = container.getBoundingClientRect().top;
        let elementVisible = 100; // Default value
        if (window.innerWidth < 767) {
          elementVisible = 260; // Change value for screens below 767px
        }
        if (elementTop < windowHeight - elementVisible) {
          container.classList.add("active");
        } else {
          container.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
       <Home />
       <Footer />
    </>
  );
}

export default App;