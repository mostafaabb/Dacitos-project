'use client';

import React from 'react';
import { INDUSTRIES_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { Hotel, Home, Building2, Users } from 'lucide-react';

export function IndustriesSection() {
  const getIndustryIcon = (icon: string) => {
    switch (icon) {
      case 'Hotel': return <Hotel className="h-8 w-8 text-cyan-400" />;
      case 'Home': return <Home className="h-8 w-8 text-blue-400" />;
      case 'Building2': return <Building2 className="h-8 w-8 text-purple-400" />;
      case 'Users': return <Users className="h-8 w-8 text-emerald-400" />;
      default: return <Hotel className="h-8 w-8 text-cyan-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Target Property Sectors
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Designed for Every Scale of Hospitality Architecture
          </h2>
          <p className="text-base text-slate-400">
            From single high-touch boutique hotels to multi-thousand unit urban aparthotel chains.
          </p>
        </div>

        {/* 4 Interactive 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <TiltCard key={ind.id} maxTilt={10}>
              <GlassCard className="h-full flex flex-col justify-between space-y-6 group hover:border-cyan-500/50">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                  {getIndustryIcon(ind.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">Typical Scale</span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-cyan-300 border border-white/10">
                    {ind.stats}
                  </span>
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
