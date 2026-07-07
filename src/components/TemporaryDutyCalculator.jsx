import React, { useMemo, useState, useEffect, useRef } from 'react';

// Unified Rank & Pay Level Mapping Configuration Matrix
const RANKS_CONFIG = [
  { id: 'sub_lt', label: 'Sub Lieutenant (Level 10)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'lt', label: 'Lieutenant (Level 10B)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'lt_cdr', label: 'Lieutenant Commander (Level 11)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'cdr', label: 'Commander (Level 12A)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'capt', label: 'Captain (Level 13)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'capt_cmde', label: 'Commodore (Level 13A)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'r_adm', label: 'Rear Admiral (Level 14)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm', label: 'Vice Admiral (Level 15)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm_hag', label: 'Vice Admiral - HAG (Level 16)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm_apex', label: 'Vice Admiral - Apex (Level 17)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'adm', label: 'Admiral / CNS (Level 18)', category: 'Officer', payGroup: 'level14Plus' },
  
  { id: 'seaman', label: 'Seaman (Level 3)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'leading_seaman', label: 'Leading Seaman (Level 4)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'petty_officer', label: 'Petty Officer (Level 5)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'cpo', label: 'Chief Petty Officer (Level 6)', category: 'PBOR', payGroup: 'level6to8' },
  { id: 'mcpo_ii', label: 'Master Chief Petty Officer II (Level 7)', category: 'PBOR', payGroup: 'level6to8' },
  { id: 'mcpo_i', label: 'Master Chief Petty Officer I (Level 8)', category: 'PBOR', payGroup: 'level6to8' }
];

const yesNoOptions = [
  { id: 'Yes', label: 'Yes' },
  { id: 'No', label: 'No' }
];

const hqStationOptions = [
  { id: 'Different', label: 'Different Station (Outstation Duty)' },
  { id: 'Same', label: 'Same Station (Local Temporary Journey)' }
];

const roadConveyanceOptions = [
  { id: 'carTaxi', label: 'Own Car / Taxi (₹24 per Km)' },
  { id: 'autoScooter', label: 'Auto / Scooter (₹12 per Km)' }
];

const TERMINAL_LEG_LABELS = [
  "Current duty stn to nearest Airport/Rail stn",
  "Nearest Airport/Rail stn to Temporary duty stn",
  "Return: Temporary duty stn to nearest Airport/Rail stn",
  "Return: Nearest Airport/Rail stn to Current duty stn"
];

const payGroups = {
  level14Plus: {
    label: 'Pay Level 14 and above',
    hotel: 9375,
    taxiType: 'unlimited_actual',
    food: 1500,
    rail: 'AC First Class (Executive Class on Shatabdi/Rajdhani)',
    air: 'Business / Club Class',
    road: 'Actual AC taxi fare at prescribed state rates, or authorized AC Bus rates.',
    sea: 'Highest Class / Deluxe Cabin Accommodation (SCI Ships)'
  },
  level12to13: {
    label: 'Pay Level 12 to 13',
    hotel: 5625,
    taxiType: 'distance_capped_actual',
    food: 1250,
    rail: 'AC First Class (Executive Class on Shatabdi/Rajdhani)',
    air: 'Economy Class',
    road: 'Actual public bus fare including AC Bus, or prescribed taxi/auto rates.',
    sea: 'Highest Class / Deluxe Cabin Accommodation (SCI Ships)'
  },
  level9to11: {
    label: 'Pay Level 9 to 11',
    hotel: 2812,
    taxiType: 'fixed',
    taxiRate: 422,
    food: 1125,
    rail: 'AC II Tier Class (AC Chair Car on Shatabdi/Rajdhani)',
    air: 'Economy Class',
    road: 'Actual public bus fare including AC Bus, or prescribed auto/scooter rates.',
    sea: 'Highest Class / Deluxe Cabin Accommodation (SCI Ships)'
  },
  level6to8: {
    label: 'Pay Level 6 to 8',
    hotel: 937,
    taxiType: 'fixed',
    taxiRate: 281,
    food: 1000,
    rail: 'AC II Tier Class (AC Chair Car on Shatabdi/Rajdhani)',
    air: 'Economy Class (Only where specifically authorized/converted)',
    road: 'Actual AC public bus fare, or prescribed auto/scooter rates.',
    sea: 'Lower Class / First or "A" Cabin Class (SCI Mainland Ships)'
  },
  level5Below: {
    label: 'Pay Level 5 and below',
    hotel: 562,
    taxiType: 'fixed',
    taxiRate: 141,
    food: 625,
    rail: 'AC III Tier Class (AC Chair Car where admissible)',
    air: 'Not entitled by default parameters',
    road: 'Ordinary/non-AC public bus fare, or prescribed auto/scooter rates.',
    sea: 'Lowest Class / Second or "B" Cabin or Bunk Class'
  },
};

const tyDocumentChecklistData = [
  {
    title: "Duly Filled Standard Claim Proforma (in Duplicate)",
    sub: ["Name", "Rank", "P. No.", "Basic Pay", "Gx Details", "Authority & Purpose for TY Duty", "Travel Details (as per tickets)", "Hotel, Food & Taxi Charges (as per entitlement)", "Road Mileage (as per city classification)", "Advance Drawn or Not"]
  },
  { title: "Journey Entitlement Details", note: "(Reference table only)" },
  { title: "TY Duty Entitlement", note: "(Reference table only)" },
  {
    title: "Movement Order",
    note: "(Officers only)",
    sub: ["Name, Rank, P. No.", "Authority & Purpose of TY Duty", "Travel Mode", "Signature by Authority & Unit Round Stamp"]
  },
  { title: "Authority Letter for TY Duty" },
  {
    title: "System Generated Genforms",
    sub: ["Movement Casualty", "Gx Number & Date of Occurrence", "Name, Rank, P. No. & Ration Type", "Unit Round Seal & Signature by Authority"]
  },
  { title: "Advance Payment Voucher", note: "(if advance drawn)" },
  { title: "Nil Advance Certificate", note: "(if advance not drawn)" },
  { title: "Cash TA Sanction", note: "(if required)" },
  {
    title: "NAC & Detention Certificate",
    sub: ["Name, Rank, P. No.", "Duration of Stay", "Accommodation & Food Provided or Not", "Issuing Unit Round Stamp & Signature"]
  },
  {
    title: "Copy of Service Extract (SE)",
    sub: ["SE of the month prior to movement.", "Rank & Pay Level should be updated.", "Promotion Gx to be enclosed if applicable."]
  },
  {
    title: "Confirmed Train/Air Tickets",
    sub: ["Boarding passes (for air travel).", "Name should match tickets and contingent bill.", "Tickets should be booked through authorized agents."]
  },
  {
    title: "Sanction from Rank of RAdm & Above",
    note: "(if tickets were not booked through authorized agents)",
    sub: ["M/s Balmer Lawrie & Company Ltd. (BLC)", "M/s Ashok Travel & Tour (ATT)", "IRCTC"]
  },
  { title: "Road Move Sanction", note: "(if journey is performed by road)" },
  { title: "Taxi Bills / Hotel Bills / Self-Certificate", sub: ["Hotel bills are mandatory for officers."] },
  { title: "Enforced Halt Sanction", sub: ["From the Controlling Officer (if halt was enforced en route during TY Duty)."] },
  { title: "Copy of e-MRO", note: "(if applicable)" },
  { title: "Self-Undertaking Certificate", note: "(if required)" },
  { title: "All Xerox Copies Duly Attested" }
];

const initialForm = {
  rankId: 'sub_lt', 
  dutyFrom: '',
  dutyTo: '',
  hqRelation: 'Different',
  distanceKm: '0',
  roadTravelType: 'carTaxi',
  governmentTransportProvided: 'No',
  actualTaxiExpenditurePerDay: '0',
  terminalLegs: [{ id: 0, distance: '' }] 
};

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, value || 0));
}

