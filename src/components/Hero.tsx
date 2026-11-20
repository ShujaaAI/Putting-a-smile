import React, { useState } from 'react';
import {
  Heart,
  Lock,
  ArrowRight,
  HandHeart,
  GraduationCap,
} from 'lucide-react';
import { Currency, RegistrationRole } from '../types';
import { FOUNDATION_META, ACTION_DOMAINS, BENEFICIARIES } from '../data/foundationData';

interface HeroProps {
  currency: Currency;
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
  onOpenRegister: (role?: RegistrationRole) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currency,
  onOpenDonate,
  onOpenRegister,
  onNavigate,
}) => {
  const presets =
    currency === 'KES' ? [1500, 5000, 10000, 20000] : [10, 35, 75, 150];
  const [quickAmount, setQuickAmount] = useState<number>(
    currency === 'KES' ? 5000 : 35
  );

  const activePreset = presets.includes(quickAmount) ? quickAmount : presets[1];

  const [barTab, setBarTab] = useState<'donate' | 'sponsor' | 'volunteer'>('donate');
  const [selectedInitiative, setSelectedInitiative] = useState<string>(
    ACTION_DOMAINS[0].causeTitle
  );
  const [selectedBarAmount, setSelectedBarAmount] = useState<string>(
    currency === 'KES' ? '5000' : '35'
  );
  const [selectedFrequency, setSelectedFrequency] = useState<'once' | 'monthly'>('once');
  const [selectedChild, setSelectedChild] = useState<string>(BENEFICIARIES[0].name);
  const [volunteerRole, setVolunteerRole] = useState<string>('Field Outreach & Feeding');

  const handleBarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barTab === 'volunteer') {
      onOpenRegister('volunteer');
    } else if (barTab === 'sponsor') {
      const amt = Number(selectedBarAmount) || (currency === 'KES' ? 5000 : 35);
      onOpenDonate(amt, `Sponsorship for ${selectedChild}`);
    } else {
      const amt = Number(selectedBarAmount) || (currency === 'KES' ? 5000 : 35);
      onOpenDonate(amt, selectedInitiative);
    }
  };

  return (
    <section id="home" className="relative bg-white pb-12">
      {/* Full-Bleed Photographic Hero Banner */}
      <div className="relative min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#1D3C6E]">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-11-16_at_5.36.51_PM_c7fd4ad1.jpeg"
          alt="Community outreach and support in Eldoret with Putting a Smile On Them Foundation"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = FOUNDATION_META.localFallbackImage;
          }}
        />

        {/* Deep Navy & Cobalt Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D3C6E]/92 via-[#1D3C6E]/70 to-[#063BAD]/40" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 pb-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs border border-[#9ABDE3]/40 text-[11px] font-bold tracking-widest uppercase text-white">
                <Heart className="w-3.5 h-3.5 text-[#FAEB8E] fill-[#C02523] shrink-0" />
                <span>Hope · Dignity · Opportunity · Eldoret, Kenya</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white max-w-2xl">
                Putting smiles where{' '}
                <span className="text-[#FAEB8E]">pain once lived.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed font-normal">
                We stand with vulnerable children, widows, and families in Eldoret through daily nutrition programs, education pathways, street rescue, and sustainable community support.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="px-6 py-3.5 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white text-sm font-semibold shadow-lg transition-all cursor-pointer whitespace-nowrap border border-[#689FF1]/40"
                >
                  Explore Our Actions
                </button>

                <button
                  type="button"
                  onClick={() => onOpenDonate()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-[#F3F1E6] text-[#1D3C6E] text-sm font-semibold shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Support Us</span>
                  <Heart className="w-4 h-4 text-[#C02523] fill-[#C02523]" />
                </button>
              </div>

              {/* Overlapping Avatars Social Proof */}
              <div className="pt-3 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {BENEFICIARIES.map((b) => (
                    <img
                      key={b.id}
                      src={b.image}
                      alt={b.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                      onError={(e) => {
                        e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                      }}
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#C02523] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                    1k+
                  </div>
                </div>
                <div className="text-xs text-white/90 leading-snug">
                  <strong className="block font-semibold text-white">
                    Over 1,000+ lives touched in Eldoret
                  </strong>
                  <span className="text-[#9ABDE3]">
                    Join our founding partners &amp; weekly meal sponsors
                  </span>
                </div>
              </div>
            </div>

            {/* Right Floating White Quick-Donate Card */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="w-full max-w-[340px] bg-white rounded-xl p-6 shadow-floating border border-[#9ABDE3]/50 text-[#1D3C6E] space-y-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#1D3C6E] leading-snug">
                    Every Gift Makes a Difference
                  </h2>
                  <p className="text-xs text-[#4365A1] mt-1">
                    Support our feeding, school kit, and shelter projects in Eldoret.
                  </p>
                </div>

                {/* 4 Preset Amount Buttons */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  {presets.map((amt) => {
                    const isSelected = activePreset === amt;
                    return (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setQuickAmount(amt)}
                        className={`py-2 px-1 rounded-md text-xs font-bold border transition-all cursor-pointer tabular-nums ${
                          isSelected
                            ? 'bg-[#063BAD] text-white border-[#063BAD] shadow-xs'
                            : 'bg-[#F3F1E6]/70 text-[#263864] border-[#9ABDE3]/70 hover:border-[#063BAD] hover:text-[#063BAD]'
                        }`}
                      >
                        {currency === 'KES'
                          ? amt >= 1000
                            ? `${amt / 1000}k`
                            : amt
                          : `$${amt}`}
                      </button>
                    );
                  })}
                </div>

                <div className="text-[11px] text-[#263864] bg-[#FAEB8E]/40 border border-[#E8DB7A] px-3 py-2 rounded-md text-center font-medium">
                  Selected:{' '}
                  <strong className="text-[#1D3C6E]">
                    {currency === 'KES'
                      ? `KES ${activePreset.toLocaleString()}`
                      : `$${activePreset}`}
                  </strong>{' '}
                  ·{' '}
                  {activePreset === presets[0]
                    ? 'Feeds a child for a week'
                    : activePreset === presets[1]
                    ? 'Full school kit & shoes'
                    : activePreset === presets[2]
                    ? 'Widow livelihood grant'
                    : 'Community center brick'}
                </div>

                {/* Primary Crimson Donate Button */}
                <button
                  type="button"
                  onClick={() => onOpenDonate(activePreset)}
                  className="w-full py-3 px-4 rounded-md bg-[#C02523] hover:bg-[#9E1D1B] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Donate Now</span>
                  <Heart className="w-4 h-4 fill-white" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6F8CAD] pt-0.5">
                  <Lock className="w-3.5 h-3.5 text-[#689FF1]" />
                  <span>100% Secure · M-Pesa Till {FOUNDATION_META.mpesaTill}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Overlapping Floating Action Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-floating border border-[#9ABDE3]/60 overflow-hidden">
          
          {/* Top 3 Segmented Tab Triggers */}
          <div className="grid grid-cols-3 border-b border-[#9ABDE3]/30 bg-[#F3F1E6]/70">
            <button
              type="button"
              onClick={() => setBarTab('donate')}
              className={`py-3.5 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
                barTab === 'donate'
                  ? 'bg-white text-[#1D3C6E] border-[#063BAD]'
                  : 'text-[#6F8CAD] border-transparent hover:text-[#1D3C6E]'
              }`}
            >
              <Heart className={`w-4 h-4 ${barTab === 'donate' ? 'text-[#C02523]' : 'text-[#6F8CAD]'}`} />
              <span className="truncate">Make a Donation</span>
            </button>

            <button
              type="button"
              onClick={() => setBarTab('sponsor')}
              className={`py-3.5 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
                barTab === 'sponsor'
                  ? 'bg-white text-[#1D3C6E] border-[#063BAD]'
                  : 'text-[#6F8CAD] border-transparent hover:text-[#1D3C6E]'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${barTab === 'sponsor' ? 'text-[#063BAD]' : 'text-[#6F8CAD]'}`} />
              <span className="truncate">Sponsor a Child</span>
            </button>

            <button
              type="button"
              onClick={() => setBarTab('volunteer')}
              className={`py-3.5 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
                barTab === 'volunteer'
                  ? 'bg-white text-[#1D3C6E] border-[#063BAD]'
                  : 'text-[#6F8CAD] border-transparent hover:text-[#1D3C6E]'
              }`}
            >
              <HandHeart className={`w-4 h-4 ${barTab === 'volunteer' ? 'text-[#063BAD]' : 'text-[#6F8CAD]'}`} />
              <span className="truncate">Become a Volunteer</span>
            </button>
          </div>

          {/* Bottom Controls Row */}
          <form onSubmit={handleBarSubmit} className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              
              {barTab === 'donate' && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Choose a Program
                    </label>
                    <select
                      value={selectedInitiative}
                      onChange={(e) => setSelectedInitiative(e.target.value)}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      {ACTION_DOMAINS.map((d) => (
                        <option key={d.id} value={d.causeTitle}>
                          {d.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Amount ({currency})
                    </label>
                    <select
                      value={selectedBarAmount}
                      onChange={(e) => setSelectedBarAmount(e.target.value)}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      {presets.map((p) => (
                        <option key={p} value={String(p)}>
                          {currency === 'KES' ? `KES ${p.toLocaleString()}` : `$${p}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Frequency
                    </label>
                    <select
                      value={selectedFrequency}
                      onChange={(e) => setSelectedFrequency(e.target.value as 'once' | 'monthly')}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      <option value="once">One-Time Gift</option>
                      <option value="monthly">Monthly Support</option>
                    </select>
                  </div>
                </>
              )}

              {barTab === 'sponsor' && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Select Child Profile
                    </label>
                    <select
                      value={selectedChild}
                      onChange={(e) => setSelectedChild(e.target.value)}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      {BENEFICIARIES.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} — {b.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Sponsorship Tier ({currency})
                    </label>
                    <select
                      value={selectedBarAmount}
                      onChange={(e) => setSelectedBarAmount(e.target.value)}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      {presets.map((p) => (
                        <option key={p} value={String(p)}>
                          {currency === 'KES' ? `KES ${p.toLocaleString()}` : `$${p}`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Commitment
                    </label>
                    <select
                      value={selectedFrequency}
                      onChange={(e) => setSelectedFrequency(e.target.value as 'once' | 'monthly')}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      <option value="monthly">Monthly Sponsorship</option>
                      <option value="once">One-Time School Gift</option>
                    </select>
                  </div>
                </>
              )}

              {barTab === 'volunteer' && (
                <>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Preferred Outreach Area in Eldoret
                    </label>
                    <select
                      value={volunteerRole}
                      onChange={(e) => setVolunteerRole(e.target.value)}
                      className="w-full h-11 bg-white border border-[#9ABDE3] rounded-md px-3 text-xs sm:text-sm text-[#1D3C6E] font-medium focus:outline-hidden focus:border-[#063BAD]"
                    >
                      <option value="Field Outreach & Feeding">Field Outreach &amp; Weekly Meals</option>
                      <option value="Education & Mentorship">Education &amp; Child Mentorship</option>
                      <option value="Widow Empowerment">Widow Mentorship &amp; Micro-Grants</option>
                      <option value="Community Center Construction">Community Center &amp; Logistics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#4365A1] mb-1">
                      Participation Type
                    </label>
                    <div className="h-11 bg-[#F3F1E6] border border-[#9ABDE3]/70 rounded-md px-3 flex items-center text-xs sm:text-sm text-[#263864] font-medium">
                      Eldoret &amp; Remote
                    </div>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-11 px-5 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>{barTab === 'volunteer' ? 'Apply Now' : 'Contribute Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-[#6F8CAD] text-center mt-4">
              Your support is essential to sustain our weekly feeding, school sponsorship, and shelter programs in Eldoret.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
