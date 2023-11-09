import "./App.css";
import { useEffect } from "react";
import AboutUs from "./components/molecules/AboutUs";
import Contact from "./components/molecules/Contact";
import Experience from "./components/molecules/Experience";
import HeroSection from "./components/molecules/HeroSection";
import Portfolio from "./components/molecules/Portfolio";
import Services from "./components/molecules/Services";
import Navbar from "./components/organism/Navbar";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App bg-dark">
      <Navbar />
      <div className="m-0">
        <div className="container-fluid m-0 generalHeight" id="scrollspyHeading1">
          <HeroSection />
        </div>
        <div id="scrollspyHeading2">
          <AboutUs />
        </div>
        <div id="scrollspyHeading3">
          <Portfolio />
        </div>
        <div id="scrollspyHeading4">
          <Services />
        </div>
        <div id="scrollspyHeading5">
          <Experience />
        </div>
        <div id="scrollspyHeading6">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
