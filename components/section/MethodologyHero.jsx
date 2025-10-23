// components/section/MethodologyHero.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MethodologyHero() {
    const heroRef = useRef(null); // Ref for the entire hero container

    useEffect(() => {
        // Guard clause to ensure GSAP is available
        if (typeof gsap === 'undefined') return;
        
        const ctx = gsap.context(() => {
            
            // Select all animated elements inside the hero-content div
            const elementsToAnimate = heroRef.current.querySelectorAll('.hero-content > *');

            // 1. Initial State: Hide all elements and set a slight Y offset
            gsap.set(elementsToAnimate, { opacity: 0, y: 20 });

            // 2. Animation Sequence: Animate the elements into place
            gsap.to(elementsToAnimate, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.2, // Stagger effect for subtitle, H1, and paragraph
                ease: 'power3.out',
                delay: 0.1, // Slight delay on page load
            });

        }, heroRef); // Scope the GSAP context to the heroRef

        // Cleanup function
        return () => ctx.revert();
    }, []); // Empty dependency array runs this once on mount

    return (
        <section 
            className="relative pt-20 pb-20 md:pt-32 md:pb-32 text-center bg-elevated border-b border-subtle"
            ref={heroRef} // Attach the ref here
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 hero-content">
                {/* NOTE: No opacity-0 class needed, as gsap.set() handles the initial hiding */}
                <p className="text-lg md:text-xl font-semibold text-lime-electric uppercase tracking-widest mb-4 hero-subtitle">
                    THE ENGINEERING BEHIND THE RESULTS
                </p>
                <h1 className="text-5xl sm:text-7xl font-black leading-tight text-white mb-8 hero-h1">
                    Our <span className="text-lime-electric">Data-Driven</span> Protocol
                </h1>
                <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto hero-p">
                    We don't rely on guesswork or generic plans. Our approach is a three-phase system of biometric diagnostics, optimized training load, and non-negotiable mental resilience. This is our core commitment.
                </p>
            </div>
        </section>
    );
}