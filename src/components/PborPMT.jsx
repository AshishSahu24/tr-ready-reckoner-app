import React from 'react';

export default function PborPMT() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook (Rule 67 &amp; 70 TR)
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          📦 Permanent Duty Transfer: Sailors &amp; PBOR
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Definition:</strong> Any move on duty where, as per the expectation of the ordering authority, the individual shall perform duty at the station to which the transfer is ordered for a period <span className="text-slate-900 font-semibold underline decoration-blue-500 decoration-2">exceeding 180 days</span> is classified as a Permanent Transfer.
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
            Following the disinvestment of Air India, mandatory travel rules via Air India are fully dispensed with on all journeys where the Government of India bears the cost of air passage.
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
          <strong>3. Relaxation Authority:</strong> In unavoidable circumstances where booking is processed via unauthorized platforms, relaxation can be granted solely by the financial advisor of the ministry/department or a Head of Department not below the rank of Joint Secretary in subordinate/attached offices.
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">4. Transit Verification Parameters:</p>
          <p>• <strong className="text-slate-300">4.1 No Rail Links:</strong> Travel by AC Bus is authorized for those entitled to AC II-Tier and above by train. Deluxe/Ordinary bus is authorized for others.</p>
          <p>• <strong className="text-slate-300">4.2 Road Travel Over Rail Routes:</strong> Road travel between stations connected by rail is allowed via any public transport mode, provided the total fare does not exceed the entitled class train fare.</p>
          <p>• <strong className="text-slate-300">4.3 Berths Seat Scarcity:</strong> In cases of non-availability of berths within the entitled class, personnel are authorized to travel in a lower class configuration.</p>
        </div>
      </div>

      {/* CORE ADMINISTRATIVE JURISDICTION NOTE */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-600 space-y-1">
        <p>⚓ <strong>Transferring Authorities (Appendix III Rule 4 TR):</strong></p>
        <p>• Permanent moves for <strong>Sailors</strong> are issued exclusively by: <span className="font-semibold text-slate-900">Commodore Bureau of Sailors (CABS), Mumbai</span>.</p>
        <p>• Permanent moves for <strong>Officers</strong> are issued exclusively by: <span className="font-semibold text-slate-900">NHQ, New Delhi</span>.</p>
        <p className="italic text-[11px] text-slate-500 mt-1">* Note: Moves under an official tour of inspection can never be classified as a permanent transfer. Classification cannot be revised after the move has officially commenced.</p>
      </div>

      {/* ENTITLEMENT MATRICES */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Matrices</h3>
        <div className="space-y-3">
          
          {/* A. RAIL & SHATABDI ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200" open>
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚂 Railway Accommodations (TR 57 a)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY SCALES</th>
                      <th className="p-3">STANDARD RAIL EXPONENT</th>
                      <th className="p-3">PREMIUM / SHATABDI / RAJDHANI TIER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹4,200/- to ₹4,800/-</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car (Below 7,600 GP)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay Below ₹4,200/- &amp; Midshipmen</td>
                      <td className="p-3">AC III Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car (Below 7,600 GP)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Re-imbursement applies to dynamic/flexi-fares across Premium, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto express loops. Tatkal Seva fixed charges are continuously allowed.
              </p>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage Scales</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 text-xs space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY PROFILE</th>
                      <th className="p-3">ROAD MILEAGE ENTITLEMENT AUTHORIZATION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay ₹4,200/- to ₹4,800/-</td>
                      <td className="p-3 leading-relaxed">Actual public bus (including AC bus) <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for journeys by auto-rickshaw, own scooter, motorcycle, or moped etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay ₹2,400/- and above but less than ₹4,200/-</td>
                      <td className="p-3 leading-relaxed">Actual public bus <span className="underline font-semibold text-slate-900">other than AC bus</span> <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for own scooter/motorcycle.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay below ₹2,400/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by <span className="font-semibold text-slate-900">ordinary public bus only</span> <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw/scooter/motorcycle rates.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-slate-700 text-xs font-medium space-y-1 shadow-inner">
                <p className="font-bold text-blue-900 uppercase tracking-wider text-[10px]">Fixed Baseline Rates (Where unprescribed by State Localities):</p>
                <p>• <strong>Own Car / Taxi Transit:</strong> ₹24 per Kilometer traveled.</p>
                <p>• <strong>Auto-Rickshaw / Scooter:</strong> ₹12 per Kilometer traveled.</p>
              </div>
            </div>
          </details>

          {/* C. AIR & MARITIME STEAMER TIERS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">✈️ Air &amp; 🚢 Maritime Steamer Classes (Rules 58 &amp; 107)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">PAY LEVEL / GRADE PROFILE</th>
                      <th className="p-3">AIR TRANSIT CLASS</th>
                      <th className="p-3">STANDARD SEA / RIVER STEAMer</th>
                      <th className="p-3">MAINLAND TO A&amp;N / LAKSHADWEEP (SCI SHIPS)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pay Level 5A to 8 <span className="block text-[10px] text-blue-600 font-normal">Grade Pay ₹4,200 - ₹4,800</span></td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">Economy Class</span></td>
                      <td className="p-3">Lower class (if 2 classes only on the steamer)</td>
                      <td className="p-3 font-bold text-indigo-700">First / 'A' Cabin Class</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pay Level 4 and 5 <span className="block text-[10px] text-blue-600 font-normal">POs &amp; Grade Pay ₹2,400 - ₹2,800</span></td>
                      <td className="p-3"><span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded border border-red-200">Not Entitled</span></td>
                      <td className="p-3">If 2 classes: lower class. If 3 classes: middle/2nd class. If 4 classes: 3rd class.</td>
                      <td className="p-3 font-bold text-slate-700">Second / 'B' Cabin Class</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Pay Level 3 and below <span className="block text-[10px] text-blue-600 font-normal">LS &amp; below / GP under ₹2,400</span></td>
                      <td className="p-3"><span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded border border-red-200">Not Entitled</span></td>
                      <td className="p-3">Lowest Class</td>
                      <td className="p-3 font-bold text-slate-700">Bunk Class</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* CORE REIMBURSEMENT ENTITLEMENT ALIGNMENTS */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">💰 Core Admissible Surcharges (Rule 67 &amp; 70)</h3>
        </div>
        
        <div className="p-4 text-xs space-y-6 leading-relaxed text-slate-600">
          {/* COMPOSITE TRANSFER GRANT & BAGGAGE ALLOWANCE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
              <span className="font-bold text-blue-900 uppercase tracking-wide text-[11px] block">1. Composite Transfer Grant (CTG)</span>
              <p>Admissible for transfers involving a change of station located at a distance of or exceeding 20 Kms from each other:</p>
              <ul className="list-disc pl-4 space-y-1 font-medium text-slate-900">
                <li><span className="text-blue-700">Standard Station Move:</span> <strong>80%</strong> of the last month's Basic Pay.</li>
                <li><span className="text-indigo-700">A&amp;N Islands / Lakshadweep Moves:</span> <strong>100%</strong> of the last month's Basic Pay.</li>
              </ul>
              <p className="text-[10px] text-slate-500 italic font-normal">* Applies globally across all sailors and non-commissioned slots.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5">
              <span className="font-bold text-indigo-900 uppercase tracking-wide text-[11px] block">2. Personal Effects Baggage Scales (Rule 61A)</span>
              <p>Maximum weight thresholds authorized for carriage by rail/goods wagons or road freight:</p>
              <ul className="space-y-2 list-none">
                <li>
                  <strong>Pay Level 5A &amp; 6 to 11 (CPO/Art, Mech III &amp; above):</strong><br />
                  <span className="font-bold text-slate-900">6000 Kgs</span> by goods train / 4-wheeler wagon / 1 single container. Road rate: <span className="font-semibold text-blue-700">₹62.5/- per Km</span>.
                </li>
                <li>
                  <strong>Pay Level 5 (Petty Officers):</strong><br />
                  <span className="font-bold text-slate-900">3000 Kgs</span>. Road rate: <span className="font-semibold text-blue-700">₹31.25/- per Km</span>.
                </li>
                <li>
                  <strong>Pay Level 4 and below (Leading Seaman &amp; below):</strong><br />
                  <span className="font-bold text-slate-900">1500 Kgs</span>. Road rate: <span className="font-semibold text-blue-700">₹18.75/- per Km</span>.
                </li>
              </ul>
              <div className="border-t border-slate-200 pt-1.5 mt-1 text-[11px] text-slate-500">
                🚢 <strong>Sea Volume Equivalents (Mainland to Islands Sectors):</strong><br />
                6000 Kgs = <strong>914 Cu. Ft.</strong> | 3000 Kgs = <strong>457 Cu. Ft.</strong> | 1500 Kgs = <strong>227 Cu. Ft.</strong>
              </div>
            </div>
          </div>

          {/* PRIVATE CONVEYANCE TRANSFER SCALES */}
          <div className="border-t border-slate-100 pt-4 space-y-3">
            <p className="font-bold text-slate-900 text-[13px]">🚗 Private Vehicle Transportation Framework</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded-xl border">
                <span className="font-bold text-slate-900 text-[11px] block mb-1">Scale Authorization:</span>
                • <strong>Pay Level 6 and above (CPO &amp; above):</strong> One motor car, or one motorcycle/scooter, or one horse.<br />
                • <strong>Pay Level 5 and below (PO &amp; below):</strong> One motorcycle/scooter/moped, or one bicycle.
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border">
                <span className="font-bold text-slate-900 text-[11px] block mb-1">Transit Rules (Sectors Connected by Rail):</span>
                • Car transit must be claimed on cash TA at railway risk via passenger/goods train freight. <span className="text-red-600 font-semibold">A warrant cannot be issued for this purpose</span>.<br />
                • If moved under its own power over rail-connected routes, a taxi allowance approved by the starting point's Directorate of Transport is admissible, limited to the passenger train freight cost. If road-only, the full taxi rate applies.
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-slate-700 text-xs space-y-1.5 leading-relaxed">
              <p>• <strong>Propulsion Fare Splitting:</strong> If a vehicle is sent under its own propulsion but the individual does not travel inside it, they remain entitled to a separate train/air/road transit fare. If they travel inside it, no separate passenger fare is admissible.</p>
              <p>• <strong>Ashore to Afloat Under-taking:</strong> On transfer from an ashore unit to afloat, an undertaking will be obtained from the individual that the vehicle will not be sold within a period of 12 months of its arrival at the base port/SPR. A follow-up ownership verification certificate is required after 12 months.</p>
              <p>• <strong>Chauffeur / Cleaner Carriage:</strong> When a car is transported at government expense, one chauffeur or cleaner (other than a domestic servant) may travel at government expense. Re-imbursement is capped at actual expenditure or 2nd class rail fare, whichever is less. A certificate proving actual employment and expenditure must be rendered.</p>
              <p>• <strong>Private Truck Loading:</strong> If a vehicle is transported by private truck over rail-connected stations, re-imbursement is restricted to the actual expenditure, the approved taxi rate at the starting point, or the passenger train freight charges—whichever is the lowest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 shadow-inner">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">📋 Documets required for Claim:</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Standard Claim Proforma (in Duplicate)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Journey Entitlement Details</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Transfer Entitlement Details</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">System Generated Genforms</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Advance Payment Voucher</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Nil Advance Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Cash TA Sanction</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Appointment Letter</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Service Extract (SE)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Train/Air Tickets &amp; Boarding Passes</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Special Sanction (if applicable)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Quarter Vacation / Allotment / Retention Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Transporter Documents</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Lorry Number &amp; Distance Details</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Transporter Verification Documents</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Consignor &amp; Consignee Address</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Genuineness Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">No Demand Certificate (NDC)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Previous Claim Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Vehicle Documents</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Essential Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Consignment Receipt</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">e-MRO Copy</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Self-Undertaking Certificate</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Permanent Residence Certificate / Service Book Copy</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Last Pay Drawn Certificate (LDPC)</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">Attested Xerox Copies</span>
        </div>
      </div>

    </div>
  );
}