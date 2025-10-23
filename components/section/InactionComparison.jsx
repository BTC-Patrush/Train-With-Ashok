// components/section/InactionComparison.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function InactionComparison() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerElements = [".comparison-title", ".comparison-subtitle"];

            // Set initial state
            gsap.set(headerElements.concat(".comparison-block"), { opacity: 0, y: 40 });

            // 1. Animate Header Elements
            gsap.to(headerElements, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            // 2. Animate Comparison Blocks (simultaneously)
            gsap.to(".comparison-block", {
                opacity: 1,
                y: 0,
                duration: 1.0,
                stagger: 0.3, // Subtle stagger between the two blocks
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".comparison-container .grid", // Trigger on the parent grid
                    start: "top 75%",
                    toggleActions: "play none none none",
                    // markers: true,
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-elevated border-b border-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 comparison-container">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 comparison-title">The Cost of Inaction: Stop Accepting Mediocrity</h2>
                <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16 comparison-subtitle">
                    For high-stakes leaders, generic fitness plans are not just ineffective—they are a financial and professional liability.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: The Problem */}
                    <div className="space-y-6 inactive-comparison-card p-8 rounded-xl border-t-4 border-red-500/50 comparison-block problem-block">
                        <h3 className="text-3xl font-bold text-red-400 mb-4 flex items-center">
                            <span className="mr-3 text-5xl">🚫</span> The Executive Liability
                        </h3>
                        <p className="text-lg text-gray-300">
                            Traditional fitness programs are designed for people who have *time*. They lack the **data-driven specificity** required to optimize the high-stress, low-time reality of executive life. This leads to **performance decay**.
                        </p>
                        <ul className="space-y-3 text-lg text-gray-400">
                            <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">●</span> **Time Inefficiency:** Wasted gym hours for marginal, non-functional gains.</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">●</span> **Hormonal Burnout:** Training that ignores chronic stress, leading to cortisol overload.</li>
                            <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">●</span> **Cognitive Fog:** Nutritional plans that fail to sustain mental clarity.</li>
                        </ul>
                    </div>

                    {/* Right: The Solution */}
                    <div className="space-y-6 performance-card p-8 rounded-xl border-t-4 border-lime-electric comparison-block solution-block">
                        <h3 className="text-3xl font-bold text-lime-electric mb-4 flex items-center">
                            <span className="mr-3 text-5xl">✅</span> The Protocol/FIT Commitment
                        </h3>
                        <p className="text-lg text-gray-300">
                            We approach your body like a **complex, high-value asset** that requires expert engineering. Our commitment is a guaranteed, measurable return on investment in your physical and mental health.
                        </p>
                        <ul className="space-y-3 text-lg text-gray-400">
                            <li className="flex items-start"><span className="text-lime-electric mr-3 mt-1">●</span> **Maximized ROI:** Minimum time input for maximum physiological output.</li>
                            <li className="flex items-start"><span className="text-lime-electric mr-3 mt-1">●</span> **Biometric Integration:** Training and diet synced to real-time biometric data for precision.</li>
                            <li className="flex items-start"><span className="text-lime-electric mr-3 mt-1">●</span> **Stress Inoculation:** Protocols designed to physically buffer the effects of high-stakes, chronic professional stress.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}