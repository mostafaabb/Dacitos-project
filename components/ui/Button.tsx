'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      glow = false,
      magnetic = true,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * 0.35;
      const y = (e.clientY - (top + height / 2)) * 0.35;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      if (!magnetic) return;
      setPosition({ x: 0, y: 0 });
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs font-medium rounded-lg',
      md: 'px-5 py-2.5 text-sm font-semibold rounded-xl',
      lg: 'px-7 py-3.5 text-base font-semibold rounded-xl',
      xl: 'px-9 py-4 text-lg font-bold rounded-2xl',
    };

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]',
      secondary:
        'bg-slate-900 text-white border border-slate-700/80 hover:bg-slate-800 hover:border-cyan-500/50 hover:text-cyan-400',
      outline:
        'bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400',
      glass:
        'glass-panel text-white hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-xl',
      ghost:
        'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
    };

    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none',
          sizeClasses[size],
          variantClasses[variant],
          glow && 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400/0 before:via-cyan-400/30 before:to-blue-500/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
          className
        )}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
