'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  noise?: boolean;
  hoverRise?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  glow = false,
  noise = true,
  hoverRise = true,
  className,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative rounded-2xl border border-white/10 bg-white/[0.04] dark:bg-white/[0.04] light:bg-white/80 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 overflow-hidden',
        hoverRise && 'hover:-translate-y-1.5 hover:border-cyan-500/30 hover:bg-white/[0.07] hover:shadow-cyan-500/10',
        glow && 'before:absolute before:-top-24 before:-left-24 before:w-48 before:h-48 before:bg-cyan-500/20 before:blur-3xl before:rounded-full',
        noise && 'after:absolute after:inset-0 after:bg-noise after:pointer-events-none',
        className
      )}
      {...(props as any)}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
