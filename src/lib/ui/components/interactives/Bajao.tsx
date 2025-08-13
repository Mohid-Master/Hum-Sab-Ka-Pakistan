'use client'

import React, { useState, useEffect } from 'react';

import { motion } from 'motion/react';
// import baja from '@/../public/baja.png';
// import { Container, FileX } from 'lucide-react';

interface SirenButtonProps {
  sirenSrc?: string; // Optional: path to the siren sound
}

const SirenButton: React.FC<SirenButtonProps> = ({ sirenSrc = '/baja.mp3' }) => {
  const [constraints, setConstraints] = useState<false | { top: number, bottom: number, left: number, right: number }>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    // Create Audio object only on the client side
    audioRef.current = new Audio(sirenSrc);
    audioRef.current.loop = true; // Make the siren loop continuously

    return () => { // Cleanup on unmount
      audioRef.current?.pause();
    };
  }, [sirenSrc]); // Re-create audio if sirenSrc changes

  useEffect(() => {
    // Set drag constraints on the client side
    setConstraints({
      top: 0,
      bottom: 2000,
      left: 0,
      right: 325,
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  const startSiren = () => {
    if (audioRef.current) {
    audioRef.current.play().catch(e => console.error("Siren playback error:", e));
    }
  };

  const stopSiren = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning
    }
  };

  //   const buttonVariants = {
  //     rest: {
  //  backgroundColor: '#01411c',
  //       // boxShadow: '0 5px 15px rgba(1, 65, 28, 0.4)',
  //        // Adjusted shadow color for green
  //       transition: { duration: 0.2 },
  //     },
  //     hover: {
  //  backgroundColor: '#016f2a',
  //       // boxShadow: '0 8px 20px rgba(1, 111, 42, 0.6)', // Adjusted hover shadow color for green
  //       transition: { duration: 0.2 },
  //     },
  //   };

  return (
    <motion.button
      onMouseDown={startSiren}
      onMouseUp={stopSiren}
      onMouseLeave={stopSiren} // Stop siren if mouse leaves button while pressed
      onTouchStart={startSiren}
      onTouchEnd={stopSiren}
      // ref={audioRef}
      style={{
        backgroundColor: '#fffff60',
        backgroundImage: 'url(/baja.png)',
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        position: "fixed",
        top: 80,
        // right:20,
        height: 50,
        width: 50,
        borderRadius: '50%',
        border: '3px solid transparent', // Adjusted border color for green
        cursor: 'pointer',
        boxShadow: '0 0px 10px 5px #01411C',
        userSelect: 'none', // Prevent text selection on rapid presses
        WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
      }}
      drag
      dragConstraints={constraints}
      whileDrag={{
        scale: 0.7
      }}
      dragElastic={0.05}

      onBlur={() => { // Added for keyboard accessibility
        stopSiren(); // Stop siren if button loses focus (e.g., Tab key
      }}
      aria-label="Press and hold to play siren"
    >
    </motion.button>
  );
};

export default SirenButton;