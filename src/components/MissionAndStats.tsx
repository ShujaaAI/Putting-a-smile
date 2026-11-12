import React from 'react';
import { Play, CheckCircle2, GraduationCap, Utensils, Users, HeartHandshake } from 'lucide-react';

interface MissionAndStatsProps {
  onOpenVideo: () => void;
  onOpenDonate: () => void;
}

export const MissionAndStats: React.FC<MissionAndStatsProps> = ({
  onOpenVideo,
  onOpenDonate,
}) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Column 1: Media Preview with Play Button Overlay */}
          <div className="lg:col-span-4">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] sm:aspect-[4/3] bg-slate-100">
              {/* Thumbnail image */}
              <img
                src="/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg"
                alt="Children and volunteers in Eldoret working together"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle dark tint */}
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors" />

              {/* Central Play Button */}
              <button
                type="button"
                onClick={onOpenVideo}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl transition-all duration-200 transform group-hover:scale-110 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
                aria-label="Play foundation story video"
              >
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </button>

              <div className="absolute bottom-3 inset-x-3 text-center">
                <span className="inline-block px-3 py-1 bg-black/60 backdrop-blur-xs text-white text-xs font-semibold rounded-full">
                  Watch Our Eldoret Story (2:40)
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Mission Statement & Key Checkpoints */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
                OUR MISSION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We Believe Every Child & Family Deserves A Better Future
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our mission is to empower vulnerable communities across Eldoret and Uasin Gishu County by providing accessible education pathways, essential nutrition hampers, widow micro-business grants, and health camps.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Quality Education & School Kits for Every Child
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Food Security & Emergency Nutrition Support
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Widow Livelihood Empowerment & Micro-Grants
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: 2x2 Impact Counter Grid matching reference layout */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Metric 1 */}
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 text-center hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg bg-blue-100/70 flex items-center justify-center text-blue-700 mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  25,000+
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Children Educated
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 text-center hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-700 mb-2">
                  <Utensils className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  15,500+
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Meals Provided
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 text-center hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg bg-indigo-100/70 flex items-center justify-center text-indigo-700 mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  340+
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Communities Impacted
                </div>
              </div>

              {/* Metric 4 */}
              <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 text-center hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg bg-rose-100/70 flex items-center justify-center text-rose-700 mb-2">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  120+
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Active Volunteers
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
