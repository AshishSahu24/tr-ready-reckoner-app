import React from 'react';

// Data structured from the official clarification document
const rmaData = [
  {
    ser: "(a)",
    scenario: [
      "Permanent Duty Move",
      "Driving Own Car",
      "Two members of the family accompanying the entitled service person",
      "Stations connected by rail"
    ],
    entitlement: (
      <>
        <span>One Road Mileage Allowance at rates applicable (list enclosed)</span>
        <span className="block my-3 md:text-center text-xs font-black uppercase tracking-widest text-amber-500/70">(or)</span>
        <span>Limited to entitled rail fare (for self and accompanied members)</span>
      </>
    ),
    mandatoryCondition: (
      <>
        <span className="font-bold text-amber-400">Sanction of the Competent Authority - Mandatory</span>
        <span className="block mt-2">Competent Authority to decide whether full Road Mileage Allowance is to be allowed or limited to entitled rail fare.</span>
      </>
    )
  },
  {
    ser: "(b)",
    scenario: [
      "Permanent Duty Move",
      "Driving Own Car",
      "More than two members of the family accompanying the entitled service personnel",
      "Stations connected by rail"
    ],
    entitlement: (
      <>
        <span>Twice the Road Mileage Allowance at rates applicable (list enclosed)</span>
        <span className="block my-3 md:text-center text-xs font-black uppercase tracking-widest text-amber-500/70">(or)</span>
        <span>Limited to entitled rail fare (for self and accompanied members)</span>
      </>
    ),
    mandatoryCondition: (
      <span>Competent Authority to decide on the principle "whether any public interest was served by performing road journey"</span>
    )
  },
  {
    ser: "(c)",
    scenario: [
      "Own Car driven by the entitled service person alone",
      "Dependents not accompanying and are travelling by other entitled mode of transport (rail/air)",
      "Stations connected by rail"
    ],
    entitlement: (
      <span>One Road Mileage for the entitled service person and dependents will be entitled to separate fare in entitled class of air/rail.</span>
    ),
    mandatoryCondition: (
      <>
        <span className="font-bold text-amber-400">Sanction of the Competent Authority is mandatory</span> for the entitled service person travelling by car.
        <span className="block mt-2">Competent Authority is to decide whether full RMA is to be allowed or limited to admissible rail fare on the principle "whether any public interest was served by the road journey"</span>
      </>
    )
  },
  {
    ser: "(d)",
    scenario: [
      "Own Car transported by road under its own power",
      "Service person and dependents travel by entitled mode of transport (rail/air)",
      "Stations connected by rail"
    ],
    entitlement: (
      <span>Service person are entitled to draw an allowance at the rates approved by Directorate of Transport for taxi at the place of origin of journey (list attached) and separate fare by rail/air, as applicable, for self and dependents.</span>
    ),
    mandatoryCondition: (
      <span>Sanction of Competent authority is not required.</span>
    )
  },
  {
    ser: "(e)",
    scenario: [
      "Own Car transported by road under its own power",
      "Service person and dependents travel by entitled mode of transport (rail/air)",
      "Stations NOT connected by rail"
    ],
    entitlement: (
      <span>Service person are entitled to draw an allowance at the rates approved by Directorate of Transport for taxi at the place of origin of journey (list attached) and separate fare by rail/air, as applicable, for self and dependents.</span>
    ),
    mandatoryCondition: (
      <span>Sanction of Competent authority is not required.</span>
    )
  },
  {
    ser: "(f)",
    scenario: [
      "Permanent Duty Move",
      "Own Car is sent loaded on truck",
      "Service person and dependents travel by entitled mode of transport (rail/air)",
      "Stations connected by rail"
    ],
    entitlement: (
      <span>Actual expenses will be reimbursed for transportation of car, limited to rates for taxi approved by Directorate of Transport and separate fare by rail/air, as applicable, for self and dependents.</span>
    ),
    mandatoryCondition: (
      <span>Sanction of Competent authority is not required.</span>
    )
  },
  {
    ser: "(g)",
    scenario: [
      "Own Car is sent loaded on truck",
      "Service person and dependents travel by entitled mode of transport (rail/air)",
      "Stations NOT connected by rail"
    ],
    entitlement: (
      <span>Actual expenditure will be reimbursed for transportation of car, limited to rates for taxi approved by Directorate of Transport and separate fare by rail/air, as applicable, for self and dependents.</span>
    ),
    mandatoryCondition: (
      <span>Sanction of the Competent Authority is not required.</span>
    )
  },
  {
    ser: "(h)",
    scenario: [
      "If an individual is travelling by road because the entitled class of accommodation is absent in a train"
    ],
    entitlement: (
      <span>Road Mileage, limited to what would have been admissible by rail in the entitled class.</span>
    ),
    mandatoryCondition: (
      <span className="font-bold text-amber-400">Sanction of the Competent Authority is mandatory.</span>
    )
  }
];

