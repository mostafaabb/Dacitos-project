'use client';

import React from 'react';
import { BLOG_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react';

export function BlogSection() {
  return (
    <section id="blog" className="relative py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <BookOpen className="h-3.5 w-3.5" /> Hospitality Research & Insights
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Industry Intelligence for Forward-Thinking Operators
          </h2>
          <p className="text-base text-slate-400">
            Read our latest research on RevPAR optimization, keyless digital check-in trends, and direct booking algorithms.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_DATA.map((article) => (
            <TiltCard key={article.id} maxTilt={6}>
              <GlassCard className="h-full flex flex-col justify-between space-y-6 group cursor-pointer overflow-hidden p-0">
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/80 backdrop-blur-md text-slate-950">
                    {article.category}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Whitepaper</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
