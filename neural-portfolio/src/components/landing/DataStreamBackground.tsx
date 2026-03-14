'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DataColumn {
  x: number;
  y: number;
  speed: number;
  chars: string[];
}

export default function DataStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary characters
    const chars = '01';

    // Create columns
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: DataColumn[] = [];

    // Initialize columns with random starting positions
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * fontSize,
        y: Math.random() * canvas.height * -1, // Start above screen
        speed: Math.random() * 0.5 + 0.3, // Random speed between 0.3-0.8
        chars: Array(Math.floor(Math.random() * 20 + 10)).fill(0).map(() =>
          chars.charAt(Math.floor(Math.random() * chars.length))
        )
      });
    }

    let animationFrameId: number;

    // Animation loop
    const draw = () => {
      // Fade effect - creates trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      drops.forEach((drop, i) => {
        // Draw each character in the column
        drop.chars.forEach((char, charIndex) => {
          const y = drop.y + charIndex * fontSize;

          // Only draw if on screen
          if (y > 0 && y < canvas.height) {
            // Calculate opacity based on position in trail
            const opacity = charIndex === 0
              ? 0.08  // Leading character brighter
              : 0.03 - (charIndex * 0.001); // Fade as trail goes down

            ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(opacity, 0.01)})`;
            ctx.fillText(char, drop.x, y);
          }
        });

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y - drop.chars.length * fontSize > canvas.height) {
          drop.y = Math.random() * -100;
          drop.speed = Math.random() * 0.5 + 0.3;
          // Occasionally change the characters
          if (Math.random() > 0.7) {
            drop.chars = Array(Math.floor(Math.random() * 20 + 10)).fill(0).map(() =>
              chars.charAt(Math.floor(Math.random() * chars.length))
            );
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Start animation after slight delay
    const timeoutId = setTimeout(() => {
      draw();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
