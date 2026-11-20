import React, { useState, useMemo } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { DollarSign, Percent, Calendar, ShieldAlert, ArrowRight } from 'lucide-react';

export const FinancingCalculator: React.FC = () => {
  const { openQuoteModal } = useNavigation();

  const [projectAmount, setProjectAmount] = useState<number>(35000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(10);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
  const [interestRateAPR, setInterestRateAPR] = useState<number>(7.99);

  const calculations = useMemo(() => {
    const downPaymentAmount = Math.round(projectAmount * (downPaymentPercent / 100));
    const principal = projectAmount - downPaymentAmount;

    const monthlyInterestRate = interestRateAPR / 100 / 12;
    let monthlyPayment = 0;
    if (monthlyInterestRate > 0) {
      monthlyPayment = Math.round(
        (principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
        (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1)
      );
    } else {
      monthlyPayment = Math.round(principal / loanTermMonths);
    }

    const totalPaid = monthlyPayment * loanTermMonths + downPaymentAmount;
    const totalInterest = totalPaid - projectAmount;

    return {
      downPaymentAmount,
      principal,
      monthlyPayment,
      totalPaid,
      totalInterest
    };
  }, [projectAmount, downPaymentPercent, loanTermMonths, interestRateAPR]);

  return (
    <div className="bg-mocha-900/90 border border-gold/30 rounded-xl shadow-2xl p-6 sm:p-10 backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-mocha-800/80 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 bg-gold/15 text-gold rounded border border-gold/30">
              <DollarSign className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-gold">
              Financial Budgeting Tool
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-gold-100 font-bold">
            Roofing Investment & Monthly Payment Calculator
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <span className="text-xs text-stone-400 block font-mono">Illustrative Amortization</span>
          <span className="text-xs text-gold font-medium">Clear Budget Transparency</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Estimated Project Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-300">
                Estimated Project Scope / Investment
              </label>
              <span className="font-mono text-base font-bold text-gold-100 bg-mocha-950 px-3 py-1 rounded border border-gold/30">
                ${projectAmount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="120000"
              step="1000"
              value={projectAmount}
              onChange={e => setProjectAmount(Number(e.target.value))}
              className="w-full h-2 bg-mocha-950 rounded-lg appearance-none cursor-pointer accent-amber"
            />
            <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
              <span>$10,000 (Shingle Re-Roof)</span>
              <span>$23,752 (Bunker Hill Permit Benchmark)</span>
              <span>$120,000+ (Estate Slate/Copper)</span>
            </div>
          </div>

          {/* 2. Down Payment Percentage */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-300">
                Down Payment: {downPaymentPercent}% (${calculations.downPaymentAmount.toLocaleString()})
              </label>
              <div className="flex gap-2">
                {[0, 10, 20, 30].map(pct => (
                  <button
                    type="button"
                    key={pct}
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`min-h-[38px] px-3 py-1.5 text-xs rounded font-mono border flex items-center justify-center transition-all ${
                      downPaymentPercent === pct
                        ? 'bg-mocha-800 border-gold text-gold font-bold shadow-sm'
                        : 'bg-mocha-950 border-mocha-800 text-stone-400 hover:border-gold/30'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={e => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-mocha-950 rounded-lg appearance-none cursor-pointer accent-amber"
            />
          </div>

          {/* 3. Loan Term Duration */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
              Loan Term Duration (Months)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[12, 24, 36, 60, 84, 120].map(term => (
                <button
                  type="button"
                  key={term}
                  onClick={() => setLoanTermMonths(term)}
                  className={`p-2.5 text-xs rounded border text-center transition-all ${
                    loanTermMonths === term
                      ? 'bg-mocha-800 border-gold text-gold font-bold shadow-gold-sm'
                      : 'bg-mocha-950 border-mocha-800 text-stone-300 hover:border-gold/30'
                  }`}
                >
                  <span className="block font-medium">{term} Months</span>
                  <span className="text-[10px] text-stone-400 block">{term / 12} Yrs</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Illustrative Interest Rate APR */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-300">
                Illustrative Interest Rate (APR)
              </label>
              <span className="font-mono text-sm font-bold text-gold-100 bg-mocha-950 px-2.5 py-0.5 rounded border border-mocha-800">
                {interestRateAPR.toFixed(2)}% APR
              </span>
            </div>
            <input
              type="range"
              min="4.99"
              max="14.99"
              step="0.25"
              value={interestRateAPR}
              onChange={e => setInterestRateAPR(Number(e.target.value))}
              className="w-full h-2 bg-mocha-950 rounded-lg appearance-none cursor-pointer accent-amber"
            />
            <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
              <span>4.99% (Prime)</span>
              <span>7.99% (Average)</span>
              <span>14.99%</span>
            </div>
          </div>
        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-mocha-950 border border-gold/30 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                Estimated Monthly Installment
              </span>
              <div className="flex items-baseline gap-2">
                <span id="financing-monthly-payment" className="font-serif text-4xl sm:text-5xl font-bold text-gold-100">
                  ${calculations.monthlyPayment.toLocaleString()}
                </span>
                <span className="text-stone-400 font-mono text-xs">/ month</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                For {loanTermMonths} months at {interestRateAPR.toFixed(2)}% APR
              </p>
            </div>

            <div className="space-y-2.5 text-xs border-t border-b border-mocha-800/80 py-4">
              <div className="flex justify-between">
                <span className="text-stone-400">Project Total Scope:</span>
                <span className="text-gold-100 font-mono font-medium">${projectAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Down Payment ({downPaymentPercent}%):</span>
                <span className="text-gold-100 font-mono">${calculations.downPaymentAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Financed Principal:</span>
                <span className="text-gold-100 font-mono">${calculations.principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Est. Total Finance Charges:</span>
                <span className="text-stone-300 font-mono">${Math.max(0, calculations.totalInterest).toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-mocha-900">
                <span className="text-stone-400">Total Estimated Outlay:</span>
                <span className="text-amber font-mono font-semibold">${calculations.totalPaid.toLocaleString()}</span>
              </div>
            </div>

            {/* Compulsory Legal Disclaimer */}
            <div className="bg-mocha-900/80 border border-amber/30 p-3.5 rounded-lg text-xs text-stone-400 leading-relaxed">
              <div className="flex items-center gap-1.5 text-amber font-semibold uppercase tracking-wider text-xs mb-1">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Budgeting Disclaimer</span>
              </div>
              <p>
                This financing calculator is an illustrative budgeting tool provided for preliminary planning. Jay-Co does not originate consumer loans or guarantee financing approval. Actual loan rates, fees, and terms depend upon your credit score and agreement with third-party lenders.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal({
                service: 'Full Roof Replacement Financing Consultation',
                estimatedCostRange: `$${projectAmount.toLocaleString()} ($${calculations.monthlyPayment}/mo est.)`
              })}
              className="w-full bg-amber hover:bg-amber-light text-mocha-950 font-bold py-3.5 px-6 rounded-md shadow-amber text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Consult With Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