export default function RMATable() {
  return (
    <div className="relative w-full min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Shaders */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/60 to-slate-950/90 z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8 animate-entrance">
        
        {/* Header Section */}
        <div className="space-y-4 text-center max-w-4xl mx-auto px-2">
          <h2 className="text-xs md:text-sm font-black tracking-widest text-sky-400 uppercase">
            Official Clarification
          </h2>
          <h1 className="text-xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400">
            Entitlement of Road Mileage Allowance
          </h1>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed text-justify md:text-center">
            This HQ is in receipt of queries due to incongruent understanding of provisions regarding admittance of Road Mileage Allowance for road moves on duty (Ty and Pmt). In order to allay doubts on the subject matter, a consolidated list of all relevant provisions has been prepared and tabulated below, as concurred by DG (OL&SM).
          </p>
        </div>

        {/* Data Table / Mobile Card Wrapper */}
        <div className="w-full bg-transparent md:bg-gradient-to-br from-slate-900/90 via-blue-950/30 to-slate-950/90 md:border border-blue-900/50 rounded-2xl md:shadow-[0_15px_40px_rgba(2,6,23,0.8)] md:backdrop-blur-xl overflow-hidden">
          
          <table className="w-full text-left border-collapse block md:table">
            
            {/* Table Head (Hidden on Mobile) */}
            <thead className="hidden md:table-header-group">
              <tr className="bg-slate-950/60 border-b-2 border-blue-900/60">
                <th className="py-5 px-6 text-xs font-black text-amber-400 uppercase tracking-widest w-[5%]">Ser</th>
                <th className="py-5 px-6 text-xs font-black text-amber-400 uppercase tracking-widest w-[30%]">Scenario</th>
                <th className="py-5 px-6 text-xs font-black text-amber-400 uppercase tracking-widest w-[35%]">Entitlement</th>
                <th className="py-5 px-6 text-xs font-black text-amber-400 uppercase tracking-widest w-[30%]">Mandatory Condition</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="block md:table-row-group space-y-6 md:space-y-0 md:divide-y divide-blue-900/30">
              {rmaData.map((row, index) => (
                <tr 
                  key={index} 
                  className="block md:table-row bg-slate-900/40 md:bg-transparent border border-blue-900/40 md:border-none rounded-xl md:rounded-none hover:bg-blue-900/10 transition-colors duration-200 group overflow-hidden shadow-lg md:shadow-none"
                >
                  {/* Ser Column */}
                  <td className="block md:table-cell py-3 px-5 md:py-6 md:px-6 align-top text-sm font-bold text-amber-400 md:text-slate-500 md:group-hover:text-amber-400/80 transition-colors bg-slate-950/80 md:bg-transparent border-b border-blue-900/30 md:border-none">
                    <span className="md:hidden text-[10px] text-slate-400 uppercase tracking-widest mr-2 font-medium">Serial:</span>
                    {row.ser}
                  </td>

                  {/* Scenario Column */}
                  <td className="block md:table-cell py-4 px-5 md:py-6 md:px-6 align-top border-b border-blue-900/20 md:border-none">
                    <div className="md:hidden text-[10px] font-black text-sky-400 uppercase tracking-widest mb-3">Scenario</div>
                    <ul className="space-y-2">
                      {row.scenario.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs md:text-sm text-slate-300">
                          <span className="mr-3 text-sky-500/60 mt-0.5">•</span>
                          <span className={item === "Permanent Duty Move" ? "font-bold text-slate-100 uppercase text-[10px] md:text-xs tracking-wider" : ""}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Entitlement Column */}
                  <td className="block md:table-cell py-4 px-5 md:py-6 md:px-6 align-top text-xs md:text-sm text-slate-300 leading-relaxed border-b border-blue-900/20 md:border-none bg-blue-950/10 md:bg-transparent">
                    <div className="md:hidden text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3">Entitlement</div>
                    {row.entitlement}
                  </td>

                  {/* Mandatory Condition Column */}
                  <td className="block md:table-cell py-4 px-5 md:py-6 md:px-6 align-top text-xs md:text-sm text-slate-400 leading-relaxed md:bg-slate-950/20">
                    <div className="md:hidden text-[10px] font-black text-rose-400 uppercase tracking-widest mb-3">Mandatory Condition</div>
                    {row.mandatoryCondition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Footer Note */}
          <div className="w-full bg-slate-950/80 md:border-t border-blue-900/50 py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] md:text-xs text-slate-500 font-medium tracking-wide rounded-xl md:rounded-none mt-6 md:mt-0 border border-blue-900/30 md:border-x-0 md:border-b-0">
            <span>Reference: DG (OL&SM) Guidelines</span>
            <span>Document Formatted for Triservices Portal</span>
          </div>

        </div>
      </div>
    </div>
  );
}