import React, { useState } from 'react';
import {
  GraduationCap,
  Utensils,
  Home,
  HandHeart,
  Building2,
  ArrowRight,
  X,
  Heart,
} from 'lucide-react';
import { ACTION_DOMAINS, FOUNDATION_META } from '../data/foundationData';

interface ActionDomainsGridProps {
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
}

export const ActionDomainsGrid: React.FC<ActionDomainsGridProps> = ({
  onOpenDonate,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<(typeof ACTION_DOMAINS)[0] | null>(
    null
  );

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-white" />;
      case 'Home':
        return <Home className="w-5 h-5 text-white" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-white" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-white" />;
      default:
        return <Heart className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Serif Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 section-underline">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E]">
            Our Areas of Action
          </h2>
          <p className="text-sm sm:text-base text-[#4365A1] mt-3 leading-relaxed">
            We intervene across essential grassroots areas to create lasting dignity and pathways out of street vulnerability in Eldoret.
          </p>
        </div>

        {/* 5-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ACTION_DOMAINS.map((domain) => (
            <article
              key={domain.id}
              className="bg-[#F3F1E6]/45 hover:bg-white rounded-xl border border-[#9ABDE3]/60 shadow-card hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/11] bg-[#F0EDE0] overflow-hidden relative">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                    }}
                  />
                </div>

                {/* Overlapping Category Icon Badge */}
                <div className="px-5">
                  <div
                    className={`w-10 h-10 rounded-lg ${domain.badgeBg} flex items-center justify-center shadow-md -mt-5 relative z-10 border-2 border-white`}
                  >
                    {renderIcon(domain.iconName)}
                  </div>
                </div>

                <div className="p-5 pt-3.5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#1D3C6E] group-hover:text-[#063BAD] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#263864] leading-relaxed line-clamp-3">
                    {domain.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedDomain(domain)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063BAD] hover:text-[#C02523] transition-colors cursor-pointer group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Domain Detail Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 bg-[#1D3C6E]/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#9ABDE3] relative">
            <div className="aspect-[16/9] bg-[#F0EDE0] relative">
              <img
                src={selectedDomain.image}
                alt={selectedDomain.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                }}
              />
              <button
                type="button"
                onClick={() => setSelectedDomain(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#1D3C6E]/80 text-white hover:bg-[#C02523] transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg ${selectedDomain.badgeBg} flex items-center justify-center shrink-0`}>
                  {renderIcon(selectedDomain.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C02523]">
                    Eldoret Grassroots Program
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1D3C6E]">
                    {selectedDomain.causeTitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#263864] leading-relaxed">
                {selectedDomain.detailedStory}
              </p>

              <div className="pt-3 border-t border-[#E8DB7A]/60 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDomain(null)}
                  className="px-4 py-2 rounded-md border border-[#9ABDE3] text-xs font-semibold text-[#4365A1] hover:bg-[#F3F1E6] cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedDomain.causeTitle;
                    setSelectedDomain(null);
                    onOpenDonate(undefined, title);
                  }}
                  className="px-5 py-2 rounded-md bg-[#063BAD] hover:bg-[#224EA6] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#C02523] text-[#C02523]" />
                  <span>Support This Program</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
