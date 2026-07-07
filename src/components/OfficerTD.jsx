import React from 'react';

export default function OfficersTD() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          🎖️ Temporary Duty Transfer: Serving Officers
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Definition:</strong> When you are ordered to move to a new station and are expected to work there for <span className="text-slate-900 font-semibold underline decoration-blue-500 decoration-2">180 days or less</span>, that move is officially classified as Temporary Duty (TD).
        </p>
      </div>

      {/* MANDATORY POLICY ALERT BANNER */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
          ⚠️ Mandatory Air Travel Directive &amp; Notes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <p className="font-bold text-white mb-1 text-sm border-b border-slate-700 pb-1">1. Air India Monopolization Lifted</p>
            In view of the disinvestment of Air India, the compulsion for travel by Air India has been dispensed with for journeys where the Government of India bears the cost of air passage.
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
          <strong>3. Relaxation Authority:</strong> In unavoidable circumstances where booking is done via unauthorized platforms, relaxation can be granted only by the financial advisor of the ministry/department or a Head of Department not below the rank of Joint Secretary in subordinate/attached offices.
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">4. Transit Caveats:</p>
          <p>• <strong className="text-slate-300">4.1 Rail Links:</strong> Where places are not connected by rail, travel by AC Bus is authorized for those entitled to AC II-Tier and above by train. Deluxe/Ordinary bus is authorized for others.</p>
          <p>• <strong className="text-slate-300">4.2 Road Limits:</strong> Road travel between places connected by rail is allowed via any public transport mode, provided total fare does not exceed the entitled class train fare.</p>
          <p>• <strong className="text-slate-300">4.3 Mileage Points:</strong> All mileage points earned on official tickets must be utilized by the department for other official travels. Private utilization will attract strict departmental action.</p>
          <p>• <strong className="text-slate-300">4.4 Seat Scarcity:</strong> In case of non-availability of berths in the entitled class, personnel may travel in a lower class configuration.</p>
        </div>
      </div>

      {/* ACCORDION DECKS */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Entitlement Matrices</h3>
        <div className="space-y-3">
          
          {/* A. RAIL ENTITLEMENTS */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200" open>
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚂 Railway Accommodations (TR 57 a)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4">
              <p className="text-xs text-slate-500 italic">Includes Premium, Premium Tatkal, Suvidha, Shatabdi, Rajdhani, Tejas, and Duronto trains while on official tour/training.</p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY / RANK RANKING</th>
                      <th className="p-3">STANDARD RAIL EXPONENT</th>
                      <th className="p-3">PREMIUM / SHATABDI / RAJDHANI TIER</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹10,000+ &amp; HAG+ scales</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600 to ₹9,000</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400 to ₹6,600 &amp; Midshipmen</td>
                      <td className="p-3">AC II Tier Class</td>
                      <td className="p-3 font-semibold text-indigo-700">AC Chair Car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage &amp; Outstation Car Hire (TR 103)</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 space-y-4 text-xs">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY / DESIGNATION RANKING</th>
                      <th className="p-3">ROAD MILEAGE ENTITLEMENT AUTHORIZATION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Service Chiefs, Vice Chiefs, Army Commanders &amp; Equivalents, DGAFMS, &amp; GP ₹10,000+</td>
                      <td className="p-3 leading-relaxed">Actual public bus (including AC bus) <span className="font-bold text-slate-800">OR</span> Prescribed rates for AC Taxi (when actually performed by AC Taxi) <span className="font-bold text-slate-800">OR</span> Prescribed auto-rickshaw rates.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay ₹5,400 to ₹9,000</td>
                      <td className="p-3 leading-relaxed">Actual public bus (including AC bus) <span className="font-bold text-slate-800">OR</span> Prescribed rates for auto-rickshaw, own scooter, motorcycle, or moped transit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 shadow-inner">
                <div>
                  <p className="font-bold text-blue-900 uppercase tracking-wider text-[10px]">Fixed Baseline Rates (Unprescribed Localities):</p>
                  <ul className="mt-2 space-y-1 list-disc pl-4 text-slate-600">
                    <li><strong>Own Car / Taxi Transit:</strong> ₹24 per Kilometer.</li>
                    <li><strong>Auto-Rickshaw / Scooter:</strong> ₹12 per Kilometer.</li>
                    <li><strong>Journey on Foot:</strong> +₹12 per Km (Rises by 25% if baseline DA scales up 50%).</li>
                  </ul>
                </div>
                <div className="border-l border-slate-300 pl-4 space-y-1 text-slate-600">
                  <p className="font-semibold text-slate-900">Outstation Car Hire Frameworks:</p>
                  <p>1. <strong>Pay Level 14+:</strong> Entitled to AC Taxi mileage claims. Provisioned via STO/CO channels.</p>
                  <p>2. <strong>Extensive Travel:</strong> Hired transport will be provisioned through STO/CO IN establishment if government vehicles are unavailable.</p>
                </div>
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
                      <th className="p-3">GRADE PAY PROFILE REFERENCE</th>
                      <th className="p-3">TRAVEL FLIGHT CLASS SELECTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Service Chiefs/Vice Chiefs/Army Commanders &amp; equivalents/GP ₹10,000+</td>
                      <td className="p-3"><span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md border border-emerald-200">Business / Club Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹7,600 to ₹9,000</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Grade Pay ₹5,400 to ₹6,600</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* DAILY ALLOWANCE STRUCTURES */}
      <section className="space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">💰 Daily Allowance (DA) &amp; Subsistence Scale</h3>
          <p className="text-xs text-slate-500 mt-0.5">Calculated continuously from departure to return. Short-duration fractions scale down as follows:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider block text-slate-400">Absence &lt; 6 Hours</span>
            <span className="text-xl font-black text-slate-800 block mt-1">30% Rate</span>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider block text-slate-400">Absence 6 to 12 Hours</span>
            <span className="text-xl font-black text-amber-600 block mt-1">70% Rate</span>
          </div>
          <div className="bg-white border border-blue-200 p-4 rounded-xl text-center shadow-sm bg-blue-50/30">
            <span className="text-xs font-bold uppercase tracking-wider block text-blue-600">Absence &gt; 12 Hours</span>
            <span className="text-xl font-black text-blue-900 block mt-1">100% Full DA</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                <th className="p-4 w-1/3">GRADE / PAY MATRIX RANGE</th>
                <th className="p-4 w-2/3">AUTHORIZED DAILY EXPENDITURE ALIGNMENTS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600 leading-relaxed bg-white">
              <tr>
                <td className="p-4 font-bold text-slate-900 bg-slate-50/40">
                  GP ₹10,000+ / Pay Level 14 and above
                </td>
                <td className="p-4 space-y-1">
                  <p>🏨 <strong>Hotel Caps:</strong> Accommodation or Guest House up to <span className="font-semibold text-slate-900">₹9,375 / day</span>.</p>
                  <p>🚖 <strong>City Transit:</strong> AC Taxi charges covered based on actual expenditure records.</p>
                  <p>🍽️ <strong>Food Scale:</strong> Meal bills not exceeding <span className="font-semibold text-slate-900">₹1,500 / day</span>.</p>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 bg-slate-50/40">
                  GP ₹7,600 to ₹9,000 / Pay Level 12 and 13
                </td>
                <td className="p-4 space-y-1">
                  <p>🏨 <strong>Hotel Caps:</strong> Accommodation up to <span className="font-semibold text-slate-900">₹5,625 / day</span>.</p>
                  <p>🚖 <strong>City Transit:</strong> AC Taxi charges up to <span className="font-semibold text-slate-900">50 Kms / day</span> within city limits.</p>
                  <p>🍽️ <strong>Food Scale:</strong> Meal bills not exceeding <span className="font-semibold text-slate-900">₹1,250 / day</span>.</p>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-slate-900 bg-slate-50/40">
                  GP ₹5,400 to ₹6,600 / Pay Level 9 to 11
                </td>
                <td className="p-4 space-y-1">
                  <p>🏨 <strong>Hotel Caps:</strong> Accommodation up to <span className="font-semibold text-slate-900">₹2,812 / day</span>.</p>
                  <p>🚖 <strong>City Transit:</strong> Taxi charges up to <span className="font-semibold text-slate-900">₹422 / day</span> within city limits.</p>
                  <p>🍽️ <strong>Food Scale:</strong> Meal bills not exceeding <span className="font-semibold text-slate-900">₹1,125 / day</span>.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <div className="border border-blue-200 bg-blue-50/40 rounded-2xl p-5 shadow-inner">
        <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">📋 Mandatory Claims Audit Folder Checklist:</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">📑 Movement Order Signal</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">🎫 Authority Letter Manifest</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">📝 Genform Document Sheet</span>
          <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-900 shadow-sm">💵 Cash TA-cum-Nil Advance Slip</span>
        </div>
      </div>

    </div>
  );
}