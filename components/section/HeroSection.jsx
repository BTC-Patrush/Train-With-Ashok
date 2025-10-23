// components/HeroSection.jsx
'use client'
import { useEffect, useRef } from "react";
import Link from "next/link"; // IMPORT THE LINK COMPONENT
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const tlRef = useRef(null); // Ref for GSAP Timeline

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll(".intro-element");

    // 1. Hero intro animation
    tlRef.current = gsap.timeline();
    
    tlRef.current.fromTo(
      elements,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    // 2. CTA Banner subtle animation (Ensure #cta-banner exists in CTABanner.jsx)
    const ctaAnimation = gsap.to(
      heroRef.current.querySelectorAll(".cta-text"), 
      {
        y: -10,
        opacity: 1,
        scrollTrigger: {
          trigger: "#cta-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );

    // CLEANUP FUNCTION: IMPORTANT for client components to prevent memory leaks
    return () => {
      tlRef.current.kill();
      // Also ensure the ScrollTrigger instance is cleaned up
      if (ctaAnimation) ctaAnimation.scrollTrigger.kill(); 
    };
  }, []);

  return (
    <section ref={heroRef} className="relative pt-20 pb-32 md:pt-40 md:pb-48 text-center border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg md:text-xl font-semibold text-lime-electric uppercase tracking-widest mb-4 opacity-0 translate-y-4 intro-element">
          OPTIMIZE YOUR CORE ASSET
        </p>
        <h1 className="text-6xl sm:text-8xl font-black leading-none text-white mb-8 opacity-0 translate-y-4 intro-element">
          The <span className="text-lime-electric">High-Performance</span> <br />
          Protocol
        </h1>
        <p className="text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-10 opacity-0 translate-y-4 intro-element">
          Stop chasing trends. We engineer physical excellence for CEOs, Founders, and High-Stakes Professionals who demand measurable, guaranteed results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 intro-element">
          {/* CRUCIAL CHANGE: Use <Link> for internal navigation */}
          <Link href="/apply" className="btn-primary bg-lime-electric text-black px-10 py-4 rounded-xl font-bold text-xl hover:text-black">
            APPLY FOR AUDIT
          </Link>
          <Link href="/methodology" className="btn-secondary bg-transparent text-white px-10 py-4 rounded-xl font-bold text-xl border-white hover:border-lime-electric hover:text-lime-electric">
            EXPLORE METHODOLOGY
          </Link>
        </div>

        <div className="mt-20 max-w-5xl mx-auto text-center opacity-0 translate-y-4 intro-element">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
            Trusted by Executives at:
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <span className="text-2xl md:text-3xl font-bold text-gray-400">FORBES</span>
            <span className="text-2xl md:text-3xl font-bold text-gray-400">BLOOMBERG</span>
            <span className="text-2xl md:text-3xl font-bold text-gray-400">TECHCRUNCH</span>
            <span className="text-2xl md:text-3xl font-bold text-gray-400 hidden sm:block">WSJ</span>
          </div>
        </div>
      </div>
    </section>
  );
}