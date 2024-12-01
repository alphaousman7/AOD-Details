import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { Link } from "react-scroll";
import Animation2 from "./Animation2";

export default function Home() {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-green-900 to-black text-blue-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Section Texte */}
        <div className="flex flex-col justify-center h-full md:w-1/2 space-y-6 px-4">
         
          <p className="py-4 text-base mt-28 sm:text-lg md:text-2xl   font-signature text-blue-400 leading-relaxed font-poppins">
            Je m'appelle Diallo Alpha Ousmane, un passionné de technologie.
            originaire de Guinée conakry.
            <br />
            <br />
            La programmation est bien plus qu'un simple domaine d'études pour
            moi, c'est une véritable passion. J'aime particulièrement :
            <ul className="list-disc pl-6">
              <li>Le développement de sites web dynamiques et interactifs.</li>
              <li>La conception et gestion de bases de données efficaces.</li>
              <li>L'utilisation des technoligies de IA ainsi que les maths.</li>
              <li>
                L'exploration de nouvelles technologies pour résoudre des
                problèmes complexes.
              </li>
            </ul>
            Mon objectif est de toujours fournir des solutions performantes et
            esthétiques tout en améliorant l'expérience utilisateur.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="flex animate-pulse items-center w-fit px-6 py-3 bg-gradient-to-r from-white via-green-500 to-green-900 text-white text-base sm:text-lg font-bold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              En savoir plus
              <TbArrowBigRightLinesFilled
                size={25}
                className="ml-2 transform hover:rotate-90 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        {/* Section Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Mon profil"
            className="rounded-2xl w-full max-w-xs md:max-w-md shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
       
      </div> <Animation2 />
    </div>
  );
}
