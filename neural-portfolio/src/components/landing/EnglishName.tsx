'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/content';

export default function EnglishName() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center mt-8"
      style={{ zIndex: 3 }}
    >
      {personalInfo.name}
    </motion.h1>
  );
}
