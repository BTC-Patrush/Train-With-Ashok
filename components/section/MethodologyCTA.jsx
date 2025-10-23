// components/section/MethodologyCTA.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MethodologyCTA() {
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            // Target the h2, p, and a elements
            const elements = ctaRef.current.querySelectorAll('.cta-banner-content > *');

            // 1. Initial State
            gsap.set(elements, { opacity: 0, y: 30 });

            // 2. ScrollTrigger Animation
            gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.15, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });

        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={ctaRef}
            className="py-20 md:py-24 bg-elevated border-b border-t border-subtle text-center cta-banner-section"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 cta-banner-content">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Ready to Start the Audit?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                    Discover the precise path to your optimized physical and mental performance. Limited spots available.
                </p>
                <Link 
                    href="/apply" 
                    className="btn-primary bg-lime-electric text-black px-10 py-4 rounded-xl font-bold text-xl hover:text-black inline-block"
                >
                    ACTIVATE ELITE MODE &rarr;
                </Link>
            </div>
        </section>
    );
}