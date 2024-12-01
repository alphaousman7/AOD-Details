import React from 'react'
import Ani3 from './Ani3.css';
import {MdEmojiTransportation } from "react-icons/md"


import { gsap } from "gsap"
const { useLayoutEffect, useRef } = React;


export default function  Animation6() {
  const app = useRef();
  const circle = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(circle.current, { 
        rotation: "+=360", 
        duration: 5, 
        repeat: -1,
        ease: 'none'
        
      });
    }, app);
  
    return () => ctx.revert();
});
  return (
    <div ref={app} className=" ">
      <div className="circle" ref={circle}><MdEmojiTransportation size={80} className=" to-black from-orange-600"/></div>
    </div>
  );
}
