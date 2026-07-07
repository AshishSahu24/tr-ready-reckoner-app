import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';

// Text Regulation Page Modules
import OfficersTD from './components/OfficerTD';
import PborTD from './components/PborTD';
import CiviliansTD from './components/CiviliansTD';
import OfficerLTC from './components/OfficerLTC';
import PborLTC from './components/PborLTC';
import CivilianLTC from './components/CiviliansLTC';
import OfficerPMT from './components/OfficerPMT';
import PborPMT from './components/PborPMT';
import CivilianPermanent from './components/CiviliansPMT';

// Financial Reckoner Calculators
import LTCAllowanceCalc from './components/LTCAllowanceCalculator'; 
import PermanentDutyCalc from './components/PermanantDutyMoveCalculator';
import TemporaryDutyCalc from './components/TemporaryDutyCalculator';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col antialiased">
      
      {/* Mobile Responsive Global Navbar */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* CORE RENDER VIEWS PANEL - MAXIMIZED FOR WIDESCREEN REAL ESTATE */}
      <main className="w-full max-w-[1600px] mx-auto p-4 md:p-8 flex-1">
        
        {/* Dynamic Context Router Engine */}
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}

        {/* Personnel Leave Travel Concession Branches */}
        {currentPage === 'pbor-ltc' && <PborLTC />}
        {currentPage === 'officer-ltc' && <OfficerLTC />}
        {currentPage === 'civilian-ltc' && <CivilianLTC />}

        {/* Personnel Permanent Duty Change Matrix */}
        {currentPage === 'pbor-permanent' && <PborPMT />}
        {currentPage === 'officer-permanent' && <OfficerPMT />}
        {currentPage === 'civilian-permanent' && <CivilianPermanent />}

        {/* Personnel Temporary Duty Claim Modules */}
        {currentPage === 'pbor-td' && <PborTD />}
        {currentPage === 'officers-td' && <OfficersTD />}
        {currentPage === 'civilians-td' && <CiviliansTD />}

        {/* Unified Interactive Calculators */}
        {currentPage === 'calc-ltc' && <LTCAllowanceCalc />}
        {currentPage === 'calc-permanent' && <PermanentDutyCalc />}
        {currentPage === 'calc-temporary' && <TemporaryDutyCalc />}
      </main>

      {/* COMPREHENSIVE NATIONAL GOVERNMENT PORTAL FOOTER BANNER */}
      <footer className="relative z-10 bg-slate-950 text-slate-300 py-8 border-t border-slate-900 shadow-inner">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8 flex flex-col items-center text-center space-y-5">

          {/* Secure System Update Variable Line */}
          <div className="text-xs sm:text-sm text-slate-500 font-mono tracking-wide font-semibold">
            Page last updated on : <span className="text-slate-400 font-bold">12/06/2026</span>
          </div>

          {/* Development Unit Credit Box Badge */}
          <div className="pt-3 border-t border-slate-900 w-full max-w-xl flex justify-center">
            <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-slate-800/60 px-5 py-2 rounded-2xl text-slate-400 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Designed &amp; Developed by : <span className="text-amber-400 font-black tracking-wider uppercase">26TH ITMC</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}