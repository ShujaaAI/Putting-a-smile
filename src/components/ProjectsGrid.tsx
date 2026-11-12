import React, { useState } from 'react';
import { ArrowRight, BookOpen, Utensils, HandHeart, Droplets, Target, Users, X, Heart } from 'lucide-react';
import { Currency, ProjectCause } from '../types';
import { PROJECT_CAUSES } from '../data/foundationData';

interface ProjectsGridProps {
  currency: Currency;
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  currency,
  onOpenDonate,
}) => {
  const [selectedCause, setSelectedCause] = useState<ProjectCause | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-emerald-600" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
            OUR PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Projects That Create Real Change
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Every initiative is co-designed with grassroots leaders in Eldoret to ensure sustainable impact and dignity for every beneficiary.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_CAUSES.map((cause) => {
            const raised = currency === 'USD' ? cause.raisedAmountUSD : cause.raisedAmountKES;
            const target = currency === 'USD' ? cause.targetAmountUSD : cause.targetAmountKES;
            const percent = Math.min(100, Math.round((raised / target) * 100));

            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col group"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${cause.imageFallbackGradient} flex items-center justify-center text-white relative`}
                  >
                    {/* Background photo element */}
                    <img
                      src="/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg"
                      alt={cause.title}
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs p-2 rounded-lg shadow-xs">
                      {getIcon(cause.iconName)}
                    </div>

                    <div className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-white text-[11px] font-semibold">
                      {cause.location}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      {cause.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {cause.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {cause.summary}
                    </p>
                  </div>

                  {/* Funding Progress Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700">
                        {currency === 'USD' ? `$${raised.toLocaleString()}` : `KES ${(raised / 1000).toFixed(0)}k`}
                      </span>
                      <span className="text-slate-400">
                        {percent}% of {currency === 'USD' ? `$${(target / 1000).toFixed(0)}k` : `KES ${(target / 1000).toFixed(0)}k`}
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions: Learn More / Donate */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedCause(cause)}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenDonate(undefined, cause.title)}
                      className="px-2.5 py-1 text-xs font-bold text-white bg-[#0b3b60] hover:bg-[#082b47] rounded-md transition-colors"
                    >
                      Support
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cause Detail Modal */}
      {selectedCause && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCause(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              <span>{selectedCause.category}</span>
              <span>·</span>
              <span>{selectedCause.location}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
              {selectedCause.title}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {selectedCause.detailedStory}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-600">Fundraising Progress</span>
                <span className="text-emerald-700 font-bold">
                  {currency === 'USD'
                    ? `$${selectedCause.raisedAmountUSD.toLocaleString()} / $${selectedCause.targetAmountUSD.toLocaleString()}`
                    : `KES ${selectedCause.raisedAmountKES.toLocaleString()} / KES ${selectedCause.targetAmountKES.toLocaleString()}`}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div
                  className="bg-emerald-600 h-2.5 rounded-full"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round(
                        (selectedCause.raisedAmountUSD / selectedCause.targetAmountUSD) * 100
                      )
                    )}%`,
                  }}
                />
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                <span>Directly benefiting {selectedCause.beneficiariesCount} individuals in Eldoret</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedCause(null)}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const cause = selectedCause;
                  setSelectedCause(null);
                  onOpenDonate(undefined, cause.title);
                }}
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md flex items-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support This Initiative</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
