import React from 'react';

export default function CiviliansLTC() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 w-full text-slate-800">
      
      {/* SECTION HEADER */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-wider">
          Official Reference Handbook (TR Rule 190)
        </div>
        <h2 className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
          🎫 Leave Travel Concession (LTC): Defence Civilians
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
          <strong>Framework Admissibility:</strong> LTC is admissible to civilians Government servant of all grades including:
        </p>
        <ul className="list-disc pl-5 mt-2 text-xs space-y-1 text-slate-600">
          <li>Individuals on Deputation.</li>
          <li>Who are appointed on contract basis if the period of contract is more than one year.</li>
          <li>Who are re-employed after their retirements, on completion of one year's continuous service.</li>
          <li>Industrial & work charged staff who are entitled to regular leave.</li>
        </ul>
      </div>

      {/* MANDATORY POLICY ALERT BANNER */}
      <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
          ⚠️ Mandatory Air Travel Directive &amp; Agent Channels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-slate-300">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <p className="font-bold text-white mb-1 text-sm border-b border-slate-700 pb-1">1. Air India Monopolization Lifted</p>
            In view of disinvestment of Air India, compulsion for travel by Air India has been dispensed with for the journeys where the Government of India bears the cost of air passage.
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <p className="font-bold text-white mb-1 text-sm border-b border-slate-700 pb-1">2. Authorized Travel Agents Only</p>
            Air tickets <span className="text-amber-400 underline font-semibold">shall</span> be purchased from the following three Authorized Travel Agents:
            <ul className="list-disc pl-4 mt-1.5 space-y-1 text-slate-300">
              <li>M/s Balmer Lwrie &amp; Company Limited (BLCL).</li>
              <li>M/s Ahok Travels &amp; Tours(ATT).</li>
              <li>Indian Railways Catering and Tourism Corporation Ltd (IRCTC).</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-950/40 border border-amber-900/50 p-4 rounded-xl text-xs text-amber-300 leading-relaxed shadow-inner">
          <strong>3. Relaxation Authority:</strong> In case of unavoidable circumstances, where the booking of tickets, is done from unauthorised travel agent/website, the financial advisor of the ministry/department and head of department not below the rank of joint secretary in subordinate/attached offices are authorised to grant relaxation.
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
          <p className="font-bold text-slate-300 text-[11px] uppercase tracking-wider">4. Revised Travel Entitlement Parameters:</p>
          <p>• <strong className="text-slate-300">4.1 Places Not Connected by Rail:</strong> Travel by AC Bus for all those entitled to travel by AC II Tire and above by train and by Deluxe/Ordinary bus for others is allowed.</p>
          <p>• <strong className="text-slate-300">4.2 Road Travel Between Places Connected by Rail:</strong> Travel by any means of public transport is allowed provided the total fare does not exceed the train fare by the entitled class.</p>
          <p>• <strong className="text-slate-300">4.3 Mileage Points Restrictions:</strong> All mileage points earned by service personnel on tickets purchased for official travel shall be utilized by the concerned department for other official travel by their officers. Any usage of these mileage points for purposes of private travel by an officer will attract departmental action. This is to ensure that the benefits out of official travel, which is funded by the Government, should accrue to the Government.</p>
          <p>• <strong className="text-slate-300">4.4 Sheet Scarcity:</strong> In case of non-availability of sheets in entitled class, service personnel may travel in the class below their entitled class.</p>
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
                      <th className="p-3">GRADE PAY MATRIX SCALES</th>
                      <th className="p-3">STANDARD RAIL EXPONENT (As per TR 57 a(i))</th>
                      <th className="p-3">PREMIUM / SHATABDI / RAJDHANI TIER (As per TR 57 a(ii))</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 10,000/- and above</td>
                      <td className="p-3">AC First Class</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 7,600 to 9,000</td>
                      <td className="p-3">AC First Class.</td>
                      <td className="p-3 font-semibold text-blue-700">Executive Class</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 5,400 to 6,600</td>
                      <td className="p-3">AC Il Tier Class.</td>
                      <td className="p-3 font-semibold text-indigo-700">AC chair car</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 4,200 to 4,800</td>
                      <td className="p-3">AC Il Tier Class.</td>
                      <td className="p-3 font-semibold text-indigo-700">AC chair car</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of Below 4,200</td>
                      <td className="p-3">AC IlI Tier Class.</td>
                      <td className="p-3 font-semibold text-indigo-700">AC chair car</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Allowed to travel by Premium Trains/Premium Tatkal Trains/ Suvidha Trains, the reimbursement to Premium Tatkal Charges for booking of tickets and the reimbursement of Dynamic/Flexi-fare in Shatabdi/Rajdhani, Tejas Rajdhani/Tejas Rajdhani, Tejas Rajdhani/ Duronto Trains while on official tour/training. Reimbursement of Tatkal Seva Charges which has fixed fare, will remain continue to be allowed.
              </p>
            </div>
          </details>

          {/* B. ROAD MILEAGE */}
          <details className="group border border-slate-200 bg-white rounded-2xl p-4 shadow-sm transition-all duration-200">
            <summary className="flex justify-between items-center font-bold cursor-pointer text-slate-900 hover:text-blue-900 list-none">
              <span className="flex items-center gap-2">🚗 Road Mileage Framework</span>
              <span className="transition-transform group-open:rotate-180 text-xs text-slate-400">▼</span>
            </summary>
            <div className="mt-4 border-t border-slate-100 pt-4 text-xs space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                      <th className="p-3">GRADE PAY MATRIX SECTOR</th>
                      <th className="p-3">ROAD TRANSIT AUTHORIZATION SCHEMES</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 10,000/- and above.</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus including AC bus <span className="font-semibold text-slate-800">Or</span> At prescribed rates of AC Taxi when the journey is actually performed by AC Taxi <span className="font-semibold text-slate-800">Or</span> At prescribed rates of auto rickshaw for journeys by auto rickshaw, own scooter, motor cycle, moped etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 5,400/-to 9000/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus including AC bus <span className="font-semibold text-slate-800">Or</span> At prescribed rates of auto rickshaw for journeys by auto rickshaw, own scooter, motor cycle, moped etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay of 4,200/-to 4,800/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus including AC bus <span className="font-semibold text-slate-800">Or</span> At prescribed rates of auto rickshaw for journeys by auto rickshaw, own scooter, motor cycle, moped etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay of 2,400/- and above but less than 4,200/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by any type of public bus <span className="underline font-semibold text-slate-900">other than AC bus</span> <span className="font-semibold text-slate-800">Or</span> At prescribed rates for auto rickshaw for journeys by auto rickshaw/own scooter/motor cycle/moped etc.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3 font-medium text-slate-900">Personnel drawing Grade Pay below 2,400/-</td>
                      <td className="p-3 leading-relaxed">Actual fare by <span className="font-semibold text-slate-900">ordinary public bus only</span> <span className="font-semibold text-slate-800">Or</span> At prescribed rates for auto rickshaw /own scooter/motor cycle/moped etc.</td>
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
                      <th className="p-3">GRADE PAY PROFILE</th>
                      <th className="p-3">TRAVEL FLIGHT CLASS SELECTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600 bg-white">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 10,000/- and above.</td>
                      <td className="p-3"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-md border border-emerald-200">Business/ Club Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 7,600/-, 8,000/-, 8,400/-, 8,700/-, 8,900/- and 9,000/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Officers drawing Grade Pay of 5,400/-, 5,700/-, 6,100/-, and 6,600/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personnel drawing grade pay of 4200/- to 4800/-</td>
                      <td className="p-3"><span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-200">Economy Class</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Personnel drawing grade pay below 4200/-</td>
                      <td className="p-3"><span className="bg-red-50 text-red-700 font-bold px-2.5 py-1 rounded-md border border-red-200">Not Entitled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>

        </div>
      </section>

      {/* CORE ADMISSIBILITY SCHEMES BREAKDOWN */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">📜 Types of Leave Travel Concession Admissible</h3>
        </div>
        
        <div className="p-4 text-xs space-y-5 leading-relaxed text-slate-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="font-bold text-blue-700 mb-1">🏡 (a) To Home Town</p>
              The LTC to home town shall be admissible irrespective of the distance between the HQs of the Government servant &amp; his home town <span className="font-semibold text-slate-900">once in a block of two years</span>, such as 2010-2011, 2012-2013 &amp; so on.
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="font-bold text-indigo-700 mb-1">🗺️ (b) To Any Place in India</p>
              LTC to any place in India shall be admissible irrespective of the distance of the place of visit from the HQ of the Government servant <span className="font-semibold text-slate-900">once in a block of four calendar years</span>, such as 2006-2009, 2010-2013, &amp; so on. Provided that in the case of Government servant to whom, home town is admissible the LTC to any place in India availed of by him shall be in lieu of &amp; adjusted against, the LTC to home town available to him at the time of commencement of the journey.
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-1">👤 (c) For Self Only to Visit Home Town Every Year</p>
              A Government servant whose family lives away from him at his home town may, in lieu of all concession due to him under this scheme, including the LTC to visit any place in India once in a block of four years which would otherwise be admissible to him &amp; members of his family choose to avail of <span className="font-semibold text-slate-900">LTC for self only to visit the home town every year</span>.
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <p className="font-bold text-slate-900 text-[13px] mb-2">➡️ (d) Concession for One-Way Journey</p>
            <p className="mb-2">LTC is admissible to the members of a Government servant’s family with reference to the facts existing at the time of forward &amp; return journeys independently. The following types of cases are given by way of illustration:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
              <div className="bg-blue-50/30 p-3 rounded-xl border border-blue-100/50">
                <span className="font-semibold text-blue-900 block mb-1">Entitled to Reimbursement in Respect of the Outward Journey only:</span>
                • A dependent son/daughter getting employment or getting married after going to home town or remaining there for prosecution of studies.
              </div>
              <div className="bg-indigo-50/30 p-3 rounded-xl border border-indigo-100/50">
                <span className="font-semibold text-indigo-900 block mb-1">Entitled to Reimbursement in Respect of the Return Journey only:</span>
                <ul className="list-disc pl-4 space-y-1 mt-1">
                  <li>(aa) A newly married wife coming from hometown to headquarters station or a wife who has been living at home town &amp; did not avail herself of the travel concession in respect of the outward journey.</li>
                  <li>(ab) A husband of a female Government servant who marries at the home town after coming there on L.T.C. for herself.</li>
                  <li>(ac) A dependent son/daughter returning with parents or coming alone from home town where he/she has been prosecuting studies or living with grandparents etc.</li>
                  <li>(ad) A child who was below three/twelve years (ticket for child below three years of age is not required and child between three and twelve years of age, half ticket is required) of age while undertaking onwards journey but completed three/ twelve years of age only on return journey.</li>
                  <li>(ae) Child legally adopted by Government servant while staying in home town.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-slate-800 text-[13px] mb-1">📅 Counting of LTC Against Particular Blocks</p>
              A Government servant &amp; members of his family availing of LTC may travel in different groups at different time during a block of two or four years, as the case may be. The concession so availed of will be counted against the block of two years or four years <span className="font-semibold text-slate-900">within which the outward journey commenced</span>, even if the return journey was performed after the expiry of the block of two years or four years. This will apply to availing of LTC carried forward in terms of Para below.
            </div>
            <div>
              <p className="font-bold text-slate-800 text-[13px] mb-1">🔄 Carry of LTC</p>
              Government servant who is unable to avail of the LTC within a particular block of two years or four years may avail of the same <span className="font-semibold text-slate-900">within the first year of the block of the next block of two years or four years</span>. If a Government servant is entitled to LTC to home town, he can carry forward the LTC to any place in India for a block of four years only if he has carried forward the LTC to home town in respect of the second block of two years within the block of four years.
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: STRUCTURAL CHECKLIST FOR LTC CLAIM REQUIREMENT */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">📋 CHECK LIST FOR LTC CLAIM</h3>
        </div>
        <div className="p-4 text-xs space-y-4 text-slate-700 leading-relaxed">
          
          <div className="border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">01. Duly filled standard claim proforma in Duplicate</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1.5 pl-4 text-slate-600">
              <div>(i) Name</div>
              <div>(ii) Rank</div>
              <div>(iii) P. No.</div>
              <div>(iv) Basic Pay</div>
              <div>(v) Gx details</div>
              <div>(vi) Hometown as per Genform</div>
              <div className="col-span-2">(vii) Travel details (as per tickets)</div>
              <div className="col-span-2">(viii) Advance drawn or not</div>
            </div>
          </div>

          <div className="border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">02. System Generated Genforms</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1.5 pl-4 text-slate-600">
              <div>(i) Movement casualty</div>
              <div>(ii) Gx no with Date of Occ.</div>
              <div>(iii) Hometown &amp; TR Rule</div>
              <div>(iv) Name, Rank, P.No &amp; type of passage</div>
              <div className="col-span-2">(v) Unit round seal &amp; signed by authority</div>
            </div>
          </div>

          <div className="border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">03. Advance Payment Voucher (if advance drawn)</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1.5 pl-4 text-slate-600">
              <div>(i) Name, Rank, P.No</div>
              <div className="col-span-2">(ii) Amount Drawn &amp; Unit</div>
              <div>(iii) Individual sign</div>
              <div className="col-span-4">(iv) Competent authority sign</div>
            </div>
          </div>

          <div className="border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">04. Nil Advance Certificate (if advance not drawn)</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-1.5 pl-4 text-slate-600">
              <div>(i) Name, Rank, P.No with Gx details</div>
              <div>(ii) TR rule</div>
              <div>(iii) Signed by competent authority</div>
            </div>
          </div>

          <div className="border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">05. Cash TA Sanction (if required)</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1.5 pl-4 text-slate-600">
              <div>(i) Name, Rank, P.No</div>
              <div>(ii) From &amp; To</div>
              <div>(iii) Round Stamp</div>
              <div>(iv) Signed by competent authority</div>
            </div>
          </div>

          <div className="space-y-2.5 pt-1">
            <p>
              <strong className="text-slate-900">06.</strong> Copy of SE month prior to movement commencement. Rank and Pay level should be updated on SE. If not updated then promotion Gx to be enclosed.
            </p>
            <p>
              <strong className="text-slate-900">07.</strong> Confirmed Train tickets/Air tickets along with boarding passes, spelling of name should be same in tickets and contingent bill. Entitled person should book the air ticket and train ticket through authorized agents.
            </p>
            <p>
              <strong className="text-slate-900">08.</strong> Sanction from the rank of RAdm and above in consultation with concerned IFA, if ticket was not booked from following mentioned:
            </p>
            <ul className="list-disc pl-8 space-y-1 text-slate-600">
              <li>M/s Balmer Lawrie &amp; Company Limited (BLC)</li>
              <li>M/s Ashok Travel &amp; Tour (ATT)</li>
              <li>IRCTC</li>
            </ul>
            <p>
              <strong className="text-slate-900">09.</strong> A Copy of e-MRO (if applicable)
            </p>
            <p>
              <strong className="text-slate-900">10.</strong> Self-undertaking certificate (if required for any reasons)
            </p>
            <p>
              <strong className="text-slate-900">18.</strong> Xerox documents duly attested
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}