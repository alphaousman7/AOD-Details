import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiBurningPassion } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "works" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
    { id: 6, link: "video" },
    { id: 7, link: "source" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-5 text-white bg-gradient-to-r from-blue-950 via-green-900 to-black fixed shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <h1
          onClick={() => scroll.scrollToTop()}
          className="text-3xl font-bold font-signature  text-white hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          Alpha Ousmane
        </h1>
        <GiBurningPassion size={40} className="text-blue-00 ml-2" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:text-green-500 transition duration-300"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy
              activeClass="text-yellow-300 font-bold border-b-2 border-yellow-300"
              className="transition-colors duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-10 text-white"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-00 no-underline via-green-900 to-gray-900 text-white"
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-6  text-2xl cursor-pointer capitalize font-medium"
              >
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  spy
                  activeClass="text-yellow-300 font-bold border-b-2 border-yellow-300"
                  className="hover:text-white transition duration-300"
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
