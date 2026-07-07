import React, { useMemo, useState, useEffect, useRef } from 'react';

// ==========================================
// REGULATORY TEXT DEFINITIONS
// ==========================================
const officerDefinitions = {
  rule177A: `🏠 **Rule 177 (A) [Hometown LTC]:** Admissible once in a fixed block of two calendar years to visit your declared permanent hometown. Covers full entitlement class travel for self and authorized dependents.`,
  rule177B: `🗺️ **Rule 177 (B) [All India LTC]:** Admissible once in a four-year block cycle to travel to any chosen destination within India. This explicitly substitutes and consumes one hometown concession block.`
};

const pborDefinitions = {
  rule184i_ii: `🏠 **Rule 184 (i) & (ii) [Hometown Annual Loop]:** Personnel Below Officer Rank are authorized free hometown transit warrants annually. This cycle remains open every calendar year except when a block concession is chosen.`,
  rule184iii: `🗺️ **Rule 184 (iii) [Anywhere India Loop]:** Admissible once every alternate year to visit any point of choice across India, which locks out the standard hometown voucher for that calendar target.`
};

// Combined Rank & Pay Level Data Matrix
const RANKS_CONFIG = [
  // Commissioned Officers
  { id: 'sub_lt', label: 'Sub Lieutenant (Level 10)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'lt', label: 'Lieutenant (Level 10B)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'lt_cdr', label: 'Lieutenant Commander (Level 11)', category: 'Officer', payGroup: 'level9to11' },
  { id: 'cdr', label: 'Commander (Level 12A)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'capt', label: 'Captain (Level 13)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'cmde', label: 'Commodore (Level 13A)', category: 'Officer', payGroup: 'level12to13' },
  { id: 'r_adm', label: 'Rear Admiral (Level 14)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm', label: 'Vice Admiral (Level 15)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm_hag', label: 'Vice Admiral - HAG (Level 16)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'v_adm_apex', label: 'Vice Admiral - Apex (Level 17)', category: 'Officer', payGroup: 'level14Plus' },
  { id: 'adm', label: 'Admiral / CNS (Level 18)', category: 'Officer', payGroup: 'level14Plus' },
  
  // Junior Commissioned Officers & Other Ranks (PBOR)
  { id: 'seaman', label: 'Seaman (Level 3)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'leading_seaman', label: 'Leading Seaman (Level 4)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'petty_officer', label: 'Petty Officer (Level 5)', category: 'PBOR', payGroup: 'level5Below' },
  { id: 'cpo', label: 'Chief Petty Officer (Level 6)', category: 'PBOR', payGroup: 'level6to8' },
  { id: 'mcpo_ii', label: 'Master Chief Petty Officer II (Level 7)', category: 'PBOR', payGroup: 'level6to8' },
  { id: 'mcpo_i', label: 'Master Chief Petty Officer I (Level 8)', category: 'PBOR', payGroup: 'level6to8' },

  // Civilian Cadres
  { id: 'civ_level5_below', label: 'Civilian Staff (Level 5 & below)', category: 'Civilian', payGroup: 'level5Below' },
  { id: 'civ_level6_8', label: 'Civilian Section Officer / Staff (Level 6-8)', category: 'Civilian', payGroup: 'level6to8' },
  { id: 'civ_level14_plus', label: 'Civilian HAG / Principal Sec (Level 14+)', category: 'Civilian', payGroup: 'level14Plus' }
];

const yesNoOptions = [
  { id: 'Yes', label: 'Yes' },
  { id: 'No', label: 'No' }
];

const civilianLtcTypes = [
  { id: '2-Year Hometown Block', label: '2-Year Hometown Block' },
  { id: '4-Year All-India Block', label: '4-Year All-India Block' },
  { id: 'Annual Self-Only Hometown (Family Away)', label: 'Annual Self-Only Hometown (Family Away)' }
];

const payGroups = {
  level14Plus: {
    rail: 'AC First Class',
    shatabdi: 'Executive Class',
    air: 'Business / Club Class',
    road: 'Actual AC Bus fare, AC Taxi, or Auto/Scooter rate where authorized.',
    sea: 'Highest Class / Deluxe Class (SCI Mainland to Islands Ships)'
  },
  level12to13: {
    rail: 'AC First Class',
    shatabdi: 'Executive Class',
    air: 'Economy Class',
    road: 'Actual public bus fare including AC Bus, or prescribed auto/scooter rate.',
    sea: 'Highest Class / Deluxe Class (SCI Mainland to Islands Ships)'
  },
  level9to11: {
    rail: 'AC II Tier Class',
    shatabdi: 'AC Chair Car',
    air: 'Economy Class',
    road: 'Actual public bus fare including AC Bus, or prescribed auto/scooter rate.',
    sea: 'Highest Class / Deluxe Class (SCI Mainland to Islands Ships)'
  },
  level6to8: {
    rail: 'AC II Tier Class',
    shatabdi: 'AC Chair Car',
    air: 'Economy Class (Where specifically authorized/converted)',
    road: 'Actual AC Bus fare, or prescribed auto/scooter rate.',
    sea: 'Lower Class / First or "A" Cabin Class (SCI Mainland to Islands Ships)'
  },
  level5Below: {
    rail: 'AC III Tier Class',
    shatabdi: 'AC Chair Car (Where admissible)',
    air: 'Not Entitled by baseline rules',
    road: 'Ordinary public bus fare, or prescribed auto/scooter rate.',
    sea: 'Lowest Class / Second or "B" Cabin or Bunk Class (SCI Mainland to Islands Ships)'
  },
};

const ltcDocumentChecklistData = [
  {
    title: "Duly Filled Standard Claim Proforma (in Duplicate)",
    sub: ["Name", "Rank", "P. No.", "Basic Pay", "Gx details", "Hometown as per Genform", "Travel details (as per tickets)", "Advance drawn or not"]
  },
  {
    title: "System Generated Genforms",
    sub: ["Movement casualty", "Gx no with Date of Occ.", "Hometown & TR Rule", "Name, Rank, P.No & type of passage", "Unit round seal & signed by authority"]
  },
  {
    title: "Advance Payment Voucher",
    note: "(if advance drawn)",
    sub: ["Name, Rank, P.No", "Amount Drawn & Unit", "Individual sign", "Competent authority sign"]
  },
  {
    title: "Nil Advance Certificate",
    note: "(if advance not drawn)",
    sub: ["Name, Rank, P.No with Gx details", "TR rule", "Signed by competent authority"]
  },
  {
    title: "Cash TA Sanction",
    note: "(if required)",
    sub: ["Name, Rank, P.No", "From & To", "Round Stamp", "Signed by competent authority"]
  },
  {
    title: "Copy of Service Extract (SE)",
    note: "SE month prior to movement commencement.",
    sub: ["Rank and Pay level should be updated on SE.", "If not updated, promotion Gx to be enclosed."]
  },
  {
    title: "Confirmed Train/Air Tickets & Boarding Passes",
    sub: ["Spelling of name should match tickets and contingent bill.", "Entitled person must book through authorized agents."]
  },
  {
    title: "Sanction from Rank of RAdm and above",
    note: "In consultation with IFA, if tickets NOT booked via:",
    sub: ["M/s Balmer Lawrie & Company Limited (BLC)", "M/s Ashok Travel & Tour (ATT)", "IRCTC"]
  },
  {
    title: "Copy of e-MRO",
    note: "(if applicable)"
  },
  {
    title: "Self-Undertaking Certificate",
    note: "(if required for any reasons)"
  },
  {
    title: "All Xerox Copies Duly Attested"
  }
];

const initialForm = {
  rankId: 'sub_lt', 
  lastYear177BAvailed: '2024', 
  lastYear184iiiAvailed: '2024',
  civilianSelectedType: '2-Year Hometown Block',
  isCivilianCarryOverYear: 'No',
  concessionVoucher: 'No',
  ladakhWinterAir: 'No',
  andamanAdditionalPassage: 'No',
  specialCadreRule180: 'No',
};

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

// ==========================================
// OPERATIONAL RESILIENT CARD SUB-COMPONENT
// ==========================================
function ResultCard({ title, value, detail }) {
  return (
    <div className="rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950 to-slate-950 p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between">
      <div>
        <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400">{title}</p>
        <p className="mt-2 text-base sm:text-lg font-black text-white">{value}</p>
      </div>
      <p className="mt-3 text-sm font-medium border-t border-slate-800 pt-3 leading-relaxed text-slate-300 whitespace-pre-line">
        {detail}
      </p>
    </div>
  );
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
    { label: 'JCOs / Personnel Below Officer Rank', filter: 'PBOR' },
    { label: 'Civilian Cadres', filter: 'Civilian' }
  ];

  return (
    <div className={`w-full ${isOpen ? 'relative z-50' : 'relative z-10'}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 rounded-2xl border text-left px-4 text-sm sm:text-base font-bold text-slate-900 outline-none transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-between cursor-pointer ${
          isOpen 
            ? 'border-amber-500 ring-2 ring-amber-500/20 bg-white shadow-md' 
            : 'border-blue-200/80 bg-white/70 hover:border-blue-400'
        }`}
      >
        <span className="truncate mr-2">{selectedOption?.label || selectedOption}</span>
        <svg className={`w-5 h-5 text-blue-800 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`absolute left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-slate-300 bg-white p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 origin-top z-[100] ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
        {isCategorized ? (
          categories.map((cat) => {
            const filteredOptions = options.filter(o => o.category === cat.filter);
            if (filteredOptions.length === 0) return null;
            return (
              <div key={cat.label} className="mb-3 last:mb-0">
                <div className="px-3 py-2 text-xs font-black tracking-wider uppercase text-blue-900 bg-blue-50/80 rounded-xl mb-1.5">
                  {cat.label}
                </div>
                <div className="space-y-1">
                  {filteredOptions.map((opt) => {
                    const isSelected = opt.id === value;
                    return (
                      <button
                        key={opt.id} type="button" onClick={() => handleSelect(opt.id)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between ${
                          isSelected ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md' : 'text-slate-800 hover:bg-amber-50 hover:text-amber-600'
                        }`}
                      >
                        <span className="truncate mr-2">{opt.label}</span>
                        {isSelected && <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="space-y-1">
            {options.map((opt) => {
              const optId = opt.id !== undefined ? opt.id : opt;
              const optLabel = opt.label !== undefined ? opt.label : opt;
              const isSelected = optId === value;
              return (
                <button
                  key={optId} type="button" onClick={() => handleSelect(optId)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isSelected ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md' : 'text-slate-800 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  <span className="truncate mr-2">{optLabel}</span>
                  {isSelected && <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col space-y-2 w-full group">
      <div className="flex justify-between items-center px-1">
        <span className="text-sm font-black uppercase tracking-wider text-blue-950 group-hover:text-amber-500 transition-colors">
          {label}
        </span>
        {error && <span className="text-sm font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-md">{error}</span>}
      </div>
      <div className="w-full relative">{children}</div>
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full h-12 rounded-2xl border border-blue-200/80 bg-white/70 px-4 text-base font-bold text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 hover:border-blue-400 shadow-sm appearance-none style-numeric-inputs"
    />
  );
}

export default function LtcAllowanceCalculator() {
  const [form, setForm] = useState(initialForm);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const selectedRankProfile = useMemo(() => {
    return RANKS_CONFIG.find(r => r.id === form.rankId) || RANKS_CONFIG[0];
  }, [form.rankId]);

  const handleRankChange = (newRankId) => {
    setForm((current) => ({
      ...current,
      rankId: newRankId,
      concessionVoucher: 'No',
      specialCadreRule180: 'No',
      ladakhWinterAir: 'No',
      andamanAdditionalPassage: 'No',
    }));
  };

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const yearErrors = useMemo(() => {
    const errors = {};
    const last177B = toNumber(form.lastYear177BAvailed);
    const last184iii = toNumber(form.lastYear184iiiAvailed);

    if (selectedRankProfile.category === 'Officer' && form.lastYear177BAvailed && last177B > currentYear) {
      errors.lastYear177BAvailed = `Exceeds current calendar threshold (${currentYear})`;
    }
    if (selectedRankProfile.category === 'PBOR' && form.lastYear184iiiAvailed && last184iii > currentYear) {
      errors.lastYear184iiiAvailed = `Exceeds current calendar threshold (${currentYear})`;
    }
    return errors;
  }, [form, selectedRankProfile, currentYear]);

  const eligibilityResult = useMemo(() => {
    if (yearErrors.lastYear177BAvailed || yearErrors.lastYear184iiiAvailed) {
      return { 
        title: "INVALID TRANSIT ENTRIES", 
        detail: "Please check your operational date fields to unlock calculation tracking filters.",
        isDenied: true
      };
    }

    if (selectedRankProfile.category === 'Officer') {
      const last177B = toNumber(form.lastYear177BAvailed);
      if (form.lastYear177BAvailed && last177B === currentYear) {
        return {
          title: "LTC NOT ADMISSIBLE FOR THIS PARTICULAR YEAR",
          detail: `Lockout Conflict Detected: The "Last Year Rule 177(B) [All India] Was Availed" is set to ${currentYear}, matching your current evaluation year framework.\n\nUnder standard Defence Services Travel Regulations, an officer cannot claim both Rule 177(A) Hometown and Rule 177(B) Anywhere in India within the same calendar year block loop.`,
          isDenied: true
        };
      }
      const yearsSinceLast177B = currentYear - last177B;
      if (!form.lastYear177BAvailed || yearsSinceLast177B >= 2) {
        return { title: "Eligible for Both: Rule 177 (A) and Rule 177 (B)", detail: `${officerDefinitions.rule177A}\n\n${officerDefinitions.rule177B}` };
      }
      return { title: "Eligible for: Rule 177 (A) Only", detail: `Rule 177(B) is currently locked because it was utilized within the last alternate cycle frame (${last177B}). Admissible option details:\n\n${officerDefinitions.rule177A}` };
    }

    if (selectedRankProfile.category === 'PBOR') {
      const last184iii = toNumber(form.lastYear184iiiAvailed);
      const yearsSinceLast184iii = currentYear - last184iii;
      if (!form.lastYear184iiiAvailed || yearsSinceLast184iii >= 2) {
        return { title: "Eligible for Both: Rule 184 (i) & (ii) and Rule 184 (iii)", detail: `${pborDefinitions.rule184i_ii}\n\n${pborDefinitions.rule184iii}\n\n[Active Assessment Target Loop: Year ${currentYear}]` };
      }
      return { title: "Eligible for: Rule 184 (i) & (ii) [Home Town Only]", detail: `Rule 184(iii) "Anywhere in India" is currently locked because it was utilized within the last alternate cycle loop (${last184iii}). Admissible annual loop details:\n\n${pborDefinitions.rule184i_ii}\n\n[Active Assessment Target Loop: Year ${currentYear}]` };
    }

    if (selectedRankProfile.category === 'Civilian') {
      const carryOverText = form.isCivilianCarryOverYear === 'Yes' ? " [Grace Year Extension Active]" : "";
      let detail = form.civilianSelectedType === '2-Year Hometown Block' 
        ? `🏠 (a) Home Town Concession parameters:\n• Admissible irrespective of the distance between the HQs once in a fixed block of two calendar years.\n• Group Transit Rule: The employee & family members can travel in separate groups at different times.`
        : form.civilianSelectedType === '4-Year All-India Block'
          ? `🗺️ (b) Any Place in India Concession parameters:\n• Admissible irrespective of distance once in a fixed block of four calendar years.\n• Adjustment Clause: Granted in lieu of & adjusted against the regular Hometown LTC available.`
          : `🧍 (c) For Self Only to Visit Home Town Every Year:\n• Clause Admissibility: Authorized exclusively for a Government servant whose family lives away at his home town.`;

      detail += `\n\n📋 (d) Concession Rules for Independent One-Way Journeys:\n• Outward Journey Leg Only: Admissible if a dependent son/daughter alters dependency status (employment/marriage) after arrival.\n• Return Journey Leg Only: Admissible for a newly married wife, returning student, or child crossing fare age milestones mid-transit.`;
      return { title: `Eligible for Civilian: ${form.civilianSelectedType}${carryOverText}`, detail: detail + `\n\n[Active Assessment Target Year: ${currentYear}]` };
    }
    return { title: "Inactive Check", detail: "Re-verify selections." };
  }, [form, selectedRankProfile, yearErrors, currentYear]);

  const activeEntitlements = useMemo(() => {
    return payGroups[selectedRankProfile.payGroup] || null;
  }, [selectedRankProfile.payGroup]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6 py-6 antialiased pb-12 selection:bg-amber-500/20 text-slate-900 font-sans space-y-6">
      
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
      `}} />

      {/* HEADER SECTION */}
      <div className="relative border-blue-900/60 flex flex-col md:flex-row md:items-end justify-between gap-4 overflow-hidden rounded-3xl border bg-gradient-to-b from-blue-950 to-slate-950 p-6 shadow-xl">
        <div className="absolute inset-0 bg-grid-shader pointer-events-none opacity-60" />
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-1 border border-amber-400/30 text-xs font-black bg-amber-400 text-blue-950 uppercase tracking-wider rounded-md">
              Calculators
            </span>
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400">TR READY RECKONER</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-md uppercase">
            LTC Allowance Calculator
          </h2>
          <p className="max-w-3xl text-sm md:text-base font-medium leading-relaxed text-slate-400">
            Travel Regulations Reference Suite for evaluating Leave Travel Concession cycles, admissible classes, and operational regional concessions matching active regulatory frameworks.
          </p>
        </div>
      </div>

      {/* COMPACT STRETCH MATRIX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch relative z-10">
        
        {/* LEFT COLUMN PANEL: FORM DATA ENTRIES */}
        <div className="md:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 space-y-5 shadow-xl flex flex-col justify-between">
          <div className="space-y-5 w-full">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="text-sm sm:text-base font-black uppercase tracking-widest text-blue-950">Personnel Parameters & Logs</h3>
            </div>
            
            <Field label="Personnel Rank / Pay Designation">
              <CustomSelect value={form.rankId} options={RANKS_CONFIG} onChange={(e) => handleRankChange(e.target.value)} isCategorized={true} />
            </Field>

            {selectedRankProfile.category === 'Officer' && (
              <Field label="Last Year Rule 177(B) [All India] Was Availed" error={yearErrors.lastYear177BAvailed}>
                <Input type="number" min="1985" max={currentYear} value={form.lastYear177BAvailed} onChange={(e) => updateField('lastYear177BAvailed', e.target.value)} />
              </Field>
            )}

            {selectedRankProfile.category === 'PBOR' && (
              <Field label="Last Year Rule 184(iii) [Anywhere India] Was Availed" error={yearErrors.lastYear184iiiAvailed}>
                <Input type="number" min="1985" max={currentYear} value={form.lastYear184iiiAvailed} onChange={(e) => updateField('lastYear184iiiAvailed', e.target.value)} />
              </Field>
            )}

            {selectedRankProfile.category === 'Civilian' && (
              <div className="space-y-4 w-full">
                <Field label="Select Target Civilian Concession Type">
                  <CustomSelect value={form.civilianSelectedType} options={civilianLtcTypes} onChange={(e) => updateField('civilianSelectedType', e.target.value)} />
                </Field>
                <Field label="Is Journey Undertaken In Grace / Carry-Forward Year?">
                  <CustomSelect value={form.isCivilianCarryOverYear} options={yesNoOptions} onChange={(e) => updateField('isCivilianCarryOverYear', e.target.value)} />
                </Field>
              </div>
            )}

            {selectedRankProfile.category !== 'Civilian' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <Field label="Ladakh Winter Posting Concession (TR 176-A)?">
                  <CustomSelect value={form.ladakhWinterAir} options={yesNoOptions} onChange={(e) => updateField('ladakhWinterAir', e.target.value)} />
                </Field>
                <Field label="A&amp;N Islands Additional Passage Warrant?">
                  <CustomSelect value={form.andamanAdditionalPassage} options={yesNoOptions} onChange={(e) => updateField('andamanAdditionalPassage', e.target.value)} />
                </Field>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {['Officer', 'PBOR'].includes(selectedRankProfile.category) && (
                <div className="sm:col-span-2">
                  <Field label="Borne on Naval Aviation, Submarine, or MARCOS Cadre (Rule 180)?">
                    <CustomSelect value={form.specialCadreRule180} options={yesNoOptions} onChange={(e) => updateField('specialCadreRule180', e.target.value)} />
                  </Field>
                </div>
              )}
              {selectedRankProfile.category === 'PBOR' && (
                <div className="sm:col-span-2">
                  <Field label="Availing Concession Voucher?">
                    <CustomSelect value={form.concessionVoucher} options={yesNoOptions} onChange={(e) => updateField('concessionVoucher', e.target.value)} />
                  </Field>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN PANEL: LIVE SYSTEM CALCULATIONS READOUT */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-6">
          {/* ELIGIBILITY PRIMARY OUTPUT BANNER */}
          <div className={`rounded-3xl border p-6 shadow-xl flex flex-col justify-between flex-1 ${eligibilityResult.isDenied ? 'bg-rose-950 border-rose-900 text-rose-100' : 'bg-gradient-to-b from-blue-950 to-slate-950 border-blue-900/50 text-slate-100'}`}>
            <div>
              <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400">LTC THAT CAN BE AVAILED</p>
              <p className={`mt-2 text-xl sm:text-2xl font-black ${eligibilityResult.isDenied ? 'text-rose-400' : 'text-white'}`}>{eligibilityResult.title}</p>
            </div>
            <p className={`mt-4 text-sm sm:text-base font-medium border-t pt-3 leading-relaxed whitespace-pre-line ${eligibilityResult.isDenied ? 'border-rose-900 text-rose-200' : 'border-slate-800 text-slate-300'}`}>{eligibilityResult.detail}</p>
          </div>

          {/* DYNAMIC SCALE READOUTS FLOOR */}
          {activeEntitlements && (
            <div className="rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950 to-slate-950 p-6 shadow-xl space-y-4">
              <p className="text-sm sm:text-base font-black uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2">
                ⚓ Class Entitlements: {selectedRankProfile.label}
              </p>
              <div className="divide-y divide-slate-800 text-sm sm:text-base space-y-3.5">
                <div className="flex justify-between items-start pt-1.5">
                  <span className="font-black text-slate-400 uppercase tracking-wider text-xs sm:text-sm">Railways:</span>
                  <span className="text-white font-bold text-right pl-4">{activeEntitlements.rail} <span className="text-amber-400">({activeEntitlements.shatabdi} on Shatabdi)</span></span>
                </div>
                <div className="flex justify-between items-start pt-3.5">
                  <span className="font-black text-slate-400 uppercase tracking-wider text-xs sm:text-sm">Aviation:</span>
                  <span className="text-white font-bold text-right pl-4">{activeEntitlements.air}</span>
                </div>
                <div className="flex justify-between items-start pt-3.5">
                  <span className="font-black text-slate-400 uppercase tracking-wider text-xs sm:text-sm">Roadways:</span>
                  <span className="text-slate-300 font-semibold text-right pl-4">{activeEntitlements.road}</span>
                </div>
                <div className="flex justify-between items-start pt-3.5">
                  <span className="font-black text-slate-400 uppercase tracking-wider text-xs sm:text-sm">Maritime:</span>
                  <span className="text-slate-300 font-semibold text-right pl-4">{activeEntitlements.sea}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CHECK OF LIST FOR LTC CLAIM */}
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
              CHECK OF LIST FOR LTC CLAIM
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
              Mandatory Audit Submissions
            </p>
          </div>
        </div>

        <div className="relative z-10 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ltcDocumentChecklistData.map((item, idx) => (
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