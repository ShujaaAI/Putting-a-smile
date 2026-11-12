import React from 'react';
import { Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/foundationData';

export const StoriesSection: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
            WHAT PEOPLE SAY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Stories of Hope and Change
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Real voices from the children, widows, and community champions whose lives are being transformed through your generosity.
          </p>
        </div>

        {/* 3 Testimonials Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:bg-emerald-50/40 hover:border-emerald-200 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Green quotation mark */}
                <div className="text-emerald-500">
                  <Quote className="w-8 h-8 fill-emerald-500/20 text-emerald-600 rotate-180" />
                </div>

                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900">
                      {item.name}
                    </span>
                    {item.verified && (
                      <span title="Verified Beneficiary/Volunteer" className="inline-flex">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500">
                    {item.role} · {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
