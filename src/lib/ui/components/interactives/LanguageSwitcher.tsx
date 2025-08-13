// src/lib/ui/components/interactive/LanguageSwitcher.tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react'; // Using Globe icon for language
import { motion, AnimatePresence } from 'framer-motion';
export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="p-1 rounded-full   text-black hover:bg-[#fff]   transition-colors duration-300 flex items-center justify-center text-sm font-semibold"
    >
      <Globe size={20} className="mr-0.5" />
 <AnimatePresence mode="wait">
 <motion.span
          key={language} // Key for AnimatePresence to detect change
 initial={{ opacity: 0, y: 5 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -5 }}
 transition={{ duration: 0.2 }}
        >
      {language === 'english' ? 'English' : 'اردو'} {/* Display opposite language */}
 </motion.span>
 </AnimatePresence>

    </button>
  );
}

