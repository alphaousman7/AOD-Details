import React from "react";
import { Link } from "react-scroll";
import NOUSSOUM from "../assets/NOUSSOUM.jpg"; // Assure-toi que l'image est bien importée
import {  FcLeft } from "react-icons/fc";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen w-full bg-gradient-to-b to-gray-900 via-green-900 from-black text-blue-900 font-poppins"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        {/* Header Section */}
        <div className=" mb-10">
          <br className=" mt-10"/>
          <h1 className="text-4xl mt-10 sm:text-5xl font-extrabold text-green-900 text-center">
         À Propos de Moi
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex mt-16 flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Image Section */}
          <div className="w-1/3 md:w-1/4 overflow-hidden rounded-full shadow-lg transform transition-all duration-300 hover:scale-105">
            <img
              src={NOUSSOUM}
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-8 md:w-2/3">
            <p className="bg-gradient-to-b mt-8 from-gray-900 via-green-900 to-black font-signature text-white text-lg sm:text-2xl  leading-relaxed bg-white bg-opacity-80 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
              Après avoir obtenu mon diplome de bac +3 en licence miage à l'université
              de labé (Guinée Conakry) de 2017 à 2020 puis 
              En 2022 j'ai continué ma formation en obtenant une licence professionnelle en développement Fullstack.
              Actuellement , je suis en 5e année informatique-Réseaux-Multimédia,
              où je me perfectionne dans des domaines tels que le développement
              web, la gestion des réseaux, et l'optimisation des systèmes
              multimédia. Ma passion pour la programmation et l'innovation m’a
              permis de développer des compétences solides en développement web,
              en gestion de bases de données et en création de solutions
              technologiques adaptées. Je suis toujours en quête de nouvelles
              opportunités pour appliquer mes connaissances et participer à des
              projets ambitieux.
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex mb-32 justify-center mt-16">
          <Link
            to="home"
            smooth
            duration={500}
            className="bg-gradient-to-r p-6 from-blue-900 via-green-500  flex items-center px-8 py-3  to-black text-white text-lg font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Retour à l'accueil
            <FcLeft
              size={25}
              className=" bg-gradient-to-r from-white via-green-500 to-green-900 text-white ml-2 transform hover:rotate-90 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
