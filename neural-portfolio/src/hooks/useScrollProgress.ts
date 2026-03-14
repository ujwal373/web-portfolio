'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track scroll progress from 0 to 1
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}

/**
 * Get animation phase based on scroll progress
 */
export function useAnimationPhase(scrollProgress: number): string {
  if (scrollProgress < 0.05) return 'LANDING';
  if (scrollProgress < 0.20) return 'SPAWN';
  if (scrollProgress < 0.40) return 'CONNECT';
  if (scrollProgress < 0.50) return 'SPHERE';
  if (scrollProgress < 0.60) return 'HOLD';
  if (scrollProgress < 0.70) return 'FRACTURE';
  return 'NAVIGATE';
}
