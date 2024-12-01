import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NOUSSOUM from "../assets/NOUSSOUM.jpg"; // Assure-toi que l'image est bien importée
import concourimage from "../assets/concourimage.jpg"; // Assure-toi que l'image est bien importée
import bachir from "../assets/bachir.jpg"; // Assure-toi que l'image est bien importée

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Animation2() {
  const titleRef = useRef();

  const onLoad = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        console.log("Vous êtes dans le site d'information de Alpha Ousmane");
      },
    });

    timeline
      .fromTo(
        ".letter",
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3, delay: 0.5 }
      )
      .to(".title", { y: 50, delay: 0.5 })
      .to(".letter", { x: 100, rotate: -360, delay: 1, duration: 1 });
  };

  const animateElement = (elem, animationProps, triggerProps) => {
    gsap.fromTo(elem, animationProps.from, {
      ...animationProps.to,
      scrollTrigger: {
        trigger: elem,
        start: "top 40%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...triggerProps,
      },
    });
  };

  useEffect(() => {
    onLoad();
    animateElement("#box1", {
      from: { opacity: 0, x: -700 },
      to: { opacity: 1, x: 0 },
    });
    animateElement("#box2", {
      from: { opacity: 0, y: 800 },
      to: { opacity: 1, y: 0 },
    });
    animateElement("#box3", {
      from: { opacity: 0, y: -800 },
      to: { opacity: 1, y: 0 },
    });
    animateElement("#box4", {
      from: { opacity: 0, x: 700 },
      to: { opacity: 1, x: 0 },
    });
  }, []);

  return (
    <div className="App  min-h-screen ">
      <h3
        className="title text-4xl font-extrabold text-center mb-24  text-gray-800"
        ref={titleRef}
      >
        <span className="letter text-green-900">Observation -</span>
        <span className="letter text-blue-900">Analyse -</span>
        <span className="letter text-yellow-200">Execution</span>
      </h3>

      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-3">
        <div
          id="box1"
          className="w-60 h-100 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-400"
        >
          <img
            src={NOUSSOUM}
            alt="Profil"
            className="image-box relative w-60 h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          id="box2"
          className="w-60 h-100 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={concourimage}
            alt="Profil"
            className="image-box relative w-60 h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          id="box3"
          className="w-60 h-100 bg-red-50 text-white flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={bachir}
            alt="Profil"
            className="image-box relative w-60 h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          id="box4"
          className="w-60 h-100 bg-yellow-400 text-white flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={NOUSSOUM}
            id="box1"
            alt="Profil"
            className="image-box relative w-60 h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
