import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Calendar, X } from 'lucide-react';

interface EventsAndBlogProps {
  onOpenRegister: () => void;
  onToast: (msg: string) => void;
}

export const EventsAndBlog: React.FC<EventsAndBlogProps> = ({
  onOpenRegister,
  onToast,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const events = [
    {
      id: 'evt_1',
      day: '25',
      month: 'MAY',
      title: 'Education Awareness Drive',
      location: 'Eldoret Central',
      time: '10:00 AM - 02:00 PM',
      description: 'Distributing school kits and uniform vouchers to children in informal settlements ahead of the new school term.',
    },
    {
      id: 'evt_2',
      day: '12',
      month: 'JUN',
      title: 'Health Camp for Children',
      location: 'Huruma Community Grounds',
      time: '09:00 AM - 01:00 PM',
      description: 'Free medical consultations, child deworming, nutrition screening, and family hygiene kit supplies.',
    },
    {
      id: 'evt_3',
      day: '20',
      month: 'JUN',
      title: 'Tree Plantation & Relief Campaign',
      location: 'Langas Center',
      time: '07:00 AM - 11:00 AM',
      description: 'Planting fruit trees with local widow self-help groups and distributing emergency food baskets.',
    },
  ];

  const blogPosts = [
    {
      id: 'post_1',
      date: 'May 10, 2026',
      title: 'How Education Can Transform Lives',
      category: 'Education',
      summary: 'A look into how steady school sponsorship turns vulnerable street children into future community leaders.',
    },
    {
      id: 'post_2',
      date: 'May 06, 2026',
      title: '5 Ways You Can Help Your Community',
      category: 'Community',
      summary: 'Practical actions anyone can take—from grocery hampers to mentorship hours—to uplift vulnerable families.',
    },
    {
      id: 'post_3',
      date: 'Apr 28, 2026',
      title: 'Making Clean Water Accessible for All',
      category: 'Clean Water',
      summary: 'Installing community water filtration kiosks to protect children against preventable illnesses.',
    },
  ];

  const handleRSVP = (evt: any) => {
    onToast(`RSVP registered for "${evt.title}"! We look forward to seeing you.`);
  };

  return (
    <section id="events" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left Column: UPCOMING EVENTS matching reference */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#16a34a] uppercase">
                UPCOMING EVENTS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Join Us At Our Events
              </h2>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4"
                >
                  {/* Green Date Square matching reference */}
                  <div className="w-14 sm:w-16 h-16 rounded-lg bg-emerald-50 border border-emerald-300 text-[#16a34a] flex flex-col items-center justify-center shrink-0">
                    <span className="text-xl sm:text-2xl font-black font-mono leading-none">
                      {event.day}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 text-emerald-800">
                      {event.month}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 space-y-1">
                    <h3
                      onClick={() => setSelectedEvent(event)}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors leading-snug"
                    >
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {event.time}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="text-xs font-semibold text-slate-600 hover:text-emerald-700"
                      >
                        Details
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRSVP(event)}
                        className="px-3 py-1 text-xs font-bold rounded-md bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        RSVP Free
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "View All Events →" Button in emerald green */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#16a34a] hover:bg-[#15803d] active:bg-[#166534] rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>View All Events</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: FROM OUR BLOG matching reference */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-[#16a34a] uppercase">
                FROM OUR BLOG
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Latest News & Updates
              </h2>
            </div>

            {/* 3 Blog Cards Grid matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src="/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg"
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-4 space-y-1.5">
                      <div className="text-[11px] text-slate-400 font-medium">
                        {post.date}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      onClick={() => setSelectedPost(post)}
                      className="text-xs font-bold text-slate-700 hover:text-[#16a34a] inline-flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase mb-2">
              <Calendar className="w-4 h-4" />
              <span>{selectedEvent.day} {selectedEvent.month}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {selectedEvent.title}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedEvent.description}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleRSVP(selectedEvent);
                  setSelectedEvent(null);
                }}
                className="px-4 py-2 rounded-lg bg-[#16a34a] text-white text-xs font-bold shadow-sm"
              >
                Confirm Attendance
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-emerald-700 uppercase">
              {selectedPost.category} · {selectedPost.date}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              {selectedPost.title}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedPost.summary} Through generous donor contributions and community volunteer efforts, we continue to expand our reach to vulnerable households in Eldoret and beyond.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
