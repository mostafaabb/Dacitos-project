'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_LOGOS } from '@/constants/data';
import { ShieldCheck, Award, Star, Building } from 'lucide-react';

export function TrustedBySection() {
  return (
    <section className="relative py-16 bg-slate-950 border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400"
        >
          <ShieldCheck className="h-4 w-4 text-cyan-400" />
          <span>Trusted by 10,000+ Hotel Chains & Vacation Rental Empires Worldwide</span>
        </motion.div>

        {/* Infinite Logo Marquee Row */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-12 animate-marquee hover:[animation-play-state:paused]">
            {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/[0.08] transition-all cursor-pointer group"
              >
                <Building className="h-5 w-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                <span className="font-heading text-base font-bold text-slate-400 group-hover:text-white transition-colors tracking-wide">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Highlights Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 pt-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span>4.9 / 5 Rating on HotelTechReport</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>2026 Best PMS Innovation Award</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
