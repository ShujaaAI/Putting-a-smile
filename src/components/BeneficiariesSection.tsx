import React from 'react';
import { BENEFICIARIES, FOUNDATION_META } from '../data/foundationData';
import { Heart, ExternalLink } from 'lucide-react';

interface BeneficiariesSectionProps {
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
}

export const BeneficiariesSection: React.FC<BeneficiariesSectionProps> = ({
  onOpenDonate,
}) => {
  return (
    <section id="impact" className="py-20 bg-[#FFF7E9] border-b border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching puttingasmile.netlify.app */}
        <div className="text-center max-w-3xl mx-auto mb-14 section-title-line">
          <p className="text-[#C81D25] font-bold uppercase tracking-[0.2em] text-xs">
            Beneficiaries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B4D] mt-3 font-bold">
            Real stories. Real restoration.
          </h2>
        </div>

        {/* 3 Beneficiary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFICIARIES.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[#1B3FAF]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-glow transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] bg-[#FFF7E9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} beneficiary profile`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#C81D25] uppercase tracking-wider shadow-xs">
                    Rescued & Sponsored
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl text-[#1B3FAF] font-bold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#0E1B4D]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-xs font-semibold text-slate-500">
                  Eldoret Outreach
                </span>
                <button
                  type="button"
                  onClick={() => onOpenDonate(undefined, `Sponsorship for ${item.name}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C81D25] hover:text-[#1B3FAF] transition"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#C81D25] text-[#C81D25]" />
                  <span>Sponsor Child</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
