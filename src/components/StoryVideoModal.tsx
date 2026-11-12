import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Heart, Award, MapPin, CheckCircle } from 'lucide-react';
import { FOUNDATION_META } from '../data/foundationData';

interface StoryVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const StoryVideoModal: React.FC<StoryVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenDonate,
}) => {
  if (!isOpen) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      title: "The Reality in Eldoret Informal Settlements",
      time: "0:00",
      description: "Meeting families in Huruma and Langas where lack of school supplies and rising food prices keep children out of classrooms.",
    },
    {
      title: "Food Security: Delivering Essential Grain Hampers",
      time: "0:45",
      description: "How our weekend nutrition distribution feeds over 500 vulnerable households with dignity and community spirit.",
    },
    {
      title: "Education Pathways: Uniforms & Classrooms",
      time: "1:20",
      description: "Watching children light up when stepping into brand new leather shoes, uniforms, and textbooks.",
    },
    {
      title: "Widows Empowerment: Sustainable Micro-Enterprises",
      time: "2:00",
      description: "Mama Esther and 40 widows celebrating self-reliance through table banking and poultry farming.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-slate-900 rounded-2xl max-w-3xl w-full shadow-2xl relative my-6 border border-slate-700 overflow-hidden text-white">
        
        {/* Header */}
        <div className="p-4 px-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-200">
              Field Documentary: "Putting Smiles Where Pain Once Lived"
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg"
            alt="Eldoret outreach documentary"
            className="w-full h-full object-cover opacity-85 transition-opacity"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl z-10 transition-transform transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-white" />
            ) : (
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            )}
          </button>

          {/* Location Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Filmed on location in Eldoret, Kenya</span>
          </div>

          {/* Live Chapter Overlay */}
          <div className="absolute bottom-4 inset-x-4 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                Chapter {currentChapter + 1} of 4 · {chapters[currentChapter].time}
              </span>
              <p className="text-xs font-semibold text-white">
                {chapters[currentChapter].title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentChapter((c) => (c + 1) % chapters.length)}
                className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 text-xs text-white"
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </div>

        {/* Narrative & Chapter Selection */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {chapters[currentChapter].description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentChapter(idx)}
                className={`p-2.5 rounded-lg text-left text-xs transition-colors border ${
                  currentChapter === idx
                    ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-mono text-[10px] text-slate-500">{ch.time}</div>
                <div className="font-semibold line-clamp-1">{ch.title}</div>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Help us continue recording stories of triumph in Eldoret.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenDonate();
              }}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate to Support Outreach</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
