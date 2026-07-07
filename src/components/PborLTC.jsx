import React from 'react';

export default function PborLTC() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook (TR Rules 183 &amp; 184)
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          🎫 Leave Travel Concession (LTC): Sailors &amp; PBOR
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Framework Overview:</strong> Regulates free travel warrants, concession vouchers (IAFT-1720), and specialty sector airline conversions for Personnel Below Officer Rank (PBOR) and their families.
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
            Following the disinvestment of Air India, mandatory travel by Air India is fully dispensed with on all journeys where the Government of India bears the cost of air passage.
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

        <div className="bg-amber-950/40 border border-amber-900/50 p-4 rounded-xl text-xs text-amber-300 leading-relaxed shadow-inner">
          <strong>3. Relaxation Authority:</strong> In unavoidable circumstances where booking is done via unauthorized platforms, relaxation can be granted only by the financial advisor of the ministry/department or a Head of Department not below the rank of Joint Secretary in subordinate/attached offices.
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">4. Transit Verification Parameters:</p>
          <p>• <strong className="text-slate-300">4.1 No Rail Links:</strong> Travel by AC Bus is allowed for those entitled to AC II-Tier and above by train. Deluxe or Ordinary public buses are authorized for all others.</p>
          <p>• <strong className="text-slate-300">4.2 Road Limits:</strong> Road journeys between sectors connected by rail are permitted via any public transport mode, provided the total claimed fare does not exceed the entitled class train fare.</p>
          <p>• <strong className="text-slate-300">4.3 Berths Non-Availability:</strong> In cases of full booking or seat scarcity in the entitled tier, personnel may travel in a lower class configuration.</p>
        </div>
      </div>

      {/* CORE ADMISSIBILITY MATRICES */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Matrices</h3>
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
                      <th className="p-3">GRADE PAY MATRIX RANGE</th>
                      <th className="p-3">STANDARD RAIL EXPONENT</th>
                      <th className="p-3">PREMIUM / SHATABDI / RAJDHANI TIER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200/- to ₹4,800/-</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹4,200/-</td>
                      <td className="p-3">AC III Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Includes dynamic flexi-fare scaling on Premium, Premium Tatkal, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto networks during official leave sectors.
              </p>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage &amp; Transit Limits</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 text-xs space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY PROFILE</th>
                      <th className="p-3">ROAD TRANSIT AUTHORIZATION MODES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200/- to ₹4,800/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus including AC bus <span className="font-semibold text-slate-800">OR</span> Prescribed auto-rickshaw rates for auto-rickshaw, own scooter, motorcycle, etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹2,400/- and above but less than ₹4,200/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus <span className="underline font-semibold text-slate-900">other than AC bus</span> <span className="font-semibold text-slate-800">OR</span> Prescribed rates for auto-rickshaw/own scooter/motorcycle.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹2,400/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by <span className="font-semibold text-slate-900">ordinary public bus only</span> <span className="font-semibold text-slate-800">OR</span> Prescribed rates for auto-rickshaw/own scooter/motorcycle/moped.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-600 leading-relaxed text-xs">
                <strong>⚠️ Chartered Vehicle Restriction:</strong> Reimbursement for journeys executed via private chartered buses, vans, or un-enlisted tracking vehicles is strictly <span className="text-red-600 font-bold">not admissible</span>. Road journeys between sectors un-connected by rail must utilize certified state public transit options or Public Sector Tourism Development Corporations.
              </div>
            </div>
          </details>

          {/* C. AIR ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">✈️ Air Travel Eligibility Tiers</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY PROFILE</th>
                      <th className="p-3">AIR PASSAGE CONCESSION TIERS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay ₹4,200/- to ₹4,800/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200">Economy Class Only</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay Below ₹4,200/-</td>
                      <td className="p-3"><span className="bg-red-50 text-red-700 font-bold px-2.5 py-1 rounded-md border border-red-200">Not Entitled by Air Baseline</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* CORE REGULATORY FRAMEWORK BREAKDOWN */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">📜 Regulatory Framework: Rules 183 &amp; 184 Breakdown</h3>
        </div>
        
        <div className="p-4 text-xs space-y-5 leading-relaxed text-slate-600">
          <div>
            <p className="font-bold text-slate-900 text-[13px] mb-1">1. Rule 183 — Personal Expense Concession Voucher (IAFT-1720)</p>
            <p className="pl-2">
              • When traveling on leave at personal expense, production of Form **IAFT-1720** entitles the individual and their dependent families to travel in their authorized class configuration on payment of <span className="text-slate-900 font-bold">exactly half (50%) of the public tariff fare</span>.
            </p>
            <p className="pl-2 mt-1">
              • **Voucher Non-Availability:** If the form is unavailable at the unit asset counter, the concessional half-fare component can be reimbursed retroactively on submission of a certified Non-Availability Certificate (NAC) issued by the controlling officer.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-slate-900 text-[13px] mb-1">2. Rule 184 (i) &amp; (ii) — Sailor &amp; Family Annual Home Town Concession</p>
            <p className="pl-2">
              • **Sailor Entitlement:** Entitled to a free railway warrant once per calendar year to travel via the direct main route to their Home Town or Selected Place of Residence (SPR).
            </p>
            <p className="pl-2 mt-1">
              • **Family Entitlement:** Entitled to one free annual transit loop from duty station to hometown and back via **IAFT-1707 (Family or Party Warrant)** or Cash TA. Family members can execute travel independently of the sailor, provided the return transit wraps up within <span className="text-slate-900 font-semibold">6 months</span> from the outward journey's initiation date.
            </p>
            <p className="pl-2 mt-1">
              • **Separated Family Reverse Route:** If the family lives separately at the hometown/SPR, they can use this concession to visit the sailor at his active duty station instead. In this scenario, the sailor's personal entitlement for that calendar year lapses.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-slate-900 text-[13px] mb-1">3. Rule 184 (iii) — Anywhere in India Concession (Alternate Years)</p>
            <p className="pl-2">
              • Admissible once every alternate year to travel to any declared holiday station within India. This concession cannot be combined with the hometown warrant in the same calendar year. If families are stationed away due to non-family posts or a lack of married quarters, their transit can originate directly from their hometown or SPR to the selected visit destination, capped at the distance from the official duty station.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-slate-900 text-[13px] mb-1">4. Rule 180 — Special Cadres: Aviation, Submarines &amp; MARCOS</p>
            <p className="pl-2">
              • PBORs serving in authorized cadres for **Naval Aviation, Submarines, and Marine Commandos (MARCOS)** are granted <span className="text-blue-700 font-bold">one additional free rail warrant per year</span> up to a total distance limit of 1600 Kms (800 Kms in each direction). 
            </p>
            <p className="pl-2 mt-1">
              • Concession vouchers issued under this rule are capped at 800 Kms for a single direction. Personnel can draw an advance up to <span className="text-slate-900 font-bold">80% of the government liability</span> to secure tickets in exchange for these vouchers.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-slate-900 text-[13px] mb-1">5. En-Route Journey Breaks &amp; Specialty Area Conversions</p>
            <p className="pl-2">
              • **Breaking Journey:** Personnel are not issued multiple warrants to facilitate mid-route stopovers beyond standard railway limits. To break a journey midway, the individual must fund the transit out-of-pocket and claim reimbursement restricted to the value of a direct, single rail warrant upon return.
            </p>
            <p className="pl-2 mt-1">
              • **Specialty Sector Air Conversion Option:** Personnel are authorized to convert their Home Town LTC into air passage via private airlines when visiting **Jammu &amp; K&K (from Delhi/Amritsar)**, the **North Eastern Region (from Kolkata/Guwahati)**, or **Port Blair (from Bhubaneswar/Chennai/Kolkata)**. Link transits to these departure hubs remain regulated via standard rail class warrants.
            </p>
            <p className="pl-2 mt-1">
              • **Andaman &amp; Nicobar (A&amp;N) Sector:** Personnel stationed at A&amp;N Islands receive **one additional free railway warrant (including sea passage)** per year to travel to their hometown or SPR. Hostel-residing children of all deployed personnel are similarly entitled to annual LTC warrants to visit family quarters or duty stations (Rule 191).
            </p>
          </div>
        </div>
      </section>

      {/* REQUIRED AUDIT CHECKLIST FOOTER */}
      <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 shadow-inner">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">📋 Mandatory Claims Audit Folder Checklist:</h4>
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