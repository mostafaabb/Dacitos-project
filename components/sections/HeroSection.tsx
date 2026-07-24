'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { HERO_DATA } from '@/constants/data';
import { Button } from '@/components/ui/Button';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Counter } from '@/components/ui/Counter';
import { TiltCard } from '@/components/ui/TiltCard';
import {
  Sparkles,
  Play,
  TrendingUp,
  Users,
  KeyRound,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar as CalendarIcon,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenVideo: () => void;
}

export function HeroSection({ onOpenDemo, onOpenVideo }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'occupancy' | 'revenue' | 'inbox' | 'locks'>('revenue');

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Interactive Particle Background Field */}
      <ParticleBackground />

      {/* Ambient Gradient Glow Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-hero-glow blur-3xl opacity-60 animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Announcement Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md hover:bg-cyan-500/20 transition-all cursor-pointer group shadow-glow"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold text-cyan-300 font-heading">
              {HERO_DATA.announcementText}
            </span>
          </motion.div>

          {/* Headline with Stagger Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.08]">
            <AnimatedText text="The Operating System for" className="text-white" />
            <br />
            <span className="text-gradient-cyan">
              <AnimatedText text="Modern Property Empires" delay={0.2} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Button
              variant="primary"
              size="xl"
              glow
              onClick={onOpenDemo}
              className="px-8 shadow-blue-500/30"
            >
              <Sparkles className="h-5 w-5" /> Request VIP Demo
            </Button>
            <Button
              variant="secondary"
              size="xl"
              onClick={onOpenVideo}
              className="px-8"
            >
              <Play className="h-5 w-5 fill-white" /> Watch 3-Min Tour
            </Button>
          </motion.div>

          {/* Floating Key Enterprise Metric Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-2xl text-slate-300"
          >
            <div>
              <div className="text-2xl font-bold font-heading text-white">
                <Counter end={99.99} decimals={2} suffix="%" />
              </div>
              <div className="text-xs text-slate-400 mt-0.5">SLA Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-cyan-400">
                <Counter end={2.8} decimals={1} prefix="$" suffix="B+" />
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Annual Volume</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-heading text-emerald-400">
                <Counter end={34} prefix="+" suffix="%" />
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Avg RevPAR Gain</div>
            </div>
          </motion.div>
        </div>

        {/* Animated Interactive Live Dashboard Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 w-full"
        >
          <TiltCard maxTilt={6} className="w-full">
            <div className="relative rounded-3xl border border-white/15 bg-slate-900/90 shadow-2xl overflow-hidden glass-panel">
              {/* Window Bar Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-slate-950/80">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-4 text-xs font-mono text-slate-400">
                    amaze-pms://live-command-center.v2
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/10">
                  <button
                    onClick={() => setActiveTab('revenue')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'revenue' ? 'bg-cyan-500 text-slate-950 shadow-glow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Yield AI Engine
                  </button>
                  <button
                    onClick={() => setActiveTab('occupancy')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'occupancy' ? 'bg-cyan-500 text-slate-950 shadow-glow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live Occupancy
                  </button>
                  <button
                    onClick={() => setActiveTab('inbox')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'inbox' ? 'bg-cyan-500 text-slate-950 shadow-glow' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    AI Guest Inbox
                  </button>
                </div>
              </div>

              {/* Dashboard Content Body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Today Revenue</div>
                      <div className="text-xl font-bold font-heading text-white">$48,290</div>
                      <div className="text-[11px] text-emerald-400 font-medium">↑ +24.8% vs last week</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Live Occupancy</div>
                      <div className="text-xl font-bold font-heading text-white">94.2%</div>
                      <div className="text-[11px] text-cyan-400 font-medium">1,240 Active Suites</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                      <KeyRound className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Keyless Arrivals</div>
                      <div className="text-xl font-bold font-heading text-white">18 Remaining</div>
                      <div className="text-[11px] text-slate-400 font-medium">100% Self Check-in</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">ADR (Avg Daily Rate)</div>
                      <div className="text-xl font-bold font-heading text-white">$284.50</div>
                      <div className="text-[11px] text-emerald-400 font-medium">Optimized by Yield AI</div>
                    </div>
                  </div>
                </div>

                {/* Main Tab Graphic Visualization */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                  {activeTab === 'revenue' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white font-heading">
                            Autonomous Price Adjustments (Past 24h)
                          </h4>
                          <p className="text-xs text-slate-400">
                            Micro-market demand pulse detected 14 rate optimization triggers
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          AI Active Mode
                        </span>
                      </div>

                      {/* SVG Revenue Curve */}
                      <div className="h-40 w-full pt-4">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0,90 Q 60,30 120,60 T 240,20 T 360,50 T 500,10"
                            fill="none"
                            stroke="#00E5FF"
                            strokeWidth="3"
                          />
                          <path
                            d="M 0,90 Q 60,30 120,60 T 240,20 T 360,50 T 500,10 L 500,120 L 0,120 Z"
                            fill="url(#chartGradient)"
                          />
                          {/* Animated Trigger Dots */}
                          <circle cx="120" cy="60" r="5" fill="#00E5FF" className="animate-ping" />
                          <circle cx="240" cy="20" r="5" fill="#2563EB" className="animate-ping" />
                          <circle cx="500" cy="10" r="5" fill="#22C55E" className="animate-ping" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {activeTab === 'occupancy' && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-white font-heading">
                        Live Property Tape Chart (Real-Time Availability)
                      </h4>
                      <div className="space-y-2">
                        {HERO_DATA.liveDashboard.recentBookings.map((b) => (
                          <div key={b.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                            <div className="flex items-center gap-3">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              <div>
                                <span className="font-semibold text-white">{b.guest}</span>
                                <span className="text-slate-400 ml-2">({b.property})</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-cyan-400 font-mono">{b.channel}</span>
                              <span className="font-bold text-white">${b.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'inbox' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white font-heading">
                          AI Multilingual Guest Co-Pilot
                        </h4>
                        <span className="text-xs text-slate-400">Response Latency: 120ms</span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs font-bold">Guest</div>
                          <div className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl">
                            "Hello, could we get keyless access for Suite 402 a few hours earlier around 1:00 PM?"
                          </div>
                        </div>
                        <div className="flex items-start gap-3 justify-end">
                          <div className="text-xs text-cyan-300 bg-cyan-950 border border-cyan-500/30 p-3 rounded-xl">
                            "AI Suggested Response: Suite 402 housekeeping is finished. Early check-in approved! Digital key unlocked for 1:00 PM."
                          </div>
                          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold">AI Bot</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
