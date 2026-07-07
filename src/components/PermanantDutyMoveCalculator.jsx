import React, { useMemo, useState, useEffect, useRef } from 'react';

// Combined Rank & Pay Level Data Matrix extracted from LtcAllowanceCalculator
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
  { id: 'civ_level9_11', label: 'Civilian Director / Under Sec (Level 9-11)', category: 'Civilian', payGroup: 'level9to11' },
  { id: 'civ_level12_13', label: 'Civilian Joint Sec / Director (Level 12-13)', category: 'Civilian', payGroup: 'level12to13' },
  { id: 'civ_level14_plus', label: 'Civilian HAG / Principal Sec (Level 14+)', category: 'Civilian', payGroup: 'level14Plus' }
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

const baggageSlabs = {
  Officer: { kg: 6000, roadRate: 62.5, seaVolume: 914, label: '6000 kg / 1 container' },
  PBOR: { kg: 6000, roadRate: 62.5, seaVolume: 914, label: '6000 kg / 1 container' },
  Civilian: { kg: 3000, roadRate: 31.25, seaVolume: 457, label: '3000 kg default slab' },
};

const vehicleEntitlements = {
  Officer: 'One motor car, motorcycle/scooter, or horse when eligible.',
  PBOR: 'One motor car or motorcycle/scooter if pay level 6 and above.',
  Civilian: 'Motor car for pay level 6 and above; motorcycle/scooter/moped or bicycle for level 5 and below.',
};

const steamerRateOptions = [
  { id: '0', label: 'None / Not Applicable' },
  { id: '280675', label: 'Car (length 401+ cms) - ₹2,80,675' },
  { id: '241525', label: 'Car (length 351-400 cms) - ₹2,41,525' },
  { id: '32770', label: 'Motor Cycle / Scooter - ₹32,770' },
  { id: '18225', label: 'Moped without Gear - ₹18,225' }
];

const initialForm = {
  rankId: 'sub_lt',
  basicPay: '90000',
  hqStation: 'Different',
  distanceKm: '1200',
  roadTravelType: 'carTaxi',
  familyMoved: 'Yes',
  familyMembers: '3',
  residenceChanged: 'Yes',
  baggageWeightKg: '4500',
  privateVehicleTransported: 'No',
  unladenVehicleWeightKg: '1200',
  sameCityTransfer: 'No',
  islandPosting: 'No',
  ownRequestTransfer: 'No',
  distanceToChennai: '0',
  steamerRate: '0',
};

const yesNoOptions = [
  { id: 'Yes', label: 'Yes' },
  { id: 'No', label: 'No' }
];

const hqStationOptions = [
  { id: 'Same', label: 'Same' },
  { id: 'Different', label: 'Different' }
];