function CustomSelect({ value, onChange, options = [], isCategorized = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = useMemo(() => {
    return options.find(opt => opt.id === value) || options[0];
  }, [value, options]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    onChange({ target: { value: id } });
    setIsOpen(false);
  };

  const categories = [
    { label: 'Commissioned Officers', filter: 'Officer' },
    { label: 'Junior Commissioned Officers & ORs (PBOR)', filter: 'PBOR' }
  ];

  return (
    <div className="relative w-full" ref={dropdownRef} style={{ zIndex: isOpen ? 60 : 10 }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 sm:h-12 rounded-2xl border text-left px-4 sm:px-5 text-sm sm:text-base font-semibold text-slate-900 outline-none transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-between cursor-pointer ${
          isOpen 
            ? 'border-amber-500 ring-2 ring-amber-500/10 bg-white' 
            : 'border-blue-200/80 bg-white/60 hover:border-blue-400'
        }`}
      >
        <span className="truncate mr-2">{selectedOption?.label || selectedOption}</span>
        <svg 
          className={`w-4 h-4 text-blue-700 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        className={`absolute z-50 left-0 right-0 mt-2 max-h-64 sm:max-h-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-1.5 sm:p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' 
            : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        {isCategorized ? (
          categories.map((cat) => {
            const filteredOptions = options.filter(o => o.category === cat.filter);
            if (filteredOptions.length === 0) return null;
            return (
              <div key={cat.label} className="mb-2 last:mb-0">
                <div className="px-2.5 py-1 text-[10px] sm:text-xs font-black tracking-wider uppercase text-blue-900/60 bg-blue-50/50 rounded-xl mb-1">
                  {cat.label}
                </div>
                <div className="space-y-0.5">
                  {filteredOptions.map((opt) => {
                    const isSelected = opt.id === value;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelect(opt.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between ${
                          isSelected 
                            ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md' 
                            : 'text-slate-700 hover:bg-amber-50 hover:text-amber-600'
                        }`}
                      >
                        <span className="truncate mr-2">{opt.label}</span>
                        {isSelected && (
                          <svg className="w-3.5 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="space-y-0.5">
            {options.map((opt) => {
              const optId = opt.id !== undefined ? opt.id : opt;
              const optLabel = opt.label !== undefined ? opt.label : opt;
              const isSelected = optId === value;
              return (
                <button
                  type="button"
                  key={optId}
                  onClick={() => handleSelect(optId)}
                  className={`w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isSelected 
                      ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md' 
                      : 'text-slate-700 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  <span className="truncate mr-2">{optLabel}</span>
                  {isSelected && (
                    <svg className="w-3.5 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, children, note }) {
  return (
    <div className="flex flex-col space-y-1.5 h-full relative group">
      <div className="flex justify-between items-center gap-2">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-950 group-hover:text-amber-600 transition-colors truncate">
          {label}
        </span>
        {error && (
          <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-md animate-pulse shrink-0">
            {error}
          </span>
        )}
      </div>
      <div className="w-full relative flex-grow">
        {children}
      </div>
      {note && (
        <span className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wide mt-0.5 pl-1 block">
          {note}
        </span>
      )}
    </div>
  );
}

function Input({ hasError, ...props }) {
  return (
    <input
      {...props}
      className={`w-full h-12 rounded-2xl border bg-white/60 px-5 text-base font-semibold outline-none transition-all duration-300 focus:ring-2 hover:border-blue-400 backdrop-blur-md shadow-sm appearance-none style-numeric-inputs ${
        hasError 
          ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10 text-red-900' 
          : 'border-blue-200/80 focus:border-amber-500 focus:ring-amber-500/10 text-slate-900'
      }`}
    />
  );
}

function ResultCard({ title, value, detail, variant }) {
  const bgStyle = variant === 'denied' 
    ? 'bg-rose-950/90 border-rose-900 text-rose-100' 
    : variant === 'highlighted'
      ? 'bg-gradient-to-b from-blue-950 to-slate-950 border-blue-900/50 text-slate-100 shadow-2xl' 
      : variant === 'operational'
        ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-100 shadow-lg border-2'
        : 'bg-white/10 border-white/10 text-white';
      
  const valueColor = variant === 'denied' 
    ? 'text-xl sm:text-3xl font-bold' 
    : variant === 'highlighted'
      ? 'text-amber-400 font-black tracking-wide text-2xl sm:text-4xl lg:text-5xl font-mono' 
      : variant === 'operational'
        ? 'text-emerald-400 font-black text-xl sm:text-3xl font-mono'
        : 'text-amber-400 font-black text-xl sm:text-2xl font-mono';

  const titleColor = variant === 'highlighted' 
    ? 'text-amber-400 text-[10px] sm:text-xs lg:text-sm' 
    : variant === 'operational'
      ? 'text-emerald-300 text-[10px] sm:text-xs lg:text-sm font-black'
      : 'text-slate-300 text-[10px] sm:text-xs lg:text-sm font-black';

  const detailColor = variant === 'highlighted' 
    ? 'text-slate-300 text-xs sm:text-sm' 
    : variant === 'operational'
      ? 'text-emerald-200/80 text-xs sm:text-sm font-medium'
      : 'text-slate-400 text-xs sm:text-sm font-semibold';

  const borderStyle = variant === 'highlighted' 
    ? 'border-slate-800' 
    : variant === 'operational'
      ? 'border-emerald-800/60'
      : 'border-white/5';

  return (
    <div className={`group relative overflow-hidden rounded-3xl border p-4 sm:p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between min-h-[120px] sm:min-h-[140px] ${bgStyle}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.01] to-transparent transition-all duration-500" />
      <div className="z-10">
        <p className={`font-black uppercase tracking-widest group-hover:text-amber-500 transition-colors ${titleColor}`}>{title}</p>
        <p className={`mt-1 sm:mt-2 drop-shadow-sm break-words ${valueColor}`}>{value}</p>
      </div>
      <p className={`mt-2 sm:mt-3 leading-relaxed border-t pt-2 sm:pt-3 z-10 text-xs sm:text-sm whitespace-pre-line break-words ${borderStyle} ${detailColor}`}>{detail}</p>
    </div>
  );
}

export default function TemporaryDutyCalculator() {
  const [form, setForm] = useState(initialForm);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const safeTerminalLegs = form.terminalLegs || [];

  const isDateRangeInvalid = useMemo(() => {
    if (!form.dutyFrom || !form.dutyTo) return false;
    return new Date(form.dutyTo).getTime() < new Date(form.dutyFrom).getTime();
  }, [form.dutyFrom, form.dutyTo]);

  const isLocalStationDuty = useMemo(() => {
    return form.hqRelation === 'Same';
  }, [form.hqRelation]);

  const isGovTransportProvided = useMemo(() => {
    return form.governmentTransportProvided === 'Yes';
  }, [form.governmentTransportProvided]);

  const isActualTaxiExpenseEligible = useMemo(() => {
    return form.rankId !== 'sub_lt' && form.rankId !== 'lt' && form.rankId !== 'lt_cdr' &&
           form.rankId !== 'seaman' && form.rankId !== 'leading_seaman' && form.rankId !== 'petty_officer' &&
           form.rankId !== 'cpo' && form.rankId !== 'mcpo_ii' && form.rankId !== 'mcpo_i';
  }, [form.rankId]);

  const computedDays = useMemo(() => {
    if (!form.dutyFrom || !form.dutyTo || isDateRangeInvalid) return 0;
    const fromDate = new Date(form.dutyFrom);
    const toDate = new Date(form.dutyTo);
    
    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);
    
    const timeDiff = toDate.getTime() - fromDate.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  }, [form.dutyFrom, form.dutyTo, isDateRangeInvalid]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  // Dynamic Terminal Leg Operations
  const addTerminalLeg = () => {
    setForm((current) => {
      const currentLegs = current.terminalLegs || [];
      const existingIds = currentLegs.map(l => l.id);
      
      let nextId = null;
      for (let i = 0; i < 4; i++) {
        if (!existingIds.includes(i)) {
          nextId = i;
          break;
        }
      }

      if (nextId !== null) {
        const newLegs = [...currentLegs, { id: nextId, distance: '' }];
        newLegs.sort((a, b) => a.id - b.id);
        return { ...current, terminalLegs: newLegs };
      }
      return current;
    });
  };

  const removeTerminalLeg = (id) => {
    setForm((current) => ({
      ...current,
      terminalLegs: (current.terminalLegs || []).filter(l => l.id !== id)
    }));
  };

  const updateTerminalLeg = (id, value) => {
    setForm((current) => ({
      ...current,
      terminalLegs: (current.terminalLegs || []).map(l => l.id === id ? { ...l, distance: value } : l)
    }));
  };

  const activeRankProfile = useMemo(() => {
    return RANKS_CONFIG.find(r => r.id === form.rankId) || RANKS_CONFIG[0];
  }, [form.rankId]);

  const calculation = useMemo(() => {
    const payGroup = payGroups[activeRankProfile.payGroup];
    const daUnits = computedDays; 
    
    const inputActualTaxiCost = toNumber(form.actualTaxiExpenditurePerDay);
    
    // Road Mileage Component
    const distance = toNumber(form.distanceKm);
    const roadRate = form.roadTravelType === 'carTaxi' ? 24 : 12;
    const roadMileage = distance * roadRate;

    // Hotel cost calculations
    const baseHotelCost = isLocalStationDuty ? 0 : payGroup.hotel * daUnits;
    const hotelGstFactor = baseHotelCost * 0.05;
    const hotelClaim = baseHotelCost + hotelGstFactor;
    
    // Taxi Claim calculations
    let baseTaxiClaim = 0;
    let taxiTextDetails = '';

    if (isGovTransportProvided) {
      taxiTextDetails = 'Not entitled: Government transport provided for transit and local journeys.';
    } else if (isLocalStationDuty) {
      taxiTextDetails = 'Not entitled: Local temporary journey rules override standard DA taxi allowances.';
    } else {
      if (payGroup.taxiType === 'unlimited_actual') {
        baseTaxiClaim = inputActualTaxiCost * daUnits;
        taxiTextDetails = `${daUnits} Days Away × ${money(inputActualTaxiCost)} actual claimed per diem rate (Level 14+ Actual Expenditure rule).`;
      } else if (payGroup.taxiType === 'distance_capped_actual') {
        const maxDistanceCapDaily = 50 * 24; 
        const allowedDailyCost = Math.min(inputActualTaxiCost, maxDistanceCapDaily);
        baseTaxiClaim = allowedDailyCost * daUnits;
        
        if (inputActualTaxiCost > maxDistanceCapDaily) {
          taxiTextDetails = `${daUnits} Days Away × ${money(maxDistanceCapDaily)} (Claim capped by 7th CPC mileage parameter of 50 km/day within city limits).`;
        } else {
          taxiTextDetails = `${daUnits} Days Away × ${money(inputActualTaxiCost)} actual per diem claimed (Within the admissible 50 km/day city limits mileage boundary).`;
        }
      } else {
        const dailyRate = payGroup.taxiRate;
        baseTaxiClaim = dailyRate * daUnits;
        taxiTextDetails = `${daUnits} Days Away × ${money(dailyRate)} standard fixed rate matrix configured for this level.`;
      }
    }
    
    // Total Terminal Journey Claim Calculation
    let taxiClaim = baseTaxiClaim;
    
    if (!isGovTransportProvided && !isLocalStationDuty) {
      const activeLegs = form.terminalLegs || [];
      const terminalDistanceSum = activeLegs.reduce((sum, leg) => sum + toNumber(leg.distance), 0);
      const terminalTaxiClaim = terminalDistanceSum * 24;
      
      taxiClaim += terminalTaxiClaim;
      
      if (terminalTaxiClaim > 0) {
        taxiTextDetails += `\n\nTerminal Journey Addition:\n${terminalDistanceSum} Km total terminal distance × ₹24/Km = ${money(terminalTaxiClaim)} automatically added to per diem claim.`;
      } else {
        taxiTextDetails += `\n\nTerminal Journey Addition: Reimbursed at rates of fare of 2nd AC or taxi rates of ₹24/km (No distance currently logged).`;
      }
    }
        
    const baseFoodRate = payGroup.food;
    const effectiveFoodRate = isLocalStationDuty ? baseFoodRate * 0.5 : baseFoodRate;
    const foodClaim = effectiveFoodRate * daUnits;
    
    const total = roadMileage + hotelClaim + foodClaim + taxiClaim;

    return {
      payGroup,
      distance,
      daUnits,
      roadRate,
      roadMileage,
      hotelClaim,
      taxiClaim,
      taxiTextDetails,
      effectiveFoodRate,
      foodClaim,
      total,
    };
  }, [form, activeRankProfile, computedDays, isLocalStationDuty, isGovTransportProvided]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-8 antialiased pb-16 selection:bg-amber-500/20 selection:text-blue-950 min-h-screen bg-gradient-to-b from-blue-950 to-slate-950 text-white box-sizing-border font-sans text-xs sm:text-base">
      
      <style dangerouslySetInnerHTML={{__html: `
        .bg-grid-shader {
          background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .style-numeric-inputs::-webkit-outer-spin-button,
        .style-numeric-inputs::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .style-numeric-inputs[type=number] {
          -moz-appearance: textfield;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />

      {/* HEADER SECTION */}
      <div className="relative border-blue-900/60 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 overflow-hidden rounded-3xl border bg-gradient-to-b from-blue-950 to-slate-950 p-5 sm:p-8 backdrop-blur-xl shadow-xl mb-6 sm:mb-8">
        <div className="absolute inset-0 bg-grid-shader pointer-events-none opacity-60" />
        <div className="space-y-2 sm:space-y-3 z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 border border-amber-400/30 text-[10px] font-black bg-amber-400 text-blue-950 uppercase tracking-wider shadow-sm rounded-md">
              Calculators
            </span>
            <p className="text-xs font-bold tracking-widest uppercase text-amber-400">
              Temporary Duty Allowance Engine (Up to 180 Days)
            </p>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-md uppercase leading-tight">
            Check TD TA/DA Eligibility for {currentYear}
          </h2>
          <p className="max-w-4xl text-slate-400 text-xs sm:text-base leading-relaxed">
            Automated reference tool optimized for computing admissible hotel allocations, daily allowances, transit fares, and road mileage logs matching structural military frameworks.
          </p>
        </div>
      </div>

      {/* CORE WORKSPACE GRID */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1.15fr_1fr] items-start relative z-10">
        
        {/* INPUT PANEL SECTION */}
        <section className="rounded-3xl border border-white/10 bg-white/80 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.01] to-transparent pointer-events-none" />
          
          <div className="relative z-10 mb-6">
            <h3 className="text-xs sm:text-base font-black uppercase tracking-widest text-blue-950 border-b-2 border-slate-200/80 pb-2">
              Personnel Parameters & Transit Logs
            </h3>
          </div>
          
          <div className="flex flex-col relative z-30">
            
            {/* RANK & HQ (Highest local Z-index) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 relative z-50 mb-6">
              <Field label="Personnel Rank / Pay Designation">
                <CustomSelect 
                  value={form.rankId} 
                  options={RANKS_CONFIG} 
                  onChange={(e) => updateField('rankId', e.target.value)} 
                  isCategorized={true}
                />
              </Field>
              <Field label="HQ Station Context">
                <CustomSelect 
                  value={form.hqRelation} 
                  options={hqStationOptions}
                  onChange={(e) => updateField('hqRelation', e.target.value)} 
                />
              </Field>
            </div>

            {/* DATES */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 relative z-40 mb-6">
              <Field label="Duty From">
                <Input type="date" value={form.dutyFrom} onChange={(e) => updateField('dutyFrom', e.target.value)} />
              </Field>
              <Field label="Duty To" error={isDateRangeInvalid ? "Cannot be earlier" : null}>
                <Input type="date" value={form.dutyTo} onChange={(e) => updateField('dutyTo', e.target.value)} hasError={isDateRangeInvalid} />
              </Field>
            </div>

            {/* CALCULATED DAYS */}
            <div className="w-full relative z-30 mb-8">
              <Field label="Calculated Calendar Days Away (Auto)">
                <div className={`w-full h-11 sm:h-12 rounded-2xl border px-4 sm:px-5 text-sm sm:text-base font-extrabold flex items-center shadow-inner transition-all duration-300 ${
                  isDateRangeInvalid 
                    ? 'bg-red-50 border-red-200 text-red-700' 
                    : computedDays > 0 
                      ? 'bg-slate-100/90 border-slate-200 text-slate-800' 
                      : 'bg-slate-100/90 border-slate-200 text-slate-400'
                }`}>
                  {isDateRangeInvalid 
                    ? '⚠️ Invalid Temporal Log Bounds Entered' 
                    : computedDays > 0 
                      ? `${computedDays} Days Admissible` 
                      : 'Select complete date range to populate'}
                </div>
              </Field>
            </div>

            {/* CONDITIONAL RENDER: Only show if NOT local station duty */}
            {!isLocalStationDuty && (
              <>
                {/* TRANSIT EXPENSES HEADER */}
                <div className="relative z-20 pt-4 border-t border-slate-200 mb-6">
                  <h3 className="text-xs sm:text-base font-black uppercase tracking-widest text-blue-950 border-b-2 border-slate-200/80 pb-2">
                    Transit Expenses & Mileage Allocations to Nearest Airport / Railway Stn / Bus Stn
                  </h3>
                </div>

                {/* GOVT TRANSPORT & ACTUAL TAXI (Needs High Z-index for select dropdown) */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 relative z-50 mb-6">
                  <Field label="Government Transport Provided?">
                    <CustomSelect 
                      value={form.governmentTransportProvided} 
                      options={yesNoOptions}
                      onChange={(e) => updateField('governmentTransportProvided', e.target.value)}
                    />
                  </Field>
                  
                  {!isGovTransportProvided && isActualTaxiExpenseEligible ? (
                    <Field label="Actual Taxi Expenditure Per Day (₹)">
                      <Input 
                        type="number" 
                        min="0" 
                        value={form.actualTaxiExpenditurePerDay} 
                        onChange={(e) => updateField('actualTaxiExpenditurePerDay', e.target.value)} 
                      />
                    </Field>
                  ) : (
                    <div className="hidden sm:block opacity-0 pointer-events-none" />
                  )}
                </div>

                {/* DYNAMIC TERMINAL JOURNEY DISTANCES */}
                {!isGovTransportProvided && (
                  <div className="w-full space-y-5 relative z-40 mb-8">
                    {safeTerminalLegs.length === 0 && (
                      <button 
                        type="button" 
                        onClick={addTerminalLeg} 
                        className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        + Add Terminal Journey Distance
                      </button>
                    )}

                    {safeTerminalLegs.map((leg) => (
                      <div key={`leg-${leg.id}`} className="flex items-start gap-3 sm:gap-4 w-full animate-fadeIn">
                        <div className="flex-grow min-w-0">
                          <Field label={TERMINAL_LEG_LABELS[leg.id]}>
                            <Input 
                              type="number" 
                              min="0" 
                              value={leg.distance} 
                              onChange={(e) => updateTerminalLeg(leg.id, e.target.value)} 
                              placeholder="Distance (Km)"
                            />
                          </Field>
                        </div>
                        {/* Fixed top margin to align perfectly with the input block regardless of label height */}
                        <div className="flex gap-2 mt-[22px] sm:mt-[24px] flex-shrink-0">
                          {safeTerminalLegs.length < 4 && (
                            <button 
                              type="button"
                              onClick={addTerminalLeg}
                              className="w-11 h-11 sm:h-12 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 hover:text-white transition-all duration-200 shadow-sm"
                              title="Add next terminal journey leg"
                            >
                              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                            </button>
                          )}
                          <button 
                            type="button"
                            onClick={() => removeTerminalLeg(leg.id)}
                            className="w-11 h-11 sm:h-12 rounded-xl flex items-center justify-center bg-red-50 text-red-500 border border-red-200 hover:bg-red-500 hover:text-white transition-all duration-200 shadow-sm"
                            title="Remove this leg"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ENTIRE JOURNEY VIA ROAD HEADER */}
            <div className={`relative z-30 pt-4 border-t border-slate-200 mb-6 ${isLocalStationDuty ? 'mt-0' : ''}`}>
              <h3 className="text-xs sm:text-base font-black uppercase tracking-widest text-blue-950 border-b-2 border-slate-200/80 pb-2">
                Entire Journey Via Road
              </h3>
            </div>

            {/* ENTIRE JOURNEY VIA ROAD SECTION */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-20">
              <Field label="Road Conveyance Vehicle Type">
                <CustomSelect 
                  value={form.roadTravelType} 
                  options={roadConveyanceOptions}
                  onChange={(e) => updateField('roadTravelType', e.target.value)}
                />
              </Field>
              <Field 
                label="Road Mileage Distance (Km)"
                note="⚠️ HQ Sanction required"
              >
                <Input type="number" min="0" value={form.distanceKm} onChange={(e) => updateField('distanceKm', e.target.value)} />
              </Field>
            </div>

          </div>
        </section>

        {/* OUTPUT PANEL SECTION */}
        <aside className="space-y-5 sm:space-y-6 relative z-10">
          
          <ResultCard
            title="TOTAL TD ENTITLEMENT"
            value={isDateRangeInvalid ? money(0) : money(calculation.total)}
            detail={isDateRangeInvalid 
              ? 'Calculations suspended: Timeline bounds conflict. Please fix input parameters.' 
              : `Based on ${calculation.daUnits} calculated Daily Allowance (DA) units.\nSubject to standard audited orders.`
            }
            variant={isDateRangeInvalid ? 'denied' : 'highlighted'}
          />

          {/* ADMISSIBLE TRAVEL CLASS MATRIX CARD */}
          <div className="rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950 to-slate-950 p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-xl space-y-4 group relative">
            <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2 z-10 relative">
              ⚓ Admissible Travel Class Matrix
            </p>
            <div className="divide-y divide-slate-800 text-xs sm:text-sm space-y-3 z-10 relative">
              <div className="flex justify-between items-start pt-1 gap-4">
                <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[80px] sm:min-w-[120px]">🚂 Rail:</span>
                <span className="text-white font-bold text-right leading-tight break-words flex-grow">{calculation.payGroup.rail}</span>
              </div>
              <div className="flex justify-between items-start pt-3 gap-4">
                <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[80px] sm:min-w-[120px]">✈️ Air:</span>
                <span className="text-white font-bold text-right leading-tight break-words flex-grow">{calculation.payGroup.air}</span>
              </div>
              <div className="flex justify-between items-start pt-3 gap-4">
                <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[80px] sm:min-w-[120px]">🚗 Road:</span>
                <span className="text-slate-300 font-semibold text-right leading-tight break-words flex-grow">
                  {isGovTransportProvided && !isLocalStationDuty ? 'Not entitled (Service vehicle active)' : calculation.payGroup.road}
                </span>
              </div>
              <div className="flex justify-between items-start pt-3 gap-4">
                <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[80px] sm:min-w-[120px]">🚢 Sea:</span>
                <span className="text-slate-300 font-semibold text-right leading-tight break-words flex-grow">{calculation.payGroup.sea}</span>
              </div>
            </div>
          </div>

          {/* BREAKDOWN ELEMENT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 w-full">
            <ResultCard
              title="Road Mileage Component"
              value={money(calculation.roadMileage)}
              detail={`• Reimbursement: ${money(calculation.roadMileage)} (${calculation.distance} Km at ₹${calculation.roadRate}/Km)`}
              variant="operational"
            />

            <ResultCard
              title="Hotel Accommodation Caps"
              value={isDateRangeInvalid ? money(0) : money(calculation.hotelClaim)}
              detail={isLocalStationDuty 
                ? 'No hotel allowance computed: Local temporary journey rules active.' 
                : `${calculation.daUnits} Days Away × ${money(calculation.payGroup.hotel)}/day room limit.\n(Includes standard statutory +5% GST reimbursement markup applied directly).`
              }
              variant={isLocalStationDuty ? 'white' : 'info'}
            />

            <ResultCard
              title="Taxi Allowance Admissible"
              value={isDateRangeInvalid ? money(0) : money(calculation.taxiClaim)}
              detail={calculation.taxiTextDetails}
              variant="info"
            />

            <ResultCard
              title="Food Allowance Provision"
              value={isDateRangeInvalid ? money(0) : money(calculation.foodClaim)}
              detail={isLocalStationDuty
                ? `Local Adjustment (50% Rate Active):\n${money(calculation.effectiveFoodRate)} per diem x ${calculation.daUnits} total units.`
                : `Lump Sum Payment:\n${money(calculation.effectiveFoodRate)} per diem factor x ${calculation.daUnits} total adjustments.`
              }
              variant="info"
            />
          </div>

        </aside>
      </div>

      {/* TY DUTY CLAIM – DOCUMENT CHECKLIST */}
      <section className="mt-8 relative overflow-hidden rounded-3xl border border-blue-900/60 bg-gradient-to-b from-blue-950 to-slate-950 backdrop-blur-xl shadow-2xl">
        <div className="absolute inset-0 bg-grid-shader pointer-events-none opacity-40" />
        
        <div className="relative z-10 border-b border-slate-800 p-6 sm:p-8 flex items-center gap-4">
          <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 flex-shrink-0">
            <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-widest text-white drop-shadow-md">
              TY Duty Claim – Document Checklist
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
              Mandatory Audit Submissions
            </p>
          </div>
        </div>

        <div className="relative z-10 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tyDocumentChecklistData.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex gap-4 items-start p-5 rounded-2xl bg-blue-950/40 border border-blue-900/50 hover:bg-blue-900/40 hover:border-amber-500/30 transition-all duration-300 shadow-sm"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-blue-900/50 border border-blue-700/50 text-amber-400 font-black text-xs shadow-inner group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-full">
                  <p className="text-white font-bold tracking-wide text-sm mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </p>
                  
                  {item.note && (
                    <p className="italic text-slate-400 text-xs mb-2">{item.note}</p>
                  )}
                  
                  {item.sub && (
                    <ul className="mt-3 space-y-1.5">
                      {item.sub.map((subItem, subIdx) => (
                        <li key={subIdx} className="flex items-start gap-2.5 text-xs text-slate-300 group-hover:text-slate-200 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 mt-1 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
                          <span className="leading-relaxed font-medium">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}