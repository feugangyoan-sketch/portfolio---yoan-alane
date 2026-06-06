/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Terminal } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased scanline-effect selection:bg-cyan-500/30 selection:text-white">
      {/* Upper background ambiance lines */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-cyan-950/20 to-slate-950 pointer-events-none z-10" />

      {/* Floating System Console Logs overlay (Simulated geekiness) */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block select-none opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg font-mono text-[9px] text-slate-500 max-w-[200px] shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold mb-1 uppercase tracking-widest text-[10px]">
            <Terminal className="w-3 h-3 text-cyan-400 shrink-0" /> IO-MATRIX LOGS
          </div>
          <div>CPU_ALLOC: ACTIVE</div>
          <div>SECURE_SHIELD: TRUE</div>
          <div>DOUALA_LATENCY: 12ms</div>
        </div>
      </div>

      {/* Floating scroll to top button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-lg bg-orange-500 text-slate-950 border border-orange-400/30 hover:bg-orange-400 transition-all shadow-lg hover:shadow-orange-500/20 cursor-pointer active:scale-95 animate-fadeIn"
          title="Retourner en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Fully Animated Sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
