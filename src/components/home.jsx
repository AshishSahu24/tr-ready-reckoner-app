import React, { useState, useEffect } from 'react';

// 1. Core Asset Imports
import bg1 from '../assets/in_1.jpg';
import bg2 from '../assets/iaf_2.jpg';
import bg3 from '../assets/ia_3.jpg';
import bg4 from '../assets/ia_2.jpg';   
import bg5 from '../assets/in_2.jpg';   
import bg6 from '../assets/iaf_1.jpg';  

import triserviceLogo from '../assets/triservice.png';
import navyLogo from '../assets/indiannavylogo.png';
import armyLogo from '../assets/armylogo.png';
import iafLogo from '../assets/iaf_logo.png';

const BACKGROUND_IMAGES = [bg1, bg2, bg3, bg4, bg5, bg6];

export default function Home({ setCurrentPage }) {
  const [bgIndex, setBgIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth Carousel Clock (Rotates index smoothly every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Viewport tracking logic for scroll progress meter
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const scrolledPercentage = (window.scrollY / totalScrollable) * 100;
        setScrollProgress(scrolledPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-slate-100 font-sans overflow-x-hidden pb-12 antialiased selection:bg-amber-500/30 selection:text-amber-200 m-0 p-0 top-0 left-0">
      
      {/* GLOBAL RESET ENGINE TO FORCE KILL PARENT WHITE LEAKAGE BORDERS */}
      <style dangerouslySetInnerHTML={{__html: `
        html, body, #root { 
          margin: 0 !important; 
          padding: 0 !important; 
          border: 0 !important;
          outline: 0 !important;
          background-color: #020617 !important;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }
        @keyframes fadeInDelayed {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-entrance { animation: fadeInDelayed 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />

      {/* STICKY TOP SLIDE INDICATOR PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-slate-950/40 backdrop-blur-xs z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-amber-400 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(56,189,248,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* HARDWARE-ACCELERATED TRANSITION CONTAINER STACK */}
      <div className="fixed inset-0 z-0 h-screen w-screen bg-[#020617] overflow-hidden pointer-events-none m-0 p-0 left-0 top-0">
        {BACKGROUND_IMAGES.map((image, index) => (
          <div
            key={`bg-slide-${index}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform-gpu`}
            style={{ 
              backgroundImage: `url(${image})`,
              opacity: index === bgIndex ? 1 : 0,
              zIndex: index === bgIndex ? 2 : 1,
              transform: 'scale(1)' // Hardlocks layout scaling properties
            }}
          />
        ))}

        {/* Unified Static Shaders (Placed perfectly over the active layers) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-slate-950/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/10 to-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,196,48,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(244,196,48,0.01)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
      </div>

      {/* MAIN LAYOUT CONTENT SCAFFOLD */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-12 md:pt-16 space-y-8 animate-entrance">
        
        {/* HERO HEADER BLOCK */}
        <header className="w-full text-center flex flex-col items-center max-w-3xl mx-auto space-y-6">
          
          {/* Logo Bounding Container */}
          <div className="relative group animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-amber-500/20 rounded-full blur-2xl group-hover:from-blue-600/40 group-hover:to-amber-500/30 transition-all duration-700" />
            <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-b from-blue-950 via-slate-900 to-sky-950 p-2 rounded-full border border-amber-400/40 shadow-[0_0_40px_rgba(30,58,138,0.3)] backdrop-blur-md overflow-hidden group-hover:border-amber-400 transition-colors duration-300">
              <img 
                src={triserviceLogo} 
                alt="Triservice Logo" 
                className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Typography Grid Group */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-slate-300 drop-shadow-md flex items-center justify-center gap-3">
              TRAVEL REGULATIONS
              <span className="inline-flex items-center px-2 py-0.5 rounded border border-amber-400/30 text-[10px] sm:text-xs font-black bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 uppercase tracking-wider shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
                BETA
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-sky-300 font-semibold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-amber-200/80 to-sky-400">
              Travel Regulations — Triservice
            </p>
          </div>

          {/* PRIMARY NAV CALCULATOR ACTIONS GRID */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'LTC Calculator', page: 'calc-ltc', dotColor: 'bg-amber-400' },
              { label: 'Permanent Duty Calc', page: 'calc-permanent', dotColor: 'bg-sky-400' },
              { label: 'Temporary Duty Calc', page: 'calc-temporary', dotColor: 'bg-indigo-400' }
            ].map((btn) => (
              <button 
                key={btn.page}
                onClick={() => setCurrentPage(btn.page)}
                className="group flex items-center justify-center gap-3 p-4 bg-blue-950/60 hover:bg-blue-900/50 border border-blue-800/60 hover:border-amber-400/60 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                <span className={`w-2 h-2 shrink-0 rounded-full ${btn.dotColor} group-hover:animate-ping`} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-white text-center">{btn.label}</span>
              </button>
            ))}
          </div>
        </header>

        {/* SECTION CATEGORY MATRIX */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              page: 'pbor-td',
              title: 'PBOR',
              desc: 'Sailors & Personnel Below Officer Rank',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              )
            },
            {
              page: 'officers-td',
              title: 'Officers',
              desc: 'Commissioned Naval Officers',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              )
            },
            {
              page: 'civilians-td',
              title: 'Defence Civilian',
              desc: 'Civilian Cadres & Staff',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2V16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              )
            }
          ].map((card) => (
            <div 
              key={card.page}
              onClick={() => setCurrentPage(card.page)}
              className="group relative bg-gradient-to-b from-blue-950/40 to-slate-950/90 p-5 rounded-xl border border-blue-900/60 hover:border-amber-400/60 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 shadow-xl flex items-center justify-between backdrop-blur-xl overflow-hidden min-h-[96px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.03] to-transparent group-hover:from-amber-500/[0.04] transition-all duration-500" />
              <div className="flex items-center gap-4 z-10 pr-2">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-950 border border-blue-800 group-hover:border-amber-400/40 shadow-inner text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    {card.icon}
                  </svg>
                </div>
                <div className="text-left space-y-0.5">
                  <div className="text-base font-black tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors uppercase">{card.title}</div>
                  <p className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors leading-normal">{card.desc}</p>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-amber-400 transition-colors transform group-hover:translate-x-1 duration-300 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </section>

        {/* PORTAL LINKS STRIP SECTION */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row items-stretch border border-blue-900/50 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-slate-950 via-blue-950/20 to-slate-950 backdrop-blur-xl">
            
            {/* Unified Axis Heading Label */}
            <div className="bg-blue-950/40 border-b border-blue-900 lg:border-b-0 lg:border-r border-blue-900/50 flex items-center justify-center px-6 py-4 lg:py-0 min-w-[160px] shrink-0">
              <span className="text-amber-400/90 font-black text-[10px] tracking-widest uppercase border-b border-amber-500/30 pb-0.5">
                Official Portals
              </span>
            </div>
            
            {/* Interactive Grid Cell Array */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-around p-4 gap-4 text-center">
              
              <a href="https://www.indiannavy.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-950 to-slate-950 border border-blue-900 group-hover:border-amber-400/40 shadow-md mb-2 p-2">
                  <img src={navyLogo} alt="Navy Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-amber-400 transition-colors tracking-wide">Indian Navy</span>
              </a>

              <a href="https://indianarmy.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 group-hover:border-blue-700 shadow-md mb-2 p-2">
                  <img src={armyLogo} alt="Army Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">Indian Army</span>
              </a>

              <a href="https://indianairforce.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 group-hover:border-blue-700 shadow-md mb-2 p-2">
                  <img src={iafLogo} alt="IAF Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">Air Force</span>
              </a>

              <a href="https://www.joinindiannavy.gov.in/images/OFFICIAL_IN_CALENDAR_2026_DMPR.pdf" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-950 to-slate-950 border border-blue-900 group-hover:border-amber-400/40 shadow-md mb-2 p-2 text-slate-400 group-hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-amber-400 transition-colors tracking-wide">IN Calendar '26</span>
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}