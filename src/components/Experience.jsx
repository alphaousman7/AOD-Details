import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import {GiSaberToothedCatHead} from "react-icons/gi"

export default function Experience() {

    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-900",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-900",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-red-900",
        },
        {//STYLE COULEUR BLEU APRES GOOGLE FONT A AJOUTE
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-900",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-white",
        },
        {
          id: 6,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 7,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-900",
        },
        {//src sont les images
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-red-900",
        },
      ];


  return (
<div name='experience' className=' p-2 bg-gradient-to-b from-slate-500  via-amber-900 to-lime-500 w-full h-screen '>
<div className='max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white'>
    <div >
         <p  className='text-5xl p-2  text- text-black font-bold underline flex'>Experiences<GiSaberToothedCatHead  className=' text-gray-50 to-fuchsia-700'/></p>
         <p className=" p-2 font-bold text-2xl ">Mes experiences avec les Framwork-bibliotèques-languages sont  <hr/>  </p>
    </div>
 <p className='text-1xl text-black'>
   React - Node-js - Tailwind - Bootstrap - Bootstrap-react - React-icons - React-player(NPM video)
  Getform.io - Google font - Les API - JEE - Talend (BI) - Angular - Javascrip - CSS - HTML - Oracla - SQL - Mysql - php -
  C - Scripting(language bash) - PHP -Git
  </p>  
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4 px-4 sm:px-0'> 
      
    {
        techs.map(({id,src,title,style})=>(
      <div key={id} className={`shadow-md border hover:scale-105 duration-500 rounded-xl ${style}`}>
            <img src={src}  alt='' className=' w-16 mx-auto'/>
            <p className=' font-bold from-black'>{title}</p>

        </div>
        ))
    }
  
        </div>
    </div>
</div>
  )
}
