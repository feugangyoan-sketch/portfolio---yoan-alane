/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data';
import { ShieldAlert, CloudLightning, Network, Database, Brain, Sparkles, Check, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  CloudLightning: CloudLightning,
  Network: Network,
  Database: Database
};

// Simple interactive game / quiz to demonstrate cyber knowledge
interface QuizQuestion {
  question: string;
  options: string[];
  correctIdx: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Quelle méthode permet de détruire une session utilisateur non sécurisée via injection ?",
    options: ["Cross-Site Scripting (XSS)", "SQL Injection (SQLi)", "Man-in-the-Middle (MitM)", "DDoS Attack"],
    correctIdx: 0,
    explanation: "Le XSS permet d'injecter des scripts malveillants (souvent JavaScript) dans des pages web de confiance pour dérober des cookies de session."
  },
  {
    question: "Dans le paradigme DevOps, que signifie l'étape 'CI' de CI/CD ?",
    options: ["Container Deployment", "Continuous Integration", "Constant Infrastructure", "Cyber Intelligence"],
    correctIdx: 1,
    explanation: "CI signifie Continuous Integration (Intégration Continue). C'est le processus d'automatisation de la construction et des tests du code à chaque commit."
  },
  {
    question: "Quel protocole réseau sécurisé opère par défaut sur le port 443 ?",
    options: ["HTTP", "SSH", "HTTPS", "FTP"],
    correctIdx: 2,
    explanation: "Le protocole HTTPS (HTTP Secure) utilise le chiffrement TLS/SSL pour sécuriser les communications sur le port 443."
  },
  {
    question: "Quelle commande Docker permet de construire une image à partir d'un Dockerfile ?",
    options: ["docker run", "docker pull", "docker push", "docker build"],
    correctIdx: 3,
    explanation: "La commande 'docker build' permet de compiler un environnement de conteneur d'après les instructions spécifiées dans le fichier Dockerfile."
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    setShowExplanation(true);
    
    const isCorrect = idx === quizQuestions[currentQuestionIdx].correctIdx;
    if (quizScore === null) {
      setQuizScore(isCorrect ? 1 : 0);
    } else {
      setQuizScore(prev => (prev !== null ? prev + (isCorrect ? 1 : 0) : 0));
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    setShowExplanation(false);
    
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      // Quiz finished - triggering complete state handle implicitly via index pointer
      setCurrentQuestionIdx(quizQuestions.length);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setQuizScore(null);
    setIsAnswered(false);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-cyan-700/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-700/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-orange-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <Brain className="w-4 h-4 text-orange-400" />
            02. Arsenal
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Compétences <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Techniques</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm font-sans font-medium">
            Cliquez sur les catégories pour explorer mes compétences spécifiques et testez mes compétences avec un quiz en temps réel.
          </p>
        </div>

        {/* Big Layout: Categories to the left, details to the middle, Quiz to the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Interactive Skills Area (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-6">
            
            {/* Category Selectors (5 columns) */}
            <div className="sm:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-2 block mb-1">Catégories</span>
              {skillCategories.map((category, idx) => {
                const IconComponent = iconMap[category.icon] || ShieldAlert;
                const isSelected = selectedCategory === idx;
                
                return (
                  <button
                    id={`skill-cat-btn-${idx}`}
                    key={idx}
                    onClick={() => setSelectedCategory(idx)}
                    className={`p-4 text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'high-density-card bg-slate-900 border-l-4 border-cyan-400 shadow-lg shadow-cyan-950/40'
                        : 'high-density-card hover:bg-white/[0.02] opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-slate-950 ${isSelected ? category.color : 'text-slate-400'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm tracking-wide font-black uppercase ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {category.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-tight mt-1 line-clamp-2 font-sans font-medium">
                        {category.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Sub-Skills detail list (7 columns) */}
            <div className="sm:col-span-7 high-density-card border-l-4 border-yellow-400 p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-yellow-400 rounded-full" />
                    <span className="text-xs font-mono uppercase text-yellow-400 tracking-widest font-bold yellow-glow">
                      {skillCategories[selectedCategory].title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Points d'impact</span>
                </div>

                <div className="space-y-4">
                  {skillCategories[selectedCategory].skills.map((skill, sIdx) => (
                    <motion.div
                      id={`skill-item-${selectedCategory}-${sIdx}`}
                      key={sIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sIdx * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center text-xs font-mono font-bold mb-1.5 text-slate-200">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                          {skill}
                        </span>
                        <span className="text-yellow-400 tracking-wider">COMPÉTENT</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "90%" }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  Total de compétences évaluées : {skillCategories[selectedCategory].skills.length}
                </span>
                <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 text-[9px] font-mono font-bold uppercase tracking-widest border border-yellow-500/20 shadow-sm">
                  Actif
                </span>
              </div>
            </div>

          </div>

          {/* Interactive Cybersecurity Cyber-Lab Area (4 Columns) */}
          <div className="lg:col-span-4 high-density-card border-r-4 border-orange-500 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden max-w-full">
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 py-1 px-3 bg-orange-500/20 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-widest rounded-bl-xl border-l border-b border-orange-500/30 shadow-md">
              Cyber Lab
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
                  CYBER & CLOUD LAB
                </span>
              </div>
              <p className="text-[11px] font-sans text-slate-400 leading-relaxed">
                Testez vos propres connaissances en cybersécurité et en DevOps dans mon terminal interactif !
              </p>
              
              <div className="w-full h-[1px] bg-slate-800" />

              {/* Quiz Gameplay view */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs relative select-none">
                {currentQuestionIdx < quizQuestions.length ? (
                  <div>
                    {/* Progress */}
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mb-2">
                      <span>QUESTION {currentQuestionIdx + 1}/{quizQuestions.length}</span>
                      <span>Score: {quizScore || 0}</span>
                    </div>

                    {/* Question text */}
                    <p className="text-slate-200 font-bold mb-4 text-sm leading-relaxed">
                      {quizQuestions[currentQuestionIdx].question}
                    </p>

                    {/* Options list */}
                    <div className="space-y-2 mt-3">
                      {quizQuestions[currentQuestionIdx].options.map((opt, oIdx) => {
                        const isChosen = selectedOption === oIdx;
                        const isCorrectOpt = oIdx === quizQuestions[currentQuestionIdx].correctIdx;
                        
                        let optionStyle = "border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60";
                        if (isAnswered) {
                          if (isCorrectOpt) {
                            optionStyle = "border-green-500 bg-green-500/10 text-green-400 font-bold";
                          } else if (isChosen) {
                            optionStyle = "border-red-500 bg-red-500/10 text-red-400 line-through";
                          } else {
                            optionStyle = "border-slate-800/40 text-slate-500 opacity-60";
                          }
                        }

                        return (
                          <button
                            id={`quiz-opt-btn-${oIdx}`}
                            key={oIdx}
                            disabled={isAnswered}
                            onClick={() => handleOptionClick(oIdx)}
                            className={`w-full text-left p-2.5 rounded border text-[11px] font-medium transition-colors cursor-pointer flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && isCorrectOpt && <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showExplanation && (
                      <div className="mt-4 p-3 rounded bg-slate-900 border-l-2 border-cyan-400 text-[10px] text-slate-400 leading-normal animate-fadeIn">
                        {quizQuestions[currentQuestionIdx].explanation}
                      </div>
                    )}

                    {/* Next step button */}
                    {isAnswered && (
                      <button
                        id="quiz-next-btn"
                        onClick={handleNextQuestion}
                        className="w-full text-center mt-4 py-2 bg-orange-500 text-slate-950 rounded font-bold hover:bg-orange-400 transition-all text-[11px] uppercase tracking-wider cursor-pointer"
                      >
                        {currentQuestionIdx < quizQuestions.length - 1 ? "Question Suivante" : "Terminer et Voir le Score"}
                      </button>
                    )}
                  </div>
                ) : (
                  /* Quiz Completed screen */
                  <div className="text-center py-4 space-y-4">
                    <ShieldCheck className="w-12 h-12 text-green-400 mx-auto animate-bounce" />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Cyber Test Terminé !</h4>
                      <p className="text-[11px] text-slate-400 mt-1">Vous avez relevé les défis de Yoan Alane.</p>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
                      <span className="text-xs text-slate-400 block uppercase">Votre score final</span>
                      <span className="text-2xl font-black text-orange-400 tracking-tight font-mono">
                        {quizScore} / {quizQuestions.length}
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-500 italic max-w-xs mx-auto leading-normal">
                      {quizScore === quizQuestions.length ? "Félicitations Secu Elite ! Vous devriez postuler avec Yoan." : "Pas mal ! Explorez le reste des compétences pour vous améliorer."}
                    </p>

                    <button
                      id="quiz-retry-btn"
                      onClick={restartQuiz}
                      className="w-full text-center py-2 border border-slate-800 text-slate-300 rounded font-mono font-bold hover:bg-slate-900 transition-all text-[11px] uppercase tracking-wider cursor-pointer"
                    >
                      Recommencer
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 text-center">
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest font-bold">
                SECURE HANDSHAKE COMPLETED // 2026
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
