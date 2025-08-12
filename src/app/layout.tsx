// src/app/layout.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
// Assuming Geist and Merriweather are correctly imported from wherever they reside
// For example, if 'next/font/google' is the source:
import { Inter } from "next/font/google"; // Merriweather from Google Fonts
// If Geist fonts are custom or from a library like '@geist-ui/react-icons/fonts',
// ensure their import paths are correct based on your setup.
// For demonstration, I'm assuming them as if they were similar to Google Fonts for variable setup.
// You might need to adjust these imports if Geist is handled differently in your project.
import { Geist } from 'next/font/google'; // Example for local fonts if they are not from @next/font/google

// Your custom Geist font setup might look something like this if local:
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import "@/app/globals.css"; 
// Your global Tailwind CSS

// const merriweather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
// });


// Merriweather from Google Fonts
const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "700", "900"], // Specify weights used to avoid errors
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css"; // Your global Tailwind CSS
import SidePanel from "@/lib/ui/components/layouts/SidePanel"; // Import the new SidePanel component
import Footer from "@/lib/ui/components/layouts/Footer"; // Import the new Footer component
import { ThemeProvider } from "@/context/ThemeContext"; // Import ThemeProvider
import Navbar from "@/lib/ui/components/layouts/Navbar"; // Import Navbar
import { LanguageProvider } from "@/context/LanguageContext"; // Import LanguageProvider
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loading from "./Loading";

export const metadata: Metadata = {
  title: "Hum Sab Ka Pakistan",
  description: "Azzadi - A project celebrating Pakistan Independence Day with animations and history.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply Merriweather to HTML for global default, Geist to body for primary content
    <html lang="en" className={inter.className}>
      <head>
        <meta name="apple-mobile-web-app-title" content="OurPakistan" />
        {/* Potentially add more meta tags for PWA/SEO */}
      </head>
      <body
        className={`${geistSans.className} antialiased 
                    bg-[#01411c] text-gray-900 transition-colors duration-500
                    dark:bg-[#808080] -900 dark:text-[#fff]`}
        // The data-theme attribute will be set by ThemeContext on the <html> tag
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar /> {/* Include the Navbar */}
            <SidePanel />
            {/* The main content area with dynamic height to push footer down */}
            <main className="container mx-auto px-4 py-8 min-h-screen">
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </main>
            <Footer /> {/* Your beautiful animated footer */}
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

// Simple Loading component for Suspense fallback
// function Loading() {
//   return (
//     <div className="flex justify-center items-center min-h-[50vh] text-2xl font-semibold text-gray-600 dark:text-gray-400">
//       <h2>🌀 Loading Content...</h2>
//     </div>
//   );
// }