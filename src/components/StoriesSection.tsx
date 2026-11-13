import React from 'react';
import { Quote } from 'lucide-react';

export const StoriesSection: React.FC = () => {
  const testimonials = [
    {
      id: 'test_1',
      quote: 'Putting a Smile on Them Foundation changed my life. I got the education I always dreamed of. Today, I am proud to help my family.',
      name: 'Wangui',
      role: 'Student',
      initial: 'W',
      color: 'bg-emerald-600',
    },
    {
      id: 'test_2',
      quote: 'Their food distribution and support in our community have been a blessing. We are grateful for their continuous love and care.',
      name: 'Mama Mary',
      role: 'Villager',
      initial: 'M',
      color: 'bg-teal-600',
    },
    {
      id: 'test_3',
      quote: 'Volunteering with Putting a Smile on Them Foundation has been the most rewarding experience of my life.',
      name: 'Dennis Kiprop',
      role: 'Volunteer',
      initial: 'D',
      color: 'bg-blue-600',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-[#16a34a] uppercase">
            WHAT PEOPLE SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Stories of Hope and Change
          </h2>
        </div>

        {/* 3 Testimonials Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Green quotation marks */}
                <div className="text-[#16a34a] font-serif text-3xl font-black leading-none">
                  ““
                </div>

                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full ${item.color} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                >
                  {item.initial}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">
                    {item.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
