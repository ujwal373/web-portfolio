'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/content';

export default function HindiNameBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.20 }}
      transition={{ duration: 2, delay: 1.0, ease: 'easeIn' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      style={{ zIndex: 1 }}
    >
      <h1
        className="text-[8rem] md:text-[10rem] lg:text-[14rem] font-bold font-hindi text-white whitespace-nowrap"
        style={{
          WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
          letterSpacing: '0.02em',
        } as React.CSSProperties}
      >
        {personalInfo.nameHindi}
      </h1>
    </motion.div>
  );
}
