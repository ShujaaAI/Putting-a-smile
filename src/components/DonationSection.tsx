import React, { useState } from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import {
  Smartphone,
  Building2,
  Copy,
  Check,
  Heart,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface DonationSectionProps {
  onOpenDonate: (amount?: number) => void;
  onToast: (msg: string) => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({
  onOpenDonate,
  onToast,
}) => {
  const [copiedTill, setCopiedTill] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const handleCopyTill = () => {
    navigator.clipboard.writeText(FOUNDATION_META.mpesaTill);
    setCopiedTill(true);
    onToast(`M-Pesa Till Number ${FOUNDATION_META.mpesaTill} copied to clipboard!`);
    setTimeout(() => setCopiedTill(false), 2500);
  };

  const handleCopyBank = () => {
    navigator.clipboard.writeText(FOUNDATION_META.bankAccount);
    setCopiedBank(true);
    onToast(
      `Kingdom Bank Account Number ${FOUNDATION_META.bankAccount} copied to clipboard!`
    );
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <section id="donate" className="py-20 bg-white border-b border-[#9ABDE3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 section-underline">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C02523]">
            DIRECT SUPPORT CHANNELS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E] mt-2">
            Support the mission directly.
          </h2>
          <p className="text-sm sm:text-base text-[#4365A1] mt-3 leading-relaxed">
            Use our verified channels below to fund weekly meals, education sponsorships, and our permanent community center in Eldoret.
          </p>
        </div>

        {/* We Depend On Row */}
        <div className="max-w-4xl mx-auto mb-8 bg-[#FAEB8E]/40 border border-[#E8DB7A] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D3C6E]">
            We Depend On:
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#263864]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#063BAD]" />
              Donations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#063BAD]" />
              Well Wishers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#063BAD]" />
              Friends
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#063BAD]" />
              Organizations
            </span>
          </div>
        </div>

        {/* 2 Official Payment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* M-Pesa Buy Goods Card */}
          <article className="p-7 sm:p-8 rounded-xl bg-[#F3F1E6]/50 border border-[#9ABDE3]/70 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#063BAD]/10 flex items-center justify-center text-[#063BAD]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D3C6E]">
                    M-Pesa Buy Goods
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#C02523]">
                  Instant Transfer
                </span>
              </div>

              <p className="text-[11px] uppercase tracking-widest text-[#6F8CAD] font-bold mb-1">
                Till Number
              </p>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-[#1D3C6E] font-mono tabular-nums tracking-wider">
                  {FOUNDATION_META.mpesaTill}
                </span>
                <button
                  type="button"
                  onClick={handleCopyTill}
                  className="p-2 rounded-md bg-white border border-[#9ABDE3] text-[#4365A1] hover:text-[#063BAD] hover:border-[#063BAD] transition cursor-pointer"
                  title="Copy Till Number"
                >
                  {copiedTill ? (
                    <Check className="w-4 h-4 text-[#063BAD]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-[#263864] mt-3 leading-relaxed">
                Go to M-Pesa → Lipa na M-Pesa → Buy Goods and Services → Enter Till{' '}
                <strong className="text-[#1D3C6E]">{FOUNDATION_META.mpesaTill}</strong>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#9ABDE3]/40">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full py-3 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Launch M-Pesa Online STK Push</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Bank Transfer Card */}
          <article className="p-7 sm:p-8 rounded-xl bg-[#F3F1E6]/50 border border-[#9ABDE3]/70 shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#063BAD]/10 flex items-center justify-center text-[#063BAD]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1D3C6E]">
                    Bank Transfer
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#4365A1]">
                  Kenya &amp; Wire
                </span>
              </div>

              <p className="text-[11px] uppercase tracking-widest text-[#6F8CAD] font-bold mb-0.5">
                Bank Name
              </p>
              <p className="text-lg font-bold text-[#1D3C6E] mb-3">
                {FOUNDATION_META.bankName}
              </p>

              <p className="text-[11px] uppercase tracking-widest text-[#6F8CAD] font-bold mb-1">
                Account Number
              </p>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1D3C6E] font-mono tabular-nums tracking-wider">
                  {FOUNDATION_META.bankAccount}
                </span>
                <button
                  type="button"
                  onClick={handleCopyBank}
                  className="p-2 rounded-md bg-white border border-[#9ABDE3] text-[#4365A1] hover:text-[#063BAD] hover:border-[#063BAD] transition cursor-pointer"
                  title="Copy Account Number"
                >
                  {copiedBank ? (
                    <Check className="w-4 h-4 text-[#063BAD]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-[#263864] mt-3 leading-relaxed">
                Account Name:{' '}
                <strong className="text-[#1D3C6E]">
                  Putting a Smile On Them Foundation
                </strong>{' '}
                (Eldoret Branch).
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#9ABDE3]/40">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full py-3 rounded-md bg-white border border-[#C02523] text-[#C02523] hover:bg-[#C02523] hover:text-white text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Custom Giving Tier</span>
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
