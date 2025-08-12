// src/lib/ui/components/interactive/ThemeToggle.tsx
'use client';


import React from 'react';
import { useTheme } from '@/context/ThemeContext'; // Ensure this path is correct
import { Sun ,Moon, Palette } from 'lucide-react'; // Lucide icons
{/* <Sun /> */}
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  let Icon = Sun;
  const label = 'Toggle theme';
  let bgColorClass = 'bg-[#000] hover:bg-[#fff]';
  // let textColorClass = 'text-[#000] dark:text-[#fff]';
  let iconColorClass = ' text-[#fff] hover:text-[#ffeb3b]'; 

 switch (theme) {
    case 'dark':
    Icon = Moon;
    // bgColorClass = 'bg-[#333] hover:bg-[#444] dark:bg-[#fff] dark:hover:bg-[#f0f0f0]';
    // textColorClass = 'text-[#fff] dark:text-[#000]';
    iconColorClass = 'text-[#008eff]'; 
      break;
    case 'pakistani':
    Icon = Palette; 
    bgColorClass = 'bg-[#01411c] hover:bg-[#fff]';
    // textColorClass = 'text-[#fff]';
    iconColorClass = 'text-[#fff] hover:text-[#01411c]'; 
    // Color for Palette/Pakistani theme
      break;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      className={`p-1 rounded-full transition-all duration-300 ${bgColorClass} flex items-center justify-center`}
    >
      <Icon size={25} className={`${iconColorClass}`} />
      {/* Optional: Add text for better UX on larger screens */}
      {/* <span className="ml-2 hidden md:inline">{theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'Pakistani'}</span> */}
    </button>
  );
}