import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function Home() {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCalc, setHoveredCalc] = useState(null);

  // Smooth Carousel Clock
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
    <div className="relative w-full min-h-screen text-slate-100 font-sans overflow-x-hidden pb-16 antialiased selection:bg-amber-500/30 selection:text-amber-200 m-0 p-0 top-0 left-0">
      
      {/* GLOBAL RESET & PREMIUM ANIMATION ENGINE */}
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glareMove {
          0% { transform: translateX(-150%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-entrance { animation: fadeInDelayed 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-glare { animation: glareMove 2s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
      `}} />

      {/* STICKY TOP SLIDE INDICATOR PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[4px] bg-slate-950/40 backdrop-blur-xs z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-amber-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* HARDWARE-ACCELERATED BACKGROUND CONTAINER */}
      <div className="fixed inset-0 z-0 h-screen w-screen bg-[#020617] overflow-hidden pointer-events-none m-0 p-0 left-0 top-0">
        {BACKGROUND_IMAGES.map((image, index) => (
          <div
            key={`bg-slide-${index}`}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform-gpu"
            style={{ 
              backgroundImage: `url(${image})`,
              opacity: index === bgIndex ? 0.35 : 0,
              zIndex: index === bgIndex ? 2 : 1,
              transform: 'scale(1)'
            }}
          />
        ))}

        {/* Static Ambient Dark Shaders */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-slate-950/40 to-slate-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90 z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(244,196,48,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(244,196,48,0.01)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
      </div>

      {/* MAIN CONTENT SCAFFOLD */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-12 md:pt-16 space-y-12 animate-entrance">
        
        {/* HERO HEADER SECTION */}
        <header className="w-full text-center flex flex-col items-center max-w-3xl mx-auto space-y-8">
          
          {/* Logo Container */}
          <div className="relative group animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-amber-500/30 rounded-full blur-3xl group-hover:from-blue-600/50 group-hover:to-amber-500/40 transition-all duration-700" />
            <div className="relative flex items-center justify-center w-44 h-44 bg-gradient-to-b from-blue-950 via-slate-900 to-sky-950 p-2 rounded-full border-2 border-amber-400/40 shadow-[0_0_50px_rgba(30,58,138,0.4)] backdrop-blur-md overflow-hidden group-hover:border-amber-400 transition-colors duration-300">
              <img 
                src={triserviceLogo} 
                alt="Triservice Logo" 
                className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Main Glowing Header Group */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 drop-shadow-[0_0_25px_rgba(245,158,11,0.85)] flex items-center justify-center gap-3">
              TRAVEL REGULATIONS
              <span className="inline-flex items-center px-2 py-0.5 rounded border border-amber-400/30 text-[10px] sm:text-xs font-black bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 uppercase tracking-wider shadow-[0_2px_12px_rgba(245,158,11,0.3)]">
                BETA
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-sky-300 font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-amber-200 to-sky-400">
              Travel Regulations — Triservices
            </p>
          </div>
        </header>

        {/* PRIMARY CALCULATOR SECTION (SIDE-BY-SIDE LONG CONFIGURATION) */}
        <section className="w-full space-y-4">
          
          {/* Side-by-Side Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {[
              { label: 'LTC Calculator', page: '/calc-ltc', glow: 'rgba(245,158,11,0.25)' },
              { label: 'Permanent Duty Calculator', page: '/calc-permanent', glow: 'rgba(56,189,248,0.25)' },
              { label: 'Temporary Duty Calculator', page: '/calc-temporary', glow: 'rgba(129,140,248,0.25)' }
            ].map((btn, idx) => {
              const isCurrentHovered = hoveredCalc === idx;
              return (
                <button 
                  key={btn.page}
                  onClick={() => navigate(btn.page)}
                  onMouseEnter={() => setHoveredCalc(idx)}
                  onMouseLeave={() => setHoveredCalc(null)}
                  className="group relative w-full flex flex-col justify-between items-start py-8 px-6 rounded-2xl transition-all duration-300 transform-gpu overflow-hidden border-2 border-blue-800/80 hover:border-amber-400 backdrop-blur-lg shadow-[0_12px_35px_rgba(2,6,23,0.7)] min-h-[160px] text-left hover:-translate-y-1.5"
                  style={{
                    background: isCurrentHovered 
                      ? 'linear-gradient(135deg, #091540 0%, #161245 100%)' 
                      : 'linear-gradient(135deg, #050b24 0%, #08061a 100%)',
                    boxShadow: isCurrentHovered ? `0 15px 40px ${btn.glow}` : 'none'
                  }}
                >
                  {/* Liquid Glare Line effect */}
                  {isCurrentHovered && (
                    <div className="absolute top-0 left-0 w-[50%] h-[200%] bg-white/10 blur-md pointer-events-none animate-glare" />
                  )}

                  {/* Status Indicator */}
                  <div className="w-full flex justify-between items-center">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 shadow-md" />
                    </span>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Text content split */}
                  <div className="mt-6 space-y-1 z-10 w-full">
                    <span className="block text-lg font-black uppercase tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors leading-tight">
                      {btn.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECTION CATEGORY MATRIX */}
        <section className="w-full space-y-4">
          <div className="text-center sm:text-left pl-1">
            <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase">Personnels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                id: 0,
                page: '/pbor-td',
                title: 'PBOR',
                desc: 'Sailors & Personnel Below Officer Rank Guidelines',
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              },
              {
                id: 1,
                page: '/officers-td',
                title: 'Officers',
                desc: 'Commissioned Officer Ranks Statutory Regulations',
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              },
              {
                id: 2,
                page: '/civilians-td',
                title: 'Defence Civilian',
                desc: 'Civilian Cadres, Specialized Staff & Attached Units',
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2V16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              }
            ].map((card) => {
              const isHovered = hoveredCard === card.id;
              return (
                <div 
                  key={card.page}
                  onClick={() => navigate(card.page)}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative p-6 rounded-xl border border-blue-900/60 transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 shadow-xl flex flex-col justify-between backdrop-blur-xl overflow-hidden min-h-[140px]"
                  style={{
                    background: isHovered 
                      ? 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)' 
                      : 'linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.85) 100%)',
                    borderColor: isHovered ? '#fbbf24' : 'rgba(30,58,138,0.6)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.02] to-transparent group-hover:from-amber-500/[0.04] transition-all duration-500" />
                  
                  <div className="flex items-start gap-4 z-10">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-blue-950 border border-blue-800 group-hover:border-amber-400/40 shadow-inner text-amber-400 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        {card.icon}
                      </svg>
                    </div>
                    <div className="text-left space-y-1">
                      <div className="text-base font-black tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors uppercase">{card.title}</div>
                      <p className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-normal">{card.desc}</p>
                    </div>
                  </div>

                  <div className="w-full flex justify-end items-center pt-2 text-slate-500 group-hover:text-amber-400 transition-colors transform group-hover:translate-x-1 duration-300 z-10">
                    <span className="text-[10px] font-black tracking-widest uppercase mr-1 opacity-0 group-hover:opacity-100 transition-opacity">View Documentation</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PORTAL LINKS STRIP SECTION */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row items-stretch border border-blue-900/50 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-slate-950 via-blue-950/20 to-slate-950 backdrop-blur-xl">
            
            {/* Axis Label */}
            <div className="bg-blue-950/40 border-b border-blue-900 lg:border-b-0 lg:border-r border-blue-900/50 flex items-center justify-center px-6 py-4 lg:py-0 min-w-[160px] shrink-0">
              <span className="text-amber-400/90 font-black text-[10px] tracking-widest uppercase border-b border-amber-500/30 pb-0.5">
                Official Portals
              </span>
            </div>
            
            {/* Reordered Array Grouping Grid */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-around p-4 gap-4 text-center">
              
              {/* 1. Indian Army */}
              <a href="https://indianarmy.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 group-hover:border-blue-700 shadow-md mb-2 p-2">
                  <img src={armyLogo} alt="Army Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">Indian Army</span>
              </a>

              {/* 2. Indian Navy */}
              <a href="https://www.indiannavy.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-950 to-slate-950 border border-blue-900 group-hover:border-amber-400/40 shadow-md mb-2 p-2">
                  <img src={navyLogo} alt="Navy Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-300 group-hover:text-amber-400 transition-colors tracking-wide">Indian Navy</span>
              </a>

              {/* 3. Air Force */}
              <a href="https://indianairforce.nic.in" target="_blank" rel="noreferrer" className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 group-hover:border-blue-700 shadow-md mb-2 p-2">
                  <img src={iafLogo} alt="IAF Web" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-200 transition-colors tracking-wide">Air Force</span>
              </a>

              {/* 4. Calendar Link */}
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