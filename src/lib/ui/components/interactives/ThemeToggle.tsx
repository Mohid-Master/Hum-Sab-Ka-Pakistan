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
  let bgColorClass = 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600';
  let textColorClass = 'text-gray-800 dark:text-white';
  let iconColorClass = 'text-yellow-500 dark:text-yellow-300'; // Default for Sun

  if (theme === 'dark') {
    Icon = Moon;
    bgColorClass = 'bg-gray-700 hover:bg-gray-600';
    textColorClass = 'text-white dark:text-gray-200';
    iconColorClass = 'text-blue-300 dark:text-blue-500'; // Color for Moon
  } else if (theme === 'pakistani') {
    Icon = Palette; // Or a custom icon for Pakistani theme, e.g., a small flag
    bgColorClass = 'bg-green-600 hover:bg-green-500';
    textColorClass = 'text-white';
    iconColorClass = 'text-amber-300'; // Color for Palette/Pakistani theme
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
                  ${bgColorClass} ${textColorClass}`}
    >
      <Icon size={20} className={`${iconColorClass}`} />
      {/* Optional: Add text for better UX on larger screens */}
      {/* <span className="ml-2 hidden md:inline">{theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'Pakistani'}</span> */}
    </button>
  );
}