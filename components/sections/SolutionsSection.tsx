'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLUTIONS_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Hotel, Home, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenDemo: () => void;
}

export function SolutionsSection({ onOpenDemo }: SolutionsSectionProps) {
  const [activeSolId, setActiveSolId] = useState('boutique-hotels');

  const currentSol = SOLUTIONS_DATA.find((s) => s.id === activeSolId) || SOLUTIONS_DATA[0];

  const getSolIcon = (id: string) => {
    switch (id) {
      case 'boutique-hotels': return <Hotel className="h-5 w-5 text-cyan-400" />;
      case 'vacation-rentals': return <Home className="h-5 w-5 text-blue-400" />;
      case 'commercial-real-estate': return <Building2 className="h-5 w-5 text-indigo-400" />;
      default: return <Hotel className="h-5 w-5 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="relative py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Built for Your Exact Property Business Model
          </h2>
          <p className="text-base text-slate-400">
            Whether running luxury boutique hotels, hundreds of vacation rentals, or flexible co-living spaces, Amaze PMS 2.0 adapts to your workflows.
          </p>
        </div>

        {/* Solutions Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SOLUTIONS_DATA.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveSolId(sol.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                activeSolId === sol.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {getSolIcon(sol.id)}
              <span>{sol.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Solutions Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSol.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard glow className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column Text */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {currentSol.badge}
                  </span>

                  <h3 className="text-3xl font-extrabold font-heading text-white">
                    {currentSol.title}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed">
                    {currentSol.subtitle}
                  </p>

                  <div className="space-y-3 pt-2">
                    {currentSol.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="lg" onClick={onOpenDemo}>
                      Explore Solution Architecture <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Right Column Stat Highlight Badge */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-blue-950/40 text-center space-y-4 shadow-glow">
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                      Proven Impact Metric
                    </div>
                    <div className="text-4xl font-extrabold font-heading text-white">
                      {currentSol.stat}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Verified operational performance improvement benchmarked across active customer portfolios.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
