import React, { useState } from 'react';
import { ArrowRight, BookOpen, HeartPulse, Droplets, TreePine, X, Heart, Users } from 'lucide-react';
import { Currency, ProjectCause } from '../types';

interface ProjectsGridProps {
  currency: Currency;
  onOpenDonate: (amount?: number, causeTitle?: string) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  currency,
  onOpenDonate,
}) => {
  const [selectedCause, setSelectedCause] = useState<any | null>(null);

  const projects = [
    {
      id: 'proj_education',
      title: 'Education For All',
      category: 'Education',
      summary: 'Providing quality education and learning materials to children in underprivileged areas.',
      detailedStory: 'Education is the most sustainable vehicle to lift families out of vulnerability. In Eldoret settlements like Huruma and Langas, we provide school fees supplements, backpacks, stationery, textbooks, and leather shoes so children can stay in school and excel.',
      icon: BookOpen,
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-700 to-indigo-900',
      targetAmountUSD: 18000,
      raisedAmountUSD: 14200,
      targetAmountKES: 2700000,
      raisedAmountKES: 2130000,
      beneficiaries: '450 Children',
    },
    {
      id: 'proj_health',
      title: 'Healthcare Support',
      category: 'Healthcare',
      summary: 'Offering free healthcare camps and medical support to families in need.',
      detailedStory: 'Many families cannot afford basic medical consultations and medication. In collaboration with volunteer doctors and nurses, we organize free medical outreach camps providing maternal checkups, dental screening, child deworming, and emergency medicine.',
      icon: HeartPulse,
      iconColor: 'text-rose-600',
      bgColor: 'from-rose-700 to-red-900',
      targetAmountUSD: 15000,
      raisedAmountUSD: 12100,
      targetAmountKES: 2250000,
      raisedAmountKES: 1815000,
      beneficiaries: '850 Families',
    },
    {
      id: 'proj_water',
      title: 'Clean Water Initiative',
      category: 'Clean Water',
      summary: 'Building wells and providing clean drinking water to rural communities.',
      detailedStory: 'Clean water protects children from waterborne illnesses that cause school absenteeism. We install gravity-fed filtration kiosks and distribute ceramic water filters to households in surrounding rural Eldoret areas.',
      icon: Droplets,
      iconColor: 'text-cyan-600',
      bgColor: 'from-cyan-700 to-blue-900',
      targetAmountUSD: 20000,
      raisedAmountUSD: 16400,
      targetAmountKES: 3000000,
      raisedAmountKES: 2460000,
      beneficiaries: '1,200 People',
    },
    {
      id: 'proj_environment',
      title: 'Environmental Care & Food',
      category: 'Environment & Food',
      summary: 'Planting trees and promoting environmental sustainability for a better tomorrow.',
      detailedStory: 'Fusing environmental restoration with nutrition: our community permaculture gardens and fruit tree planting projects empower widow groups to grow balanced foods while protecting local soil and watersheds.',
      icon: TreePine,
      iconColor: 'text-emerald-600',
      bgColor: 'from-emerald-700 to-teal-900',
      targetAmountUSD: 12000,
      raisedAmountUSD: 9800,
      targetAmountKES: 1800000,
      raisedAmountKES: 1470000,
      beneficiaries: '500 Households',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-[#16a34a] uppercase">
            OUR PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Projects That Create Real Change
          </h2>
        </div>

        {/* 4-Card Horizontal Responsive Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((cause) => {
            const Icon = cause.icon;
            const raised = currency === 'USD' ? cause.raisedAmountUSD : cause.raisedAmountKES;
            const target = currency === 'USD' ? cause.targetAmountUSD : cause.targetAmountKES;
            const percent = Math.min(100, Math.round((raised / target) * 100));

            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col group"
              >
                {/* Visual Thumbnail matching reference layout */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${cause.bgColor} flex items-center justify-center text-white relative`}
                  >
                    <img
                      src="/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg"
                      alt={cause.title}
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-2 rounded-lg shadow-xs">
                      <Icon className={`w-4 h-4 ${cause.iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {cause.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {cause.summary}
                    </p>
                  </div>

                  {/* Funding Bar */}
                  <div className="space-y-1 pt-2 border-t border-slate-100 text-[11px]">
                    <div className="flex justify-between items-center text-slate-600 font-semibold">
                      <span>{currency === 'USD' ? `$${raised.toLocaleString()}` : `KES ${(raised / 1000).toFixed(0)}k`}</span>
                      <span className="text-slate-400">{percent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#16a34a] h-1.5 rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Learn More link matching reference */}
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedCause(cause)}
                      className="text-xs font-bold text-[#16a34a] hover:text-[#15803d] inline-flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenDonate(undefined, cause.title)}
                      className="text-[11px] font-bold text-[#0b3b60] hover:underline"
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
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCause(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider block mb-1">
              {selectedCause.category}
            </span>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
              {selectedCause.title}
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed mb-5">
              {selectedCause.detailedStory}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 space-y-2 text-xs">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Fundraising Goal:</span>
                <span className="text-slate-900 font-bold">
                  {currency === 'USD'
                    ? `$${selectedCause.targetAmountUSD.toLocaleString()}`
                    : `KES ${selectedCause.targetAmountKES.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-slate-600">Impact Beneficiaries:</span>
                <span className="text-[#16a34a] font-bold">{selectedCause.beneficiaries} in Eldoret</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedCause(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
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
                className="px-5 py-2 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-bold shadow-sm flex items-center gap-1.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support This Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
