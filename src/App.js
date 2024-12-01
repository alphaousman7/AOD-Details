import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import About from "./components/About";
import Codee from "./components/Code";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Video from "./components/Video";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation
      easing: "ease-in-out",
      once: true, // Animations only trigger once
    });
  }, []);

  return (
    <div className="App bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.div>
      <About data-aos="fade-up" />
      <SocialLinks data-aos="fade-right" />
      <Portfolio data-aos="zoom-in" />
      <Experience data-aos="fade-left" />
      <Contact data-aos="slide-up" />
      <Video data-aos="flip-up" />
      <Codee data-aos="fade-down" />
    </div>
  );
}

export default App;
