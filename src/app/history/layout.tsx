import React from 'react';
import { Metadata } from 'next';
// import { useLanguage } from '@/context/LanguageContext';
// import { useTheme } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Pakistan History - Key Milestones & Events',
  description: 'Delve into the rich history of Pakistan, from ancient civilizations to its independence.',
};

export default function HistoryLayout({
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
