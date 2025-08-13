// src/app/history/page.tsx
'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import AnimatedText from '@/lib/ui/components/Animations/AnimatedText';
import historyData from '@/../public/history/history.json';
import { History as HistoryIcon } from 'lucide-react'; // Importing History icon

export default function History() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clear existing ScrollTriggers to prevent duplicates on re-renders
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // Alternate swipe direction
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up on unmount
    };
  }, [language, theme]); // Re-run effect if language or theme changes to apply new styles/animations

  const getCardStyles = () => {
    switch (theme) {
      case 'dark':
        return 'bg-[#1A202C] text-[#E2E8F0] border-[1px] border-[#2D3748] shadow-[0_10px_30px_rgba(0,0,0,0.6)]';
      case 'pakistani':
        return 'bg-[#01411C] text-[#F0FFF4] border-[1px] border-[#025227] shadow-[0_10px_30px_rgba(0,0,0,0.6)]';
      default: // light
        return 'bg-[#FFFFFF] text-[#2D3748] border-[1px] border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.1)]';
    }
  };

  const getTitleColor = () => {
    switch (theme) {
      case 'dark':
        return 'text-[#9F7AEA]'; // A vibrant purple for dark theme titles
      case 'pakistani':
        return 'text-[#FBD38D]'; // A golden yellow for Pakistani theme titles
      default: // light
        return 'text-[#5A67D8]'; // A blue-purple for light theme titles
    }
  };

  const getTextColor = () => {
    switch (theme) {
      case 'dark':
        return 'text-[#CBD5E0]'; // Light gray for dark theme text
      case 'pakistani':
        return 'text-[#E6FFFA]'; // Off-white for Pakistani theme text
      default: // light
        return 'text-[#4A5568]'; // Darker gray for light theme text
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 transition-colors duration-500
      ${theme === 'dark' ? 'bg-[#000000]' : theme === 'pakistani' ? 'bg-[#00331A]' : 'bg-[#F7FAFC]'}
    `}>
      <h1 className={`text-5xl md:text-6xl font-extrabold text-center mb-16 drop-shadow-lg
        ${theme === 'dark' ? 'text-[#E2E8F0]' : theme === 'pakistani' ? 'text-[#F0FFF4]' : 'text-[#2D3748]'}
      `}>
        <AnimatedText text={language === 'english' ? "Historical Milestones of Pakistan" : "پاکستان کے تاریخی سنگ میل"} />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 max-w-7xl mx-auto">
        {historyData.map((history) => (
          <div
            key={history.id}
            // ref={el => cardRefs.current[index] = el}
            className={`relative rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] cursor-pointer group
              ${getCardStyles()}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="p-4 z-10 relative">
              <div className="flex items-center justify-center mb-6">
                <HistoryIcon size={48} className={`
                  ${theme === 'dark' ? 'text-[#9F7AEA]' : theme === 'pakistani' ? 'text-[#FBD38D]' : 'text-[#5A67D8]'}
                  drop-shadow-md
                `} />
              </div>
              <h2 className={`text-3xl font-bold mb-2 text-center ${getTitleColor()}`}>
                {language === 'english' ? history.english.title : history.urdu.title}
              </h2>
              <p className={`text-xl font-medium mb-4 text-center ${getTextColor()}`}>
                {history.year}
              </p>
              <p className={`text-lg text-justify leading-relaxed ${getTextColor()}`}>
                {language === 'english' ? history.english.content : history.urdu.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
