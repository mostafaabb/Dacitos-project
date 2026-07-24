'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRICING_DATA } from '@/constants/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientBorder } from '@/components/ui/GradientBorder';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = PRICING_DATA[billingCycle];

  return (
    <section id="pricing" className="relative py-32 bg-slate-950 text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Transparent Enterprise Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Predictable Plans Built for Maximum ROI
          </h2>
          <p className="text-base text-slate-400">
            No hidden booking transaction fees. Choose monthly flexibility or save 20% on annual billing.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-8 rounded-full bg-slate-800 border border-white/10 p-1 transition-colors cursor-pointer"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-glow"
                animate={{ x: billingCycle === 'annual' ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-cyan-400' : 'text-slate-400'}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;

            const cardContent = (
              <div className="p-8 h-full flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold font-heading text-white">{plan.name}</h3>
                    {plan.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold font-heading text-white">${plan.price}</span>
                      <span className="text-xs text-slate-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features</div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={isPopular ? 'primary' : 'secondary'}
                  size="lg"
                  glow={isPopular}
                  onClick={onOpenDemo}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </div>
            );

            return isPopular ? (
              <GradientBorder key={plan.id} containerClassName="h-full">
                {cardContent}
              </GradientBorder>
            ) : (
              <GlassCard key={plan.id} className="h-full">
                {cardContent}
              </GlassCard>
            );
          })}
        </div>

        {/* Security & Money-Back Guarantee Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 pt-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>14-Day Free Risk-Free Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Instant API Onboarding</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span>Cancel Anytime in 1 Click</span>
          </div>
        </div>
      </div>
    </section>
  );
}
