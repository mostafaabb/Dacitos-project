'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('General');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategoryData = FAQ_DATA.find((c) => c.category === activeCategory) || FAQ_DATA[0];

  const filteredQuestions = currentCategoryData.questions.filter(
    (q) =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-32 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Everything You Need to Know About Amaze PMS 2.0
          </h2>
          <p className="text-base text-slate-400">
            Have questions about integrations, IoT lock pairing, or data security? We have transparent answers.
          </p>

          {/* Search Filter Input */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. migration, smart locks, PCI)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.category
                  ? 'bg-cyan-500 text-slate-950 shadow-glow'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <GlassCard
                key={idx}
                hoverRise={false}
                className="p-6 cursor-pointer border-white/10 hover:border-cyan-500/30 transition-all"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-bold font-heading text-white">{item.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-slate-300 pt-4 leading-relaxed border-t border-white/10 mt-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
