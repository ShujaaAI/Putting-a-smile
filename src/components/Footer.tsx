import React from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDonate: () => void;
  onOpenRegister: () => void;
  onOpenImpact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDonate,
  onOpenRegister,
  onOpenImpact,
  onNavigate,
}) => {
  return (
    <footer className="bg-[#0E1B4D] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src={FOUNDATION_META.logoUrl}
                alt="Putting a Smile On Them logo"
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif font-bold text-lg text-[#FFF7E9]">
                {FOUNDATION_META.name}
              </span>
            </div>
            <p className="text-sm text-white/75 max-w-md">
              Restoring hope, food security, and education to vulnerable children and widows in Eldoret.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-white/80">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#FFF7E9] transition"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('impact')}
              className="hover:text-[#FFF7E9] transition"
            >
              Impact
            </button>
            <button
              onClick={() => onNavigate('founder')}
              className="hover:text-[#FFF7E9] transition"
            >
              Founder
            </button>
            <button
              onClick={onOpenImpact}
              className="hover:text-[#FFF7E9] transition text-emerald-300"
            >
              85% Transparency
            </button>
            <button
              onClick={() => onNavigate('donate')}
              className="hover:text-[#FFF7E9] transition text-[#C81D25] font-bold"
            >
              Support
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#FFF7E9] transition"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <p>© 2026 Putting a Smile On Them Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>M-Pesa Buy Goods: <strong>{FOUNDATION_META.mpesaTill}</strong></span>
            <span>·</span>
            <span>Kingdom Bank: <strong>{FOUNDATION_META.bankAccount}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
