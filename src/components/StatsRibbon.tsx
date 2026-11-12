import React from 'react';
import { CORE_STATS } from '../data/foundationData';

export const StatsRibbon: React.FC = () => {
  return (
    <section className="bg-[#1B3FAF] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {CORE_STATS.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-[#FFF7E9] font-bold">
              {stat.value}
            </p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/90 font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
