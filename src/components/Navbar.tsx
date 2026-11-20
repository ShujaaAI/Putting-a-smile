import React, { useState } from 'react';
import { Menu, X, Heart, ShieldCheck, Phone, Users } from 'lucide-react';
import { Currency } from '../types';
import { FOUNDATION_META } from '../data/foundationData';

interface NavbarProps {
  currency: Currency;
  onToggleCurrency: (c: Currency) => void;
  onOpenDonate: (amount?: number) => void;
  onOpenRegister: () => void;
  onOpenImpact: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  onOpenDonate,
  onOpenRegister,
  onOpenImpact,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'about', label: 'About' },
    { id: 'impact', label: 'Impact' },
    { id: 'donate', label: 'Donate' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Top Deep Navy Utility Bar */}
      <div className="bg-[#1D3C6E] text-white/95 py-2 px-4 sm:px-6 lg:px-8 text-xs border-b border-white/15">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5 text-white/90 font-medium">
              <Users className="w-3.5 h-3.5 text-[#689FF1] shrink-0" />
              <span>1,000+ Lives Touched</span>
            </span>
            <button
              type="button"
              onClick={onOpenImpact}
              className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#FAEB8E] transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#689FF1] shrink-0" />
              <span>Transparency &amp; Impact</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-white/90 font-medium">
            <Phone className="w-3.5 h-3.5 text-[#FAEB8E] shrink-0" />
            <span>
              Need Help? Grace{' '}
              <a href={`tel:${FOUNDATION_META.phoneGrace}`} className="hover:text-[#FAEB8E] underline-offset-2 hover:underline">
                {FOUNDATION_META.phoneGrace}
              </a>{' '}
              · Favour{' '}
              <a href={`tel:${FOUNDATION_META.phoneFavour}`} className="hover:text-[#FAEB8E] underline-offset-2 hover:underline">
                {FOUNDATION_META.phoneFavour}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <nav className="glass-nav border-b border-[#9ABDE3]/40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-6">
            {/* Zone 1: Brand Mark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-3 shrink-0 group focus:outline-hidden"
            >
              <img
                src={FOUNDATION_META.logoUrl}
                alt="Putting a Smile On Them Foundation logo"
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-icon');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="logo-fallback-icon hidden w-10 h-10 rounded-full bg-[#063BAD] text-white flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-[#C02523] text-[#C02523]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-base sm:text-lg text-[#1D3C6E] whitespace-nowrap">
                  Putting a Smile
                </span>
                <span className="text-[11px] font-bold text-[#C02523] tracking-wide whitespace-nowrap">
                  On Them Foundation
                </span>
              </div>
            </a>

            {/* Zone 2: Clean Single-Line Nav Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#263864]">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                    activeSection === item.id
                      ? 'text-[#063BAD] border-[#063BAD] font-semibold'
                      : 'border-transparent hover:text-[#063BAD]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Zone 3: Currency Switcher, Volunteer Trigger & Primary Donate CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Currency Selector */}
              <div className="flex items-center bg-[#F3F1E6] p-0.5 rounded-md border border-[#9ABDE3]/60 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => onToggleCurrency('KES')}
                  className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                    currency === 'KES'
                      ? 'bg-[#063BAD] text-white shadow-xs font-bold'
                      : 'text-[#4365A1] hover:text-[#1D3C6E]'
                  }`}
                  title="Kenyan Shillings"
                >
                  KES
                </button>
                <button
                  type="button"
                  onClick={() => onToggleCurrency('USD')}
                  className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-[#063BAD] text-white shadow-xs font-bold'
                      : 'text-[#4365A1] hover:text-[#1D3C6E]'
                  }`}
                  title="US Dollars"
                >
                  USD
                </button>
              </div>

              {/* Volunteer Shortcut */}
              <button
                type="button"
                onClick={onOpenRegister}
                className="hidden md:inline-flex items-center px-3 py-2 text-xs font-semibold text-[#263864] hover:text-[#063BAD] rounded-md hover:bg-[#F3F1E6] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Get Involved
              </button>

              {/* Primary CTA Button */}
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="inline-flex items-center gap-1.5 bg-[#C02523] hover:bg-[#9E1D1B] text-white px-4 sm:px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Donate Now</span>
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-md border border-[#9ABDE3] text-[#1D3C6E] flex items-center justify-center bg-white hover:bg-[#F3F1E6]"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#9ABDE3]/40 p-5 shadow-xl space-y-4">
            <nav className="flex flex-col gap-2.5 text-sm font-semibold text-[#1D3C6E]">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="py-2 hover:text-[#063BAD] border-b border-[#E8DB7A]/40 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#6F8CAD]">→</span>
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  onOpenImpact();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-left text-[#063BAD] border-b border-[#E8DB7A]/40 flex items-center justify-between"
              >
                <span>Transparency &amp; Audits (85% Aid)</span>
                <span className="text-[#6F8CAD]">→</span>
              </button>
            </nav>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onOpenDonate();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#C02523] text-white font-bold text-sm rounded-md text-center flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onOpenRegister();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 border border-[#063BAD] text-[#063BAD] font-bold text-sm rounded-md text-center"
              >
                Volunteer or Partner
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
