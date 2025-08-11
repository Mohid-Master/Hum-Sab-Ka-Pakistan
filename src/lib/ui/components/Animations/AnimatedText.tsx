// src/components/animation/AnimatedText.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  key?: string; // Important for reacting to content changes
}

export default function AnimatedText({ text, className, key }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Animate the text in from the right
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 }, // Start off-screen to the right, invisible
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' } // Slide in
      );
    }
  }, [text, key]); // Re-run animation when text or key changes

  return (
    <span ref={textRef} key={key} className={`inline-block ${className}`}>
      {text}
    </span>
  );
}