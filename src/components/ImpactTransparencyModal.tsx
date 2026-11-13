import React from 'react';
import { X, ShieldCheck, CheckCircle } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-[#1D3C6E]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl relative my-8 border border-[#9ABDE3]/60 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1D3C6E] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#063BAD] border border-white/15 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#FAEB8E]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold">
                Financial Transparency &amp; Accountability
              </h2>
              <p className="text-xs text-[#9ABDE3]">
                Where every shilling and dollar goes: 85% Direct Community Aid
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Top Banner KPI */}
          <div className="bg-[#F3F1E6] border border-[#9ABDE3] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C02523]">
                Our Non-Profit Commitment
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1D3C6E]">
                85% of Every Donation Goes Directly to Frontline Aid
              </h3>
              <p className="text-xs text-[#4365A1] max-w-lg">
                We maintain an ultra-lean operational overhead to ensure that maximum resources reach children, widows, and families in Eldoret.
              </p>
            </div>
            <div className="w-20 h-20 rounded-xl bg-[#063BAD] text-white flex flex-col items-center justify-center font-black shadow-md shrink-0 border border-[#689FF1]/40">
              <span className="text-3xl font-mono leading-none text-[#FAEB8E]">85%</span>
              <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">Aid Ratio</span>
            </div>
          </div>

          {/* Allocation Breakdown Bar */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#1D3C6E] uppercase tracking-wider">
              Expense Allocation Breakdown
            </h4>

            {/* Visual Stacked Progress Bar */}
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-[#F0EDE0] border border-[#9ABDE3]/50">
              <div
                className="bg-[#063BAD] h-full transition-all"
                style={{ width: '85%' }}
                title="Direct Aid (85%)"
              />
              <div
                className="bg-[#C02523] h-full transition-all"
                style={{ width: '10%' }}
                title="Community Outreach (10%)"
              />
              <div
                className="bg-[#689FF1] h-full transition-all"
                style={{ width: '5%' }}
                title="Admin & Governance (5%)"
              />
            </div>

            {/* Allocation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {FINANCIAL_ALLOCATION.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3F1E6] p-4 rounded-xl border border-[#9ABDE3]/70 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black font-mono text-[#1D3C6E]">
                      {item.percentage}%
                    </span>
                    <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  </div>
                  <h5 className="text-xs font-bold text-[#263864] leading-snug">
                    {item.category}
                  </h5>
                  <p className="text-[11px] text-[#4365A1] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Auditing and Governance Standards */}
          <div className="border-t border-[#9ABDE3]/40 pt-6 space-y-3">
            <h4 className="text-xs font-extrabold text-[#1D3C6E] uppercase tracking-wider">
              Auditing &amp; Regulatory Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#263864]">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F3F1E6] border border-[#9ABDE3]/60">
                <CheckCircle className="w-4 h-4 text-[#063BAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1D3C6E]">Annual Independent Audit</strong>
                  <span>Audited annually by certified public accountants registered with ICPAK.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F3F1E6] border border-[#9ABDE3]/60">
                <CheckCircle className="w-4 h-4 text-[#063BAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1D3C6E]">Direct Local Procurement</strong>
                  <span>All food hampers and school uniforms are purchased from small merchants in Eldoret to stimulate the local economy.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F3F1E6] border border-[#9ABDE3]/60">
                <CheckCircle className="w-4 h-4 text-[#063BAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1D3C6E]">Child Safeguarding Certified</strong>
                  <span>All field staff, mentors, and volunteers undergo strict background verification and child protection training.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F3F1E6] border border-[#9ABDE3]/60">
                <CheckCircle className="w-4 h-4 text-[#063BAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1D3C6E]">Open Field Documentation</strong>
                  <span>Donors receive photographic logs and community sign-off sheets verifying relief distribution.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-[#9ABDE3]/40 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#4365A1]">
              Questions regarding our financial books? Email <strong className="text-[#1D3C6E]">{FOUNDATION_META.email}</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-[#9ABDE3] text-xs font-semibold text-[#1D3C6E] hover:bg-[#F3F1E6] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenDonate();
                }}
                className="px-5 py-2 rounded-md bg-[#C02523] hover:bg-[#9E1D1B] text-white text-xs font-bold shadow-sm cursor-pointer"
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