const documentChecklistData = [
  { title: "Duly Filled Standard Claim Proforma (in Duplicate)", sub: ["Name", "Rank", "P. No.", "Basic Pay details", "Family particulars", "Journey details (as per tickets)", "CTG (Composite Transfer Grant)", "Transportation charges for luggage & personal conveyance", "Travelling allowance", "Individual signature", "Divisional sign"] },
  { title: "Journey Entitlement Details", note: "(Reference table only)" },
  { title: "Transfer Entitlement Details", sub: ["Composite Transfer Grant (CTG)", "Baggage Entitlement", "Transportation of Personal Conveyance", "PMT Transfer Entitlement (Port Blair)"] },
  { title: "System Generated Genforms", sub: ["Movement Casualty", "Unit Round Seal & Signature by Authority"] },
  { title: "Advance Payment Voucher", note: "(if advance drawn)" },
  { title: "Nil Advance Certificate", note: "(if advance not drawn)" },
  { title: "Cash TA Sanction", note: "(if required)" },
  { title: "Appointment Letter", note: "(Original/CTC)" },
  { title: "Copy of Service Extract (SE)" },
  { title: "Confirmed Train/Air Tickets", sub: ["Boarding passes (for air travel)"] },
  { title: "Sanction from Rank of RAdm & Above", note: "(if ticket not booked through authorized agents)" },
  { title: "Quarter Vacation & Allotment / Retention Certificate", sub: ["Change of Residence Certificate (for Local Transfer)"] },
  { title: "Transporter Documents", sub: ["GST Number", "Registration Number", "PAN Details", "Telephone/Contact Number", "Firm Name & Address", "Fitness Certificate of Vehicle", "Driver's Licence Copy", "Transport Permit", "Proof of Ownership", "Copy of RC"] },
  { title: "Lorry Number & Distance Details" },
  { title: "Transporter Verification Documents", sub: ["Permit Holder Name", "Registration Number", "Vehicle Insurance", "Insurance Validity", "Owner Name on RC", "Driver Name", "Driver Licence Validity"] },
  { title: "Full Address of Consignor & Consignee" },
  { title: "Genuineness Certificate", note: "(Port Blair ↔ Any Station)" },
  { title: "No Demand Certificate (NDC)", note: "(from CO and MES for Retirement Claim only)" },
  { title: "Previous Claim Certificate", note: "(if bringing family from old station to new duty station)" },
  { title: "Vehicle Documents", note: "(if personal conveyance transported)", sub: ["RC Copy", "Valid Insurance", "Driving Licence"] },
  { title: "Essential Certificate", sub: ["Signed by previous unit CO/HOD (for car cases)"] },
  { title: "Consignment Receipt" },
  { title: "Copy of e-MRO", note: "(if applicable)" },
  { title: "Self-Undertaking Certificate", note: "(if required)" },
  { title: "Permanent Residence Certificate / Service Book Photocopy", note: "(for retirement claims)" },
  { title: "Last Pay Drawn Certificate (LDPC)", note: "(for retirement claims)" },
  { title: "All Xerox Copies Duly Attested" }
];

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function AnimatedMoney({ targetValue }) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(targetValue);
  const targetValueRef = useRef(targetValue);

  useEffect(() => {
    startValueRef.current = displayValue;
    targetValueRef.current = targetValue;
    startTimeRef.current = null;

    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const duration = 400;

      const easeOutCubic = 1 - Math.pow(1 - Math.min(progress / duration, 1), 3);
      const change = targetValueRef.current - startValueRef.current;
      const currentVal = startValueRef.current + change * easeOutCubic;

      setDisplayValue(currentVal);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValueRef.current);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue]);

  return (
    <span>
      {new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(Math.max(0, displayValue || 0))}
    </span>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col space-y-2 h-full justify-between relative group">
      <div className="text-xs font-black uppercase tracking-wider text-blue-950 group-hover:text-amber-600 transition-colors w-full">
        {label}
      </div>
      <div className="w-full relative">
        {children}
      </div>
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full h-12 rounded-2xl border border-blue-200/80 bg-white/60 px-5 text-base font-semibold text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 hover:border-blue-400 backdrop-blur-md shadow-sm appearance-none style-numeric-inputs disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:border-slate-200"
    />
  );
}

