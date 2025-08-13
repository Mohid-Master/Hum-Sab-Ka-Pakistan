import React from 'react';
import { Metadata } from 'next';
// import { useLanguage } from '@/context/LanguageContext';
// import { useTheme } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Pakistan Facts - Discover Interesting Information',
  description: 'Explore fascinating facts about Pakistan, its culture, geography, and achievements.',
};

export default function FactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}
