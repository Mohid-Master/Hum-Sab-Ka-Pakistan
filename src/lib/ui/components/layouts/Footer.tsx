// src/components/layout/Footer.tsx
'use client'; // This component will have client-side interactivity and animations

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Home, Info, Book, Github, Linkedin, Heart } from 'lucide-react'; // Import icons
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP animation for footer entrance
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-800 text-white p-6 mt-12 opacity-0
                 dark:bg-gray-900 transition-colors duration-500
                 data-[theme=pakistani]:bg-green-800 data-[theme=pakistani]:text-white"
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
              <Link href="/" className="hover:text-green-400 flex items-center">
                <Home className="h-4 w-4 mr-1" /> Home
              </Link>
            </li>
            <li>
              <Link href="/history" className="hover:text-green-400 flex items-center">
                <Book className="h-4 w-4 mr-1" /> History
              </Link>
            </li>
            <li>
              <Link href="/facts" className="hover:text-green-400 flex items-center">
                <Info className="h-4 w-4 mr-1" /> Facts
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <Linkedin className="h-6 w-6" />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
}