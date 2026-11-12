import React from 'react';
import { ArrowRight, Heart, MapPin, ShieldCheck } from 'lucide-react';
import { FOUNDATION_META } from '../data/foundationData';

interface HeroProps {
  onOpenDonate: (amount?: number) => void;
  onOpenRegister: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDonate,
  onOpenRegister,
  onNavigate,
}) => {
  return (
    <header id="home" className="hero-wash relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column matching puttingasmile.netlify.app */}
          <div className="lg:col-span-7 space-y-5">
            <p className="uppercase tracking-[0.22em] text-xs font-extrabold text-[#C81D25]">
              Hope • Dignity • Opportunity
            </p>

            <p className="font-serif text-2xl md:text-3xl text-[#1B3FAF] font-bold">
              {FOUNDATION_META.name}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0E1B4D] leading-tight font-bold">
              Putting smiles where pain once lived.
            </h1>

            <p className="text-base sm:text-lg text-[#0E1B4D]/85 max-w-2xl leading-relaxed">
              We stand with vulnerable children, widows, and families through food programs, education pathways, and community support in Eldoret and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className="bg-[#1B3FAF] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#0E1B4D] transition shadow-glow text-center rounded-md cursor-pointer"
              >
                Support Us
              </button>

              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="bg-white border border-[#C81D25] text-[#C81D25] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#C81D25] hover:text-white transition text-center rounded-md cursor-pointer"
              >
                Read About Us
              </button>
            </div>

            {/* Quick grassroots notes */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#0E1B4D]/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C81D25]" />
                <span>Eldoret, Uasin Gishu County, Kenya</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1B3FAF]" />
                <span>100% Financial Accountability</span>
              </span>
            </div>
          </div>

          {/* Right Column matching puttingasmile.netlify.app */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#C81D25]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#1B3FAF]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-glow bg-[#FFF7E9]">
              <img
                src={FOUNDATION_META.heroImage}
                alt="Child beneficiary smiling"
                className="w-full h-auto object-contain bg-[#FFF7E9]"
                onError={(e) => {
                  // Fallback to local asset if external image is ever throttled
                  e.currentTarget.src = FOUNDATION_META.localFallbackImage;
                }}
              />
            </div>

            {/* Floating Drift Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-5 py-3.5 rounded-xl shadow-glow animate-drift border border-[#1B3FAF]/10">
              <p className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#C81D25]">
                Lives Touched
              </p>
              <p className="font-serif text-3xl font-bold text-[#0E1B4D]">
                1,000+
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
