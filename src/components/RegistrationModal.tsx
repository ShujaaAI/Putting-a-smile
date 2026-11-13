import React, { useState, useEffect } from 'react';
import { X, UserCheck, HeartHandshake, Users, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { RegistrationRole } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: RegistrationRole;
  onSuccessToast: (msg: string) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'volunteer',
  onSuccessToast,
}) => {
  const [activeTab, setActiveTab] = useState<RegistrationRole>(defaultRole);

  // Volunteer Fields
  const [vName, setVName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vLocation, setVLocation] = useState('Eldoret Town');
  const [vInterests, setVInterests] = useState<string[]>([
    'Field Outreach & Distribution',
    'Education & Mentorship',
  ]);
  const [vSkills, setVSkills] = useState('');

  // Partner Fields
  const [pOrg, setPOrg] = useState('');
  const [pContact, setPContact] = useState('');
  const [pEmail, setPEmail] = useState('');
  const [pType, setPType] = useState('corporate_csr');
  const [pMessage, setPMessage] = useState('');

  // Beneficiary Fields
  const [bName, setBName] = useState('');
  const [bPhone, setBPhone] = useState('');
  const [bNeed, setBNeed] = useState<'food' | 'education' | 'widow_empowerment' | 'medical'>('education');
  const [bFamilySize, setBFamilySize] = useState('4');
  const [bSituation, setBSituation] = useState('');

  // Submission State
  const [confirmedData, setConfirmedData] = useState<{
    role: RegistrationRole;
    name: string;
    idNumber: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultRole);
      setConfirmedData(null);
    }
  }, [isOpen, defaultRole]);

  if (!isOpen) return null;

  const interestOptions = [
    'Field Outreach & Distribution',
    'Education & Mentorship',
    'Food Pantry Logistics',
    'Healthcare & Medical Clinics',
    'Widow Support Circles',
    'Social Media & Storytelling',
    'Event Setup & Coordination',
  ];

  const handleToggleInterest = (opt: string) => {
    if (vInterests.includes(opt)) {
      setVInterests(vInterests.filter((i) => i !== opt));
    } else {
      setVInterests([...vInterests, opt]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const regId = 'PSOT-' + Math.floor(10000 + Math.random() * 90000);
    
    let submitName = '';
    let summaryMsg = '';

    if (activeTab === 'volunteer') {
      submitName = vName;
      summaryMsg = `Welcome to the team! Our Eldoret volunteer lead will contact you to schedule an orientation.`;
    } else if (activeTab === 'partner') {
      submitName = pOrg || pContact;
      summaryMsg = `Thank you for proposing a partnership. Our leadership team will review and reply within 48 hours.`;
    } else {
      submitName = bName;
      summaryMsg = `Your community assistance request has been queued for home-visit assessment by our Eldoret social team.`;
    }

    setConfirmedData({
      role: activeTab,
      name: submitName,
      idNumber: regId,
      message: summaryMsg,
    });

    onSuccessToast(`Registration successful! ID: ${regId}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1D3C6E]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative my-8 border border-[#9ABDE3]/60 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#1D3C6E] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#063BAD] border border-white/15 flex items-center justify-center text-[#FAEB8E]">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold">
                Community &amp; Engagement Portal
              </h2>
              <p className="text-xs text-[#9ABDE3]">
                Join our mission in Eldoret or register for support
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

        {/* Content Area */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {confirmedData ? (
            /* CONFIRMATION STATE */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAEB8E] text-[#063BAD] flex items-center justify-center border border-[#E8DB7A]">
                <CheckCircle2 className="w-9 h-9 text-[#063BAD]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#063BAD]">
                  Application Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-[#1D3C6E]">
                  Welcome, {confirmedData.name}!
                </h3>
                <p className="text-sm text-[#4365A1] max-w-md mx-auto">
                  {confirmedData.message}
                </p>
              </div>

              <div className="max-w-sm mx-auto bg-[#F3F1E6] p-4 rounded-xl border border-[#9ABDE3] text-left space-y-2 text-xs">
                <div className="flex justify-between border-b border-[#9ABDE3]/60 pb-2">
                  <span className="text-[#4365A1]">Registration ID:</span>
                  <span className="font-mono font-bold text-[#1D3C6E]">{confirmedData.idNumber}</span>
                </div>
                <div className="flex justify-between border-b border-[#9ABDE3]/60 pb-2">
                  <span className="text-[#4365A1]">Category:</span>
                  <span className="font-bold uppercase text-[#063BAD]">{confirmedData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4365A1]">Headquarters:</span>
                  <span className="font-semibold text-[#1D3C6E]">Eldoret, Kenya</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#063BAD] text-white text-xs font-bold hover:bg-[#224EA6] cursor-pointer"
                >
                  Return to Main Page
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Role Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#F3F1E6] rounded-xl border border-[#9ABDE3]/50">
                <button
                  type="button"
                  onClick={() => setActiveTab('volunteer')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'volunteer'
                      ? 'bg-[#063BAD] text-white shadow-xs'
                      : 'text-[#263864] hover:text-[#1D3C6E]'
                  }`}
                >
                  <HeartHandshake className={`w-4 h-4 ${activeTab === 'volunteer' ? 'text-[#FAEB8E]' : 'text-[#063BAD]'}`} />
                  <span>Volunteer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('partner')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'partner'
                      ? 'bg-[#063BAD] text-white shadow-xs'
                      : 'text-[#263864] hover:text-[#1D3C6E]'
                  }`}
                >
                  <Building className={`w-4 h-4 ${activeTab === 'partner' ? 'text-[#FAEB8E]' : 'text-[#224EA6]'}`} />
                  <span>Partner / CSR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('beneficiary')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'beneficiary'
                      ? 'bg-[#063BAD] text-white shadow-xs'
                      : 'text-[#263864] hover:text-[#1D3C6E]'
                  }`}
                >
                  <Users className={`w-4 h-4 ${activeTab === 'beneficiary' ? 'text-[#FAEB8E]' : 'text-[#C02523]'}`} />
                  <span>Community Aid</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* VOLUNTEER TAB */}
                {activeTab === 'volunteer' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={vName}
                          onChange={(e) => setVName(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={vEmail}
                          onChange={(e) => setVEmail(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+254 7XX XXX XXX"
                          value={vPhone}
                          onChange={(e) => setVPhone(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Location Zone
                        </label>
                        <select
                          value={vLocation}
                          onChange={(e) => setVLocation(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        >
                          <option value="Eldoret Town">Eldoret Town Center</option>
                          <option value="Huruma Settlement">Huruma Settlement</option>
                          <option value="Langas Estate">Langas Estate</option>
                          <option value="Maili Nne / Kapsoya">Maili Nne / Kapsoya</option>
                          <option value="Turbo / Kipkaren">Turbo / Kipkaren</option>
                          <option value="Remote / Digital Volunteer">Remote / Digital Volunteer</option>
                        </select>
                      </div>
                    </div>

                    {/* Areas of Interest Checkboxes */}
                    <div>
                      <label className="block text-xs font-bold text-[#1D3C6E] mb-2">
                        Areas of Interest (Select all that apply):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {interestOptions.map((opt) => (
                          <label
                            key={opt}
                            className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                              vInterests.includes(opt)
                                ? 'bg-[#F3F1E6] border-[#063BAD] text-[#1D3C6E] font-semibold'
                                : 'border-[#9ABDE3]/60 text-[#263864] hover:bg-[#F3F1E6]/50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={vInterests.includes(opt)}
                              onChange={() => handleToggleInterest(opt)}
                              className="w-4 h-4 accent-[#063BAD] rounded"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                        Any relevant skills or experience? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Teaching experience, first-aid certified, photography, driving license..."
                        value={vSkills}
                        onChange={(e) => setVSkills(e.target.value)}
                        className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                      />
                    </div>
                  </div>
                )}

                {/* PARTNER / CSR TAB */}
                {activeTab === 'partner' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Company / Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Kenya Ltd"
                          value={pOrg}
                          onChange={(e) => setPOrg(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Mutai"
                          value={pContact}
                          onChange={(e) => setPContact(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="contact@company.com"
                          value={pEmail}
                          onChange={(e) => setPEmail(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Partnership Focus
                        </label>
                        <select
                          value={pType}
                          onChange={(e) => setPType(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        >
                          <option value="corporate_csr">Corporate CSR Grant</option>
                          <option value="school_sponsorship">School Supply Kits Sponsorship</option>
                          <option value="in_kind_goods">In-Kind Food & Commodities Donation</option>
                          <option value="widow_seed_fund">Widows Livelihood Matching Fund</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                        Collaboration Message *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us about your organization's goals and how you'd like to support our Eldoret initiatives..."
                        value={pMessage}
                        onChange={(e) => setPMessage(e.target.value)}
                        className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                      />
                    </div>
                  </div>
                )}

                {/* BENEFICIARY TAB */}
                {activeTab === 'beneficiary' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Applicant / Guardian Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Esther Kipkoech"
                          value={bName}
                          onChange={(e) => setBName(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+254 7XX XXX XXX"
                          value={bPhone}
                          onChange={(e) => setBPhone(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Assistance Category
                        </label>
                        <select
                          value={bNeed}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setBNeed(e.target.value as 'food' | 'education' | 'widow_empowerment' | 'medical')
                          }
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        >
                          <option value="education">School Uniforms, Books & Fee Support</option>
                          <option value="food">Emergency Family Food Basket</option>
                          <option value="widow_empowerment">Widow Micro-Business Grant</option>
                          <option value="medical">Medical Checkup & Clinic Support</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                          Household Size
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={15}
                          value={bFamilySize}
                          onChange={(e) => setBFamilySize(e.target.value)}
                          className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1D3C6E] mb-1">
                        Brief Situation / Need Details *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Please briefly explain your family's situation and specific needs so our social worker can schedule a home visit..."
                        value={bSituation}
                        onChange={(e) => setBSituation(e.target.value)}
                        className="w-full bg-[#F3F1E6]/50 border border-[#9ABDE3] rounded-lg px-3 py-2 text-xs text-[#1D3C6E] focus:outline-hidden focus:ring-2 focus:ring-[#063BAD]"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#9ABDE3]/40 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-[#6F8CAD]">
                    All applications handled strictly according to our Child Protection & Privacy Charter.
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white font-bold text-xs shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit {activeTab === 'beneficiary' ? 'Request' : 'Application'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
