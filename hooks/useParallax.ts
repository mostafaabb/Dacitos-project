'use client';

import { useState, useEffect } from 'react';

export function useParallax(speed: number = 0.2) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        setOffsetY(window.scrollY * speed);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [speed]);

  return offsetY;
}
