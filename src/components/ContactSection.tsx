import React, { useState } from 'react';
import { FOUNDATION_META } from '../data/foundationData';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';

interface ContactSectionProps {
  onToast: (msg: string) => void;
  onOpenRegister: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onToast,
  onOpenRegister,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Sponsorship');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitted(true);
    onToast(
      `Thank you, ${name}! Your message regarding "${subject}" has been delivered.`
    );
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[#F0EDE0] border-t border-[#E8DB7A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Information */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C02523]">
              REACH OUR ELDORET TEAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D3C6E] mt-1">
              Contact Information
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#263864] leading-relaxed max-w-lg">
            Reach us for partnerships, volunteering, sponsorships, and direct support for vulnerable children and widows in Eldoret and beyond.
          </p>

          <ul className="space-y-4 pt-1 text-sm text-[#1D3C6E]">
            <li className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#9ABDE3]/70 flex items-center justify-center text-[#063BAD] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <strong>Phone:</strong> Grace{' '}
                <a
                  href={`tel:${FOUNDATION_META.phoneGrace}`}
                  className="text-[#063BAD] font-bold hover:text-[#C02523] hover:underline"
                >
                  {FOUNDATION_META.phoneGrace}
                </a>
                , Favour{' '}
                <a
                  href={`tel:${FOUNDATION_META.phoneFavour}`}
                  className="text-[#063BAD] font-bold hover:text-[#C02523] hover:underline"
                >
                  {FOUNDATION_META.phoneFavour}
                </a>
              </div>
            </li>

            <li className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#9ABDE3]/70 flex items-center justify-center text-[#063BAD] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <strong>Official Email:</strong>{' '}
                <a
                  href={`mailto:${FOUNDATION_META.email}`}
                  className="text-[#063BAD] font-bold hover:text-[#C02523] hover:underline"
                >
                  {FOUNDATION_META.email}
                </a>
              </div>
            </li>

            <li className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#9ABDE3]/70 flex items-center justify-center text-[#063BAD] shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <strong>WhatsApp:</strong> Grace{' '}
                <a
                  href={FOUNDATION_META.whatsappGrace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#063BAD] font-bold hover:text-[#C02523] hover:underline"
                >
                  {FOUNDATION_META.phoneGrace}
                </a>
                , Favour{' '}
                <a
                  href={FOUNDATION_META.whatsappFavour}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#063BAD] font-bold hover:text-[#C02523] hover:underline"
                >
                  {FOUNDATION_META.phoneFavour}
                </a>
              </div>
            </li>

            <li className="flex gap-3.5 items-start">
              <div className="w-9 h-9 rounded-lg bg-white border border-[#9ABDE3]/70 flex items-center justify-center text-[#063BAD] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <strong>Location:</strong> {FOUNDATION_META.location}
              </div>
            </li>
          </ul>

          {/* Action / Social Links */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-[#063BAD] text-[#063BAD] hover:bg-[#063BAD] hover:text-white text-xs font-bold transition cursor-pointer"
            >
              <UserCheck className="w-4 h-4" />
              <span>Open Volunteer &amp; Partner Portal</span>
            </button>

            <a
              href={FOUNDATION_META.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#C02523] text-white rounded-md flex items-center justify-center hover:bg-[#1D3C6E] transition shadow-xs"
              title="Watch on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right: Send a Message Form Card */}
        <div className="bg-white rounded-xl border border-[#9ABDE3]/70 p-7 sm:p-8 shadow-card">
          <h3 className="font-serif text-2xl font-bold text-[#1D3C6E] mb-4">
            Send a Message
          </h3>

          {submitted ? (
            <div className="bg-[#F3F1E6] border border-[#063BAD]/30 rounded-xl p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#689FF1]/20 text-[#063BAD] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-[#1D3C6E]">
                Message Received!
              </h4>
              <p className="text-xs text-[#4365A1]">
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
                  className="w-full border border-[#9ABDE3] focus:border-[#063BAD] outline-hidden px-4 py-3 rounded-md text-sm text-[#1D3C6E] placeholder-[#6F8CAD] focus:ring-1 focus:ring-[#063BAD]"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#9ABDE3] focus:border-[#063BAD] outline-hidden px-4 py-3 rounded-md text-sm text-[#1D3C6E] placeholder-[#6F8CAD] focus:ring-1 focus:ring-[#063BAD]"
                />
              </div>

              <div>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-[#9ABDE3] focus:border-[#063BAD] outline-hidden px-4 py-3 rounded-md text-sm text-[#1D3C6E] bg-white focus:ring-1 focus:ring-[#063BAD]"
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
                  className="w-full border border-[#9ABDE3] focus:border-[#063BAD] outline-hidden px-4 py-3 rounded-md text-sm text-[#1D3C6E] placeholder-[#6F8CAD] focus:ring-1 focus:ring-[#063BAD]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#063BAD] hover:bg-[#224EA6] text-white font-bold py-3.5 rounded-md transition cursor-pointer text-sm shadow-xs"
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