function CustomSelect({ value, onChange, options = [], isCategorized = false, disabled = false }) {
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
    if (disabled) return;
    onChange({ target: { value: id } });
    setIsOpen(false);
  };

  const categories = [
    { label: 'Commissioned Officers', filter: 'Officer' },
    { label: 'JCOs / Personnel Below Officer Rank', filter: 'PBOR' },
    { label: 'Civilian Cadres', filter: 'Civilian' }
  ];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full h-12 rounded-2xl border text-left px-5 text-base font-semibold text-slate-900 outline-none transition-all duration-300 backdrop-blur-md shadow-sm flex items-center justify-between ${
          disabled ? 'opacity-50 cursor-not-allowed bg-slate-100 border-slate-200' : 'cursor-pointer'
        } ${
          isOpen 
            ? 'border-amber-500 ring-2 ring-amber-500/10 bg-white' 
            : (!disabled ? 'border-blue-200/80 bg-white/60 hover:border-blue-400' : '')
        }`}
      >
        <span className="truncate mr-2">{selectedOption?.label}</span>
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

      {!disabled && (
        <div 
          className={`absolute z-50 left-0 right-0 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 origin-top ${
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
                  <div className="px-3 py-1.5 text-xs font-black tracking-wider uppercase text-blue-900/60 bg-blue-50/50 rounded-xl mb-1">
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
                            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                const isSelected = opt.id === value;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isSelected 
                        ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md' 
                        : 'text-slate-700 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                  >
                    <span className="truncate mr-2">{opt.label}</span>
                    {isSelected && (
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ResultCard({ title, value, detail }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-0.5 flex flex-col justify-between min-h-[140px]">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.01] to-transparent transition-all duration-500" />
      <div className="z-10">
        <p className="text-xs font-black uppercase tracking-widest text-blue-950 group-hover:text-amber-500 transition-colors">{title}</p>
        <p className="mt-2 text-2xl font-black text-slate-900 font-mono drop-shadow-sm">
          <AnimatedMoney targetValue={value} />
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-800 font-semibold border-t border-slate-200/60 pt-3 z-10 whitespace-pre-line">{detail}</p>
    </div>
  );
}

export default function PermanentDutyMoveCalculator() {
  const [form, setForm] = useState(initialForm);
  const [showSteamerRates, setShowSteamerRates] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const selectedRankProfile = useMemo(() => {
    return RANKS_CONFIG.find(r => r.id === form.rankId) || RANKS_CONFIG[0];
  }, [form.rankId]);

  const calculation = useMemo(() => {
    const basicPay = toNumber(form.basicPay);
    const distance = toNumber(form.distanceKm);
    
    const isSameStation = form.hqStation === 'Same';
    
    const sameCity = form.sameCityTransfer === 'Yes' || distance < 20;
    const islandPosting = form.islandPosting === 'Yes';
    const ownRequest = form.ownRequestTransfer === 'Yes';
    
    const familyMoved = form.familyMoved === 'Yes';
    const residenceChanged = form.residenceChanged === 'Yes';

    // Base baggage setup
    const baggageCategory = selectedRankProfile.category === 'Officer' ? 'Officer' : selectedRankProfile.category === 'Civilian' ? 'Civilian' : 'PBOR';
    const baseBaggage = baggageSlabs[baggageCategory];

    let baggageMultiplier = 1.0; 
    let isCompletelyDisentitled = false;
    let disentitlementReason = '';

    // Condition Evaluations
    if (isSameStation && !residenceChanged) {
      isCompletelyDisentitled = true;
      baggageMultiplier = 0;
      disentitlementReason = 'HQ Station is marked as Same and no change of residence occurred. Entitlements revoked.';
    } else if (familyMoved && !residenceChanged) {
      isCompletelyDisentitled = true;
      baggageMultiplier = 0;
      disentitlementReason = 'Family accompanied move selected without a change of residence. Entitlements revoked.';
    } else if (!familyMoved && !residenceChanged) {
      isCompletelyDisentitled = true;
      baggageMultiplier = 0;
      disentitlementReason = 'Family did not accompany and no change of residence occurred. Entitlements revoked.';
    } else if (!familyMoved && residenceChanged) {
      baggageMultiplier = 0.5;
    }

    // Calculations based on entitlement eligibility statuses
    let ctg = 0;
    let ctgReason = disentitlementReason;
    if (!isCompletelyDisentitled) {
      const normalCtg = basicPay * 0.8;
      const fullCtg = islandPosting ? basicPay : normalCtg;
      
      if (ownRequest) {
        ctg = 0;
        ctgReason = 'No CTG because transfer is marked as own request.';
      } else if (isSameStation && residenceChanged) {
        ctg = normalCtg / 3; // 1/3 of 80% Basic Pay
        ctgReason = 'HQ Station is marked as Same with change of residence: one-third of normal CTG (1/3 of 80% basic pay).';
      } else if (sameCity) {
        ctg = normalCtg / 3;
        ctgReason = 'Same city or under 20 km: one-third of normal CTG.';
      } else if (islandPosting) {
        ctg = fullCtg;
        ctgReason = 'Island posting: 100% of last basic pay.';
      } else {
        ctg = normalCtg;
        ctgReason = 'Normal transfer: 80% of last basic pay.';
      }
    }

    // Apply Island Baggage Allowance addition mapping
    const activeBaggageKg = baseBaggage.kg + (islandPosting ? 2000 : 0);
    const activeRoadRate = (baseBaggage.roadRate / baseBaggage.kg) * activeBaggageKg;

    const maxScaleBaggageCharges = distance * activeRoadRate;
    const baggageDistanceValue = distance * activeRoadRate * baggageMultiplier;
    const baggageWeight = toNumber(form.baggageWeightKg);
    
    let eligibleBaggageCharges = 0;
    if (!isCompletelyDisentitled && baggageWeight > 0) {
      eligibleBaggageCharges = baggageDistanceValue;
    }

    // New Vehicle transport math implementation
    let vehicleCharges = 0;
    let vehicleDetailString = '';

    if (isCompletelyDisentitled) {
      vehicleDetailString = 'Vehicle asset carriage allocation disabled.';
    } else if (sameCity || isSameStation) {
      vehicleCharges = 0;
      vehicleDetailString = 'Vehicle transportation allowance not admissible when transfer within same city or same HQ is selected.';
    } else if (form.privateVehicleTransported === 'Yes') {
      const vehicleWeight = toNumber(form.unladenVehicleWeightKg);
      if (islandPosting) {
        const distChennai = toNumber(form.distanceToChennai);
        const stRate = toNumber(form.steamerRate); // Now takes value directly from the dropdown
        const roadCharges = (distChennai * 62.5 * vehicleWeight) / 6000;
        vehicleCharges = roadCharges + stRate;
        vehicleDetailString = `${vehicleEntitlements[baggageCategory]}\nFormula applied: ((${distChennai} km to Chennai × ₹62.5 × ${vehicleWeight} kg) / 6000) + ₹${new Intl.NumberFormat('en-IN').format(stRate)} steamer rate.`;
      } else {
        vehicleCharges = (distance * 62.5 * vehicleWeight) / 6000;
        vehicleDetailString = `${vehicleEntitlements[baggageCategory]}\nFormula applied: (${distance} km × ₹62.5 × ${vehicleWeight} kg) / 6000.`;
      }
    } else {
      vehicleDetailString = 'Vehicle transport options unselected.';
    }
    
    const total = ctg + eligibleBaggageCharges + vehicleCharges;

    // Build functional details text mapping for visual block
    const maxSlabText = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(maxScaleBaggageCharges);
    const maxCapText = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(baggageDistanceValue);

    // Dynamic label for weight to reflect strictly "6000+2000 kg" format
    const assignedMaxLabel = islandPosting 
      ? `${baseBaggage.kg * baggageMultiplier} + ${2000 * baggageMultiplier}` 
      : `${baseBaggage.kg * baggageMultiplier}`;
      
    const activeBaggageLabel = islandPosting 
      ? `${baseBaggage.kg} + 2000` 
      : `${baseBaggage.kg}`;

    const detailBaggageString = isCompletelyDisentitled
      ? 'Baggage claim allocation restricted to 0% due to deployment status criteria rules.'
      : `Authorised Slab: ${assignedMaxLabel} kg (${baggageMultiplier * 100}% framework adjustment value)\nMaximum Slab: ${activeBaggageLabel} kg (${maxSlabText} baseline capacity limit)\nMaximum Cap: ${maxCapText} matching specified mileage criteria.`;

    return {
      basicPay,
      distance,
      ctg,
      eligibleBaggageCharges,
      baggageDistanceValue,
      vehicleCharges,
      vehicleDetailString,
      total,
      ctgReason,
      isCompletelyDisentitled,
      disentitlementReason,
      detailBaggageString
    };
  }, [form, selectedRankProfile]);

  // Handle baseline Scale Travel Book Entitlements block structural configuration flags
  const activeEntitlements = useMemo(() => {
    if (calculation.isCompletelyDisentitled) return null;
    return payGroups[selectedRankProfile.payGroup] || null;
  }, [selectedRankProfile.payGroup, calculation.isCompletelyDisentitled]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 py-8 antialiased pb-16 selection:bg-amber-500/20 selection:text-blue-950 min-h-screen bg-gradient-to-b from-blue-950 to-slate-950 text-slate-900 box-sizing-border font-sans text-base">
      
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

      {/* INDIAN NAVY LOGISTICS HEADER COMPONENT */}
      <div className="relative border-blue-900/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 overflow-hidden rounded-3xl border bg-gradient-to-b from-blue-950 to-slate-950 p-8 backdrop-blur-xl shadow-xl mb-8">
        <div className="absolute inset-0 bg-grid-shader pointer-events-none opacity-60" />
        <div className="space-y-3 z-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-1 border border-amber-400/30 text-xs font-black bg-amber-400 text-blue-950 uppercase tracking-wider shadow-sm rounded-md">
              Calculators
            </span>
            <p className="text-sm font-bold tracking-widest uppercase text-amber-400">
              TR READY RECKONER
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md uppercase">
            Permanent Duty Move Calculator
          </h2>
          <p className="max-w-4xl text-base md:text-lg font-medium leading-relaxed text-slate-400">
            Authorized calculation suite for Composite Transfer Grant (CTG), personal baggage allowances, and transport parameters matching the standard Travel Regulations Framework.
          </p>
        </div>
      </div>

      {/* DETAILED DOUBLE GRID FIELD LAYOUT */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] items-start relative z-10">
        
        {/* HOMEPAGE ALIGNED GLASS PANEL FORM */}
        <section className="rounded-3xl border border-white/10 bg-white/80 p-6 sm:p-8 space-y-8 backdrop-blur-xl shadow-2xl relative z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.01] to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-base font-black uppercase tracking-widest text-blue-950 border-b-2 border-slate-200/80 pb-2.5">
              Personnel & Route Specifications
            </h3>
          </div>
          
          <div className="grid grid-cols-1 gap-6 relative z-30">
            <div className="sm:col-span-2 group relative" style={{ zIndex: 100 }}>
              <Field label="Personnel Rank / Pay Designation">
                <CustomSelect 
                  value={form.rankId} 
                  options={RANKS_CONFIG} 
                  onChange={(e) => updateField('rankId', e.target.value)} 
                  isCategorized={true}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative" style={{ zIndex: 90 }}>
                <Field label="Basic Pay (₹)">
                  <Input type="number" value={form.basicPay} onChange={(e) => updateField('basicPay', e.target.value)} />
                </Field>
              </div>

              <div className="relative" style={{ zIndex: 89 }}>
                <Field label="HQ Station">
                  <CustomSelect 
                    value={form.hqStation} 
                    options={hqStationOptions} 
                    onChange={(e) => updateField('hqStation', e.target.value)} 
                  />
                </Field>
              </div>

              <div className="relative" style={{ zIndex: 88 }}>
                <Field label="Distance (Km)">
                  <Input type="number" value={form.distanceKm} onChange={(e) => updateField('distanceKm', e.target.value)} />
                </Field>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-base font-black uppercase tracking-widest text-blue-950 border-b-2 border-slate-200/80 pb-2.5 pt-4">
              Transit Modalities & Baggage
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative group" style={{ zIndex: 80 }}>
              <Field label="Change of Residence?">
                <CustomSelect 
                  value={form.residenceChanged} 
                  options={yesNoOptions} 
                  onChange={(e) => updateField('residenceChanged', e.target.value)} 
                />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 79 }}>
              <Field label="Family Accompanied Move?">
                <CustomSelect 
                  value={form.familyMoved} 
                  options={yesNoOptions} 
                  onChange={(e) => updateField('familyMoved', e.target.value)} 
                />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 78 }}>
              <Field label="Personal Luggage Weight (Kg)">
                <Input type="number" value={form.baggageWeightKg} onChange={(e) => updateField('baggageWeightKg', e.target.value)} disabled={calculation.isCompletelyDisentitled} />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 77 }}>
              <Field label="Transfer Within Same City?">
                <CustomSelect 
                  value={form.sameCityTransfer} 
                  options={yesNoOptions} 
                  onChange={(e) => updateField('sameCityTransfer', e.target.value)} 
                  disabled={calculation.isCompletelyDisentitled}
                />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 76 }}>
              <Field label="Island Special Deployment?">
                <CustomSelect 
                  value={form.islandPosting} 
                  options={yesNoOptions} 
                  onChange={(e) => updateField('islandPosting', e.target.value)} 
                  disabled={calculation.isCompletelyDisentitled}
                />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 75 }}>
              <Field label="Private Vehicle Dispatched?">
                <CustomSelect 
                  value={form.privateVehicleTransported} 
                  options={yesNoOptions} 
                  onChange={(e) => updateField('privateVehicleTransported', e.target.value)} 
                  disabled={calculation.isCompletelyDisentitled || (form.hqStation === 'Same' && form.residenceChanged === 'Yes')}
                />
              </Field>
            </div>

            <div className="relative group" style={{ zIndex: 74 }}>
              <Field label="Unladen Car Weight (Kg)">
                <Input type="number" value={form.unladenVehicleWeightKg} onChange={(e) => updateField('unladenVehicleWeightKg', e.target.value)} disabled={form.privateVehicleTransported === 'No' || calculation.isCompletelyDisentitled || (form.hqStation === 'Same' && form.residenceChanged === 'Yes')} />
              </Field>
            </div>

            {/* ONLY RENDER THE CHENNAI/STEAMER FIELDS IF ISLAND POSTING + PRIVATE VEHICLE TRANSPORTED ARE SET TO "YES" */}
            {form.islandPosting === 'Yes' && form.privateVehicleTransported === 'Yes' && (
              <>
                <div className="relative group" style={{ zIndex: 73 }}>
                  <Field label="Distance to Chennai (Km)">
                    <Input type="number" value={form.distanceToChennai} onChange={(e) => updateField('distanceToChennai', e.target.value)} disabled={calculation.isCompletelyDisentitled} />
                  </Field>
                </div>

                <div className="relative group" style={{ zIndex: 72 }}>
                  <Field label={
                    <div className="flex justify-between items-center w-full pr-1">
                      <span>Vehicle Type (Steamer Rate)</span>
                      <button 
                        type="button" 
                        onClick={() => setShowSteamerRates(true)} 
                        className="text-amber-600 hover:text-amber-700 underline text-[11px] tracking-normal normal-case font-bold z-50 relative pointer-events-auto cursor-pointer"
                      >
                        View Rates
                      </button>
                    </div>
                  }>
                    <CustomSelect 
                      value={form.steamerRate} 
                      options={steamerRateOptions} 
                      onChange={(e) => updateField('steamerRate', e.target.value)} 
                      disabled={calculation.isCompletelyDisentitled}
                    />
                  </Field>
                </div>
              </>
            )}
            
          </div>
        </section>

        {/* SIDEBAR BLOCK REPLICATING HOMEPAGE PANELS */}
        <aside className="space-y-6 relative z-10">
          
          {/* ADMISSIBLE GRAND TOTAL BOARD */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950 to-slate-950 p-6 sm:p-8 shadow-2xl backdrop-blur-xl group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/10 to-transparent rounded-3xl blur-xl opacity-20 pointer-events-none" />
            
            <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400 z-10 relative">Total Admissible Claims Estimate</p>
            <p className="mt-2 text-4xl sm:text-6xl font-black tracking-tight text-white font-mono z-10 relative">
              <AnimatedMoney targetValue={calculation.total} />
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 font-semibold border-t border-slate-800 pt-3 z-10 relative">
              Final auditing figures rely strictly on validated physical documentation submittals at command ledger checkpoints.
            </p>
          </div>

          {/* DYNAMIC ENTITLEMENT ALLOWANCES */}
          {activeEntitlements ? (
            <div className="rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950 to-slate-950 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-5 group relative">
              <p className="text-sm font-black uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2.5 z-10 relative">
                ⚓ Scale Travel Book Entitlements
              </p>
              <div className="divide-y divide-slate-800 text-sm sm:text-base space-y-4 z-10 relative">
                <div className="flex flex-col sm:flex-row sm:justify-between items-start pt-1 gap-2">
                  <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[120px]">Rail Profile:</span>
                  <span className="text-white font-bold text-left leading-relaxed">{activeEntitlements.rail} <span className="text-amber-400 font-black">({activeEntitlements.shatabdi})</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start pt-4 gap-2">
                  <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[120px]">Air Option:</span>
                  <span className="text-white font-bold text-left leading-relaxed">{activeEntitlements.air}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between items-start pt-4 gap-2">
                  <span className="font-black text-slate-400 tracking-wider uppercase whitespace-nowrap min-w-[120px]">Road Option:</span>
                  <span className="text-slate-300 font-semibold text-left leading-relaxed">{activeEntitlements.road}</span>
                </div>
              </div>
            </div>
          ) : calculation.isCompletelyDisentitled && (
            <div className="rounded-3xl border border-red-900/40 bg-gradient-to-b from-red-950/40 to-slate-950 p-6 shadow-2xl backdrop-blur-xl text-center">
              <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-1">Scale Travel Entitlements Suspended</p>
              <p className="text-sm font-semibold text-slate-400">{calculation.disentitlementReason}</p>
            </div>
          )}

          {/* UNIFORM STRUCTURED TILES */}
          <div className="grid grid-cols-1 gap-5 w-full">
            <ResultCard
              title="Composite Transfer Grant (CTG)"
              value={calculation.ctg}
              detail={calculation.ctgReason}
            />

            <ResultCard
              title="Baggage Personal Allowance"
              value={calculation.eligibleBaggageCharges}
              detail={calculation.detailBaggageString}
            />

            <ResultCard
              title="Vehicle Transport Allocation"
              value={calculation.vehicleCharges}
              detail={calculation.vehicleDetailString}
            />
          </div>

        </aside>
      </div>

      {/* STEAMER RATES MODAL */}
      {showSteamerRates && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity cursor-pointer" onClick={() => setShowSteamerRates(false)}></div>
          <div className="relative bg-gradient-to-b from-blue-950 to-slate-950 border border-blue-800/60 p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(30,58,138,0.3)] max-w-lg w-full text-slate-300 transform transition-all">
            <div className="absolute inset-0 bg-grid-shader pointer-events-none opacity-20 rounded-3xl" />
            <button 
              onClick={() => setShowSteamerRates(false)} 
              className="absolute top-5 right-5 text-slate-400 hover:text-amber-400 transition-colors bg-blue-900/30 hover:bg-blue-900/50 p-1.5 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2 bg-blue-900/50 rounded-lg border border-blue-700/50">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <div>
                <h3 className="text-amber-400 font-black uppercase tracking-widest text-sm">Vehicle Steamer Rates</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">w.e.f 01 Apr 25 • SCI Mainland</p>
              </div>
            </div>

            <div className="overflow-x-auto relative z-10 bg-slate-900/50 rounded-2xl border border-blue-900/40 p-2">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-800/50 text-slate-400 bg-blue-950/40">
                    <th className="py-3 px-4 font-black uppercase tracking-wider text-xs rounded-tl-xl">Types of Vehicle</th>
                    <th className="py-3 px-4 font-black uppercase tracking-wider text-xs rounded-tr-xl text-right">Rate (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/30">
                  <tr className="hover:bg-blue-900/20 transition-colors group">
                    <td className="py-3.5 px-4 font-semibold text-slate-200 group-hover:text-white transition-colors">Car (length 401 cms & above)</td>
                    <td className="py-3.5 px-4 text-amber-400 font-mono font-bold text-right">2,80,675/-</td>
                  </tr>
                  <tr className="hover:bg-blue-900/20 transition-colors group">
                    <td className="py-3.5 px-4 font-semibold text-slate-200 group-hover:text-white transition-colors">Car (length 351-400 cms)</td>
                    <td className="py-3.5 px-4 text-amber-400 font-mono font-bold text-right">2,41,525/-</td>
                  </tr>
                  <tr className="hover:bg-blue-900/20 transition-colors group">
                    <td className="py-3.5 px-4 font-semibold text-slate-200 group-hover:text-white transition-colors">Motor Cycle / Scooter</td>
                    <td className="py-3.5 px-4 text-amber-400 font-mono font-bold text-right">32,770/-</td>
                  </tr>
                  <tr className="hover:bg-blue-900/20 transition-colors group">
                    <td className="py-3.5 px-4 font-semibold text-slate-200 group-hover:text-white transition-colors">Moped without Gear</td>
                    <td className="py-3.5 px-4 text-amber-400 font-mono font-bold text-right">18,225/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* PMT DUTY CLAIM – DOCUMENT CHECKLIST */}
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
              PMT Duty Claim – Document Checklist
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
              Mandatory Audit Submissions
            </p>
          </div>
        </div>

        <div className="relative z-10 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {documentChecklistData.map((item, idx) => (
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