'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, MEGA_MENU_DATA } from '@/constants/data';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import {
  Sparkles,
  Command as CommandIcon,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Calendar,
  Smartphone,
  CreditCard,
  Hotel,
  Home,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenCommand: () => void;
}

export function Navbar({ onOpenDemo, onOpenCommand }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'products' | 'solutions' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false);
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getMegaIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="h-5 w-5 text-cyan-400" />;
      case 'Calendar': return <Calendar className="h-5 w-5 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="h-5 w-5 text-purple-400" />;
      case 'CreditCard': return <CreditCard className="h-5 w-5 text-emerald-400" />;
      case 'Hotel': return <Hotel className="h-5 w-5 text-cyan-400" />;
      case 'Home': return <Home className="h-5 w-5 text-blue-400" />;
      case 'Building2': return <Building2 className="h-5 w-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      default: return <Sparkles className="h-5 w-5 text-cyan-400" />;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 dark:bg-slate-950/70 light:bg-white/80 px-6 py-3.5 backdrop-blur-xl shadow-2xl">
          {/* Logo Mark */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1px] shadow-glow transition-transform group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
                <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse-glow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight text-white dark:text-white light:text-slate-900">
                AMAZE<span className="text-cyan-400">.PMS</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                VERSION 2.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMegaMenu && (item.megaCategory === 'products' || item.megaCategory === 'solutions')) {
                    setActiveMegaMenu(item.megaCategory);
                  } else {
                    setActiveMegaMenu(null);
                  }
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                  {item.hasMegaMenu && (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Cmd+K Trigger */}
            <button
              id="cmd-k-trigger"
              onClick={onOpenCommand}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <CommandIcon className="h-3.5 w-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-400">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenDemo}
              className="shadow-blue-500/20"
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MegaMenu Dropdown Panel */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setActiveMegaMenu(null)}
              className="absolute top-full left-0 right-0 mt-2 p-6 rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-2xl glass-panel grid grid-cols-2 gap-4"
            >
              {MEGA_MENU_DATA[activeMegaMenu].map((item, idx) => (
                <a
                  key={idx}
                  href="#features"
                  onClick={() => setActiveMegaMenu(null)}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getMegaIcon(item.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-2 rounded-2xl border border-white/10 bg-slate-950/95 p-6 backdrop-blur-2xl glass-panel space-y-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <CommandIcon className="h-4 w-4 text-cyan-400" /> Search Command
                  </span>
                  <kbd className="px-2 py-0.5 rounded bg-white/10 text-xs">⌘K</kbd>
                </button>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full"
                >
                  Book Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
