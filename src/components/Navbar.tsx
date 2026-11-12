import React, { useState } from 'react';
import { Menu, X, Heart, ShieldCheck, Phone } from 'lucide-react';
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
    { id: 'about', label: 'About' },
    { id: 'impact', label: 'Impact' },
    { id: 'founder', label: 'Founder' },
    { id: 'team', label: 'Team' },
    { id: 'donate', label: 'Donate' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Ribbon from puttingasmile.netlify.app */}
      <div className="bg-[#C81D25] text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
        <span>{FOUNDATION_META.announcement}</span>
        <button
          onClick={onOpenRegister}
          className="underline font-bold hover:text-[#FFF7E9] hidden sm:inline ml-1"
        >
          Get in Touch →
        </button>
      </div>

      {/* Sticky Main Navigation */}
      <nav className="sticky top-0 z-40 border-b border-[#1B3FAF]/10 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 sm:h-24 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-3 shrink-0"
            >
              <img
                src={FOUNDATION_META.logoUrl}
                alt="Putting a Smile On Them Foundation logo"
                className="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback text mark if remote image is ever slow
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="logo-fallback hidden flex flex-col">
                <span className="font-serif font-bold text-lg text-[#1B3FAF]">
                  Putting a Smile On Them
                </span>
                <span className="text-[10px] font-bold text-[#C81D25] uppercase tracking-wider">
                  Foundation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links matching puttingasmile.netlify.app */}
            <div className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E1B4D]">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`transition hover:text-[#C81D25] ${
                    activeSection === item.id ? 'text-[#C81D25] font-extrabold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              
              {/* Currency Selector Pill */}
              <div className="flex items-center bg-white/80 p-0.5 rounded-md border border-[#1B3FAF]/20 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => onToggleCurrency('KES')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currency === 'KES'
                      ? 'bg-[#1B3FAF] text-white shadow-xs'
                      : 'text-[#0E1B4D]/70 hover:text-[#0E1B4D]'
                  }`}
                  title="Kenyan Shillings"
                >
                  KES
                </button>
                <button
                  type="button"
                  onClick={() => onToggleCurrency('USD')}
                  className={`px-2 py-1 rounded transition-colors ${
                    currency === 'USD'
                      ? 'bg-[#1B3FAF] text-white shadow-xs'
                      : 'text-[#0E1B4D]/70 hover:text-[#0E1B4D]'
                  }`}
                  title="US Dollars"
                >
                  USD
                </button>
              </div>

              {/* Support Us Button */}
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="bg-[#C81D25] hover:bg-[#a9161d] text-white px-4 sm:px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-sm transition transform hover:-translate-y-0.5"
              >
                Support Us
              </button>

              {/* About Us Outline Button */}
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="hidden md:inline-block px-4 sm:px-5 py-2.5 border border-[#1B3FAF] text-[#1B3FAF] hover:bg-[#1B3FAF] hover:text-white rounded-md transition text-xs font-bold uppercase tracking-wider"
              >
                About Us
              </button>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-md border border-[#1B3FAF]/30 text-[#1B3FAF] flex items-center justify-center bg-white shadow-xs"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#1B3FAF]/10 p-5 shadow-glow space-y-4">
            <nav className="flex flex-col gap-3 text-xs font-bold uppercase tracking-wider text-[#0E1B4D]">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="py-1.5 hover:text-[#C81D25] border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-300">→</span>
                </a>
              ))}
              <button
                onClick={() => {
                  onOpenImpact();
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 text-left text-[#1B3FAF] hover:text-[#C81D25] border-b border-slate-100 flex items-center justify-between"
              >
                <span>85% Transparency & Audits</span>
                <span className="text-slate-300">→</span>
              </button>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenDonate();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#C81D25] text-white font-bold uppercase tracking-wider text-xs rounded-md text-center"
              >
                Support Us Now
              </button>
              <button
                onClick={() => {
                  onOpenRegister();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 border border-[#1B3FAF] text-[#1B3FAF] font-bold uppercase tracking-wider text-xs rounded-md text-center"
              >
                Volunteer or Partner
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
