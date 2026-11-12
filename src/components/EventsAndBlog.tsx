import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Calendar, X, User, Share2, Check } from 'lucide-react';
import { UpcomingEvent, BlogPost } from '../types';
import { UPCOMING_EVENTS, BLOG_POSTS } from '../data/foundationData';

interface EventsAndBlogProps {
  onOpenRegister: () => void;
  onToast: (msg: string) => void;
}

export const EventsAndBlog: React.FC<EventsAndBlogProps> = ({
  onOpenRegister,
  onToast,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState<Record<string, boolean>>({});

  const handleRSVP = (evt: UpcomingEvent) => {
    setRsvpSubmitted((prev) => ({ ...prev, [evt.id]: true }));
    onToast(`RSVP confirmed for "${evt.title}"! We look forward to seeing you.`);
  };

  return (
    <section id="events" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Left Column: UPCOMING EVENTS */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
                UPCOMING EVENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Join Us At Our Events
              </h2>
            </div>

            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event) => {
                const isRsvped = rsvpSubmitted[event.id];

                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4"
                  >
                    {/* Date Box */}
                    <div className="w-14 sm:w-16 h-16 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex flex-col items-center justify-center shrink-0">
                      <span className="text-xl sm:text-2xl font-black font-mono leading-none">
                        {event.day}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1 text-emerald-800">
                        {event.month}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-1">
                      <h3
                        onClick={() => setSelectedEvent(event)}
                        className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer line-clamp-1 transition-colors"
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
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRSVP(event)}
                          disabled={isRsvped}
                          className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                            isRsvped
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs'
                          }`}
                        >
                          {isRsvped ? 'RSVP Confirmed ✓' : 'RSVP Free'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-sm transition-all"
              >
                <span>Volunteer at an Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: FROM OUR BLOG */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase">
                FROM OUR BLOG
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Latest News & Updates
              </h2>
            </div>

            {/* 3 Blog Cards Grid matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {BLOG_POSTS.map((post) => (
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
                      <div className="absolute top-2 left-2 bg-slate-900/70 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="text-[11px] text-slate-500 font-medium">
                        {post.date} · {post.readTime}
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
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group/btn"
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
              <span>{selectedEvent.day} {selectedEvent.month} {selectedEvent.year}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {selectedEvent.title}
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>
              <p><strong>RSVPs:</strong> {selectedEvent.rsvpCount} / {selectedEvent.capacity} spots</p>
            </div>
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
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm"
              >
                Confirm My Attendance
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-emerald-700 uppercase">
              {selectedPost.category} · {selectedPost.readTime}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-3">
              {selectedPost.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Published by {selectedPost.author} on {selectedPost.date}
            </p>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
              <p>{selectedPost.summary}</p>
              <p>
                Our outreach missions in Eldoret continue to prove that sustainable intervention begins with listening directly to community elders, school headteachers, and local women's groups. Through structured grain distribution and school kit sponsorship, attendance rates in our pilot schools have risen by over 38%.
              </p>
              <p>
                To learn how your family or company can sponsor an upcoming outreach drive, reach out to our Eldoret field headquarters or select any donation tier.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
