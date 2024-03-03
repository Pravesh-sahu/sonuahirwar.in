// import Header from "./Header";
import Banner from "./HomeComponent/Banner";
import Services from "./HomeComponent/Services";
import Contact from "./HomeComponent/Contact";
import About from "./HomeComponent/About";
import MyWorks from "./HomeComponent/MyWorks";

function Home() {
    return (
      <>
         {/* <Header /> */}
         <Banner />
         <Services />
         <MyWorks />
          <About />
          <Contact />
   
        </> 
      );
}
export default Home;