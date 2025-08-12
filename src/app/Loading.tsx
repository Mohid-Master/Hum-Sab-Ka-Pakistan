'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
// import icon1 from '/web-app-manifest-512x512.png'

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div variants={itemVariants}>
            <Image src='/web-app-manifest-512x512.png' alt="Logo" width={512} height={512} />
          </motion.div>
          <motion.p
            className="text-4xl font-bold text-green-700 dark:text-green-400 mt-8 beautiful-text"
            variants={itemVariants}
          >
            hum sab ka Pakistan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;

export const defaultPageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const pageTransitionAnimation = {
  initial: { x: '100%' },
  animate: { x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  exit: { x: '-100%', transition: { duration: 0.75, ease: 'easeIn' } },
};
