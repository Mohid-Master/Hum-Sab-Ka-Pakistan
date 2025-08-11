// src/context/ThemeContext.tsx
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { gsap } from 'gsap';

type Theme = 'light' | 'dark' | 'pakistani';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    // Load theme from localStorage on initial load
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    setThemeState(storedTheme);
    // Apply initial theme classes/attributes without animation
    document.documentElement.setAttribute('data-theme', storedTheme);
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    const oldTheme = theme;
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);

    // GSAP animation for theme change
    const htmlElement = document.documentElement;

    // Define colors for animation
    const colors = {
      light: { bgColor: '#ffffff', textColor: '#1a202c' },
      dark: { bgColor: '#1a202c', textColor: '#e2e8f0' },
      pakistani: { bgColor: '#006400', textColor: '#ffffff' },
    };

    const targetBgColor = colors[newTheme].bgColor;
    const targetTextColor = colors[newTheme].textColor;

    // Animate background color
    gsap.to(htmlElement, {
      backgroundColor: targetBgColor, // This needs to be a CSS property GSAP can animate directly
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        // After animation, ensure Tailwind classes/data attributes are set for proper styling
        if (newTheme === 'dark') {
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
        }
        htmlElement.setAttribute('data-theme', newTheme);
      }
    });

    // Animate text color for the body (you might need to target more specific elements for full effect)
    gsap.to(document.body, {
        color: targetTextColor,
        duration: 0.8,
        ease: 'power2.inOut',
    });
  };

  const toggleTheme = () => {
    setThemeState(prevTheme => {
      let nextTheme: Theme;
      if (prevTheme === 'light') nextTheme = 'dark';
      else if (prevTheme === 'dark') nextTheme = 'pakistani';
      else nextTheme = 'light';
      setTheme(nextTheme); // Call setTheme to trigger animation
      return nextTheme; // Update local state for immediate re-render
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};