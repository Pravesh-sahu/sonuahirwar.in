// import React, { useEffect } from 'react';

// const RevealOnScroll = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const containerElements = document.querySelectorAll(".container");
//       containerElements.forEach((container) => {
//         const elementTop = container.getBoundingClientRect().top;
//         const elementVisible = 150;
//         if (elementTop < windowHeight - elementVisible) {
//           container.classList.add("active");
//         } else {
//           container.classList.remove("active");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check on mount

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


// };

// export default RevealOnScroll;
