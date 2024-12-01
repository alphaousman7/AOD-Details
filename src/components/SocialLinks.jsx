import React from "react";
import { FaGithubSquare, FaLinkedin, FaPersonBooth } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";


export default function SocialLinks() {
  //pour les quatitre lien gauche
  const links = [
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
          

        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://www.linkedin.com/in/alphaousmane-diallo-5ab82b262",
      style: "rounded-tr-md",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 2,
      child: (
        <>
          GhitHub
          <FaGithubSquare size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://github.com/TIPIAIM/sur-moi",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 3,
      child: (
        <>
          E-mail
          <MdContactMail size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "mailto:alphaousmaneousmane@gmail.com",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 4,
      child: (
        <>
          C-Watchap
          <AiOutlineWhatsApp size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "https://call.whatsapp.com/voice/6BltD24KmGj7ymIleODD5N",
      style: "rounded-tr-md",
    },
    {
      //child es la proprio enfant qui sera un jsx il ya plusieur maniere
      id: 5,
      child: (
        <>
          ResumeCV
          <FaPersonBooth size={30} />
        </>
      ), //on met le lien ou il sera diriger sil clic sur le loglinkdin apre on copie colle 4 fois pour nos besoins
      href: "/alphaousmane23.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex bg-gradient-to-b to-gray-800 via-green-400 from-black  justify-between items-center w-40 h-14 px-3 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              " " +
              style
            }
          >
           <a
  href={href}
  className="flex justify-between items-center w-full text-green-900 font-bold hover:text-gray-900 hover:underline transition-all duration-200"
  download={download}
  target="_blank"
  rel="noopener noreferrer"
>
  {child}
</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
