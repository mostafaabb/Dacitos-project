'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TESTIMONIALS_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Star, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenVideo: () => void;
}

export function TestimonialsSection({ onOpenVideo }: TestimonialsSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Verified Executive Testimonials
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              Trusted by the Industry’s Most Demanding Leaders
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embla Slider Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                <GlassCard glow className="h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-cyan-400/40" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="h-12 w-12 rounded-full object-cover border border-cyan-500/30 shadow-glow"
                    />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-white">{t.author}</h4>
                      <div className="text-xs text-slate-400">{t.role}</div>
                      <div className="text-[11px] text-cyan-400 font-semibold">{t.company}</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Video Tour Banner Callout */}
        <div className="p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold font-heading text-white">
              Want to see how Grand Meridian Stays scaled RevPAR by 38%?
            </h3>
            <p className="text-xs text-slate-400">
              Watch our 3-minute executive video case study with live dashboard recordings.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={onOpenVideo}>
            <Play className="h-4 w-4 fill-white" /> Watch Executive Case Study
          </Button>
        </div>
      </div>
    </section>
  );
}
