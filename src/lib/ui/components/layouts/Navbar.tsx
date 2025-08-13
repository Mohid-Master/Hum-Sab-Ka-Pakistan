// src/lib/ui/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link'; // Import LinkProps for better typing
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { useTheme } from '@/context/ThemeContext'; // Import useTheme hook

// Helper component for navigation links
// It extends LinkProps to correctly pass all standard Link props including onClick
interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string; // Allow custom classes
  onClick?: () => void; // Allow click handler for mobile menu
}

const NavLink = ({ href, children, className, onClick, ...props }: NavLinkProps) => {
  const pathname = usePathname(); // Get current pathname
  const isActive = pathname === href; // Check if the link is active
  const { theme } = useTheme(); // Get current theme

  return (
    <Link
      href={href}
      className={`text-sm md:text-base font-medium whitespace-nowrap px-3 py-2 rounded-lg transition-colors duration-300 relative overflow-hidden group
                 ${isActive
          ? 'bg-[#029641] text-white shadow-inner shadow-black' // Active state
          : theme === 'light'
            ? 'text-[#01411C] hover:bg-[#01411C]  hover:text-white' // Light theme inactive
            : theme === 'dark'
              ? 'text-white hover:bg-[#fff] hover:text-[#01411C]' // Dark theme inactive
          : 'text-white hover:bg-[#000]'} // Inactive state
                 ${className || ''}
                 focus:outline-none focus:ring-2 focus:ring-[#029641]`} // Focus state for accessibility
      onClick={onClick} // Pass onClick directly to Link
      {...props} // Pass any other Link props
    >
      {/* Optional: Add an underline animation on hover/active if desired */}
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme(); // Get current theme

  // Close mobile menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint for Tailwind
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`w-full py-2 px-4 md:px-8 shadow-md flex justify-between items-center z-50 relative backdrop-blur-sm bg-opacity-80
                  ${theme === 'light' ? 'bg-white shadow-[#029641] text-[#01411c]' :
                    theme === 'dark' ? 'bg-[#000]  shadow-black' :
                    'bg-[#01411C] shadow-[FF0000]'}
                  transition-colors duration-500`}
                  // initial={{
                  //   y:30,
                  //   opacity:0,
                  // }}
                  // animate={{
                  //   y:0,
                  //   opacity:1,
                  // }}
    >
      {/* Left Section: Logo and Title */}
      <div className="flex items-center space-x-1 md:space-x-1">
        <Link href="/" className="flex items-center">
          <Image
            src='/web-app-manifest-512x512.png'
            width={51.2}
            height={51.2}
            alt='Hum Sab Ka Pakistan Logo'
            priority // Preload for better LCP
          />
          <motion.h1
            className={`text-md md:text-sm font-bold 
                        ${theme === 'light' ? 'text-[#01411C]' :
                          theme === 'dark' ? 'text-[#fff]' :
                          'text-white'}
                        transition-colors duration-500`}
            whileHover={{ scale: 1.05 }} // Slightly less aggressive hover
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Hum Sab Ka Pakistan
          </motion.h1>
        </Link>
      </div>

      {/* Right Section: Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <NavLink href="/">Home</NavLink> {/* Fixed typo */}
        <NavLink href="/history">History</NavLink>
        <NavLink href="/facts">Facts</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          className={`p-2 rounded-md transition-colors duration-300
                      ${theme === 'light' ? 'text-black hover:bg-[#029641] ' :
                        theme === 'dark' ? 'text-white hover:bg-[#000] ' :
                        'text-white hover:bg-[#01411C]'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (Framer Motion for animation) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 w-full py-4 shadow-lg md:hidden flex flex-col items-center space-y-4 z-40
                        ${theme === 'light' ? 'bg-white' :
                          theme === 'dark' ? 'bg-[#000] ' :
                          'bg-[#029641]'}`}>
            {/* Pass onClick to NavLink to close menu when clicked */}
            <NavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink href="/history" onClick={() => setIsMobileMenuOpen(false)}>History</NavLink>
            <NavLink href="/facts" onClick={() => setIsMobileMenuOpen(false)}>Facts</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}