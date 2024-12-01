import React from 'react'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Animation2(){

  const titleRef = useRef()

  const onLoad = () => {
    gsap.timeline({
      onComplete: function () {
     
        console.log('vous etez dans le site d`information de Alpha ousmane ')
      
        }
    })
      .fromTo(".letter",
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 1.5,
        delay: 0.7
      }      
    )
    .to(".title", {
      y: 300,
      delay: 0.7
    })
    .to(".letter", {
      margin: "0 2vw",
      delay: 0.7,
      duration: 0.5
    })
    .to(".letter", {
      margin: "0",
      delay: 0.8,
      duration: 0.5
    })
    .to(".letter", {
      x: -titleRef.current.clientWidth,
      delay: 2,
      duration: 1,
      rotate: -360
    })
    .to(".title", {
      y: -75
      
    })
    .to(".letter", {
      x: 0,
      delay: 1,
      duration: 1
    })
  }

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.6,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 3,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#000", color: "#FFF" })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FFF", color: "#000" })
  }

  useEffect(() => {
    onLoad();
  }, [])
  useEffect(() => {
    slideInTop("#box1");
  }, [])
  useEffect(() => {
    slideInTop("#box2");
  }, [])
  useEffect(() => {
    slideInLeft("#box3");
  }, [])
  useEffect(() => {
    slideInLeft("#box4");
  }, [])
  
  return (
    <div className="App">
      <h3 className="title  underline " ref={titleRef}>
        <span className=" letter font-bold text-black ">Observation -</span>
        <span className="letter font-bold text-black ">Analyse -</span>
        <span className="letter font-bold text-black ">Execution</span>
      </h3>
    </div>
  )
}