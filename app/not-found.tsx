'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 overflow-hidden">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-hero-glow blur-3xl opacity-50" />

      <div className="relative z-10 text-center space-y-6 max-w-lg glass-panel p-10 rounded-3xl border border-white/10 shadow-2xl">
        <div className="inline-flex p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-glow">
          <Sparkles className="h-10 w-10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
            ERROR 404 • SUITE UNMAPPED
          </span>
          <h1 className="text-4xl font-extrabold font-heading text-white">
            Page Outside Property Inventory
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or route you are looking for has been relocated or does not exist in the Amaze PMS 2.0 command structure.
          </p>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg" glow>
              <Home className="h-4 w-4" /> Return to Main Command Hub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
