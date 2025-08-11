// src/context/LanguageContext.tsx
'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Language = 'english' | 'urdu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('english');

  useEffect(() => {
    // Load language from localStorage on initial load
    const storedLang = (localStorage.getItem('language') as Language) || 'english';
    setLanguageState(storedLang);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleLanguage = () => {
    setLanguageState(prevLang => {
      const nextLang = prevLang === 'english' ? 'urdu' : 'english';
      setLanguage(nextLang);
      return nextLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};