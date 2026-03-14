'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.0, ease: 'easeOut' }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      style={{ zIndex: 4 }}
    >
      <p className="text-sm text-gray-500 uppercase tracking-widest font-mono">
        Scroll to initialize system
      </p>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-gray-600"
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  );
}
