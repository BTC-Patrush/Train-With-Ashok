'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResultsCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.case-study-card').forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from('.final-cta-section', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.final-cta-section',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Case Study 1 */}
        <CaseStudyCard
          title="The Media Agency Founder: Max G."
          duration="12 Weeks"
          description="Max needed to shed the 'startup weight' and regain the competitive edge he had in his 20s. His time was limited, so the protocol had to be high-leverage and minimal time investment. The focus was on metabolic repair and sustained energy."
          metrics={[
            { value: '12KG', label: 'Fat Loss' },
            { value: '3.5X', label: 'Sleep Score' },
            { value: '18%', label: 'Lift Max' },
          ]}
          images={[
            { src: 'https://placehold.co/350x500/0d0d0d/FF5733?text=MAX+BEFORE', label: 'BEFORE', border: '#FF5733' },
            { src: 'https://placehold.co/350x500/0d0d0d/00FF80?text=MAX+AFTER', label: 'AFTER', border: 'lime-electric' },
          ]}
          testimonial="The sheer efficiency is the key. I spent less time in the gym than before, but my results were 10x better. It's a system, not a workout plan."
        />

        {/* Case Study 2 */}
        <CaseStudyCard
          title="The VP of Engineering: Sarah K."
          duration="20 Weeks"
          description="Sarah had significant gym experience but plateaued years ago. The protocol focused on maximizing central nervous system (CNS) recovery and introducing advanced periodization techniques to break through her strength limits."
          metrics={[
            { value: '40%', label: 'Strength Gain' },
            { value: '8KG', label: 'Muscle Mass' },
            { value: '9/10', label: 'Focus Rating' },
          ]}
          images={[
            { src: 'https://placehold.co/350x500/0d0d0d/FF5733?text=SARAH+BEFORE', label: 'BEFORE', border: '#FF5733' },
            { src: 'https://placehold.co/350x500/0d0d0d/00FF80?text=SARAH+AFTER', label: 'AFTER', border: 'lime-electric' },
          ]}
          testimonial="This isn't for the casual gym-goer. This is for professionals who demand results. The data feedback loop was the game-changer for me."
        />

        {/* Case Study 3 */}
        <CaseStudyCard
          title="The VP of Engineering: Sarah K."
          duration="20 Weeks"
          description="Sarah had significant gym experience but plateaued years ago. The protocol focused on maximizing central nervous system (CNS) recovery and introducing advanced periodization techniques to break through her strength limits."
          metrics={[
            { value: '40%', label: 'Strength Gain' },
            { value: '8KG', label: 'Muscle Mass' },
            { value: '9/10', label: 'Focus Rating' },
          ]}
          images={[
            { src: 'https://placehold.co/350x500/0d0d0d/FF5733?text=SARAH+BEFORE', label: 'BEFORE', border: '#FF5733' },
            { src: 'https://placehold.co/350x500/0d0d0d/00FF80?text=SARAH+AFTER', label: 'AFTER', border: 'lime-electric' },
          ]}
          testimonial="This isn't for the casual gym-goer. This is for professionals who demand results. The data feedback loop was the game-changer for me."
        />

        {/* Case Study 4 */}
        <CaseStudyCard
          title="The VP of Engineering: Sarah K."
          duration="20 Weeks"
          description="Sarah had significant gym experience but plateaued years ago. The protocol focused on maximizing central nervous system (CNS) recovery and introducing advanced periodization techniques to break through her strength limits."
          metrics={[
            { value: '40%', label: 'Strength Gain' },
            { value: '8KG', label: 'Muscle Mass' },
            { value: '9/10', label: 'Focus Rating' },
          ]}
          images={[
            { src: 'https://placehold.co/350x500/0d0d0d/FF5733?text=SARAH+BEFORE', label: 'BEFORE', border: '#FF5733' },
            { src: 'https://placehold.co/350x500/0d0d0d/00FF80?text=SARAH+AFTER', label: 'AFTER', border: 'lime-electric' },
          ]}
          testimonial="This isn't for the casual gym-goer. This is for professionals who demand results. The data feedback loop was the game-changer for me."
        />

        {/* Final CTA */}
        <div className="text-center pt-16 border-t border-subtle final-cta-section">
          <h2 className="text-4xl font-bold text-white mb-4">Is Your Performance Next?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We only accept applicants ready to commit to this level of detail. Begin your qualification process.
          </p>
          <a
            href="apply.html"
            className="btn-primary bg-lime-electric text-black px-12 py-4 rounded-xl text-xl font-bold border-lime-electric"
          >
            ACTIVATE ELITE MODE &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

// ✅ Case Study Card Component
function CaseStudyCard({ title, duration, description, metrics, images, testimonial }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 case-study-card p-6 rounded-xl bg-elevated">
      
      {/* Text Content */}
      <div className="order-2 lg:order-1 ">
        <span className="text-lg font-semibold text-lime-electric uppercase">{`Case Study | ${duration}`}</span>
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 text-center border-t border-b border-subtle py-4 mb-6">
          {metrics.map((m, idx) => (
            <div key={idx}>
              <p className="text-5xl font-black text-lime-electric">{m.value}</p>
              <p className="text-sm text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>

        <p className="text-lg italic text-white/80">{testimonial}</p>
      </div>

      {/* Images */}
      <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img.src}
              alt={`${title} ${img.label}`}
              className={`rounded-lg w-full h-auto object-cover border-2 ${img.border === 'lime-electric' ? 'border-lime-electric/50' : `border-[${img.border}]/50`}`}
            />
            <p
              className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 px-3 py-1 text-sm font-semibold rounded-full ${
                img.border === 'lime-electric' ? 'text-lime-electric' : `text-[${img.border}]`
              }`}
            >
              {img.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
