'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="relative bg-slate-950 text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Top Grid: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="flex items-center gap-3 group w-fit">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-glow">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                AMAZE<span className="text-cyan-400">.PMS</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              The sub-second operating system for modern hotel chains, luxury resorts, and high-scale vacation rental empires worldwide.
            </p>

            {/* Live Operational System Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 w-fit text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational • 99.99% Uptime</span>
            </div>
          </div>

          {/* Newsletter Subscription Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold font-heading text-white">
                Subscribe to The Modern Hospitality Digest
              </h3>
              <p className="text-xs text-slate-400">
                Get monthly research on RevPAR algorithms, keyless guest tech, and direct booking optimization delivered directly to your inbox.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> You're subscribed to The Hospitality Digest!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-8 border-t border-white/10 text-xs">
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Products</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Autonomous Yield AI</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Sub-Second Channel Sync</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Keyless Guest Portal</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Multilingual Inbox</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Automated Accounting</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Boutique Hotels</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Vacation Rental Scale</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Urban Aparthotels</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Commercial Hybrid</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Enterprise Custom API</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors">RevPAR Research</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Help Center & FAQ</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">API Documentation</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">System Uptime SLA</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Hardware Lock Guide</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">About Amaze PMS</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing & Plans</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Press & Media Kit</a></li>
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Global Security</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              PCI-DSS Level 1 Certified. End-to-end TLS 1.3 encryption. SOC2 Type II audited cloud architecture.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="Github" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Amaze PMS 2.0 Inc. All rights reserved. Built for Next-Gen Hospitality.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
