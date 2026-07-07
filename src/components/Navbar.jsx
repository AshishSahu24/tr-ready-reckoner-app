import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import triserviceLogo from '../assets/triservice.png';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  
  const searchContainerRef = useRef(null);
  const navRef = useRef(null);
  const isTouch = useRef(false);
  const navigate = useNavigate();

  // Unified lowercase page routing mapping database
  const searchDatabase = [
    { heading: 'PBOR - LTC', page: '/pbor-ltc' },
    { heading: 'PBOR - Permanent Duty', page: '/pbor-permanent' },
    { heading: 'PBOR - Temporary Duty', page: '/pbor-td' },
    { heading: 'Officers - LTC', page: '/officer-ltc' },
    { heading: 'Officers - Permanent Duty', page: '/officer-permanent' },
    { heading: 'Officers - Temporary Duty', page: '/officers-td' },
    { heading: 'Defence Civilians - LTC', page: '/civilian-ltc' },
    { heading: 'Defence Civilians - Permanent Duty', page: '/civilian-permanent' },
    { heading: 'Defence Civilians - Temporary Duty', page: '/civilians-td' },
    { heading: 'LTC Allowance Calculator', page: '/calc-ltc' },
    { heading: 'Permanent Duty Calculator', page: '/calc-permanent' },
    { heading: 'Temporary Duty Calculator', page: '/calc-temporary' },
    { heading: 'Home Dashboard', page: '/' }
  ];

  // Detect touch devices to prevent hover and click event conflicts on mobile
  useEffect(() => {
    const handleTouch = () => { isTouch.current = true; };
    document.addEventListener('touchstart', handleTouch, { passive: true });
    return () => document.removeEventListener('touchstart', handleTouch);
  }, []);

  const handleToggle = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  // Live heading matching engine logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filtered = searchDatabase.filter(item =>
      item.heading.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Close search dropdown and menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchHovered(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-blue-950 text-white shadow-lg relative z-50 select-none">
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-0 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 lg:h-16">
        
        {/* BRAND LOGO / TITLE (ROUTS RELIABLY TO MAIN DASHBOARD) */}
        <button
          onClick={() => {
            navigate('/');
            setActiveDropdown(null);
          }}
          aria-label="Navigate to Home Dashboard"
          className="flex items-center gap-3 text-center lg:text-left group transform transform-gpu transition-all duration-300 ease-out hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-1"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-400/40 bg-white/5 shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300 flex items-center justify-center shrink-0">
            <img
              src={triserviceLogo}
              alt="TR Ready Reckoner"
              className="w-full h-full object-contain p-0.5 rounded-full"
            />
          </div>

          <div className="text-left">
            <h1 className="text-base font-black tracking-[0.18em] uppercase text-white">
              TR READY RECKONER
            </h1>
            <p className="text-[10px] text-amber-300 font-medium uppercase tracking-widest">
              Travel Regulations Portal
            </p>
          </div>
        </button>

        {/* NAVIGATION LINKS CONTAINER */}
        <div className="flex flex-wrap justify-center items-center gap-1 lg:gap-3 text-xs lg:text-sm font-semibold w-full lg:w-auto">
          
          {/* STATIC DEDICATED FIXED HOME ROUTER BUTTON */}
          <button
            onClick={() => {
              navigate('/');
              setActiveDropdown(null);
            }}
            className="px-3 py-2 rounded-lg text-amber-400 hover:text-white hover:bg-blue-900/50 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <span>Home</span>
          </button>

          {/* 1. PBOR DROPDOWN */}
          <div 
            className="relative group pb-2 pt-2 lg:py-4"
            onMouseEnter={() => { if (!isTouch.current) setActiveDropdown('pbor'); }}
            onMouseLeave={() => { if (!isTouch.current) setActiveDropdown(null); }}
          >
            <button 
              onClick={() => handleToggle('pbor')}
              className={`px-3 py-2 rounded-lg transition-colors duration-300 flex items-center gap-1 ${activeDropdown === 'pbor' ? 'bg-blue-900 text-white' : 'text-blue-100 hover:bg-blue-900/50'}`}
            >
              <span>PBOR</span>
              <span className={`text-[9px] transition-transform duration-300 ease-in-out ${activeDropdown === 'pbor' ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 text-slate-800 z-50 transition-all duration-300 ease-out transform-gpu origin-top ${activeDropdown === 'pbor' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
              <button onClick={() => { navigate('/pbor-ltc'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>🎫</span> LTC</button>
              <button onClick={() => { navigate('/pbor-permanent'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>📦</span> Permanent Duty</button>
              <button onClick={() => { navigate('/pbor-td'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>💼</span> Temporary Duty</button>
            </div>
          </div>

          {/* 2. OFFICERS DROPDOWN */}
          <div 
            className="relative group pb-2 pt-2 lg:py-4"
            onMouseEnter={() => { if (!isTouch.current) setActiveDropdown('officers'); }}
            onMouseLeave={() => { if (!isTouch.current) setActiveDropdown(null); }}
          >
            <button 
              onClick={() => handleToggle('officers')}
              className={`px-3 py-2 rounded-lg transition-colors duration-300 flex items-center gap-1 ${activeDropdown === 'officers' ? 'bg-blue-900 text-white' : 'text-blue-100 hover:bg-blue-900/50'}`}
            >
              <span>Officers</span>
              <span className={`text-[9px] transition-transform duration-300 ease-in-out ${activeDropdown === 'officers' ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 text-slate-800 z-50 transition-all duration-300 ease-out transform-gpu origin-top ${activeDropdown === 'officers' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
              <button onClick={() => { navigate('/officer-ltc'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>🎫</span> LTC</button>
              <button onClick={() => { navigate('/officer-permanent'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>📦</span> Permanent Duty</button>
              <button onClick={() => { navigate('/officers-td'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>💼</span> Temporary Duty</button>
            </div>
          </div>

          {/* 3. DEFENCE CIVILIANS DROPDOWN */}
          <div 
            className="relative group pb-2 pt-2 lg:py-4"
            onMouseEnter={() => { if (!isTouch.current) setActiveDropdown('civilians'); }}
            onMouseLeave={() => { if (!isTouch.current) setActiveDropdown(null); }}
          >
            <button 
              onClick={() => handleToggle('civilians')}
              className={`px-3 py-2 rounded-lg transition-colors duration-300 flex items-center gap-1 ${activeDropdown === 'civilians' ? 'bg-blue-900 text-white' : 'text-blue-100 hover:bg-blue-900/50'}`}
            >
              <span>Defence Civilians</span>
              <span className={`text-[9px] transition-transform duration-300 ease-in-out ${activeDropdown === 'civilians' ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 text-slate-800 z-50 transition-all duration-300 ease-out transform-gpu origin-top ${activeDropdown === 'civilians' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
              <button onClick={() => { navigate('/civilian-ltc'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>🎫</span> LTC</button>
              <button onClick={() => { navigate('/civilian-permanent'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>📦</span> Permanent Duty</button>
              <button onClick={() => { navigate('/civilians-td'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>💼</span> Temporary Duty</button>
            </div>
          </div>

          {/* 4. SEPARATE CALCULATORS QUICK LINK MENU */}
          <div 
            className="relative group pb-2 pt-2 lg:py-4"
            onMouseEnter={() => { if (!isTouch.current) setActiveDropdown('calcs'); }}
            onMouseLeave={() => { if (!isTouch.current) setActiveDropdown(null); }}
          >
            <button 
              onClick={() => handleToggle('calcs')}
              className={`px-3 py-2 rounded-lg transition-colors duration-300 flex items-center gap-1 ${activeDropdown === 'calcs' ? 'bg-blue-900 text-white' : 'text-blue-100 hover:bg-blue-900/50'}`}
            >
              <span>Calculators</span>
              <span className={`text-[9px] transition-transform duration-300 ease-in-out ${activeDropdown === 'calcs' ? 'rotate-180' : ''}`}>▼</span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 mt-1 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 text-slate-800 z-50 transition-all duration-300 ease-out transform-gpu origin-top ${activeDropdown === 'calcs' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
              <button onClick={() => { navigate('/calc-ltc'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>🎫</span> LTC Allowance</button>
              <button onClick={() => { navigate('/calc-permanent'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>📦</span> Permanent Duty</button>
              <button onClick={() => { navigate('/calc-temporary'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-xs hover:bg-slate-50 font-semibold hover:text-blue-900 transition-all duration-200 transform-gpu hover:translate-x-1 flex items-center gap-2"><span>💼</span> Temporary Duty</button>
            </div>
          </div>

          {/* 5. HOVER-EXPANDABLE SEARCH BAR */}
          <div 
            ref={searchContainerRef}
            className="relative flex items-center ml-1 pb-2 pt-2 lg:py-4"
            onMouseEnter={() => { if (!isTouch.current) setIsSearchHovered(true); }}
            onMouseLeave={() => { if (!isTouch.current && searchQuery === '') setIsSearchHovered(false); }}
          >
            <div className={`flex items-center bg-blue-950/60 border border-blue-800/80 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${isSearchHovered || searchQuery !== '' ? 'w-40 md:w-48 px-3 bg-blue-900' : 'w-9 h-9 justify-center'}`}>
              <svg 
                className="w-4 h-4 text-amber-400 shrink-0 cursor-pointer" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
                onClick={() => setIsSearchHovered(true)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <input 
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchHovered(true)}
                className={`bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none w-full ml-2 transition-opacity duration-200 ${isSearchHovered || searchQuery !== '' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute'}`}
              />
            </div>

            {/* FLOATING SEARCH RESULTS */}
            {searchResults.length > 0 && (
              <div className="absolute right-0 top-full mt-1 w-56 md:w-64 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50 text-slate-800">
                <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Matching Headings ({searchResults.length})
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result.heading}
                      onClick={() => {
                        navigate(result.page);
                        setSearchQuery('');
                        setSearchResults([]);
                        setIsSearchHovered(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-blue-900 transition border-b border-slate-50 last:border-b-0 flex items-center gap-1.5"
                    >
                      <span className="text-amber-500">⚓</span>
                      <span className="truncate">{result.heading}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}