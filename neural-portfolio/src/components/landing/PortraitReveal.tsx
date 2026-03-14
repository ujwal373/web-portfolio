'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/lib/data/content';

export default function PortraitReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12"
    >
      {/* Gradient overlay background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />

      {/* Portrait image */}
      <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          fill
          priority
          className="object-cover"
          style={{
            maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
          }}
        />
      </div>

      {/* Subtle glow ring */}
      <div className="absolute inset-0 rounded-full border border-white/5 neural-glow" />
    </motion.div>
  );
}
