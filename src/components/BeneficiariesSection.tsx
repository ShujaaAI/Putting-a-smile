import React, { useState } from 'react';
import { Quote, Star, Heart, UserCheck } from 'lucide-react';
import {
  BENEFICIARIES,
  TEAM_MEMBERS,
  FOUNDATION_META,
} from '../data/foundationData';

interface BeneficiariesSectionProps {
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
  onOpenRegister: () => void;
}

export const BeneficiariesSection: React.FC<BeneficiariesSectionProps> = ({
  onOpenDonate,
  onOpenRegister,
}) => {
  const [activeSlide, setActiveSlide] = useState<'beneficiaries' | 'team'>(
    'beneficiaries'
  );

  return (
    <section
      id="impact"
      className="py-20 bg-[#F3F1E6] border-b border-[#E8DB7A]/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 section-underline">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E]">
            {activeSlide === 'beneficiaries'
              ? 'Stories of Restoration'
              : 'The People Serving This Mission'}
          </h2>
          <p className="text-sm text-[#4365A1] mt-3">
            {activeSlide === 'beneficiaries'
              ? 'Meet Wangui, Karis, and JuJu — lives transformed through street rescue, nutrition, and school sponsorship.'
              : 'Dedicated leaders and outreach partners working on the ground in Eldoret and internationally.'}
          </p>
        </div>

        {/* Clean Segmented Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1 bg-white rounded-lg border border-[#9ABDE3]/70 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveSlide('beneficiaries')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeSlide === 'beneficiaries'
                  ? 'bg-[#063BAD] text-white shadow-xs'
                  : 'text-[#4365A1] hover:text-[#1D3C6E]'
              }`}
            >
              Beneficiary Stories
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide('team')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeSlide === 'team'
                  ? 'bg-[#063BAD] text-white shadow-xs'
                  : 'text-[#4365A1] hover:text-[#1D3C6E]'
              }`}
            >
              Leadership &amp; Field Team
            </button>
          </div>
        </div>

        {/* 3-Column Card Grid */}
        {activeSlide === 'beneficiaries' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFICIARIES.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl p-7 border border-[#9ABDE3]/60 shadow-card flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div>
                    <Quote className="w-6 h-6 text-[#689FF1] fill-[#689FF1]/20 rotate-180" />
                  </div>

                  <p className="text-sm text-[#263864] leading-relaxed">
                    “{item.description}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#9ABDE3]/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={`${item.name} beneficiary profile`}
                      className="w-11 h-11 rounded-full object-cover border border-[#9ABDE3] shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                      }}
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#1D3C6E]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#6F8CAD]">{item.role}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenDonate(undefined, `Sponsorship for ${item.name}`)
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C02523] hover:text-[#063BAD] transition-colors cursor-pointer shrink-0"
                    title={`Sponsor ${item.name}`}
                  >
                    <Heart className="w-3.5 h-3.5 fill-[#C02523]/20" />
                    <span>Sponsor</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div id="team" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl p-7 border border-[#9ABDE3]/60 shadow-card flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C02523]">
                      {member.roleCategory}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#E8DB7A]">
                      <Star className="w-3.5 h-3.5 fill-[#E8DB7A]" />
                      <Star className="w-3.5 h-3.5 fill-[#E8DB7A]" />
                      <Star className="w-3.5 h-3.5 fill-[#E8DB7A]" />
                      <Star className="w-3.5 h-3.5 fill-[#E8DB7A]" />
                      <Star className="w-3.5 h-3.5 fill-[#E8DB7A]" />
                    </div>
                  </div>

                  <p className="text-sm text-[#263864] leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#9ABDE3]/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#9ABDE3] shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-[#F3F1E6] border border-[#9ABDE3] text-[#063BAD] font-bold text-xs flex items-center justify-center shrink-0">
                        {member.avatarBadge}
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-bold text-[#1D3C6E]">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#6F8CAD]">
                        Putting a Smile On Them
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenRegister}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#063BAD] hover:text-[#C02523] cursor-pointer"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            type="button"
            onClick={() => setActiveSlide('beneficiaries')}
            aria-label="Show Beneficiary Stories"
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeSlide === 'beneficiaries'
                ? 'w-6 bg-[#063BAD]'
                : 'w-2 bg-[#9ABDE3] hover:bg-[#689FF1]'
            }`}
          />
          <button
            type="button"
            onClick={() => setActiveSlide('team')}
            aria-label="Show Leadership and Field Team"
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeSlide === 'team'
                ? 'w-6 bg-[#063BAD]'
                : 'w-2 bg-[#9ABDE3] hover:bg-[#689FF1]'
            }`}
          />
        </div>
      </div>
    </section>
  );
};
