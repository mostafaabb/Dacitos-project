'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function GradientBorder({
  children,
  className,
  containerClassName,
}: GradientBorderProps) {
  return (
    <div className={cn('relative p-[1px] rounded-2xl overflow-hidden group', containerClassName)}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 animate-border-spin group-hover:duration-1000 opacity-70 group-hover:opacity-100 transition-opacity" />
      <div className={cn('relative rounded-[15px] bg-slate-950 dark:bg-slate-950 light:bg-white', className)}>
        {children}
      </div>
    </div>
  );
}
