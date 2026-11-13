import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FOUNDATION_META } from '../data/foundationData';

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
    onToast('Thank you for subscribing to our Eldoret mission updates!');
  };

  return (
    <section className="relative bg-white overflow-hidden border-t border-[#9ABDE3]/40">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-5 relative z-10 bg-white">
          <div className="space-y-2.5 max-w-lg">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E] leading-tight">
              Stay informed,{' '}
              <span className="text-[#063BAD]">stay engaged</span>
            </h2>
            <p className="text-sm text-[#4365A1] leading-relaxed">
              Subscribe to our newsletter to receive Eldoret field updates, impact reports, and stories of lives restored.
            </p>
          </div>

          <div className="max-w-lg">
            {subscribed ? (
              <div className="bg-[#F3F1E6] border border-[#063BAD]/30 rounded-lg p-4 text-[#1D3C6E] flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#063BAD] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">
                  You&apos;re subscribed! Thank you for standing with our Eldoret community.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-[#9ABDE3] text-[#1D3C6E] rounded-md px-4 py-3 text-sm placeholder-[#6F8CAD] focus:outline-hidden focus:border-[#063BAD] focus:ring-1 focus:ring-[#063BAD]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#063BAD] hover:bg-[#224EA6] text-white text-sm font-semibold rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#6F8CAD] mt-2.5">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[340px] bg-[#1D3C6E] overflow-hidden">
          <img
            src={FOUNDATION_META.heroImage}
            alt="Children smiling in Eldoret"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = FOUNDATION_META.localFallbackImage;
            }}
          />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};
