'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function TimelineSection() {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Frictionless Onboarding Pathway
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Go Live in Less Than 24 Hours with Zero Interruption
          </h2>
          <p className="text-base text-slate-400">
            Our automated migration engine imports guest folios, active OTA reservations, and key lock parameters effortlessly.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="relative">
          {/* SVG Animated Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 opacity-40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {TIMELINE_DATA.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard className="h-full flex flex-col justify-between space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold font-heading text-cyan-400 font-mono">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Automated Handshake Verified</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
