import React from 'react';

export default function OfficerLTC() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          🎫 Leave Travel Concession (LTC): Service Officers
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Framework Overview:</strong> Governs free conveyance entitlements via dynamic service vectors (Warrants, Form 'D', Air Passage) for commissioned officers, their dependent families, and specialized tri-service cadres.
        </p>
      </div>

      {/* MANDATORY POLICY ALERT BANNER */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
          ⚠️ Mandatory Air Travel Directive &amp; Agent Channels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <p className="font-bold text-white mb-1 text-sm border-b border-slate-700 pb-1">1. Air India Monopolization Lifted</p>
            Following the disinvestment of Air India, compilation rules forcing mandatory Air India ticketing are fully dispensed with. This applies to all journeys where the Government of India bears the cost of air passage.
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <p className="font-bold text-white mb-1 text-sm border-b border-slate-700 pb-1">2. Authorized Travel Agents Only</p>
            Air tickets <span className="text-amber-400 underline font-semibold">must</span> be purchased exclusively from these three authorized channels:
            <ul className="list-disc pl-4 mt-1.5 space-y-1 text-slate-300">
              <li>M/s Balmer Lawrie &amp; Company Limited (BLCL)</li>
              <li>M/s Ashok Travels &amp; Tours (ATT)</li>
              <li>Indian Railways Catering and Tourism Corp Ltd (IRCTC)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-950/60 border border-amber-900/60 p-4 rounded-xl text-xs text-amber-300 leading-relaxed shadow-inner">
          <strong>3. Relaxation Authority:</strong> In unavoidable circumstances where booking is processed via unauthorized platforms, relaxation can be granted solely by the financial advisor of the ministry/department or a Head of Department not below the rank of Joint Secretary in subordinate/attached offices.
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">4. Transit Verification Parameters:</p>
          <p>• <strong className="text-slate-300">4.1 No Rail Connectivity:</strong> Admissible via AC Bus for personnel entitled to AC II-Tier and above by train. Deluxe or Ordinary bus networks are authorized for all other parameters.</p>
          <p>• <strong className="text-slate-300">4.2 Road Links Parallel to Rail:</strong> Admissible via any public transport mode, provided total claimed fare does not exceed the train fare of the entitled class.</p>
          <p>• <strong className="text-slate-300">4.3 Berths Seat Scarcity:</strong> In cases of non-availability of berths within the entitled class, personnel are authorized to travel in a lower class configuration.</p>
        </div>
      </div>

      {/* CORE ADMISSIBILITY MATRICES */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Frameworks</h3>
        <div className="space-y-3">
          
          {/* A. RAIL ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200" open>
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚂 Standard Railway Accommodations (TR 57 a)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY MATRIX SCALES</th>
                      <th className="p-3">STANDARD RAIL EXPONENT</th>
                      <th className="p-3">PREMIUM / SHATABDI / RAJDHANI TIER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹10,000/- and above &amp; HAG+ Scales</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600/- to ₹9,000/-</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400/- to ₹6,600/-</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Includes Premium, Premium Tatkal, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto trains while on official tour/training. Tatkal Seva reimbursement remains continuous.
              </p>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage &amp; Outstation Car Hire</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 text-xs space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY TRANSIT RANK</th>
                      <th className="p-3">ROAD MILEAGE ENTITLEMENT MANDATES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Service Chiefs / Vice Chiefs / Army Commanders &amp; equivalents / DGAFMS / GP ₹10,000+</td>
                      <td className="p-3 leading-relaxed">Actual public bus fare (including AC Bus) <span className="font-bold text-slate-800">OR</span> Prescribed mileage rates for AC Taxi when actually performed by AC Taxi <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for own scooter/motorcycle.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay ₹5,400/- to ₹9,000/-</td>
                      <td className="p-3 leading-relaxed">Actual public bus fare (including AC Bus) <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for journeys executed via auto-rickshaw, own scooter, or motorcycle transport.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* C. AIR ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">✈️ Air Travel Flight Tiers</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">RANK PROFILE CATEGORIES</th>
                      <th className="p-3">TRAVEL FLIGHT CLASS SELECTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Service Chiefs / Vice Chiefs / Army Commanders &amp; equivalents / DGAFMS / GP ₹10,000+</td>
                      <td className="p-3"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-md border border-emerald-200">Business / Club Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600/-, ₹8,000/-, ₹8,400/-, ₹8,700/-, ₹8,900/-, and ₹9,000/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400/-, ₹5,700/-, ₹6,100/-, and ₹6,600/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* SPECIAL THEATRE REGULATION CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LADAKH COLD WEATHER CONCESSION */}
        <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
          <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
            🏔️ Ladakh Region Winter Air Travel (TR 176-A)
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Admissible strictly for service personnel deployed within the Ladakh sector under localized parameters:
          </p>
          <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
            <li>Admissible timeline profile is bounded from <span className="text-slate-900 font-semibold">15th Nov to 15th March</span> only.</li>
            <li>Air passage is restricted exclusively to sectors between <span className="text-slate-900 font-semibold">Leh and Srinagar / Jammu / Chandigarh</span> (Onward &amp; Return).</li>
            <li>Subsequent link transits from outward hubs to Hometown / SPR are regulated via normal class rail/road entitlements.</li>
          </ul>
        </div>

        {/* FIRST YEAR ADMISSIBILITY LOGIC */}
        <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm">
          <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
            🎓 1st Year Admissibility Under Commission Loop
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Regulates transition parameters from cadet tracks to active commission loops:
          </p>
          <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
            <li>If LTC was utilized as a Midshipman or Sailor within the current calendar year, further officer LTC is <span className="text-red-500 font-semibold">not admissible</span>.</li>
            <li>If unavailed pre-commission, the officer is entitled to standalone concession under <span className="text-slate-900 font-semibold">Rule 177-B</span>.</li>
            <li>Upon completion of one full year of commissioned service, the officer transitions to standard cycles under <span className="text-slate-900 font-semibold">Rule 177-A</span>.</li>
          </ul>
        </div>
      </section>

      {/* CORE AUDIT RULES ACCORDION DECKS */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">📜 Regulatory Manual Framework Breakdown</h3>
        </div>
        
        <div className="p-4 text-xs space-y-4 leading-relaxed text-slate-600">
          <div>
            <p className="font-bold text-blue-700 text-[13px] mb-1">1. Rule 177 (A) — Home Town Concession Parameters</p>
            <p className="pl-2">
              • Admissible to officers proceeding on annual, casual, furlough, or maternity leave. Entitles free conveyance via shortest direct route to Hometown / Selected Place of Residence (SPR) once in the second year of service, and yearly thereafter. All India LTC can be taken in lieu of Hometown every alternate year.
            </p>
            <p className="pl-2 mt-1">
              • <strong>Family Coverage:</strong> Admissible once per calendar year for spouse, dependent children, and residing parents, sisters, or minor brothers wholly dependent on the officer.
            </p>
            <p className="pl-2 mt-1">
              • <strong>Separated Family Provision (PT/0619/LTC):</strong> If the family lives separately, they may utilize LTC to visit the officer at the duty station. In these circumstances, the officer's own entitlement for that calendar year lapses.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-blue-700 text-[13px] mb-1">2. Rule 177 (B) — Concession to Stations other than Home Town</p>
            <p className="pl-2">
              • Regulates travel to any declared place of visit within India during alternate years. Family members can execute travel independently of the officer. Return journeys must be completed within <span className="text-slate-900 font-semibold">6 months</span> from onward transit initiation.
            </p>
            <p className="pl-2 mt-1">
              • <strong>Warrant Configurations:</strong> Officers traveling by train will travel on warrant (Form-D for Rajdhani/Tejas), while their wives and dependent children will be granted actual fare reimbursements under Rule 176 limits.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-blue-700 text-[13px] mb-1">3. Specialized Operational Cadres Concessions (Rule 180)</p>
            <p className="pl-2">
              • Personnel borne on authorized cadres for <span className="text-slate-900 font-semibold">Naval Aviation, Submarines, and Marine Commandos (MARCOS)</span> are entitled to <span className="text-slate-900 font-bold">one additional free rail warrant per year</span> up to a maximum distance of 1600 Kms (800 Kms in each direction). This runs independently of standard Rule 177/184 privileges.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-blue-700 text-[13px] mb-1">4. Form 'D' Concessional Travel Allowances (Rule 181)</p>
            <p className="pl-2">
              • Entitles officers and dependent family members to holiday travel at personal expense on payment of <span className="text-slate-900 font-bold">60% of public tariff rates</span>. Restricted to **6 single-journey forms** per calendar year. Forms issued to dependent members (except spouse/children) must start from the official duty station.
            </p>
          </div>
        </div>
      </section>

      {/* REQUIRED AUDIT CHECKLIST FOOTER */}
      <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 shadow-inner">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">📋 Documents Required for claim:</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Standard Claim Proforma (in Duplicate)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">System Generated Genforms</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Advance Payment Voucher</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Nil Advance Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Cash TA Sanction</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Copy of Service Extract (SE)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Confirmed Train/Air Tickets &amp; Boarding Passes</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Sanction from Rank of Rear Admiral (RAdm) &amp; Above</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Copy of e-MRO</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Self-Undertaking Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">All Xerox Copies Duly Attested</span>
        </div>
      </div>

    </div>
  );
}