import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import images from "../assets/portfolio/images.jpg";
import {GoDeviceCameraVideo} from "react-icons/go"
import {RiCodeBoxFill} from "react-icons/ri"
import {GiAnimalHide, GiPianist} from "react-icons/gi"
import { Link } from 'react-scroll';



export default function Portfolio() {
const portfolios=[//le tableau d'image donc ce qu'on va boucler dans 
    {
        id:1,
        src:images
        },
      
    {
        id:2,
        src:installNode
        },
    {
        id:3,
        src:navbar
        },
    {
        id:4,
        src:reactParallax
        },
     {
    id:5,
    src: reactSmooth
    },
    {
    id:6,
    src:arrayDestruct
    },
]

  return (<div name='works' className=' bg-gradient-to-b via-amber-400 from-orange-200 to-lime-300 font-bold md:h-screen '>
            <div className='m-2 max-w-screen-lg  p-3 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-2'>
                    <p className=' flex text-2xl font-bold from-orange-900  '><GiAnimalHide className='mx-1 '/> <GiPianist size={60}/></p>
                    <p className='py-5'>Vous trouverez les detechnologies dont j'ais utilisé pour la conception de ce site internet </p>
                </div>

    <div className='py-4 shadow-md grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 border sm:px-0'>
                {
                portfolios.map(({id,src}) =>(  

                        <div className='shadow-md shadow-red-800 rounded-lg  '>
                            <img src={src} alt=''
                             className='rounded-md duration-300 border hover:scale-105'/>
                           
                            <div className='text-amber-500  flex items-center justify-center'>
                            <Link to='video' smooth duration={500} >
                            <button className=' w-1/2 px-3 m-2 duration-200 hover:scale-105 
                                md text-1xl via-black  font-bold  my-1 flex items-center rounded-md bg-gradient-to-r from-green-900 cursor-pointer'  >Demo<span className='hover:rotate-90 duration-300 bg-black fp'><GoDeviceCameraVideo size={25} className=' ml-4'/></span></button>
                           </Link>
                           <Link to='source' smooth duration={500}>
                                <button className='text-amber-500  w-1/2 px-3 m-2 duration-200 hover:scale-105 
                                md text-1xl  via-black  font-bold  my-1 flex items-center rounded-md bg-gradient-to-r from-green-900 cursor-pointer'  >Code<RiCodeBoxFill size={25} className='hover:rotate-90 duration-300 ml-4 bg-black fp '/></button>
                           </Link> 
                           </div>
                        </div>
                  
                ))
                }
             </div>
            </div>
         </div>
  );
}
