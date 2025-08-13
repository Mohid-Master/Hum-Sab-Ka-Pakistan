// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedText from '@/lib/ui/components/Animations/AnimatedText';
import Link from 'next/link';
// import GLBModel from '@/lib/ui/components/Animations/GLBModel';
import Image from 'next/image';
import SirenButton from '@/lib/ui/components/interactives/Bajao';

export default function Home() {
  const ImgArray = [
    '/allama-iqbal.jpg','/quaid-e-azam.jpg','/mazar-e-quaid.jpg','/minar-e-pakistan.jpg'
  ]
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 1600);
      return () => clearTimeout(contentTimer);
    }
  }, [isLoading]);

  const { language } = useLanguage();

  return (
    <>
      <AnimatePresence>
        {isLoading && <Transition key="app-loading-transition" />}
      </AnimatePresence>

      {showContent && (
        <>
        <SirenButton />
        {/* <div className="model h-[100vh] w-full my-10 mx-2 flex items-center justify-around gap-2 bg-conic from-[#07e564c9] to-[#01411c] to-50% rounded-lg ">
        <GLBModel modelPath='/models/logo.glb' />
        <h1 className="text-3xl font-extrabold flex-6/4 ">Hum Sab Ka Pakistan</h1>
        </div> */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
            <AnimatedText text={language === 'english' ? "Discover Pakistan" : "پاکستان دریافت کریں"} />
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
            {language === 'english'
              ? "Explore the rich history and fascinating facts about Pakistan through interactive experiences."
              : "پاکستان کے بھرپور تاریخ اور دلچسپ حقائق کو انٹرایکٹو تجربات کے ذریعے دریافت کریں۔"}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/facts" className="relative px-8 py-4 text-lg font-semibold text-white group">
              <span className="absolute inset-0 w-full h-full transform skew-x-12 bg-[#01411C] transition-all duration-300 group-hover:bg-[#00512A]"></span>
              <span className="relative">
                {language === 'english' ? "View Facts" : "حقائق دیکھیں"}
              </span>
            </Link>
            <Link href="/history" className="relative px-8 py-4 text-lg font-semibold text-white group">
              <span className="absolute inset-0 w-full h-full transform skew-x-12 bg-[#333333] transition-all duration-300 group-hover:bg-[#555555]"></span>
              <span className="relative">
                {language === 'english' ? "View History" : "تاریخ دیکھیں"}
              </span>
            </Link>
          </div>
        </div>
        <div className=" h-[800px] w-full my-10 mx-0 grid grid-cols-2 grid-rows-2 justify-center gap-0 overflow-hidden items-stretch bg-black rounded-lg relative">
              {
                ImgArray.map((src,id)=>{
                  return <Image src={src} alt='Img' className='opacity-0 hover:opacity-100 transition-800 transition-all' key={id} width={512} height={512} />
                })
              }
              <h1 className="absolute text-3xl text-white font-bold" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Out of Time</h1>
        </div>
        <Image src='/palestine.jpg' alt='Save Palestine' className='w-full h-full object-cover rounded ' width={618} height={400} />
        </>
      )}
    </>
  );
}
