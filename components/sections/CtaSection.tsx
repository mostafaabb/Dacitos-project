'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  onOpenDemo: () => void;
}

export function CtaSection({ onOpenDemo }: CtaSectionProps) {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
      {/* Massive Immersive Aurora Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow blur-3xl opacity-70 animate-pulse-glow" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8">
        <div className="relative rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-cyan-950/80 p-10 sm:p-16 text-center space-y-8 backdrop-blur-2xl shadow-glow overflow-hidden glass-panel">
          {/* Decorative Sparkle Graphic */}
          <div className="inline-flex p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow animate-bounce">
            <Sparkles className="h-8 w-8" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready to Upgrade Your Property Empire to Version 2.0?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Join thousands of forward-thinking hotel operators and vacation rental managers who unlocked autonomous yield revenue and 100% keyless guest stays.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="xl"
              glow
              onClick={onOpenDemo}
              className="px-10 shadow-cyan-500/40"
            >
              Request VIP Demo Access <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 pt-6 border-t border-white/10">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Free 14-Day Executive Trial
            </span>
            <span className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-cyan-400" /> 24/7 Dedicated Account Manager
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-400" /> Sub-Minute Automated Migration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
