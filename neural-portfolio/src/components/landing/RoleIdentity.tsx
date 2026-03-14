'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/content';

export default function RoleIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: 'easeOut' }}
      className="text-center mt-6"
      style={{ zIndex: 3 }}
    >
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide">
        {personalInfo.tagline}
      </p>
    </motion.div>
  );
}
