// components/AnimationInitializer.jsx
'use client'; 

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationInitializer() {
  useEffect(() => {
    // We use a GSAP context to limit the scope of animations and simplify cleanup
    const ctx = gsap.context(() => {
      
      // Check if this code is running in a browser environment
      if (typeof document === 'undefined') return; 

      // 1. Page Load Hero Animation (introTimeline)
      const introTimeline = gsap.timeline();
      
      // NOTE: Ensure your header component has .logo-text, .header-cta, and .nav-link classes
      introTimeline
        // 1. Logo and Header CTA
        .fromTo(".logo-text", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" })
        .fromTo(".header-cta, .nav-link", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "<")
        
        // 2. Stagger the Hero content (.intro-element class from your Hero.jsx component)
        .to(".intro-element", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15, 
          ease: "power3.out"
        }, "-=0.2"); 
        
      // 2. Scroll-Triggered Section Reveals 
      // NOTE: This targets all elements with the 'scroll-reveal' class
      const sectionsToAnimate = document.querySelectorAll(".scroll-reveal");
      
      sectionsToAnimate.forEach(section => {
        // Set the initial state
        gsap.set(section, { opacity: 0, y: 50 });

        // Create the reveal animation
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%", 
            toggleActions: "play none none none",
          }
        });
      });

      // 3. CTA Banner Parallax/Subtle Movement 
      gsap.to("#cta-banner .cta-text", {
        y: -10, 
        opacity: 1,
        scrollTrigger: {
          trigger: "#cta-banner",
          start: "top bottom", 
          end: "bottom top", 
          scrub: 1.5, 
        }
      });
    });

    // Cleanup function: Kills all GSAP animations and ScrollTriggers on unmount
    return () => ctx.revert(); 
  }, []); // Run once on mount

  // This component doesn't render any visible UI
  return null; 
}