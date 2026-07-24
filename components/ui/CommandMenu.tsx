'use client';

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Home, Grid, Monitor, DollarSign, HelpCircle, Calendar, Play, Moon, Sun, X } from 'lucide-react';
import { COMMAND_MENU_ITEMS } from '@/constants/data';
import { useTheme } from '@/lib/theme-provider';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
  onOpenVideo: () => void;
}

export function CommandMenu({ isOpen, onClose, onOpenDemo, onOpenVideo }: CommandMenuProps) {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open menu via trigger
          const btn = document.getElementById('cmd-k-trigger');
          btn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (action: string) => {
    onClose();
    if (action.startsWith('#')) {
      const el = document.querySelector(action);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'open-demo-modal') {
      onOpenDemo();
    } else if (action === 'open-video-modal') {
      onOpenVideo();
    } else if (action === 'toggle-theme') {
      toggleTheme();
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="h-4 w-4 text-cyan-400" />;
      case 'Grid': return <Grid className="h-4 w-4 text-blue-400" />;
      case 'Monitor': return <Monitor className="h-4 w-4 text-purple-400" />;
      case 'DollarSign': return <DollarSign className="h-4 w-4 text-emerald-400" />;
      case 'HelpCircle': return <HelpCircle className="h-4 w-4 text-amber-400" />;
      case 'Calendar': return <Calendar className="h-4 w-4 text-cyan-400" />;
      case 'Play': return <Play className="h-4 w-4 text-red-400" />;
      case 'Moon': return theme === 'dark' ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-400" />;
      default: return <Search className="h-4 w-4 text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden glass-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3 w-full">
            <Search className="h-5 w-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search features, pricing, actions... (ESC to close)"
              className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-base font-medium"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {COMMAND_MENU_ITEMS.filter((item) =>
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.action)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/40">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-400">{item.category}</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400 group-hover:text-white">
                Enter
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-xs text-slate-400 bg-slate-950/40">
          <div>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-slate-200">Cmd K</kbd> anywhere</div>
          <div>Amaze PMS 2.0 Command Center</div>
        </div>
      </div>
    </div>
  );
}
