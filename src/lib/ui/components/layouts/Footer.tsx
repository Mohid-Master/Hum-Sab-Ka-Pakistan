// src/components/layout/Footer.tsx
'use client'; // This component will have client-side interactivity and animations

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, Info, Book, Github, Linkedin, Heart } from 'lucide-react'; // Import icons
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext'; // Import useTheme hook

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme(); // Correct: Call useTheme directly inside the component

  useEffect(() => {
    // GSAP animation for footer entrance
    if (footerRef.current) {
      // Set initial state with GSAP before animating
      gsap.set(footerRef.current, { opacity: 0, y: 50 });
      gsap.to(
        footerRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []); // Empty dependency array means this runs once on mount

  // Dynamic classes based on theme
  const footerThemeClasses = {
    light: 'bg-white text-[#01411C] shadow-lg shadow-gray-300 shadow-[0px_-7px_23px_-13px_#01411C]',
    dark: 'bg-gray-900 text-white shadow-lg shadow-gray-700',
    pakistani: 'bg-green-800 text-white shadow-lg shadow-amber-500',
  };

  const linkHoverClasses = {
    light: 'hover:text-green-400',
    dark: 'hover:text-green-400', // You might want a different hover color for dark
    pakistani: 'hover:text-amber-300', // Gold-ish hover for Pakistani theme
  };


  return (
    <footer
      ref={footerRef}
      // Apply theme-specific classes dynamically
      className={`p-6 mt-12 transition-colors duration-500 ${footerThemeClasses[theme]}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Pakistan Independence Day Project</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Mohid. All rights reserved.</p>
          <p className="text-xs mt-1 flex items-center justify-center md:justify-start">
            Made with <Heart className="h-3 w-3 mx-1 text-red-500 fill-current" /> for Pakistan.
          </p>
        </div>

        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <li>
              <Link href="/" className={`flex items-center ${linkHoverClasses[theme]}`}>
                <Home className="h-4 w-4 mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link href="/history" className={`flex items-center ${linkHoverClasses[theme]}`}>
                <Book className="h-4 w-4 mr-1" /> History
              </Link>
            </li>
            <li>
              <Link href="/facts" className={`flex items-center ${linkHoverClasses[theme]}`}>
                <Info className="h-4 w-4 mr-1" /> Facts
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className={`${linkHoverClasses[theme]}`}>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className={`${linkHoverClasses[theme]}`}>
            <Linkedin className="h-6 w-6" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}