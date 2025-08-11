import type { Metadata } from "next";
import {Suspense} from "react";
import { Geist, Geist_Mono,Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/ui/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Hum Sab Ka Pakistan",
  description: "Azzadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={merriweather.className}>
      <head>
      <meta name="apple-mobile-web-app-title" content="OurPakistan" />
      </head>
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}