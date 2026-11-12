import React from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { Heart } from 'lucide-react';

interface FounderSectionProps {
  onOpenDonate: () => void;
  onNavigate: (sectionId: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenDonate,
  onNavigate,
}) => {
  return (
    <section id="founder" className="py-20 bg-[#1B3FAF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Founder Image Card */}
        <div className="rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-glow bg-[#FFF7E9] max-w-lg mx-auto lg:max-w-none">
          <img
            src={FOUNDATION_META.founderImg || "https://i.ibb.co/rf4mHppL/Whats-App-Image-2026-05-21-at-17-04-55.jpg"}
            alt="Founder of Putting a Smile On Them Foundation"
            className="w-full h-auto object-contain bg-[#FFF7E9]"
            onError={(e) => {
              e.currentTarget.src = FOUNDATION_META.localFallbackImage;
            }}
          />
        </div>

        {/* Founder Story & Quote */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.2em] text-xs text-[#FFF7E9] font-extrabold">
            Founder Story
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            A promise turned into purpose.
          </h2>

          <blockquote className="border-l-4 border-[#C81D25] pl-6 text-white/90 leading-relaxed text-base sm:text-lg italic font-serif">
            “{FOUNDATION_META.founderQuote}”
          </blockquote>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onOpenDonate}
              className="bg-[#C81D25] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#C81D25] transition rounded-md shadow-md cursor-pointer"
            >
              Support Us
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="border border-white/60 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#1B3FAF] transition rounded-md cursor-pointer"
            >
              Contact Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
