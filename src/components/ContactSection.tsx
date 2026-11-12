import React, { useState } from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import { Phone, Mail, MapPin, MessageCircle, Youtube, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Sponsorship');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitted(true);
    onToast(`Thank you, ${name}! Your message regarding "${subject}" has been delivered.`);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF7E9] border-t border-[#1B3FAF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1B4D] font-bold">
            Contact Information
          </h2>
          
          <p className="text-[#0E1B4D]/80 leading-relaxed text-base">
            Reach us for partnerships, volunteering, sponsorships, and direct support for vulnerable children and widows.
          </p>

          <ul className="space-y-4 pt-2 text-sm sm:text-base text-[#0E1B4D]">
            {/* Phone */}
            <li className="flex gap-3.5 items-start">
              <Phone className="w-5 h-5 text-[#C81D25] shrink-0 mt-0.5" />
              <div>
                <strong>Phone:</strong> Grace{' '}
                <a
                  href={`tel:${FOUNDATION_META.phoneGrace}`}
                  className="text-[#1B3FAF] font-bold hover:text-[#C81D25] transition"
                >
                  {FOUNDATION_META.phoneGrace}
                </a>
                , Favour{' '}
                <a
                  href={`tel:${FOUNDATION_META.phoneFavour}`}
                  className="text-[#1B3FAF] font-bold hover:text-[#C81D25] transition"
                >
                  {FOUNDATION_META.phoneFavour}
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex gap-3.5 items-start">
              <Mail className="w-5 h-5 text-[#C81D25] shrink-0 mt-0.5" />
              <div>
                <strong>Official Email:</strong>{' '}
                <a
                  href={`mailto:${FOUNDATION_META.email}`}
                  className="text-[#1B3FAF] font-bold hover:text-[#C81D25] transition"
                >
                  {FOUNDATION_META.email}
                </a>
              </div>
            </li>

            {/* WhatsApp */}
            <li className="flex gap-3.5 items-start">
              <MessageCircle className="w-5 h-5 text-[#C81D25] shrink-0 mt-0.5" />
              <div>
                <strong>WhatsApp:</strong> Grace{' '}
                <a
                  href={FOUNDATION_META.whatsappGrace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B3FAF] font-bold hover:text-[#C81D25] transition underline"
                >
                  {FOUNDATION_META.phoneGrace}
                </a>
                , Favour{' '}
                <a
                  href={FOUNDATION_META.whatsappFavour}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B3FAF] font-bold hover:text-[#C81D25] transition underline"
                >
                  {FOUNDATION_META.phoneFavour}
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex gap-3.5 items-start">
              <MapPin className="w-5 h-5 text-[#C81D25] shrink-0 mt-0.5" />
              <div>
                <strong>Location:</strong> {FOUNDATION_META.location}
              </div>
            </li>
          </ul>

          {/* Social Media */}
          <div className="pt-4">
            <p className="uppercase tracking-widest text-xs font-bold text-[#1B3FAF] mb-3">
              Social Media
            </p>
            <div className="flex gap-3">
              <a
                href={FOUNDATION_META.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1B3FAF] text-white rounded-full flex items-center justify-center hover:bg-[#C81D25] transition shadow-xs"
                title="Watch on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={FOUNDATION_META.whatsappGrace}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1B3FAF] text-white rounded-full flex items-center justify-center hover:bg-[#C81D25] transition shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Send a Message Form */}
        <div className="bg-white rounded-2xl border border-[#1B3FAF]/15 p-7 sm:p-8 shadow-xs">
          <h3 className="font-serif text-2xl mb-4 text-[#1B3FAF] font-bold">
            Send a Message
          </h3>

          {submitted ? (
            <div className="bg-[#FFF7E9] border border-[#1B3FAF]/20 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-[#0E1B4D]">Message Received!</h4>
              <p className="text-xs text-[#0E1B4D]/80">
                Thank you for reaching out. Our team in Eldoret will reply to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#1B3FAF]/20 focus:border-[#1B3FAF] outline-hidden px-4 py-3 rounded-lg text-sm text-[#0E1B4D] focus:ring-1 focus:ring-[#1B3FAF]"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#1B3FAF]/20 focus:border-[#1B3FAF] outline-hidden px-4 py-3 rounded-lg text-sm text-[#0E1B4D] focus:ring-1 focus:ring-[#1B3FAF]"
                />
              </div>

              <div>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-[#1B3FAF]/20 focus:border-[#1B3FAF] outline-hidden px-4 py-3 rounded-lg text-sm text-[#0E1B4D] bg-white focus:ring-1 focus:ring-[#1B3FAF]"
                >
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Donation">Donation</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="How would you like to support?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-[#1B3FAF]/20 focus:border-[#1B3FAF] outline-hidden px-4 py-3 rounded-lg text-sm text-[#0E1B4D] focus:ring-1 focus:ring-[#1B3FAF]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1B3FAF] text-white font-bold uppercase tracking-widest py-3.5 rounded-lg hover:bg-[#C81D25] transition cursor-pointer text-xs"
              >
                Submit Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
