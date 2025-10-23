// components/section/CTABanner.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link"; // IMPORT <Link> FOR INTERNAL NAVIGATION
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger (simplified for client-only file)
gsap.registerPlugin(ScrollTrigger);

export default function BlogCTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    // Use GSAP context for robust cleanup
    const ctx = gsap.context(() => {
      const elements = ctaRef.current.querySelectorAll(".cta-text");

      // 1. Initial State: Hide all elements
      gsap.set(elements, { opacity: 0, y: 30 });

      // 2. ScrollTrigger Animation
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, ctaRef);

    return () => ctx.revert(); // Essential cleanup
  }, []);

  return (
    <section
      id="cta-banner" // CRUCIAL ID for HeroSection's ScrollTrigger
      ref={ctaRef}
      className="py-20 md:py-24 bg-elevated border-b border-t border-subtle text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight cta-text">
          Ready to 10x Your Physical Output?
        </h2>
        <p className="text-xl text-gray-400 mb-8 cta-text">
          Your current fitness regime is leaking energy. Apply for the Protocol
          Audit and plug the gap.
        </p>

        {/* CRITICAL FIX: Use <Link> instead of <a> for internal route */}
        <Link
          href="/apply"
          className="btn-primary bg-lime-electric text-black px-10 py-4 rounded-xl font-bold text-xl hover:text-black cta-text inline-block"
          aria-label="Activate Elite Mode and Apply for Audit"
        >
          ACTIVATE ELITE MODE &rarr;
        </Link>
      </div>
    </section>
  );
}
