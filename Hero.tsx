/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { MapPin, Github, Linkedin, ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      {/* Dynamic Grid Overlay & Color Flares */}
      <div className="absolute inset-0 cyber-grid z-0" />
      
      {/* Light spots/glows reproducing the requested blue/turquoise + orange/yellow scheme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-[120px] mix-blend-screen animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
        {/* Status indicator pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-slate-900/85 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/20"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            Disponible pour opportunités / Douala
          </span>
        </motion.div>

        {/* Main Name / Title */}
        <div className="relative">
          {/* Subtle text outline backing */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-slate-800/10 font-bold font-mono text-6xl sm:text-8xl md:text-9xl select-none uppercase tracking-tighter">
            YOAN ALANE
          </div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-4 uppercase"
          >
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]">
              {personalInfo.name.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>
        </div>

        {/* Subtitle / Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl font-mono text-slate-300 font-bold max-w-3xl mx-auto mb-6 tracking-wide"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center space-x-2 text-slate-400 mb-8"
        >
          <MapPin className="w-5 h-5 text-orange-500" />
          <span className="font-mono text-sm tracking-wide font-medium">{personalInfo.location}</span>
        </motion.div>

        {/* Brief Tag list */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-12"
        >
          {personalInfo.interests.map((tag, idx) => (
            <span
              id={`hero-tag-${idx}`}
              key={idx}
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-bold uppercase tracking-wider border transition-all hover:scale-105 duration-200 border-slate-800 bg-slate-900/90 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            id="hero-view-projects"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-slate-950 uppercase tracking-widest text-xs flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-95 transition-all group cursor-pointer"
          >
            <span>Voir mes projets</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            id="hero-contact-button"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-orange-500/50 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-orange-500" />
            <span>Débutez un projet</span>
          </button>
        </motion.div>

        {/* Quick Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center space-x-5 mt-16 text-slate-400"
        >
          <a
            id="hero-link-github"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/20"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            id="hero-link-linkedin"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-colors p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-orange-500/20"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            id="hero-link-email"
            href={`mailto:${personalInfo.email}`}
            className="hover:text-yellow-400 transition-colors p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 hover:border-yellow-500/20"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Cyber Scrapes & Visual elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
