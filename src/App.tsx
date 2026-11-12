/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { FounderSection } from './components/FounderSection';
import { BeneficiariesSection } from './components/BeneficiariesSection';
import { DonationSection } from './components/DonationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { RegistrationModal } from './components/RegistrationModal';
import { ImpactTransparencyModal } from './components/ImpactTransparencyModal';
import { Toast } from './components/Toast';
import { Currency, DonationDetails, RegistrationRole } from './types';
import { Heart, UserCheck, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('KES');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals state
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number | undefined>(undefined);
  const [donateInitialCause, setDonateInitialCause] = useState<string | undefined>(undefined);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerRole, setRegisterRole] = useState<RegistrationRole>('volunteer');

  const [isImpactOpen, setIsImpactOpen] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenDonate = (amount?: number, causeTitle?: string) => {
    setDonateInitialAmount(amount);
    setDonateInitialCause(causeTitle);
    setIsDonationOpen(true);
  };

  const handleOpenRegister = (role: RegistrationRole = 'volunteer') => {
    setRegisterRole(role);
    setIsRegisterOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDonationComplete = (details: DonationDetails) => {
    showToast(
      `Asante Sana! Thank you ${details.donorName} for your contribution of ${
        details.currency === 'USD' ? '$' : 'KES '
      }${details.amount.toLocaleString()} to Putting a Smile On Them.`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E9] text-[#0E1B4D]">
      {/* 1. Header & Navigation (matching puttingasmile.netlify.app) */}
      <Navbar
        currency={currency}
        onToggleCurrency={setCurrency}
        onOpenDonate={() => handleOpenDonate()}
        onOpenRegister={() => handleOpenRegister('partner')}
        onOpenImpact={() => setIsImpactOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenDonate={() => handleOpenDonate()}
          onOpenRegister={() => handleOpenRegister('volunteer')}
          onNavigate={handleNavigate}
        />

        {/* 3. Royal Blue 4-Stat Ribbon */}
        <StatsRibbon />

        {/* 4. About Us (Story, Vision, Mission, Goals) */}
        <AboutSection onNavigate={handleNavigate} />

        {/* 5. Team Members (Leadership, Global Patron, Field Team) */}
        <TeamSection onOpenRegister={() => handleOpenRegister('volunteer')} />

        {/* 6. Founder Story (Photo & 2018 Promise Quote) */}
        <FounderSection
          onOpenDonate={() => handleOpenDonate()}
          onNavigate={handleNavigate}
        />

        {/* 7. Beneficiaries (Wangui, Karis, JuJu) */}
        <BeneficiariesSection onOpenDonate={handleOpenDonate} />

        {/* 8. Donation Section (Till 3131630, Kingdom Bank 4012107537002) */}
        <DonationSection
          onOpenDonate={handleOpenDonate}
          onToast={showToast}
        />

        {/* 9. Contact Section (Grace & Favour phones, WhatsApp, Send Message form) */}
        <ContactSection onToast={showToast} />
      </main>

      {/* 10. Clean Dark Navy Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
        onOpenRegister={() => handleOpenRegister('volunteer')}
        onOpenImpact={() => setIsImpactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#1B3FAF]/10 py-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
        <button
          onClick={() => setIsImpactOpen(true)}
          className="flex flex-col items-center justify-center text-[10px] font-bold text-[#0E1B4D] hover:text-[#C81D25] py-1"
        >
          <ShieldCheck className="w-4 h-4 text-[#1B3FAF] mb-0.5" />
          <span>85% Transparency</span>
        </button>

        <button
          onClick={() => handleNavigate('contact')}
          className="flex flex-col items-center justify-center text-[10px] font-bold text-[#0E1B4D] hover:text-[#C81D25] py-1"
        >
          <UserCheck className="w-4 h-4 text-[#C81D25] mb-0.5" />
          <span>Contact</span>
        </button>

        <button
          onClick={() => handleOpenDonate()}
          className="flex-1 max-w-[190px] py-2.5 px-4 rounded-md bg-[#C81D25] hover:bg-[#a9161d] text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Support Us</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        initialAmount={donateInitialAmount}
        initialCause={donateInitialCause}
        currency={currency}
        onToggleCurrency={setCurrency}
        onDonationComplete={handleDonationComplete}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultRole={registerRole}
        onSuccessToast={showToast}
      />

      <ImpactTransparencyModal
        isOpen={isImpactOpen}
        onClose={() => setIsImpactOpen(false)}
        onOpenDonate={() => handleOpenDonate()}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
}
