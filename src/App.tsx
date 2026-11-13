/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ActionDomainsGrid } from './components/ActionDomainsGrid';
import { AboutSection } from './components/AboutSection';
import { BeneficiariesSection } from './components/BeneficiariesSection';
import { DonationSection } from './components/DonationSection';
import { Newsletter } from './components/Newsletter';
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
    <div className="min-h-screen flex flex-col bg-[#F3F1E6] text-[#1D3C6E]">
      {/* 1. Top Utility Bar & Sticky White Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={setCurrency}
        onOpenDonate={() => handleOpenDonate()}
        onOpenRegister={() => handleOpenRegister('volunteer')}
        onOpenImpact={() => setIsImpactOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow matching reference structure */}
      <main className="flex-1">
        {/* 2. Photographic Hero + Floating Quick-Donate Card + Overlapping 3-Tab Action Bar */}
        <Hero
          currency={currency}
          onOpenDonate={handleOpenDonate}
          onOpenRegister={handleOpenRegister}
          onNavigate={handleNavigate}
        />

        {/* 3. Our Areas of Action (5-Card Domain Grid) */}
        <ActionDomainsGrid onOpenDonate={handleOpenDonate} />

        {/* 4. Split Mission & Founder Story (50/50 Photo + Soft Parchment 2x2 Grid) */}
        <AboutSection
          onNavigate={handleNavigate}
          onOpenImpact={() => setIsImpactOpen(true)}
        />

        {/* 5. Stories of Restoration & Leadership Team (Testimonial Cards) */}
        <BeneficiariesSection
          onOpenDonate={handleOpenDonate}
          onOpenRegister={() => handleOpenRegister('volunteer')}
        />

        {/* 7. Direct Giving Channels (M-Pesa Till 3131630 & Kingdom Bank 4012107537002) */}
        <DonationSection
          onOpenDonate={handleOpenDonate}
          onToast={showToast}
        />

        {/* 8. Split Newsletter Banner (Stay informed, stay engaged) */}
        <Newsletter onToast={showToast} />

        {/* 9. Contact Information & Message Form */}
        <ContactSection
          onToast={showToast}
          onOpenRegister={() => handleOpenRegister('volunteer')}
        />
      </main>

      {/* 10. 5-Column Deep Navy Footer */}
      <Footer
        onOpenDonate={() => handleOpenDonate()}
        onOpenRegister={() => handleOpenRegister('volunteer')}
        onOpenImpact={() => setIsImpactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Mobile Sticky Quick Action Bar (compact height < 15% viewport) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#9ABDE3]/60 py-2 px-4 flex items-center justify-between gap-3 shadow-lg">
        <button
          type="button"
          onClick={() => setIsImpactOpen(true)}
          className="flex flex-col items-center justify-center text-[10px] font-bold text-[#1D3C6E] hover:text-[#063BAD] py-1 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-[#063BAD] mb-0.5" />
          <span>85% Aid Ratio</span>
        </button>

        <button
          type="button"
          onClick={() => handleOpenRegister('volunteer')}
          className="flex flex-col items-center justify-center text-[10px] font-bold text-[#1D3C6E] hover:text-[#063BAD] py-1 cursor-pointer"
        >
          <UserCheck className="w-4 h-4 text-[#063BAD] mb-0.5" />
          <span>Volunteer</span>
        </button>

        <button
          type="button"
          onClick={() => handleOpenDonate()}
          className="flex-1 max-w-[190px] py-2.5 px-4 rounded-md bg-[#C02523] hover:bg-[#9E1D1B] text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 fill-white" />
          <span>Donate Now</span>
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
