'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlogHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-hero-content p, .blog-hero-content h1', {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-20 md:pt-32 md:pb-32 text-center bg-elevated border-b border-subtle"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 blog-hero-content">
        <p className="text-lg md:text-xl font-semibold text-lime-electric uppercase tracking-widest mb-4">
          EXECUTIVE PERFORMANCE
        </p>
        <h1 className="text-5xl sm:text-7xl font-black leading-tight text-white mb-8">
          Latest <span className="text-lime-electric">Insights</span> & Blog
        </h1>
        <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto">
          Data-driven commentary on performance, health, and executive longevity. Stay ahead of the curve with our proprietary research.
        </p>
      </div>
    </section>
  );
}
