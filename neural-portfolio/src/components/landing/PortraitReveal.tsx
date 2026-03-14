'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/lib/data/content';

export default function PortraitReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px] lg:w-[420px] lg:h-[550px] mx-auto"
      style={{ zIndex: 2 }}
    >
      {/* Outer neural glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-white/5 via-transparent to-white/5 blur-2xl" />

      {/* Portrait container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Portrait image with grayscale filter */}
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          fill
          priority
          className="object-cover object-top"
          style={{
            filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
          }}
        />

        {/* Neural glow overlay on edges */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 neural-glow-strong pointer-events-none" />
      </div>

      {/* Subtle pulsing effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none"
      />
    </motion.div>
  );
}
