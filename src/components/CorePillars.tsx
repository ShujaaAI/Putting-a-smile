import React from 'react';
import { Utensils, BookOpen, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { CORE_PILLARS } from '../data/foundationData';

interface CorePillarsProps {
  onOpenDonate: () => void;
  onOpenRegister: () => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({
  onOpenDonate,
  onOpenRegister,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'food_security':
        return <Utensils className="w-6 h-6 text-emerald-600" />;
      case 'education_pathways':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'community_support':
        return <Users className="w-6 h-6 text-amber-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
            OUR THREE PILLARS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            How We Restore Hope and Dignity
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Focused, community-rooted programs addressing immediate survival needs while constructing long-term pathways to independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                  {getIcon(pillar.id)}
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 border-t border-slate-200/60 space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenDonate}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5"
                >
                  <span>Support this pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  Volunteer here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
