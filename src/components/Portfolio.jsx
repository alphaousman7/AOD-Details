
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import des styles d'AOS
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import images from "../assets/portfolio/images.jpg";
import { GoDeviceCameraVideo } from "react-icons/go";
import { RiCodeBoxFill } from "react-icons/ri";
import {  GiPianist } from "react-icons/gi";
import { Link } from "react-scroll";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolios = [
    { id: 1, src: images },
    { id: 2, src: installNode },
    { id: 3, src: navbar },
    { id: 4, src: reactParallax },
    { id: 5, src: reactSmooth },
    { id: 6, src: arrayDestruct },
  ];

  return (
    <div
      name="works"
      className="bg-gradient-to-b from-gray-900 via-green-900 to-black font-bold"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-4 text-center">
          <p className="flex justify-center mt text-4xl font-bold text-green-900 mb-2">
           { /*<GiAnimalHide className="mx-2" />*/}
            <GiPianist size={60} />
          </p>
          <h1 className="text-4xl mb-6 sm:text-5xl font-extrabold text-green-900 text-center">
           Technologies souvent utilisées
          </h1>
        </div>

        {/* Présentation des technologies */}
        <div
          className=  " mb-3 text-gray-200 bg-gradient-to-l mt-8 via-green-90 to-black rounded-lg p-6 shadow-md"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-signature font-bold mb-4 text-green-400">
            Compétences Techniques
          </h2>
          <p className="text-lg mb-4">
            Voici un résumé des technologies que j'utilise souvent par rapport aux autres :
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-yellow-500">Front-End</h3>
              <ul className="list-disc list-inside ml-4">
                <li>ReactJS, ViteJS, NextJS : Interfaces dynamiques</li>
                <li>TailwindCSS : Framework CSS moderne</li>
                <li>React Router : Gestion des routes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500">Back-End</h3>
              <ul className="list-disc list-inside ml-4">
                <li>Node.js : Développement d'API performantes</li>
                <li>Express.js : Gestion simplifiée des middlewares</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500">Base de Données</h3>
              <ul className="list-disc list-inside ml-4">
                <li>MongoDB & API: Stockage de données avec Mongoose</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-500">Autres</h3>
              <ul className="list-disc list-inside ml-4">
                <li>HTML5 & CSS3</li>
                <li>Git & GitHub : Collaboration</li>
                <li>Vercel : Déploiement rapide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-8 mb-32 grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-4">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-yellow-500 rounded-lg"
              data-aos="fade-up"
            >
              <img
                src={src}
                alt={`Portfolio item ${id}`}
                className="rounded-md duration-300 border hover:scale-105"
              />
              <div className="flex items-center justify-center mt-4 space-x-4">
                <Link to="video" smooth duration={500}>
                  <button className=" animate-pulse w-full px-3 py-2 duration-200 hover:scale-105 text-sm font-bold rounded-md bg-gradient-to-r from-green-800 to-black text-white flex items-center justify-center shadow-lg">
                    Demo
                    <GoDeviceCameraVideo
                      size={20}
                      className="ml-2 hover:rotate-90 duration-300"
                    />
                  </button>
                </Link>
                <Link to="source" smooth duration={500}>
                  <button className="w-full px-3 py-2 duration-200 hover:scale-105 text-sm font-bold rounded-md bg-gradient-to-r from-green-800 to-black text-white flex items-center justify-center shadow-lg">
                    Code
                    <RiCodeBoxFill
                      size={20}
                      className="ml-2 hover:rotate-90 duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
