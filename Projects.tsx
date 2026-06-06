/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { 
  Calculator, ShoppingBag, Music, Play, Pause, 
  SkipForward, SkipBack, Trash2, Plus, Minus, 
  Code, Sparkles, Check, CheckCircle, Smartphone, ExternalLink 
} from 'lucide-react';

/* ----------------------------------------------------
   WIDGET 1: CALCULATOR SIMULATOR (PYTHON BACKED VIBE)
   ---------------------------------------------------- */
function CalculatorWidget() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Python 3.10.2 (default, Jun 05 2026)",
    "Initializing math calculator package...",
    "Ready for calculation."
  ]);

  const addLog = (log: string) => {
    setTerminalLogs(prev => [...prev.slice(-3), log]);
  };

  const handleNum = (num: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(num);
    } else {
      setDisplay(prev => prev + num);
    }
  };

  const handleOp = (op: string) => {
    setExpression(prev => display + " " + op + " ");
    setDisplay('0');
    addLog(`>>> Register op: ${op}`);
  };

  const calculate = () => {
    const expr = expression + display;
    if (!expr) return;
    
    try {
      // Safe basic math evaluator
      // eslint-disable-next-line no-eval
      const result = eval(expr.replace(/x/g, '*'));
      setDisplay(String(result));
      setExpression('');
      addLog(`>>> python3 -c "print(${expr.replace(/x/g, '*')})"\n${result}`);
    } catch (e) {
      setDisplay('Error');
      setExpression('');
      addLog(`>>> SyntaxError: Invalid expression "${expr}"`);
    }
  };

  const clear = () => {
    setDisplay('0');
    setExpression('');
    addLog(">>> Terminal wiped. State reset.");
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900 border-2 border-cyan-400/30 rounded-2xl p-4 shadow-xl font-mono relative overflow-hidden">
      {/* Upper header */}
      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-3 border-b border-slate-800 pb-2">
        <span className="flex items-center gap-1.5 font-bold">
          <Calculator className="w-3.5 h-3.5 text-cyan-400" /> python_calc.py
        </span>
        <span className="animate-pulse text-cyan-400 font-bold">● LIVE INTERPRETER</span>
      </div>

      {/* Screen area representing calculator */}
      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1 mb-4">
        <div className="text-[10px] text-slate-500 text-right h-4 overflow-hidden truncate">
          {expression}
        </div>
        <div className="text-2xl font-black text-cyan-400 text-right font-mono truncate">
          {display}
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-4 gap-2 text-xs">
        <button onClick={clear} className="col-span-2 p-3 bg-red-950/40 hover:bg-red-950/60 border border-red-500/20 text-red-400 rounded-lg font-bold cursor-pointer">AC</button>
        <button onClick={() => handleOp('/')} className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-cyan-400 rounded-lg cursor-pointer">/</button>
        <button onClick={() => handleOp('x')} className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-cyan-400 rounded-lg cursor-pointer">x</button>

        <button onClick={() => handleNum('7')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">7</button>
        <button onClick={() => handleNum('8')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">8</button>
        <button onClick={() => handleNum('9')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">9</button>
        <button onClick={() => handleOp('-')} className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-cyan-400 rounded-lg cursor-pointer">-</button>

        <button onClick={() => handleNum('4')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">4</button>
        <button onClick={() => handleNum('5')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">5</button>
        <button onClick={() => handleNum('6')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">6</button>
        <button onClick={() => handleOp('+')} className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-cyan-400 rounded-lg cursor-pointer">+</button>

        <button onClick={() => handleNum('1')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">1</button>
        <button onClick={() => handleNum('2')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">2</button>
        <button onClick={() => handleNum('3')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">3</button>
        <button onClick={calculate} className="row-span-2 p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg font-black text-center flex items-center justify-center cursor-pointer">=</button>

        <button onClick={() => handleNum('0')} className="col-span-2 p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">0</button>
        <button onClick={() => handleNum('.')} className="p-3 bg-slate-950/40 hover:bg-slate-800 text-slate-200 rounded-lg border border-slate-800 cursor-pointer">.</button>
      </div>

      {/* Executed Python code visual logs */}
      <div className="mt-4 p-2 bg-slate-950 rounded-lg border border-slate-800/80 font-mono text-[9px] text-slate-500 flex flex-col gap-0.5 max-h-[70px] overflow-y-auto">
        {terminalLogs.map((log, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-tight">{log}</div>
        ))}
      </div>
    </div>
  );
}


/* ----------------------------------------------------
   WIDGET 2: SITE E-COMMERCE CLOTHES STORE (HTML/CSS/JS VIBE)
   ---------------------------------------------------- */
interface ClothesProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string;
}

const productsData: ClothesProduct[] = [
  { id: "t1", name: "Cyberpunk Oversized Tee", price: 25, category: "T-Shirt", color: "bg-cyan-900/30 text-cyan-400 border-cyan-500/20" },
  { id: "h1", name: "DevOps Orchestration Hoodie", price: 45, category: "Hoodie", color: "bg-orange-900/30 text-orange-400 border-orange-500/20" },
  { id: "c1", name: "Anime Vaporwave Cap", price: 18, category: "Cap", color: "bg-yellow-900/30 text-yellow-500 border-yellow-500/20" }
];

function ECommerceWidget() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [ordered, setOrdered] = useState(false);

  const addToCart = (id: string) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id: string) => {
    if (!cart[id]) return;
    setCart(prev => {
      const copy = { ...prev };
      if (copy[id] === 1) {
        delete copy[id];
      } else {
        copy[id] -= 1;
      }
      return copy;
    });
  };

  const getCartTotal = (): number => {
    const entries = Object.entries(cart) as [string, number][];
    return entries.reduce((total: number, [id, qty]) => {
      const prod = productsData.find(p => p.id === id);
      return total + (prod ? prod.price * qty : 0);
    }, 0);
  };

  const getCartCount = (): number => {
    const values = Object.values(cart) as number[];
    return values.reduce((sum: number, qty: number) => sum + qty, 0);
  };

  const checkout = () => {
    if (getCartCount() === 0) return;
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      setCart({});
    }, 3500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900 border-2 border-orange-400/30 rounded-2xl p-4 shadow-xl font-sans relative overflow-hidden">
      {/* Card Header */}
      <div className="flex justify-between items-center text-xs text-slate-400 mb-4 border-b border-slate-800 pb-2">
        <span className="flex items-center gap-1.5 font-bold font-mono text-[10px] uppercase text-orange-400">
          <ShoppingBag className="w-4 h-4" /> shop.animecyber.com
        </span>
        <div className="flex items-center space-x-1.5 font-mono text-[10px] bg-slate-950 py-1 px-2.5 rounded-full border border-orange-500/20 font-bold">
          <span>PANIER ({getCartCount()})</span>
          <span className="text-orange-400 font-extrabold">{getCartTotal()}$</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!ordered ? (
          <motion.div key="store" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {/* Products grid */}
            <div className="space-y-2.5">
              {productsData.map((prod) => {
                const count = cart[prod.id] || 0;
                return (
                  <div key={prod.id} className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-lg border text-xs font-mono font-bold uppercase tracking-wider ${prod.color}`}>
                        {prod.category}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-100">{prod.name}</h4>
                        <span className="text-xs font-mono text-orange-400 font-extrabold">{prod.price}$</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {count > 0 && (
                        <div className="flex items-center space-x-1 bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                          <button onClick={() => removeFromCart(prod.id)} className="p-1 hover:text-red-400 text-slate-400 cursor-pointer">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[11px] font-mono font-bold text-white px-1.5">{count}</span>
                        </div>
                      )}
                      
                      <button
                        onClick={() => addToCart(prod.id)}
                        className="px-2.5 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-mono font-bold text-[10px] tracking-wide uppercase transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" /> Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart summary and CTA */}
            {getCartCount() > 0 ? (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="border-t border-slate-800 pt-3 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400 uppercase font-bold">Total commande:</span>
                  <span className="text-white font-extrabold text-sm">{getCartTotal()}$</span>
                </div>
                <button
                  onClick={checkout}
                  className="w-full text-center py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:brightness-115 shadow-lg shadow-orange-500/10 cursor-pointer"
                >
                  Commander et Payer
                </button>
              </motion.div>
            ) : (
              <div className="text-center py-4 bg-slate-950/40 rounded-xl border border-dashed border-slate-800 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                Votre panier d'achat est vide
              </div>
            )}
          </motion.div>
        ) : (
          /* Order success animation screen */
          <motion.div key="checkout-success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Merci pour votre commande !</h4>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto leading-normal">
                La commande a été transmise au simulateur de Yoan. Elle sera expédiée fictivement à Douala !
              </p>
            </div>
            <div className="inline-block p-2 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              STATUS: PREPARING_VECTORS // CRITICAL_SHIPPED
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 pt-2 border-t border-slate-800/60 text-center font-mono text-[9px] text-slate-500 uppercase">
        ⚡ Construit en HTML5, CSS3, JS & TailwindCSS
      </div>
    </div>
  );
}


/* ----------------------------------------------------
   WIDGET 3: SIMULATED PYTHON MUSIC PLAYER
   ---------------------------------------------------- */
interface AudioTrack {
  id: string;
  title: string;
  genre: string;
  duration: string;
  path: string;
}

const trackList: AudioTrack[] = [
  { id: "lk1", title: "Yoan's Cloud DevOps Beat", genre: "Lo-Fi Focus", duration: "2:45", path: "" },
  { id: "lk2", title: "Monochrome Anime Chords", genre: "Chop-Hop Chill", duration: "3:12", path: "" },
  { id: "lk3", title: "Cyberpunk Hackers Lab", genre: "Synthwave Synth", duration: "2:20", path: "" }
];

function MusicPlayerWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [progress, setProgress] = useState(35);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      const pulseProgress = () => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Next track automatically loop
            setCurrentTrackIdx((prevIdx) => (prevIdx + 1) % trackList.length);
            return 0;
          }
          return prev + 0.4;
        });
        animationRef.current = requestAnimationFrame(pulseProgress);
      };
      animationRef.current = requestAnimationFrame(pulseProgress);
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setProgress(0);
    setCurrentTrackIdx((prev) => (prev + 1) % trackList.length);
  };

  const prevTrack = () => {
    setProgress(0);
    setCurrentTrackIdx((prev) => (prev - 1 + trackList.length) % trackList.length);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900 border-2 border-purple-500/30 rounded-2xl p-4 shadow-xl font-mono relative overflow-hidden">
      {/* Card Header */}
      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-4 border-b border-slate-800 pb-2">
        <span className="flex items-center gap-1.5 font-bold text-purple-400">
          <Music className="w-3.5 h-3.5" /> py_audio_core.so
        </span>
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isPlaying ? 'bg-purple-500/20 text-purple-400 animate-pulse' : 'bg-slate-950 text-slate-500'}`}>
          {isPlaying ? 'PLAYING' : 'IDLE'}
        </span>
      </div>

      {/* Album simulation or focus art */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4 text-center relative overflow-hidden">
        {/* Dynamic visual wave lines that move when playing */}
        <div className="h-8 flex items-center justify-center space-x-1.5 mb-2.5">
          {[...Array(12)].map((_, idx) => (
            <div
              key={idx}
              className={`w-1 rounded-full bg-gradient-to-t from-purple-500 to-pink-500 transition-all duration-300 ${
                isPlaying 
                ? idx % 2 === 0 ? 'animate-bounce h-7' : 'animate-pulse h-4' 
                : 'h-2'
              }`}
              style={{
                animationDuration: isPlaying ? `${0.5 + (idx % 3) * 0.15}s` : '0s'
              }}
            />
          ))}
        </div>

        <div>
          <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-purple-400 font-bold uppercase tracking-wider">
            {trackList[currentTrackIdx].genre}
          </span>
          <h4 className="text-xs font-bold text-slate-200 mt-2 truncate max-w-full">
            {trackList[currentTrackIdx].title}
          </h4>
          <span className="text-[10px] text-slate-500 block mt-1">
            Duration: {trackList[currentTrackIdx].duration}
          </span>
        </div>
      </div>

      {/* Playback progress bar */}
      <div className="space-y-1.5 mb-4">
        <div className="w-full bg-slate-950 rounded-full h-1 relative overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[8px] text-slate-500">
          <span>{Math.floor((progress / 100) * 3)}m : {Math.floor(((progress / 100) * 3) % 1 * 60).toString().padStart(2, '0')}s</span>
          <span>{trackList[currentTrackIdx].duration}</span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex justify-center items-center space-x-5">
        <button onClick={prevTrack} className="p-2 bg-slate-950 border border-slate-800 hover:text-purple-400 text-slate-400 rounded-lg cursor-pointer transition-colors">
          <SkipBack className="w-4 h-4" />
        </button>

        <button
          onClick={togglePlay}
          className="p-3 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-purple-500/20 active:scale-95 transition-all cursor-pointer"
        >
          {isPlaying ? <Pause className="w-5 h-5 shrink-0" /> : <Play className="w-5 h-5 ml-0.5 shrink-0" />}
        </button>

        <button onClick={nextTrack} className="p-2 bg-slate-950 border border-slate-800 hover:text-purple-400 text-slate-400 rounded-lg cursor-pointer transition-colors">
          <SkipForward className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 pt-2 border-t border-slate-800/60 font-mono text-[9px] text-slate-500 uppercase text-center leading-normal">
        🎵 Pygame Audio Stream Engine Sim v2
      </div>
    </div>
  );
}



/* ----------------------------------------------------
   MAIN PROJECTS LAYOUT CONTAINER
   ---------------------------------------------------- */
export default function Projects() {
  const [activePreviewId, setActivePreviewId] = useState<string>("calc");

  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <Code className="w-4 h-4" />
            03. Réalisations
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Mes <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projets Réels</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm font-sans font-medium">
            Découvrez des simulateurs interactifs en temps réel conçus pour donner vie à mes projets d'applications et de sites de e-commerce.
          </p>
        </div>

        {/* Display Bento grid for project cards + active interactive widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Area: Project details list with triggering selection button */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-2 block mb-1">
              Sélectionnez un projet à utiliser
            </span>

            {projects.map((proj) => {
              const isActive = activePreviewId === proj.id;
              
              // High Density dynamic styles
              const getProjectBorder = (id: string) => {
                if (id === 'calc') return isActive ? 'border-r-4 border-blue-500' : 'border-r-2 border-slate-800 hover:border-r-4 hover:border-blue-500/50';
                if (id === 'ecom') return isActive ? 'border-r-4 border-teal-400' : 'border-r-2 border-slate-800 hover:border-r-4 hover:border-teal-400/50';
                return isActive ? 'border-r-4 border-orange-500' : 'border-r-2 border-slate-800 hover:border-r-4 hover:border-orange-500/50';
              };

              const getAvatarConfig = (id: string) => {
                if (id === 'calc') return { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20', label: 'PY', tagBg: 'bg-blue-600 text-white' };
                if (id === 'ecom') return { bg: 'bg-teal-400/10 text-teal-400 border-teal-400/20', label: 'WEB', tagBg: 'bg-teal-400 text-slate-950' };
                return { bg: 'bg-orange-500/10 text-orange-500 border-orange-500/20', label: 'PY', tagBg: 'bg-orange-500 text-slate-950' };
              };

              const avatar = getAvatarConfig(proj.id);
              
              return (
                <div
                  id={`proj-card-div-${proj.id}`}
                  key={proj.id}
                  onClick={() => setActivePreviewId(proj.id)}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 relative group select-none flex gap-5 items-center high-density-card ${getProjectBorder(proj.id)} ${
                    isActive ? 'bg-slate-900/80 shadow-xl shadow-cyan-950/20' : 'hover:bg-white/5'
                  }`}
                >
                  {/* Dense technical avatar from layout */}
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-sm border shrink-0 font-mono ${avatar.bg}`}>
                    {avatar.label}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-lg text-white uppercase tracking-tight truncate">
                        {proj.title}
                      </h4>
                      <span className={`text-[9px] font-bold uppercase py-0.5 px-2 rounded tracking-widest shrink-0 ${avatar.tagBg}`}>
                        {proj.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal font-sans mt-1 line-clamp-2">
                      {proj.description}
                    </p>

                    {/* Tools sub-list */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                      {proj.techs.slice(0, 4).map((tch, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono text-slate-400 px-1.5 py-0.5 bg-slate-950/80 rounded border border-slate-800/60 uppercase"
                        >
                          {tch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Area: Large visual live preview container representing chosen project */}
          <div className="lg:col-span-5 high-density-card p-6 flex flex-col justify-center min-h-[460px] relative shadow-2xl">
            {/* Background design accents */}
            <div className="absolute top-4 left-4 flex space-x-1.5 opacity-50 z-20">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="absolute top-4 right-6 font-mono text-[9px] text-slate-500 uppercase tracking-widest select-none bg-slate-900 border border-slate-800 py-1 px-2.5 rounded-full z-20">
              Output Simulation
            </div>

            {/* Simulated environment */}
            <div className="w-full flex justify-center items-center py-6">
              <AnimatePresence mode="wait">
                {activePreviewId === 'calc' && (
                  <motion.div
                    key="calc-widget"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full"
                  >
                    <CalculatorWidget />
                  </motion.div>
                )}

                {activePreviewId === 'ecom' && (
                  <motion.div
                    key="ecom-widget"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full"
                  >
                    <ECommerceWidget />
                  </motion.div>
                )}

                {activePreviewId === 'music' && (
                  <motion.div
                    key="music-widget"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full"
                  >
                    <MusicPlayerWidget />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-center text-[10px] font-mono text-slate-500 px-6 font-semibold leading-normal">
              Utilisez les contrôles interactifs ci-dessus pour expérimenter les fonctionnalités opérationnelles comme si vous y étiez !
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
