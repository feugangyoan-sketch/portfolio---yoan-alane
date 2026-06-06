/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Terminal, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 font-mono text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Core Left */}
        <div className="flex items-center space-x-2 text-slate-500">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            FEUGANG FEUSSI YOAN ALANE // PORTFOLIO
          </span>
        </div>

        {/* Core center */}
        <div className="text-[10px] text-slate-600">
          © {currentYear} • Conçu avec passion avec React, TailwindCSS & Motion.
        </div>

        {/* Core right */}
        <div className="flex items-center space-x-2 text-[10px] bg-slate-900 border border-slate-800/80 rounded-full px-3.5 py-1 text-slate-500 select-none">
          <Shield className="w-3.5 h-3.5 text-orange-500" />
          <span className="font-bold">SECURE_COMPLIANT // LOCALHOST:3000</span>
        </div>

      </div>
    </footer>
  );
}
