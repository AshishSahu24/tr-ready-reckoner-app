import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col antialiased">
        
        {/* Mobile Responsive Global Navbar */}
        <Navbar />

        {/* CORE RENDER VIEWS PANEL - MAXIMIZED FOR WIDESCREEN REAL ESTATE */}
        <main className="w-full max-w-[1600px] mx-auto p-4 md:p-8 flex-1">
          <Routes>
            {/* Dynamic Context Router Engine */}
            <Route path="/" element={<Home />} />

            {/* Personnel Leave Travel Concession Branches */}
            <Route path="/pbor-ltc" element={<PborLTC />} />
            <Route path="/officer-ltc" element={<OfficerLTC />} />
            <Route path="/civilian-ltc" element={<CivilianLTC />} />

            {/* Personnel Permanent Duty Change Matrix */}
            <Route path="/pbor-permanent" element={<PborPMT />} />
            <Route path="/officer-permanent" element={<OfficerPMT />} />
            <Route path="/civilian-permanent" element={<CivilianPermanent />} />

            {/* Personnel Temporary Duty Claim Modules */}
            <Route path="/pbor-td" element={<PborTD />} />
            <Route path="/officers-td" element={<OfficersTD />} />
            <Route path="/civilians-td" element={<CiviliansTD />} />

            {/* Unified Interactive Calculators */}
            <Route path="/calc-ltc" element={<LTCAllowanceCalc />} />
            <Route path="/calc-permanent" element={<PermanentDutyCalc />} />
            <Route path="/calc-temporary" element={<TemporaryDutyCalc />} />
          </Routes>
        </main>

        {/* COMPREHENSIVE NATIONAL GOVERNMENT PORTAL FOOTER BANNER */}
        <footer className="relative z-10 bg-slate-950 text-slate-300 py-8 border-t border-slate-900 shadow-inner">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8 flex flex-col items-center text-center space-y-5">

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
    </Router>
  );
}