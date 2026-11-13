import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Building2,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { ABOUT_PILLARS, FOUNDATION_META } from '../data/foundationData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenImpact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenImpact,
}) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#063BAD]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C02523]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#063BAD]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#063BAD]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#063BAD]" />;
    }
  };

  return (
    <section id="about" className="bg-[#F0EDE0] border-y border-[#E8DB7A]/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Column: Full-Height Photo + Authentic Founder Quote */}
        <div id="founder" className="relative min-h-[420px] lg:min-h-[600px] bg-[#1D3C6E] overflow-hidden">
          <img
            src={FOUNDATION_META.founderImage}
            alt="Founder and outreach team of Putting a Smile On Them Foundation"
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = FOUNDATION_META.localFallbackImage;
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C6E]/95 via-[#1D3C6E]/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FAEB8E]">
              <Quote className="w-4 h-4 text-[#689FF1]" />
              <span>Founder Story · 2018 Promise</span>
            </div>
            <p className="font-serif italic text-sm sm:text-base text-white/95 leading-relaxed max-w-xl">
              “{FOUNDATION_META.founderQuote}”
            </p>
            <p className="text-xs text-[#9ABDE3] font-medium">
              Born from a 2018 promise · Launched in Eldoret in 2024
            </p>
          </div>
        </div>

        {/* Right Column: Mission Content & 2x2 Feature Grid */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-7">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C02523]">
              OUR MISSION &amp; VISION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E] leading-tight">
              Acting with heart,{' '}
              <span className="text-[#063BAD]">transforming lives</span>
            </h2>

            <p className="text-sm sm:text-base text-[#263864] leading-relaxed max-w-xl">
              {FOUNDATION_META.founderStory}
            </p>

            <p className="text-xs sm:text-sm text-[#4365A1] leading-relaxed max-w-xl">
              <strong className="text-[#1D3C6E]">Vision:</strong> {FOUNDATION_META.vision}
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            {ABOUT_PILLARS.map((pillar) => (
              <div key={pillar.id} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#9ABDE3]/70 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {renderIcon(pillar.icon)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#1D3C6E]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#4365A1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenImpact}
              className="px-6 py-3 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Learn more about our transparency</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('donate')}
              className="text-xs sm:text-sm font-bold text-[#C02523] hover:text-[#063BAD] transition-colors cursor-pointer"
            >
              Support Direct Aid →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
