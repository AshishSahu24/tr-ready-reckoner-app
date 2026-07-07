import React from 'react';

export default function OfficerPMT() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook (Rule 67 TR)
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          📦 Permanent Duty Transfer: Serving Officers
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Definition:</strong> Any move on duty where, as per the expectation of the ordering authority, the individual shall perform duty at the new station for a period <span className="text-slate-900 font-semibold underline decoration-blue-500 decoration-2">exceeding 180 days</span> is officially classified as a Permanent Transfer.
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

      {/* COMPONENT ROUTING AUTHORITY NOTE */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-600 space-y-1">
        <p>⚓ <strong>Transferring Authorities (Appendix III Rule 4 TR):</strong></p>
        <p>• Permanent moves for <strong>Officers</strong> are issued exclusively by: <span className="font-semibold text-slate-900">NHQ, New Delhi</span>.</p>
        <p>• Permanent moves for <strong>Sailors</strong> are issued exclusively by: <span className="font-semibold text-slate-900">Commodore Bureau of Sailors (CABS), Mumbai</span>.</p>
        <p className="italic text-[11px] text-slate-500 mt-1">* Note: Moves under an official tour of inspection can never be classified as a permanent transfer. Classification cannot be revised after the move has officially commenced.</p>
      </div>

      {/* CORE ADMISSIBILITY MATRICES */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Frameworks</h3>
        <div className="space-y-3">
          
          {/* A. RAIL ENTITLEMENTS */}
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
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹10,000/- and above &amp; HAG+ scales</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600/- to ₹9,000/-</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400/- to ₹6,600/- &amp; Midshipmen</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Includes Dynamic Flexi-Fares across Premium, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto configurations.
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
                      <td className="p-3 font-medium text-slate-900">Service Chiefs / Vice Chiefs / Army Commanders &amp; equivalents / DGAFMS / GP ₹10,000+</td>
                      <td className="p-3 leading-relaxed">Actual public bus (including AC bus) <span className="font-bold text-slate-800">OR</span> Prescribed AC Taxi rates (when journey is actually performed by AC Taxi) <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for own scooter/motorcycle.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay ₹5,400/- to ₹9,000/-</td>
                      <td className="p-3 leading-relaxed">Actual public bus (including AC bus) <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates for auto-rickshaw, own scooter, motorcycle, or moped transits.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-slate-700 text-xs font-medium space-y-1 shadow-inner">
                <p className="font-bold text-blue-900 uppercase tracking-wider text-[10px]">Fixed Baseline Rates (Unprescribed Localities):</p>
                <p>• <strong>Own Car / Taxi Transit:</strong> ₹24 per Kilometer traveled.</p>
                <p>• <strong>Auto-Rickshaw / Scooter:</strong> ₹12 per Kilometer traveled.</p>
              </div>
            </div>
          </details>

          {/* C. AIR & MARITIME ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">✈️ Air &amp; 🚢 Maritime Steamer Flight Classes (Rules 58 &amp; 107)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">RANK PROFILES &amp; PAY LEVELS</th>
                      <th className="p-3">AIR ENTITLEMENT CLASS</th>
                      <th className="p-3">STANDARD SEA / RIVER STEAMER CLASS</th>
                      <th className="p-3">MAINLAND TO A&amp;N / LAKSHADWEEP (SCI)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Service Chiefs / Vice Chiefs / Army Commanders &amp; equivalents / DGAFMS / GP ₹10,000+</td>
                      <td className="p-3"><span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">Business/Club</span></td>
                      <td className="p-3 font-semibold text-slate-700">Highest Class (Level 9+)</td>
                      <td className="p-3 font-bold text-indigo-700">Deluxe Class</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600/- to ₹9,000/- (Pay Level 12 - 13)</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                      <td className="p-3 font-semibold text-slate-700">Highest Class (Level 9+)</td>
                      <td className="p-3 font-bold text-indigo-700">Deluxe Class</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400/- to ₹6,600/- (Pay Level 9 - 11)</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                      <td className="p-3 font-semibold text-slate-700">Highest Class (Level 9+)</td>
                      <td className="p-3 font-bold text-indigo-700">Deluxe Class</td>
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
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">💰 Core Admissible Surcharges (Rule 67)</h3>
        </div>
        
        <div className="p-4 text-xs space-y-6 leading-relaxed text-slate-600">
          {/* COMPOSITE TRANSFER GRANT & CONVEYANCE LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
              <span className="font-bold text-blue-900 uppercase tracking-wide text-[11px] block">1. Composite Transfer Grant (CTG)</span>
              <p>Payable with effect from 01 Jul 17 for transfers involving a change of station located at a distance of or exceeding 20 Kms from each other:</p>
              <ul className="list-disc pl-4 space-y-1 font-medium text-slate-900">
                <li><span className="text-blue-700">Standard Station Move:</span> <strong>80%</strong> of the last month's Basic Pay.</li>
                <li><span className="text-indigo-700">A&amp;N / Lakshadweep Moves:</span> <strong>100%</strong> of the last month's Basic Pay.</li>
              </ul>
              <p className="text-[10px] text-slate-500 italic font-normal">* Applies to all Officers in First Grade, including MNS officers, Midshipmen, and Honorary Commissioned Officers.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5">
              <span className="font-bold text-indigo-900 uppercase tracking-wide text-[11px] block">2. Personal Effects Baggage Scales (Rule 61A)</span>
              <p>Maximum weight allowances for transportation by rail/goods wagons or road freight:</p>
              <p>• <strong>Pay Level 12 and above (Cdr &amp; above):</strong> <span className="font-bold text-slate-900">6000 Kgs</span> by goods train / 4-wheeler wagon / 1 double container. Road rate: <span className="font-semibold text-blue-700">₹62.5/- per Km</span>.</p>
              <p>• <strong>Pay Level 10 to 11 (SLt to Lt Cdr):</strong> <span className="font-bold text-slate-900">6000 Kgs</span> by goods train / 4-wheeler wagon / 1 single container. Road rate: <span className="font-semibold text-blue-700">₹62.5/- per Km</span>.</p>
              <div className="border-t border-slate-200 pt-1.5 mt-1 text-[11px] text-slate-500">
                🚢 <strong>Sea Volume Metrics (Mainland to A&amp;N / Lakshadweep):</strong><br />
                6000 Kgs = <strong>914 Cubic Feet</strong> | 3000 Kgs = <strong>457 Cubic Feet</strong>
              </div>
            </div>
          </div>

          {/* PRIVATE CONVEYANCE MOTOR CAR REGULATIONS */}
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
              <p>• <strong>Propulsion Fare Splitting:</strong> If a car is sent under its own propulsion but the officer does not travel inside it, they remain entitled to a separate train/air/road transit fare. If they travel inside it, no separate passenger fare is admissible.</p>
              <p>• <strong>Ashore to Afloat Under-taking:</strong> On transfer from an ashore unit to afloat, the officer must sign an undertaking stating that the vehicle will not be sold within 12 months of arrival at the base port/SPR. A follow-up ownership verification certificate is required after 12 months.</p>
              <p>• <strong>Chauffeur / Cleaner Carriage:</strong> When a car is transported at government expense, one chauffeur or cleaner (other than a domestic servant) may travel at government expense. Re-imbursement is capped at actual expenditure or 2nd class rail fare, whichever is less. A certificate proving actual employment and expenditure must be rendered.</p>
              <p>• <strong>Private Truck Loading:</strong> If a car is transported by private truck over rail-connected stations, re-imbursement is restricted to the actual expenditure, the approved taxi rate at the starting point, or the passenger train freight charges—whichever is the lowest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 shadow-inner">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">📋 Mandatory Claims Audit Folder Checklist:</h4>
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