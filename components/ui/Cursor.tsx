'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/pointing devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spotlight Halo */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full mix-blend-screen opacity-75 blur-md"
        animate={{
          x: position.x - (isHovered ? 32 : 16),
          y: position.y - (isHovered ? 32 : 16),
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered ? 'rgba(0, 229, 255, 0.4)' : 'rgba(37, 99, 235, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
      />
      {/* Central Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-cyan-400"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />
    </>
  );
}
