// src/lib/ui/components/interactive/LanguageSwitcher.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react'; // Using Globe icon for language

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="p-2 rounded-full bg-[#00FFFF]  -500 text-white hover:bg-[#00FFFF]  -600 transition-colors duration-300 flex items-center justify-center text-sm font-semibold"
    >
      <Globe size={20} className="mr-1" />
      {language === 'english' ? 'اردو' : 'English'} {/* Display opposite language */}
    </button>
  );
}