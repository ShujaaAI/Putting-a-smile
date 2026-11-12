import React from 'react';
import { X, ShieldCheck, PieChart, FileText, CheckCircle, ExternalLink, Award, ArrowUpRight } from 'lucide-react';
import { FINANCIAL_ALLOCATION, FOUNDATION_META } from '../data/foundationData';

interface ImpactTransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const ImpactTransparencyModal: React.FC<ImpactTransparencyModalProps> = ({
  isOpen,
  onClose,
  onOpenDonate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl relative my-8 border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0b3b60] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                Financial Transparency & Accountability
              </h2>
              <p className="text-xs text-slate-300">
                Where every shilling and dollar goes: 85% Direct Community Aid
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Top Banner KPI */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Our Non-Profit Commitment
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                85% of Every Donation Goes Directly to Frontline Aid
              </h3>
              <p className="text-xs text-slate-600 max-w-lg">
                We maintain an ultra-lean operational overhead to ensure that maximum resources reach children, widows, and families in Eldoret.
              </p>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-emerald-600 text-white flex flex-col items-center justify-center font-black shadow-md shrink-0">
              <span className="text-3xl font-mono leading-none">85%</span>
              <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">Aid Ratio</span>
            </div>
          </div>

          {/* Allocation Breakdown Bar */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              Expense Allocation Breakdown
            </h4>

            {/* Visual Stacked Progress Bar */}
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-100">
              <div
                className="bg-emerald-600 h-full transition-all"
                style={{ width: '85%' }}
                title="Direct Aid (85%)"
              />
              <div
                className="bg-blue-600 h-full transition-all"
                style={{ width: '10%' }}
                title="Community Outreach (10%)"
              />
              <div
                className="bg-slate-400 h-full transition-all"
                style={{ width: '5%' }}
                title="Admin & Governance (5%)"
              />
            </div>

            {/* Allocation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {FINANCIAL_ALLOCATION.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black font-mono text-slate-900">
                      {item.percentage}%
                    </span>
                    <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  </div>
                  <h5 className="text-xs font-bold text-slate-800 leading-snug">
                    {item.category}
                  </h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Auditing and Governance Standards */}
          <div className="border-t border-slate-200 pt-6 space-y-3">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              Auditing & Regulatory Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Annual Independent Audit</strong>
                  <span>Audited annually by certified public accountants registered with ICPAK.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Direct Local Procurement</strong>
                  <span>All food hampers and school uniforms are purchased from small merchants in Eldoret to stimulate the local economy.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Child Safeguarding Certified</strong>
                  <span>All field staff, mentors, and volunteers undergo strict background verification and child protection training.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Open Field Documentation</strong>
                  <span>Donors receive photographic logs and community sign-off sheets verifying relief distribution.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Questions regarding our financial books? Email <strong>{FOUNDATION_META.email}</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDonate();
                }}
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm"
              >
                Donate with Confidence
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
