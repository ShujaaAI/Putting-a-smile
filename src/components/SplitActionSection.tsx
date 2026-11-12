import React, { useState } from 'react';
import { Heart, ArrowRight, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { Currency } from '../types';

interface SplitActionSectionProps {
  currency: Currency;
  onOpenDonate: (amount?: number) => void;
  onVolunteerSuccess: (name: string, role: string) => void;
}

export const SplitActionSection: React.FC<SplitActionSectionProps> = ({
  currency,
  onOpenDonate,
  onVolunteerSuccess,
}) => {
  // Preset amounts based on currency
  const usdPresets = [10, 25, 50, 100];
  const kesPresets = [1500, 3500, 7500, 15000];

  const presets = currency === 'USD' ? usdPresets : kesPresets;
  const [selectedAmount, setSelectedAmount] = useState<number>(currency === 'USD' ? 25 : 3500);
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState('');

  // Volunteer quick form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Field Outreach & Distribution');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomVal('');
  };

  const handleCustomClick = () => {
    setIsCustom(true);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomVal(val);
    if (val) {
      setSelectedAmount(Number(val));
    }
  };

  const handleDonateNow = () => {
    const finalAmt = isCustom && customVal ? Number(customVal) : selectedAmount;
    onOpenDonate(finalAmt > 0 ? finalAmt : undefined);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter a contact phone number');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
    onVolunteerSuccess(fullName, role);

    // reset after 4s
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setEmail('');
      setPhone('');
    }, 4500);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Navy Blue Donation Action */}
        <div className="relative bg-[#0b3b60] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          {/* Subtle Watermark Icon */}
          <div className="absolute right-6 bottom-6 pointer-events-none opacity-10">
            <Heart className="w-48 h-48 text-white stroke-[1.2]" />
          </div>

          <div className="relative z-10 max-w-lg mx-auto lg:mx-0 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                MAKE AN IMPACT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1">
                Your Donation Can Change Lives
              </h2>
              <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
                Every contribution helps us bring nutritious food, school kits, and emergency care to families in Eldoret who need it most.
              </p>
            </div>

            {/* Amount Selection Buttons matching reference style */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {presets.map((amt) => {
                  const isSelected = !isCustom && selectedAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                        isSelected
                          ? 'bg-emerald-500 text-white shadow-md ring-2 ring-emerald-300'
                          : 'bg-[#082b47] hover:bg-[#062137] text-white border border-white/15'
                      }`}
                    >
                      {currency === 'USD' ? `$${amt}` : `KES ${amt.toLocaleString()}`}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={handleCustomClick}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    isCustom
                      ? 'bg-emerald-500 text-white shadow-md ring-2 ring-emerald-300'
                      : 'bg-[#082b47] hover:bg-[#062137] text-white border border-white/15'
                  }`}
                >
                  Other
                </button>
              </div>

              {/* Custom Input when 'Other' is chosen */}
              {isCustom && (
                <div className="flex items-center gap-2 max-w-xs mt-2">
                  <span className="text-sm font-bold text-slate-200">
                    {currency === 'USD' ? '$' : 'KES'}
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter amount"
                    value={customVal}
                    onChange={handleCustomChange}
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-slate-400 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Donate CTA button */}
            <div>
              <button
                type="button"
                onClick={handleDonateNow}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-300"
              >
                <span>Donate Now</span>
                <Heart className="w-5 h-5 fill-white text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Vibrant Emerald Green Volunteer Application */}
        <div className="relative bg-[#16a34a] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="relative z-10 max-w-lg mx-auto lg:mx-0 space-y-5">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-100 uppercase">
                JOIN OUR MISSION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-1">
                Become A Volunteer
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 mt-2 leading-relaxed">
                Join our team of dedicated local and global volunteers and help us bring real hope and smiles to Eldoret communities.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 text-white space-y-2 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Application Received!</h3>
                <p className="text-sm text-emerald-100">
                  Thank you, <strong className="text-white">{fullName}</strong>. Our Eldoret volunteer coordinator will reach out to you at <span className="underline">{email}</span> within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-3.5">
                {errorMsg && (
                  <p className="text-xs font-bold bg-rose-900/60 text-rose-100 px-3 py-1.5 rounded-md">
                    {errorMsg}
                  </p>
                )}

                {/* 2x2 Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-emerald-100 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dennis Kiprop"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white text-slate-900 rounded-lg px-3.5 py-2.5 text-sm font-medium placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-100 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white text-slate-900 rounded-lg px-3.5 py-2.5 text-sm font-medium placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-100 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 712 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white text-slate-900 rounded-lg px-3.5 py-2.5 text-sm font-medium placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-100 mb-1">
                      Select Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-white text-slate-900 rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                    >
                      <option value="Field Outreach & Distribution">Field Outreach & Distribution</option>
                      <option value="Education & Child Mentorship">Education & Child Mentorship</option>
                      <option value="Healthcare & First-Aid Support">Healthcare & First-Aid Support</option>
                      <option value="Logistics & Event Coordination">Logistics & Event Coordination</option>
                      <option value="Fundraising & Donor Relations">Fundraising & Donor Relations</option>
                    </select>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-lg shadow-md transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-hidden"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4 text-emerald-700" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
