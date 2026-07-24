'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col items-center justify-center space-y-6">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-glow">
        <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-slate-950">
          <Sparkles className="h-8 w-8 text-cyan-400 animate-pulse-glow" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <div className="font-heading text-xl font-bold tracking-tight text-white">
          AMAZE<span className="text-cyan-400">.PMS 2.0</span>
        </div>
        <p className="text-xs text-slate-400 font-mono">Initializing Sub-Second Architecture...</p>
      </div>

      <div className="h-1 w-48 bg-slate-900 rounded-full overflow-hidden border border-white/10">
        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-2/3 animate-pulse" />
      </div>
    </div>
  );
}
