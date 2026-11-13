import React from 'react';
import { FOUNDATION_META, ACTION_DOMAINS } from '../data/foundationData';
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Youtube,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

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
    <footer className="bg-[#1D3C6E] text-white/90 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#063BAD] border border-[#689FF1]/40 flex items-center justify-center text-white shrink-0">
                <Heart className="w-4 h-4 fill-[#C02523] text-[#C02523]" />
              </div>
              <div className="leading-tight">
                <span className="font-serif font-bold text-base text-white block">
                  Putting a Smile
                </span>
                <span className="text-[11px] font-semibold text-[#FAEB8E] block">
                  On Them Foundation
                </span>
              </div>
            </div>

            <p className="text-xs text-white/75 leading-relaxed">
              We are a grassroots NGO dedicated to restoring hope, weekly nutrition, education pathways, and safe refuge for vulnerable children and widows in Eldoret, Kenya.
            </p>

            {/* Clean Social Circles */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={FOUNDATION_META.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C02523] text-white flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={FOUNDATION_META.whatsappGrace}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#063BAD] text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${FOUNDATION_META.email}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#063BAD] text-white flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FAEB8E] transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAEB8E] transition cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="hover:text-[#FAEB8E] transition cursor-pointer"
                >
                  Our Actions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('impact')}
                  className="hover:text-[#FAEB8E] transition cursor-pointer"
                >
                  Impact Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FAEB8E] transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">Our Programs</h4>
            <ul className="space-y-2 text-xs text-white/75">
              {ACTION_DOMAINS.map((domain) => (
                <li key={domain.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('programs')}
                    className="hover:text-[#FAEB8E] transition text-left cursor-pointer"
                  >
                    {domain.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Information & Payment */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">Information</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#689FF1] shrink-0 mt-0.5" />
                <span>{FOUNDATION_META.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#689FF1] shrink-0 mt-0.5" />
                <span>
                  Grace {FOUNDATION_META.phoneGrace} · Favour {FOUNDATION_META.phoneFavour}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#689FF1] shrink-0 mt-0.5" />
                <span className="break-all">{FOUNDATION_META.email}</span>
              </li>
              <li className="pt-1 text-white/90">
                M-Pesa Buy Goods Till:{' '}
                <strong className="font-mono text-[#FAEB8E]">
                  {FOUNDATION_META.mpesaTill}
                </strong>
                <br />
                Kingdom Bank:{' '}
                <strong className="font-mono text-[#FAEB8E]">
                  {FOUNDATION_META.bankAccount}
                </strong>
              </li>
            </ul>
          </div>

          {/* Column 5: Support Us CTA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">Support Us</h4>
            <p className="text-xs text-white/75 leading-relaxed">
              Your support enables us to continue serving meals and sponsoring education in Eldoret.
            </p>
            <button
              type="button"
              onClick={onOpenDonate}
              className="w-full py-2.5 px-4 rounded-md bg-[#C02523] hover:bg-[#9E1D1B] text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
            >
              <span>Donate Now</span>
              <Heart className="w-3.5 h-3.5 fill-white" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9ABDE3]">
          <p>© 2026 Putting a Smile On Them Foundation. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenImpact}
              className="hover:text-[#FAEB8E] transition flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#689FF1]" />
              <span>Transparency &amp; Audits</span>
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={onOpenRegister}
              className="hover:text-[#FAEB8E] transition cursor-pointer"
            >
              Volunteer &amp; Partner Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
