'use client';

import React from 'react';
import { X, Play, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-900 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Play className="h-5 w-5 text-cyan-400 fill-cyan-400" />
            <span className="font-bold text-white font-heading text-lg">Amaze PMS 2.0 Architectural Walkthrough</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Container / Animated Simulation */}
        <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-hero-glow opacity-50 animate-pulse-glow" />
          
          <div className="relative z-10 text-center space-y-6 max-w-xl">
            <div className="inline-flex p-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-glow cursor-pointer hover:scale-110 transition-transform">
              <Play className="h-12 w-12 fill-cyan-400 translate-x-1" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white font-heading">Interactive Platform Tour</h4>
              <p className="text-sm text-slate-400">
                Watch how Autonomous Yield Revenue AI micro-adjusts room pricing across Airbnb, Booking.com, and direct web engines in sub-second cycles.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 4K Ultra HD
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" /> 3:45 Duration
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-purple-400" /> Full Architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
