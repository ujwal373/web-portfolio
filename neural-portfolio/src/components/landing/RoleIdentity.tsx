'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data/content';

export default function RoleIdentity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      className="text-center mt-8"
    >
      <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
        {personalInfo.tagline}
      </p>
    </motion.div>
  );
}
