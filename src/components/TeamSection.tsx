import React from 'react';
import { TEAM_MEMBERS } from '../data/foundationData';
import { UserCheck } from 'lucide-react';

interface TeamSectionProps {
  onOpenRegister: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="team" className="py-20 bg-[#FFF7E9] border-y border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 section-title-line">
          <p className="text-[#C81D25] font-bold uppercase tracking-[0.2em] text-xs">
            Team Members
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B4D] mt-3 font-bold">
            The people serving this mission.
          </h2>
        </div>

        {/* 3 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <article
              key={idx}
              className="p-7 border border-[#1B3FAF]/15 rounded-xl bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C81D25] font-bold">
                    {member.roleCategory}
                  </p>
                  <span className="w-8 h-8 rounded-full bg-[#1B3FAF]/10 text-[#1B3FAF] font-bold text-xs flex items-center justify-center">
                    {member.avatarBadge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#1B3FAF] mb-2.5 font-bold">
                  {member.name}
                </h3>

                <p className="text-sm text-[#0E1B4D]/80 leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-[#0E1B4D]/60 font-semibold">
                <span>Putting a Smile On Them</span>
                <span className="text-[#1B3FAF]">Active Leadership</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenRegister}
            className="text-xs font-bold uppercase tracking-wider text-[#1B3FAF] hover:text-[#C81D25] transition inline-flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            <span>Join our outreach team as a volunteer</span>
          </button>
        </div>

      </div>
    </section>
  );
};
