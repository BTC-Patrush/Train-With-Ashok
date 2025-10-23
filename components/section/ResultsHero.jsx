'use client'; // Required if using GSAP with Next.js 13+ App Router

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ResultsHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animated', {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={heroRef}
      className="py-24 md:pt-32 md:pb-24 text-center border-b border-subtle bg-elevated"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 hero-content-wrapper">
        <p className="hero-animated text-lg md:text-xl font-semibold text-lime-electric uppercase tracking-widest mb-4">
          VERIFIED OUTCOMES
        </p>
        <h1 className="hero-animated text-5xl sm:text-6xl font-black leading-tight text-white mb-6">
          Elite Transformations. <br className="hidden sm:inline-block" />
          The Data Doesn't Lie.
        </h1>
        <p className="hero-animated text-xl font-light text-gray-400 max-w-3xl mx-auto">
          These individuals are high-achievers who invested in a protocol that matched their professional standards. These are their quantified results.
        </p>
      </div>
    </section>
  );
}

