import React from 'react';

export default function PborTD() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          ⚓ Temporary Duty Transfer: PBOR
        </h2>
        <p className="text-xs text-slate-500 mt-1.5 max-w-3xl leading-relaxed">
          <strong>Definition:</strong> When ordered to move to a new station for an expected working timeframe of <span className="text-slate-800 font-semibold underline decoration-blue-500">180 days or less</span>, the transit movement is officially classified as Temporary Duty (TD).
        </p>
      </div>

      {/* CORE POLICY DIRECTIVE BANNER */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 shadow-sm space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-2">
          ⚠️ Mandatory Air Travel Directive &amp; Base Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/30">
            <p className="font-semibold text-white mb-1">1. Air India Monopolization Lifted</p>
            In view of the disinvestment of Air India, the compulsion for travel by Air India has been dispensed with for journeys where the Government of India bears the cost of air passage.
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/30">
            <p className="font-semibold text-white mb-1">2. Authorized Travel Agents Only</p>
            Air tickets <span className="text-amber-400 underline font-semibold">must</span> be purchased exclusively from these three authorized agencies:
            <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-400">
              <li>M/s Balmer Lawrie &amp; Company Limited (BLCL)</li>
              <li>M/s Ashok Travels &amp; Tours (ATT)</li>
              <li>Indian Railways Catering and Tourism Corp Ltd (IRCTC)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-950/40 border border-amber-900/50 p-4 rounded-xl text-xs text-amber-300 leading-relaxed">
          <strong>3. Relaxation Protocol:</strong> If tickets are booked via unauthorized external channels due to unavoidable circumstances, relaxation powers are strictly vested with the financial advisor of the ministry/department or a Head of Department not below the rank of Joint Secretary.
        </div>

        <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
          <p><strong>4. Transit Caveats:</strong></p>
          <p>• <strong>4.1 Rail Outages:</strong> Where places are not connected by rail, travel by AC Bus is allowed for those entitled to AC II-Tier and above by train. Deluxe/Ordinary bus is authorized for all others.</p>
          <p>• <strong>4.2 Road Travel Boundaries:</strong> For road travel between locations connected by rail networks, any public transport mode is allowed provided the cumulative fare does not exceed the entitled class train ticket price.</p>
          <p>• <strong>4.3 Class Downgrades:</strong> If berths in the entitled configuration are unavailable, personnel are authorized to travel in the immediate class below.</p>
        </div>
      </div>

      {/* MATRIX TABS BLOCK */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Tiers</h3>
        
        <div className="space-y-3">
          
          {/* A. RAILWAYS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200" open>
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚂 Railway Accommodations (TR 57 a)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <p className="text-xs text-slate-500 italic">Includes authorized travel via Premium, Premium Tatkal, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto trains. Reimbursement covers dynamic/flexi-fares and fixed Tatkal Seva charges.</p>
              
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY MATRIX RANGE</th>
                      <th className="p-3">STANDARD RAIL TIER</th>
                      <th className="p-3">PREMIUM / SHATABDI TIER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200 to ₹4,800</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-blue-700">AC Chair Car</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹4,200</td>
                      <td className="p-3">AC III Tier Class</td>
                      <td className="p-3 font-semibold text-blue-700">AC Chair Car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage Regulations</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4 text-xs">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY CLASSIFICATION</th>
                      <th className="p-3">ROAD TRANSIT ALLOWANCE ENTITLEMENT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200 to ₹4,800</td>
                      <td className="p-3 leading-relaxed">Actual fare by any public bus option <span className="font-semibold text-slate-900">(including AC Bus)</span> OR prescribed local auto-rickshaw rates for own scooter, motorcycle, or moped.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹2,400 up to ₹4,200</td>
                      <td className="p-3 leading-relaxed">Actual fare by any public bus option <span className="font-semibold text-slate-900">(excluding AC Bus)</span> OR prescribed local auto-rickshaw rates for auto-rickshaw/own two-wheeler modes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹2,400</td>
                      <td className="p-3 leading-relaxed">Actual fare by <span className="font-semibold text-slate-900">ordinary public bus only</span> OR prescribed auto-rickshaw / two-wheeler rates for actual mileage performed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* UNPRESCRIPTIVE RATE TRACKS */}
              <div className="bg-slate-50 border p-4 rounded-xl space-y-2 text-slate-700">
                <p className="font-bold text-slate-900 uppercase tracking-wider text-[10px] text-blue-900">Standard Rates (Where no specific State Transport Directorate rules exist):</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 list-disc pl-4 font-medium">
                  <li><strong>Own Car / Taxi:</strong> ₹24 / Km</li>
                  <li><strong>Auto-Rickshaw / Scooter:</strong> ₹12 / Km</li>
                  <li><strong>Foot Journeys:</strong> ₹12 / Km additional</li>
                </ul>
              </div>

              <p className="text-slate-500 italic bg-amber-50 p-3 rounded-lg border border-amber-100 text-[11px]">
                <strong>Medical &amp; Dispatcher Exceptions:</strong> Command dispatchers can authorize alternate transport modes under unique conditions. Sick or invalid personnel can be assigned higher-scale transport options if deemed essential by the hospital's Commanding Officer, with justifications recorded on file.
              </p>
            </div>
          </details>

          {/* C. AIR ENTITLEMENT */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">✈️ Air Travel Eligibility</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200 max-w-md">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY BASE</th>
                      <th className="p-3">AIR TRANSIT STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200 to ₹4,800</td>
                      <td className="p-3"><span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-0.5 rounded border border-blue-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹4,200</td>
                      <td className="p-3"><span className="bg-rose-50 text-rose-700 font-semibold px-2.5 py-0.5 rounded border border-rose-200">Not Entitled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* DAILY ALLOWANCE FRACTIONS */}
      <section className="space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">💰 Daily Allowance (DA) Allocation</h3>
          <p className="text-xs text-slate-500 mt-0.5">Calculated continuously from departure to return. Full DA is allocated per midnight-to-midnight block. Short-duration fractions scale down as follows:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border p-4 rounded-xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider block text-slate-400">Absence &lt; 6 Hours</span>
            <span className="text-xl font-black text-slate-800 block mt-1">30% Rate</span>
          </div>
          <div className="bg-white border p-4 rounded-xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider block text-slate-400">Absence 6 to 12 Hours</span>
            <span className="text-xl font-black text-amber-600 block mt-1">70% Rate</span>
          </div>
          <div className="bg-white border p-4 rounded-xl text-center border-blue-200 bg-blue-50/20">
            <span className="text-xs font-bold uppercase tracking-wider block text-blue-500">Absence &gt; 12 Hours</span>
            <span className="text-xl font-black text-blue-900 block mt-1">100% Full DA</span>
          </div>
        </div>

        {/* REIMBURSEMENT LIMITATIONS MATRIX */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-700">
                <th className="p-4 w-1/3">GRADE PAY / LEVEL DETAILS</th>
                <th className="p-4 w-2/3">CEILING BOUND EXPENDITURES PER DIEM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 leading-relaxed">
              <tr>
                <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                  Grade Pay ₹4,200 to ₹4,800
                  <span className="block font-medium text-blue-600 mt-1 text-[10px]">Pay Level 6 to 8</span>
                </td>
                <td className="p-4 space-y-1">
                  <p>🏨 <strong>Hotel Cap:</strong> Accommodations up to <span className="font-semibold text-slate-900">₹937 per day</span>.</p>
                  <p>🚖 <strong>City Transit:</strong> Internal city transport claims up to <span className="font-semibold text-slate-900">₹281 per day</span>.</p>
                  <p>🍽️ <strong>Food Lump-sum:</strong> Set at <span className="font-semibold text-slate-900">₹1,000 per day</span>.</p>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                  Grade Pay Below ₹4,200
                  <span className="block font-medium text-blue-600 mt-1 text-[10px]">Pay Level 5 and below</span>
                </td>
                <td className="p-4 space-y-1">
                  <p>🏨 <strong>Hotel Cap:</strong> Accommodations up to <span className="font-semibold text-slate-900">₹562 per day</span>.</p>
                  <p>🚖 <strong>City Transit:</strong> Internal city transport claims up to <span className="font-semibold text-slate-900">₹141 per day</span>.</p>
                  <p>🍽️ <strong>Food Lump-sum:</strong> Set at <span className="font-semibold text-slate-900">₹625 per day</span>.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* REGULATORY COMPLIANCE PARAGRAPHS */}
        <div className="bg-slate-50 rounded-xl p-4 border text-xs text-slate-600 space-y-2.5 leading-relaxed">
          <p>📋 <strong>Claims Auditing Rules:</strong></p>
          <p>• <strong>Voucher-Free Hotel Claims:</strong> For Level 8 and below, lodging claims up to the specified ceiling can be processed without physical slips using a self-certified statement detailing the dates and location/dwelling names. However, for stay allocations within **Class 'X' Cities**, employees up to Level 6 have an enhanced ceiling of <span className="text-slate-900 font-bold">₹1,000 per day</span>, which requires standard voucher submissions for reimbursement.</p>
          <p>• <strong>Voucher-Free Transit Processing:</strong> For Levels 11 and below, local city transit claims can be processed entirely voucher-free up to the ceiling using self-certified forms that clearly state the dates, distances, and vehicle registration numbers.</p>
          <p>• <strong>Food Bills Simplification:</strong> Separate food bill processing is discontinued. The table values act as a guaranteed flat-rate lump sum paid based on travel duration, requiring no restaurant receipts. This mirrors Indian Railways methodologies.</p>
          <p>• <strong>Dearness Allowance (DA) Scaling Factor:</strong> Whenever the baseline Dearness Allowance index increases by 50%, all monetary limits across hotel ceilings, city transit caps, food lump sums, and foot mileage allowances will automatically <span className="text-slate-900 font-bold">escalate by 25%</span>.</p>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS */}
      <div className="border border-blue-200 bg-blue-50/50 rounded-2xl p-5 shadow-sm">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">📋 Documents Required for Claim:</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Standard Claim Proforma (in Duplicate)</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Journey Entitlement Details</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">TY Duty Entitlement</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Movement Order (Officers Only)</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Authority Letter for TY Duty</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">System Generated Genforms</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Advance Payment Voucher</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Nil Advance Certificate</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Cash TA Sanction</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">NAC &amp; Detention Certificate</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Copy of Service Extract (SE)</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Confirmed Train/Air Tickets &amp; Boarding Passes</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Sanction from Rank of Rear Admiral (RAdm) &amp; Above</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Road Move Sanction</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Taxi Bills / Hotel Bills / Self-Certificate</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Enforced Halt Sanction</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Copy of e-MRO</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">Self-Undertaking Certificate</span>
          <span className="bg-white border border-blue-200 px-3 py-1 rounded-full font-medium text-blue-950 shadow-sm">All Xerox Copies Duly Attested</span>
        </div>
      </div>

    </div>
  );
}