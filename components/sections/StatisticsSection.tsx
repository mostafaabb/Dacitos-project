'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { STATISTICS_DATA } from '@/constants/data';
import { Counter } from '@/components/ui/Counter';
import { GlassCard } from '@/components/ui/GlassCard';
import { TrendingUp, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export function StatisticsSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="h-6 w-6 text-cyan-400" />;
      case 1: return <TrendingUp className="h-6 w-6 text-emerald-400" />;
      case 2: return <Zap className="h-6 w-6 text-amber-400" />;
      case 3: return <Globe2 className="h-6 w-6 text-blue-400" />;
      default: return <TrendingUp className="h-6 w-6 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Proven Scale Metrics
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Engineered for Sub-Second Precision at Global Scale
          </h2>
          <p className="text-base text-slate-400">
            Real-world performance metrics measured across thousands of connected hotel properties and high-yield short-term rental portfolios.
          </p>
        </div>

        {/* 4 Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATISTICS_DATA.map((stat, idx) => (
            <GlassCard key={idx} glow={idx === 1} className="flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {getIcon(idx)}
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {stat.trend}
                </span>
              </div>

              <div>
                <div className="text-4xl font-extrabold font-heading text-white">
                  <Counter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 2 : 0}
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-200 mt-2 font-heading">{stat.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{stat.description}</p>
              </div>

              {/* Sparkline Graphic */}
              <div className="pt-2 border-t border-white/10">
                <div className="h-10 w-full flex items-end justify-between gap-1">
                  {stat.sparkline.map((val, sIdx) => {
                    const max = Math.max(...stat.sparkline);
                    const heightPercent = (val / max) * 100;
                    return (
                      <div
                        key={sIdx}
                        className="w-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 opacity-60 hover:opacity-100 transition-opacity"
                        style={{ height: `${Math.max(heightPercent, 20)}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
