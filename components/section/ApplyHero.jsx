'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ApplyHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero section on load
      gsap.to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      });

      // Optional: stagger children (subtitle, title, paragraph)
      gsap.from(
        [heroRef.current.querySelector('#hero-subtitle'),
         heroRef.current.querySelector('#hero-title'),
         heroRef.current.querySelector('#hero-paragraph')],
        {
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 text-center bg-elevated border-b border-subtle opacity-0 translate-y-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl font-semibold text-lime-electric uppercase tracking-widest mb-4"
        >
          THE FIRST STEP TO OPTIMIZATION
        </p>
        <h1
          id="hero-title"
          className="text-5xl sm:text-7xl font-black leading-tight text-white mb-8"
        >
          Executive Performance Application
        </h1>
        <p
          id="hero-paragraph"
          className="text-xl font-light text-gray-300 max-w-3xl mx-auto"
        >
          Our program is highly exclusive and structured for high-stakes leaders. Please complete the pre-qualification form below. We evaluate fit based on commitment, specific challenges, and readiness for a data-driven transformation.
        </p>
      </div>
    </section>
  );
}
