'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/content';

export default function BilingualName() {
  return (
    <div className="relative">
      {/* Hindi name - Background layer */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeIn' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl lg:text-[12rem] font-bold font-hindi text-white whitespace-nowrap pointer-events-none select-none"
        style={{
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
        } as React.CSSProperties}
      >
        {personalInfo.nameHindi}
      </motion.h1>

      {/* English name - Foreground layer */}
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center"
      >
        {personalInfo.name}
      </motion.h1>
    </div>
  );
}
