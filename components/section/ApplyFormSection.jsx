'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ApplyFormSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left column
      gsap.from('#left-column', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#left-column',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Animate right column
      gsap.from('#right-column', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#right-column',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">

        {/* Left Column: Qualification & Process */}
        <div id="left-column" className="lg:col-span-1 space-y-8">
          <div className="p-6 bg-elevated rounded-xl border border-lime-electric/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-lime-electric mb-4">Qualification Criteria</h2>
            <p className="text-gray-400 mb-6">
              We are selective to ensure maximum success for our clients. Successful applicants typically meet the following criteria:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-lime-electric mr-3 text-2xl leading-none">&check;</span>
                <p>Hold an executive position (C-Suite, VP, Founder) or manage high-performing teams.</p>
              </li>
              <li className="flex items-start">
                <span className="text-lime-electric mr-3 text-2xl leading-none">&check;</span>
                <p>Are willing to commit to <strong>data tracking</strong> (wearables, blood work) for precision optimization.</p>
              </li>
              <li className="flex items-start">
                <span className="text-lime-electric mr-3 text-2xl leading-none">&check;</span>
                <p>Recognize that health is a <strong>business asset</strong> and are prepared for a serious investment.</p>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-elevated rounded-xl border border-subtle">
            <h2 className="text-3xl font-bold text-white mb-4">The Next Steps</h2>
            <ol className="list-decimal list-outside ml-5 space-y-3 text-gray-400">
              <li><strong>Submission:</strong> You complete and submit the application form.</li>
              <li><strong>Review:</strong> Our team performs a preliminary assessment of your professional and health goals (within 48 hours).</li>
              <li><strong>Consultation:</strong> If pre-qualified, we schedule a private, 30-minute diagnostic consultation to align on metrics and investment.</li>
            </ol>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div id="right-column" className="lg:col-span-2">
          <div className="p-8 md:p-12 bg-elevated rounded-xl border border-subtle shadow-xl">
            <h2 className="text-4xl font-extrabold text-white mb-8 border-b border-subtle pb-4">
              Client Intake Form
            </h2>

            <form action="#" method="POST" className="space-y-6">

              {/* Personal Details */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full p-3 rounded-lg" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Work Email</label>
                  <input type="email" id="email" name="email" required placeholder="name@company.com" className="w-full p-3 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 555-5555" className="w-full p-3 rounded-lg" />
                </div>
              </div>

              {/* Location Preference */}
              <div className="pt-6 border-t border-subtle">
                <label htmlFor="location" className="block text-lg font-medium text-gray-300 mb-2">Preferred Training Location</label>
                <select
  id="location"
  name="location"
  required
  className="w-full p-3 rounded-lg"
  defaultValue="" // ← Use defaultValue instead of selected
>
  <option value="" disabled>
    Select a Confidential Venue
  </option>
  <option value="location_a">Midtown Executive Wellness Center</option>
  <option value="location_b">Financial District Performance Suite</option>
</select>

                <p className="text-sm text-gray-500 mt-2">This helps us schedule your initial assessment and biometric setup.</p>
              </div>

              {/* Professional Details */}
              <div className="pt-6 border-t border-subtle">
                <label htmlFor="title" className="block text-lg font-medium text-gray-300 mb-2">Current Title & Company</label>
                <input type="text" id="title" name="title" required placeholder="CEO, Global Tech Inc." className="w-full p-3 rounded-lg" />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-lg font-medium text-gray-300 mb-2">Primary Performance Challenge (Be Specific)</label>
                <textarea id="challenge" name="challenge" rows="4" required placeholder="Example: 'I suffer from a 3 PM cognitive crash...'" className="w-full p-3 rounded-lg"></textarea>
              </div>

              <div>
                <label htmlFor="goal" className="block text-lg font-medium text-gray-300 mb-2">Your 90-Day Performance Goal (Quantifiable)</label>
                <textarea id="goal" name="goal" rows="2" required placeholder="Example: Reduce resting heart rate by 10 BPM..." className="w-full p-3 rounded-lg"></textarea>
              </div>

              {/* Submission */}
              <div className="pt-6">
                <button type="submit" className="apply-button bg-lime-electric text-black w-full px-8 py-4 rounded-lg font-bold text-xl hover:text-black hover:bg-white/90">
                  SUBMIT APPLICATION FOR REVIEW
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  We respect your privacy. All information is confidential.
                </p>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
