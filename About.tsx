/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';
import { User, Gamepad2, Tv, Trophy, Sparkles, Coffee, Heart } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'all' | 'anime' | 'gaming'>('all');

  const stats = [
    { label: "Animes vus", value: "250+", icon: Tv, color: "text-cyan-400" },
    { label: "Heures Gaming", value: "1.5k+", icon: Gamepad2, color: "text-orange-400" },
    { label: "Cafés bus", value: "900+", icon: Coffee, color: "text-yellow-400" },
    { label: "Passion", value: "100%", icon: Heart, color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 cyber-grid z-0" opacity="0.5" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <User className="w-4 h-4" />
            01. Qui suis-je ?
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            À propos de <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Yoan Alane</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography and stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="high-density-card p-8 border-l-4 border-orange-500 relative overflow-hidden shadow-xl hover:bg-white/[0.02] transition-all">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed font-sans font-medium">
                  Salutations ! 👋 Je m'appelle <span className="text-white font-bold">{personalInfo.name}</span>. 
                </p>
                <p className="text-slate-400 leading-relaxed font-sans">
                  Je suis un jeune étudiant extrêmement passionné et motivé par la technologie, habitant à 
                  <span className="cyan-glow font-semibold"> Douala, Cameroun</span>. Mon univers tourne principalement
                  autour du développement Cloud, du DevOps, et de la Cybersécurité, mariés avec une fibre créative pour le design d'interfaces mémorables (UI/UX).
                </p>
                <p className="text-slate-400 leading-relaxed font-sans">
                  Mon parcours académique me permet de consolider ces compétences tout en menant à bien des projets autodidactes. Je m'inspire beaucoup de la culture geek pour insuffler de l'énergie et de la rigueur dans mon travail quotidien.
                </p>
                
                <div className="border-t border-slate-800/80 pt-6">
                  <h4 className="text-xs font-mono uppercase text-orange-500 font-bold tracking-widest mb-4 flex items-center gap-1.5 orange-glow">
                    <Sparkles className="w-4 h-4" /> Devise Personnelle
                  </h4>
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-orange-500/10 font-mono text-sm text-slate-300 italic">
                    "La sécurité n'est pas un produit, c'est un processus continu d'apprentissage et de déploiement sécurisé."
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Ludic Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    id={`stat-card-${idx}`}
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="p-5 high-density-card text-center flex flex-col items-center justify-center relative hover:bg-white/[0.02] transition-all"
                  >
                    <div className={`p-2.5 rounded-lg bg-slate-950/80 mb-3 ${stat.color}`}>
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-extrabold text-white block tracking-tight font-mono">{stat.value}</span>
                    <span className="text-xs text-slate-400 block mt-1 font-mono uppercase tracking-widest text-[9px]">{stat.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Passions (Anime & Jeux Vidéo Tabbed Preview) */}
          <div className="lg:col-span-5">
            <div className="high-density-card p-6 border-t-4 border-cyan-400 shadow-xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                <span className="text-sm font-mono uppercase text-slate-200 font-bold tracking-wider cyan-glow">⚡ Centres d'Intérêts</span>
                
                {/* Tabs triggers */}
                <div className="flex gap-2 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
                  <button
                    id="tab-btn-all"
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'all' ? 'bg-cyan-500/20 text-white border border-cyan-500/30 font-mono' : 'text-slate-400 hover:text-white font-mono'
                    }`}
                  >
                    Tout
                  </button>
                  <button
                    id="tab-btn-anime"
                    onClick={() => setActiveTab('anime')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'anime' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono' : 'text-slate-400 hover:text-white font-mono'
                    }`}
                  >
                    Animes
                  </button>
                  <button
                    id="tab-btn-gaming"
                    onClick={() => setActiveTab('gaming')}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'gaming' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono' : 'text-slate-400 hover:text-white font-mono'
                    }`}
                  >
                    Gaming
                  </button>
                </div>
              </div>

              {/* Interests content area */}
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {(activeTab === 'all' || activeTab === 'anime') && (
                    <motion.div
                      key="anime-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                        <Tv className="w-4 h-4 text-cyan-400" /> Mes Animes Favoris
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {personalInfo.favoriteAnimes.map((anime, idx) => (
                          <div
                            id={`anime-badge-${idx}`}
                            key={idx}
                            className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-lg flex items-center space-x-2.5 hover:border-cyan-500/30 transition-all group"
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                            <span className="text-xs font-mono font-bold text-slate-300">{anime}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'all' && <div className="h-[1px] bg-slate-800/40 my-4" />}

                  {(activeTab === 'all' || activeTab === 'gaming') && (
                    <motion.div
                      key="gaming-group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-mono text-orange-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
                        <Gamepad2 className="w-4 h-4 text-orange-400" /> Jeux Vidéo Préféres
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {personalInfo.favoriteGames.map((game, idx) => (
                          <div
                            id={`game-badge-${idx}`}
                            key={idx}
                            className="bg-slate-950/70 border border-slate-800/80 p-3 rounded-lg flex items-center space-x-2.5 hover:border-orange-500/30 transition-all group"
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform" />
                            <span className="text-xs font-mono font-bold text-slate-300">{game}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tech/Geeky illustration simulation */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono leading-relaxed text-slate-400">
                <div className="text-[#06b6d4] font-bold">FEUGANG@IO-SPACE:~$ cat hobbies.json</div>
                <div className="text-slate-500 font-bold">
                  {`{`}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"gaming": "RPG, FPS & Tactical Strategy",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"anime": "Shonen, Epic plots & Studio Ghibli",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"code_philosophy": "Automation + Absolute Simplicity",
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"state": "Continuously parsing anime episodes & Cloud APIs"
                  <br />
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
