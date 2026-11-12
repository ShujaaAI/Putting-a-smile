import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface NewsletterProps {
  onToast: (msg: string) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onToast('Thank you for subscribing to our Eldoret newsletter!');
  };

  return (
    <section className="bg-[#16a34a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Airplane icon + text */}
        <div className="flex items-center gap-5 max-w-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
            <Send className="w-7 h-7 text-white stroke-[1.8] -rotate-12 translate-x-0.5" />
          </div>
          <div>
            <span className="text-xs font-extrabold tracking-widest text-emerald-100 uppercase">
              STAY CONNECTED
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-sm text-emerald-100 mt-1">
              Stay updated with our latest community activities, food distribution drives, and heartwarming success stories in Eldoret.
            </p>
          </div>
        </div>

        {/* Right Side: Input + Dark Blue CTA matching reference */}
        <div className="w-full lg:w-auto min-w-[340px] sm:min-w-[420px]">
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-xs rounded-xl p-3.5 border border-white/30 text-white flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0" />
              <span className="text-sm font-semibold">
                You're subscribed! Check your inbox for our welcome dispatch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 bg-white text-slate-900 rounded-lg px-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900 shadow-xs"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0b3b60] hover:bg-[#082b47] active:bg-[#062137] text-white text-sm font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap focus:outline-hidden"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
