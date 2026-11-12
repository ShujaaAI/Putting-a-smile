import React, { useState } from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { Smartphone, Building2, Copy, Check, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

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
    onToast(`Kingdom Bank Account Number ${FOUNDATION_META.bankAccount} copied to clipboard!`);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <section id="donate" className="py-20 bg-white border-b border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 section-title-line">
          <p className="text-[#C81D25] font-bold uppercase tracking-[0.2em] text-xs">
            Donation Section
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B4D] mt-3 font-bold">
            Support the mission directly.
          </h2>
          <p className="text-[#0E1B4D]/80 mt-4 text-base leading-relaxed">
            Use the details below to support feeding programs, education sponsorships, and community center development.
          </p>
        </div>

        {/* We Depend On Card */}
        <div className="max-w-4xl mx-auto mb-10 bg-[#FFF7E9] border border-[#1B3FAF]/15 rounded-2xl p-6 sm:p-7 shadow-xs">
          <p className="text-xs uppercase tracking-widest text-[#C81D25] font-bold mb-3">
            We Depend On
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[#0E1B4D]/85 list-disc pl-5 text-sm font-semibold">
            <li>Donations</li>
            <li>Well wishers</li>
            <li>Friends</li>
            <li>Organizations</li>
          </ul>
        </div>

        {/* 2 Official Payment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* M-Pesa Buy Goods Card */}
          <article className="p-8 rounded-2xl bg-[#FFF7E9] border border-[#1B3FAF]/20 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl text-[#1B3FAF] font-bold flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-[#C81D25]" />
                  <span>M-Pesa Buy Goods</span>
                </h3>
                <span className="text-[11px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                  Instant
                </span>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#C81D25] font-bold mb-1">
                Till Number
              </p>
              
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0E1B4D] font-mono tracking-wider">
                  {FOUNDATION_META.mpesaTill}
                </span>
                <button
                  onClick={handleCopyTill}
                  className="p-2 rounded-lg bg-white border border-[#1B3FAF]/20 text-[#1B3FAF] hover:text-[#C81D25] hover:bg-slate-50 transition"
                  title="Copy Till Number"
                >
                  {copiedTill ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-xs text-[#0E1B4D]/70 mt-3 leading-relaxed">
                Go to M-Pesa &gt; Lipa na M-Pesa &gt; Buy Goods and Services &gt; Enter Till <strong>{FOUNDATION_META.mpesaTill}</strong>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1B3FAF]/10">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full py-3 rounded-lg bg-[#1B3FAF] hover:bg-[#0E1B4D] text-white text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Launch M-Pesa Online STK Push</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Bank Transfer Card */}
          <article className="p-8 rounded-2xl bg-[#FFF7E9] border border-[#1B3FAF]/20 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl text-[#1B3FAF] font-bold flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#1B3FAF]" />
                  <span>Bank Transfer</span>
                </h3>
                <span className="text-[11px] font-bold uppercase text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md">
                  Kenya & Global Wire
                </span>
              </div>

              <p className="text-xs uppercase tracking-widest text-[#C81D25] font-bold mb-1">
                Bank
              </p>
              <p className="text-xl font-bold text-[#0E1B4D] mb-4">
                {FOUNDATION_META.bankName}
              </p>

              <p className="text-xs uppercase tracking-widest text-[#C81D25] font-bold mb-1">
                Account Number
              </p>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0E1B4D] font-mono tracking-wider">
                  {FOUNDATION_META.bankAccount}
                </span>
                <button
                  onClick={handleCopyBank}
                  className="p-2 rounded-lg bg-white border border-[#1B3FAF]/20 text-[#1B3FAF] hover:text-[#C81D25] hover:bg-slate-50 transition"
                  title="Copy Account Number"
                >
                  {copiedBank ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-xs text-[#0E1B4D]/70 mt-3 leading-relaxed">
                Branch: Eldoret Branch. Account Name: <strong>Putting a Smile On Them Foundation</strong>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1B3FAF]/10">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="w-full py-3 rounded-lg bg-white border border-[#1B3FAF] text-[#1B3FAF] hover:bg-[#1B3FAF] hover:text-white text-xs font-bold uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Custom Giving Tier</span>
                <Heart className="w-4 h-4 text-[#C81D25]" />
              </button>
            </div>
          </article>

        </div>

        {/* Central I Want to Support CTA Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onOpenDonate()}
            className="inline-block bg-[#C81D25] hover:bg-[#1B3FAF] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition shadow-glow rounded-md cursor-pointer"
          >
            I Want to Support
          </button>
        </div>

      </div>
    </section>
  );
};
