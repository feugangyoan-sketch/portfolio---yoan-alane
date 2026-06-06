/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Menu, X, User, Folder, GraduationCap, Code, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Terminal },
    { id: 'about', label: 'À Propos', icon: User },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'projects', label: 'Projets', icon: Folder },
    { id: 'education', label: 'CV & Formations', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-mono font-bold text-lg">YF</span>
            </div>
            <div>
              <span className="text-white font-bold tracking-wider text-sm block">YOAN FEUGANG</span>
              <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest block font-bold">
                Dev & UI Designer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-btn-${item.id}`}
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 cursor-pointer ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Contact Quick Button */}
          <div className="hidden md:block">
            <button
              id="cta-contact-nav"
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
            >
              Recruter Yoan
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-cyan-500/20 px-4 pt-2 pb-4 space-y-1"
        >
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                id={`mobile-nav-btn-${item.id}`}
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' : 'text-slate-300 hover:bg-slate-900/50'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-4 px-3">
            <button
              id="mobile-cta-contact"
              onClick={() => scrollTo('contact')}
              className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 font-bold text-sm uppercase tracking-widest hover:brightness-110"
            >
              Recruter Yoan
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
