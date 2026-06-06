/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, Check, Sparkles, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            05. Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Coordonnées & <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">Liens</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm font-sans font-medium">
            N'hésitez pas à me contacter par e-mail ou sur mes réseaux professionnels. Je réponds sous 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct coords & social blocks (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="high-density-card p-6 border-l-4 border-cyan-400 space-y-6 shadow-xl">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-widest block border-b border-slate-800 pb-2 cyan-glow">
                📡 Direct Connect Network
              </span>

              {/* Email */}
              <a
                id="contact-email-link"
                href={`mailto:${personalInfo.email}`}
                className="group flex items-start gap-4 p-3 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors border border-slate-800/80 hover:border-cyan-400/20"
              >
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <Mail className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">MON MAIL</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 font-bold break-all group-hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div
                id="contact-location-link"
                className="group flex items-start gap-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-orange-400/20"
              >
                <div className="p-3 bg-orange-500/10 text-orange-400 rounded-lg shadow-md">
                  <MapPin className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">LOCALISATION</span>
                  <span className="text-sm font-mono text-slate-200 font-bold group-hover:text-orange-400 transition-colors">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 p-3 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors border border-slate-800/80 hover:border-yellow-400/20 animate-none"
              >
                <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-lg group-hover:bg-yellow-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <Github className="w-5 h-5 shrink-0" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">GITHUB</span>
                  <div className="flex items-center justify-between text-slate-200 font-mono text-xs sm:text-sm font-bold group-hover:text-yellow-400 transition-all">
                    <span>feugangyoan-sketch</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 p-3 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors border border-slate-800/80 hover:border-blue-400/20"
              >
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <Linkedin className="w-5 h-5 shrink-0" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">LINKEDIN</span>
                  <div className="flex items-center justify-between text-slate-200 font-mono text-xs sm:text-sm font-bold group-hover:text-cyan-400 transition-all">
                    <span>@feugangyoan</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </div>
                </div>
              </a>
            </div>

            {/* Micro-interactive visual tech footer info */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-[10px] font-mono text-slate-500 space-y-1 select-none">
              <div className="text-white font-bold mb-1.5 uppercase tracking-widest text-[11px] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> Security State
              </div>
              <div>ENCRYPTION_LAYER: TLS_ECDHE_RSA_AES256</div>
              <div>PORT_INTEGRITY: SECURED_VECTORS // TRUE</div>
              <div>CONNECTION_LINK: ESTABLISHED_DOUALA_CAMEROON</div>
            </div>
          </div>

          {/* Right Column: Contact feedback submission form (7 columns) */}
          <div className="lg:col-span-7 high-density-card border-r-4 border-yellow-400 p-8 shadow-xl">
            <span className="text-xs font-mono uppercase text-yellow-400 font-bold tracking-widest pl-1 block mb-4 yellow-glow">
              📩 Envoyez-moi un message direct
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                    Votre Nom
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="FEUSSI Alex"
                    className="w-full bg-slate-950 font-mono text-xs text-white p-3 rounded-lg border border-slate-800 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                    Votre E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="contact@exemple.com"
                    className="w-full bg-slate-950 font-mono text-xs text-white p-3 rounded-lg border border-slate-800 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                  Objet
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Proposition d'Alternance / Projet"
                  className="w-full bg-slate-950 font-mono text-xs text-white p-3 rounded-lg border border-slate-800 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Bonjour Yoan, je souhaiterais discuter de votre profil pour un projet..."
                  className="w-full bg-slate-950 font-mono text-xs text-white p-3 rounded-lg border border-slate-800 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 rounded-lg bg-green-500/15 border border-green-500/30 font-mono text-[11px] text-green-400 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Message envoyé avec succès ! Merci de votre intérêt Yoan vous répondra bientôt.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold text-slate-950 uppercase tracking-widest text-xs flex items-center justify-center space-x-2.5 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
