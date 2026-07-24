'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SHOWCASE_TABS } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { Button } from '@/components/ui/Button';
import { Monitor, Smartphone, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface ProductShowcaseSectionProps {
  onOpenDemo: () => void;
}

export function ProductShowcaseSection({ onOpenDemo }: ProductShowcaseSectionProps) {
  const [activeTabId, setActiveTabId] = useState('pms-hub');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const currentTab = SHOWCASE_TABS.find((t) => t.id === activeTabId) || SHOWCASE_TABS[0];

  return (
    <section id="showcase" className="relative py-32 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Interactive Product Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Experience the Command Center Designed for Peak Performance
          </h2>
          <p className="text-base text-slate-400">
            Switch between core sub-modules to explore how Amaze PMS 2.0 unifies complex property management workflows into an effortless visual workspace.
          </p>
        </div>

        {/* Tab Selection Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md max-w-2xl mx-auto">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTabId === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Device Frame View Toggle */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setDeviceView('desktop')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              deviceView === 'desktop'
                ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="h-4 w-4" /> MacBook Pro View
          </button>
          <button
            onClick={() => setDeviceView('mobile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              deviceView === 'mobile'
                ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
                : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="h-4 w-4" /> iPhone Guest App
          </button>
        </div>

        {/* Showcase Body (Device & Highlights Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Feature Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sparkles className="h-3.5 w-3.5" /> {currentTab.label}
                </div>

                <h3 className="text-3xl font-extrabold font-heading text-white">
                  {currentTab.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentTab.description}
                </p>

                {/* Key Metrics Breakdown */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  {currentTab.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-base font-bold font-heading text-cyan-400 mt-1">{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Feature Points Checklist */}
                <div className="space-y-2">
                  {currentTab.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="lg" onClick={onOpenDemo} className="mt-4">
                  Schedule Live Test Drive <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Graphic Device Frame Mockup */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={5}>
              <div className="relative rounded-3xl border border-white/15 bg-slate-900 shadow-2xl p-6 glass-panel overflow-hidden">
                {deviceView === 'desktop' ? (
                  <div className="space-y-4">
                    {/* Top Bar Mockup */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-amber-500" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-xs font-mono text-cyan-400">
                        {currentTab.title} • Live Engine
                      </span>
                    </div>

                    {/* Dashboard Mockup Details */}
                    <div className="aspect-[16/10] w-full rounded-2xl bg-slate-950 border border-white/10 p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="h-48 w-48 text-cyan-400" />
                      </div>

                      <div className="flex justify-between items-center z-10">
                        <div>
                          <div className="text-xs text-slate-400">Selected Module</div>
                          <div className="text-lg font-bold font-heading text-white">{currentTab.label}</div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Active Stream
                        </span>
                      </div>

                      {/* Hotspot Pins */}
                      <div className="grid grid-cols-2 gap-4 z-10">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 hover:border-cyan-500/40 transition-colors">
                          <div className="text-xs text-slate-400">Live Handshake Status</div>
                          <div className="text-sm font-bold text-cyan-400">Sub-Second Sync Active</div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-400 w-4/5 animate-pulse" />
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 hover:border-cyan-500/40 transition-colors">
                          <div className="text-xs text-slate-400">AI Micro-optimizations</div>
                          <div className="text-sm font-bold text-emerald-400">48 Adjustments / Day</div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 w-full" />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 z-10 flex items-center justify-between">
                        <span>System Latency: 42ms</span>
                        <span className="text-cyan-400 font-mono">SOC2 Type II Encrypted</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile Phone Frame View */
                  <div className="max-w-xs mx-auto aspect-[9/18] rounded-[40px] border-4 border-slate-800 bg-slate-950 p-4 shadow-2xl space-y-4">
                    <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto" />
                    <div className="text-center space-y-2 pt-4">
                      <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Amaze Guest Web Key</div>
                      <div className="text-xl font-bold font-heading text-white">Suite 402 Keyless</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-3">
                      <Sparkles className="h-12 w-12 text-cyan-400 mx-auto animate-bounce" />
                      <div className="text-xs text-slate-300 font-medium">Tap phone near lock to open</div>
                    </div>
                  </div>
                )}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
