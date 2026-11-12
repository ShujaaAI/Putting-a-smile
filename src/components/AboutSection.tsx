import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ABOUT_PILLARS } from '../data/foundationData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 section-title-line">
          <p className="text-[#C81D25] font-bold uppercase tracking-[0.2em] text-xs">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B4D] mt-3 font-bold">
            A grassroots calling that became a movement.
          </h2>
        </div>

        {/* 4 Cards Grid matching puttingasmile.netlify.app */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ABOUT_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="bg-[#FFF7E9] border border-[#1B3FAF]/15 p-7 sm:p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-2xl mb-3 text-[#1B3FAF] font-bold">
                {pillar.title}
              </h3>
              
              {pillar.content && (
                <p className="leading-relaxed text-[#0E1B4D]/85 text-sm sm:text-base">
                  {pillar.content}
                </p>
              )}

              {pillar.bullets && (
                <ul className="space-y-2.5 text-[#0E1B4D]/85 list-disc pl-5 text-sm sm:text-base mt-2">
                  {pillar.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Meet the team CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('team')}
            className="inline-flex items-center gap-2 text-[#1B3FAF] font-bold uppercase tracking-widest text-xs hover:text-[#C81D25] transition"
          >
            <span>Meet the Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
