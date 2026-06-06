/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { educationHistory, personalInfo, projects } from '../data';
import { GraduationCap, Calendar, Building2, FileText, Award, Download, Sparkles, CheckCircle2, UserCheck, Mail, MapPin } from 'lucide-react';

export default function Timeline() {
  const [showFullResume, setShowFullResume] = useState(false);

  // Trigger browser print to allow custom printable CV download
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="education" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-cyan-700/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-orange-700/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            04. Parcours
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            CV & <span className="bg-gradient-to-r from-cyan-400 update-blue to-teal-400 bg-clip-text text-transparent">Formations</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm font-sans font-medium">
            Découvrez mon parcours académique et mes certifications et visualisez mon CV numérique complet prêt à imprimer.
          </p>
        </div>

        {/* Action button to display CV panel */}
        <div className="flex justify-center mb-12">
          <button
            id="timeline-toggle-resume"
            onClick={() => setShowFullResume(!showFullResume)}
            className="px-6 py-3 rounded-xl border border-cyan-400/30 bg-slate-900 hover:bg-slate-900/90 text-cyan-400 font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all shadow-lg shadow-cyan-950/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            {showFullResume ? "Masquer le CV Numérique" : "Afficher mon CV Complet"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!showFullResume ? (
            /* Standard elegant interactive timeline */
            <motion.div
              key="education-timeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto space-y-8 relative"
            >
              {/* Vertical line connector */}
              <div className="absolute left-[29px] sm:left-12 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-orange-500/10" />

              {educationHistory.map((item, index) => (
                <div key={item.id} className="relative pl-16 sm:pl-28 transition-all group">
                  {/* Years floating badge on desktop */}
                  <div className="hidden sm:block absolute left-0 top-1 text-right w-20 font-mono text-xs font-bold text-slate-500 tracking-wider">
                    {item.year}
                  </div>

                  {/* Bullet point marker icon */}
                  <div className="absolute left-4 sm:left-7 top-0 w-8 h-8 rounded-lg bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md shadow-cyan-950/50">
                    <Award className="w-4 h-4 shrink-0" />
                  </div>

                  {/* Timeline content box */}
                  <div className="p-6 high-density-card border-l-4 border-cyan-400 hover:bg-white/[0.02] transition-all shadow-lg">
                    {/* Year badge for mobile devices */}
                    <div className="sm:hidden inline-flex items-center space-x-1.5 font-mono text-[10px] text-cyan-400 font-bold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <h4 className="text-base font-bold text-white uppercase group-hover:cyan-glow transition-colors">
                        {item.title}
                      </h4>
                      {item.tag && (
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-widest border shrink-0 w-fit ${
                          item.tag === 'En cours' 
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
                            : 'bg-green-500/10 text-green-400 border-green-500/20'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mt-2">
                      <Building2 className="w-3.5 h-3.5 text-orange-500" />
                      <span className="font-semibold text-slate-300">{item.institution}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans mt-3 border-t border-slate-800 pb-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Digital Fully Formatted Resume Panel ready for print */
            <motion.div
              key="complete-printable-resume"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative"
            >
              <div className="absolute top-6 right-6 flex items-center space-x-3 print:hidden">
                <button
                  id="print-resume-btn"
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Imprimer / PDF
                </button>
              </div>

              {/* Resume layout */}
              <div className="space-y-8 font-sans">
                {/* Resume Header */}
                <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h1 className="text-2xl font-black text-white uppercase tracking-tight">{personalInfo.name}</h1>
                    <h2 className="text-base font-bold text-cyan-400 font-mono mt-1 uppercase tracking-wide">{personalInfo.title}</h2>
                    <p className="text-xs text-slate-400 mt-3 max-w-xl leading-relaxed">{personalInfo.bio}</p>
                  </div>
                  
                  <div className="font-mono text-xs text-slate-400 space-y-1 bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 shrink-0 w-full md:w-auto">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="font-bold text-slate-300">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="font-bold text-slate-300">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span className="font-bold text-slate-300">github.com/feugangyoan-sketch</span>
                    </div>
                  </div>
                </div>

                {/* Resume Body */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Resume part: Skills & Info (5 columns) */}
                  <div className="md:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Compétences Clés
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {["Cyber Sécurité", "DevOps / Jenkins", "Docker & Kubernetes", "Scripting Python", "Systèmes Linux", "Design UI/UX", "SQL Databases", "Réseaux d'entreprise"].map((sk, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-bold bg-slate-950 px-2.5 py-1 text-slate-300 rounded border border-slate-800 uppercase"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-orange-400" /> Centres d'intérêt
                      </h3>
                      <ul className="text-xs text-slate-400 space-y-1.5 font-mono">
                        <li>• Lecture d'animes et mangas</li>
                        <li>• Jeux vidéos compétitifs et de rôle</li>
                        <li>• Veille technologique Cybersécurité</li>
                        <li>• Automatisation & Domotique</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 leading-normal">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-black tracking-widest block">Note d'étudiant</span>
                      <p className="text-[10px] text-slate-400 mt-1 font-sans leading-relaxed">
                        Actuellement à la recherche d'un stage ou d'une opportunité d'alternance dans le secteur de la Cybersécurité, de l'Administration Système ou du DevOps Cloud à Douala.
                      </p>
                    </div>
                  </div>

                  {/* Right Resume part: Education History & Projects (7 columns) */}
                  <div className="md:col-span-7 space-y-6">
                    {/* Formations list */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <GraduationCap className="w-4 h-4 text-cyan-400" /> Formations
                      </h3>
                      <div className="space-y-4">
                        {educationHistory.map((edu) => (
                          <div key={edu.id} className="relative pl-4 border-l border-cyan-500/30">
                            <span className="text-[10px] font-mono text-slate-500 block font-bold">{edu.year}</span>
                            <h4 className="text-xs font-bold text-slate-100 uppercase mt-0.5">{edu.title}</h4>
                            <span className="text-[10px] text-cyan-400 font-mono font-semibold">{edu.institution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects summaries on Resume */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                        <Award className="w-4 h-4 text-cyan-400" /> Réalisations phares
                      </h3>
                      <div className="grid grid-cols-1 gap-2.5">
                        {projects.map((proj) => (
                          <div key={proj.id} className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between gap-1">
                            <div>
                              <h4 className="text-[11px] font-bold text-white uppercase font-serif tracking-wider">{proj.title}</h4>
                              <p className="text-[9px] text-slate-500 leading-tight block truncate max-w-sm mt-0.5">{proj.description}</p>
                            </div>
                            <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 uppercase font-black shrink-0">
                              {proj.techs[0]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
