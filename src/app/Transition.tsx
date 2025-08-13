// src/app/Transition.tsx
'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';


const Transition = () => {
    useGSAP(() => {
    const transitionTl = gsap.timeline()
  transitionTl.from(".transition", {
    y: -2000,
    duration: .6
    })
  transitionTl.from(".transition .sp1", {
    y: -200,
    opacity: 0,
    duration: 0.3,
          // delay:.71
    })

  transitionTl.from(".transition .img", {
    y: 200,
    opacity: 0,
    duration: 0.5,
          // delay:.61
    })

  transitionTl.from(".transition .sp2", {
    scale: 5,
    opacity: 0,
    duration: 0.5,
    })

    // transitionTl.pause()
  transitionTl.to(".transition", {
    y: -1000,
    opacity: 0,
    duration: .5,
    delay: 1,
    })
    });
    
  return (
    <div className="transition">
    <Image src="/web-app-manifest-512x512.png" className="img" width={512} height={512} alt='logo'></Image>  
        <span className="sp1">
        <h1><span>Hum</span><span>Sab</span></h1>
        <h1><span>ka</span><span>Pakistan</span></h1>
          </span>
              <span className="sp2">
        <h1><span>Hum</span><span>Sab</span></h1>
        <h1><span>ka</span><span>Pakistan</span></h1>
          </span>
    </div>
     );
};

export default Transition;
