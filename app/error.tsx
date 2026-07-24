'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
        <div className="inline-flex p-4 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
          <AlertTriangle className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold font-heading text-white">Temporary Engine Interruption</h2>
          <p className="text-sm text-slate-400">
            An unforeseen runtime anomaly occurred. Click reset to restore sub-second state synchronization.
          </p>
        </div>

        <Button variant="primary" size="lg" onClick={() => reset()} className="w-full">
          <RefreshCw className="h-4 w-4" /> Reset Command State
        </Button>
      </div>
    </div>
  );
}
