'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BENTO_FEATURES } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import {
  TrendingUp,
  RefreshCw,
  Smartphone,
  MessageSquare,
  Lock,
  CreditCard,
  CheckCircle2,
  Sliders,
  Sparkles,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function BentoGridSection() {
  const [sliderPrice, setSliderPrice] = useState(320);
  const [unlocked, setUnlocked] = useState(false);
  const [synced, setSynced] = useState(true);

  const getBentoIcon = (type: string) => {
    switch (type) {
      case 'chart': return <TrendingUp className="h-6 w-6 text-cyan-400" />;
      case 'pulse': return <RefreshCw className="h-6 w-6 text-blue-400" />;
      case 'phone': return <Smartphone className="h-6 w-6 text-purple-400" />;
      case 'inbox': return <MessageSquare className="h-6 w-6 text-emerald-400" />;
      case 'lock': return <Lock className="h-6 w-6 text-amber-400" />;
      case 'table': return <CreditCard className="h-6 w-6 text-indigo-400" />;
      default: return <Sparkles className="h-6 w-6 text-cyan-400" />;
    }
  };

  return (
    <section id="features" className="relative py-32 bg-slate-950 text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-hero-glow blur-3xl opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-glow">
            <Sparkles className="h-3.5 w-3.5" /> Next-Generation PMS Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Everything You Need to Run an Autonomous Property Empire
          </h2>
          <p className="text-base text-slate-400">
            Reengineered from the ground up to replace legacy sluggish property management tools with sub-second cloud synchronization.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {BENTO_FEATURES.map((item) => (
            <div key={item.id} className={cn('w-full', item.colSpan)}>
              <TiltCard maxTilt={8} className="h-full">
                <GlassCard glow={item.id === 'yield-ai'} className="h-full flex flex-col justify-between space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                        {getBentoIcon(item.graphicType)}
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-widest">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Body Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

                  {/* Micro Interactive Graphics */}
                  <div className="pt-4 border-t border-white/10">
                    {item.id === 'yield-ai' && (
                      <div className="space-y-3 p-4 rounded-xl bg-slate-900/80 border border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Sliders className="h-3.5 w-3.5 text-cyan-400" /> Dynamic Rate Calibration:
                          </span>
                          <span className="font-bold font-mono text-cyan-400 text-sm">${sliderPrice} / night</span>
                        </div>
                        <input
                          type="range"
                          min="180"
                          max="550"
                          value={sliderPrice}
                          onChange={(e) => setSliderPrice(Number(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                        />
                        <div className="flex justify-between text-[10px] text-slate-500">
                          <span>Low Demand Base ($180)</span>
                          <span>High Event Surge ($550)</span>
                        </div>
                      </div>
                    )}

                    {item.id === 'channel-sync' && (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-white/10 text-xs">
                        <div className="flex items-center gap-3">
                          <span className={`h-3 w-3 rounded-full ${synced ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                          <div>
                            <div className="font-semibold text-white">Airbnb & Booking.com Live</div>
                            <div className="text-[10px] text-slate-400">Latency: 180ms 2-way handshake</div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSynced(!synced)}
                          className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-cyan-300 transition-colors"
                        >
                          {synced ? 'Synced' : 'Syncing...'}
                        </button>
                      </div>
                    )}

                    {item.id === 'guest-app' && (
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between text-xs">
                        <div className="space-y-1">
                          <div className="font-semibold text-white">Guest Mobile Key Link</div>
                          <div className="text-[10px] text-slate-400">No App Install Required</div>
                        </div>
                        <button
                          onClick={() => setUnlocked(!unlocked)}
                          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                            unlocked
                              ? 'bg-emerald-500 text-slate-950 shadow-glow'
                              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          }`}
                        >
                          <Lock className="h-3.5 w-3.5" /> {unlocked ? 'Suite Unlocked!' : 'Tap to Unlock'}
                        </button>
                      </div>
                    )}

                    {item.id === 'unified-inbox' && (
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 space-y-2 text-xs">
                        <div className="flex items-center justify-between text-[10px] text-slate-400">
                          <span>Incoming WhatsApp • 2 mins ago</span>
                          <span className="text-emerald-400 font-semibold">Auto-Translated (Spanish → English)</span>
                        </div>
                        <div className="text-slate-300 font-mono text-[11px] bg-slate-950 p-2.5 rounded-lg border border-white/5">
                          "¿Cuál es el código Wi-Fi de la villa?" → "The Wi-Fi network is VillaGuest_5G."
                        </div>
                      </div>
                    )}

                    {item.id === 'smart-locks' && (
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 font-medium text-slate-300">Yale Sync</div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 font-medium text-slate-300">Salto Keyless</div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 font-medium text-slate-300">August Lock</div>
                      </div>
                    )}

                    {item.id === 'financial-hub' && (
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          <span className="font-semibold text-white">QuickBooks & Xero Sync</span>
                        </div>
                        <span className="text-emerald-400 font-bold font-mono">100% Reconciled</span>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
