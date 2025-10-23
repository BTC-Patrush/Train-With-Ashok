// components/section/PerformanceDomains.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// NOTE: You'll need to install or define the feather-icons components or use a modern icon library

const ZapIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap text-lime-electric" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const BarbellIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-barbell text-lime-electric" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3"/></svg>
);
const HeartIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart text-lime-electric" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);
const ActivityIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-lime-electric" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);


export default function PerformanceDomains() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerElements = [".service-title", ".service-subtitle"];

            // Set initial state
            gsap.set(headerElements.concat(".service-card"), { opacity: 0, y: 30 });

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

            // 2. Animate Cards
            gsap.to(".service-card", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".service-grid", // Trigger on the card container
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 service-grid-container">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 service-title">High-Specificity Performance Domains</h2>
                <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16 service-subtitle">
                    A deeper look into the precise engineering behind each of our core service deliverables.
                </p>

                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 service-grid">

                    {/* Service 1: Rapid Fat Loss */}
                    <div className="performance-card p-6 rounded-xl border-t-4 border-lime-electric/50 flex flex-col items-start service-card">
                        <div className="mb-4">
                            <ZapIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Rapid Fat Loss & Metabolic Recomposition</h3>
                        <p className="text-gray-400 text-lg">Targeted metabolic programming to shed body fat quickly and sustainably, without compromising energy or mental acuity during work hours. **This isn't crash dieting; it's data-driven, precise caloric and macronutrient cycling designed for the executive schedule.**</p>
                    </div>

                    {/* Service 2: Muscle Building & Physical Presence */}
                    <div className=" p-6 rounded-xl border-t-4 border-lime-electric/50 performance-card flex flex-col items-start service-card">
                        <div className="mb-4">
                            <BarbellIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Maximum Muscle Gain & Physical Presence</h3>
                        <p className="text-gray-400 text-lg">Structured resistance training and precise nutrition to build lean mass efficiently, improving physical presence and basal metabolism. **We focus on functional, joint-friendly strength that translates directly to a reduction in chronic pain and a noticeable increase in daily physical capacity.**</p>
                    </div>

                    {/* Service 3: Core Health & Longevity */}
                    <div className="performance-card p-6 rounded-xl border-t-4 border-lime-electric/50 flex flex-col items-start service-card">
                        <div className="mb-4">
                            <HeartIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Core Health & Longevity Optimization</h3>
                        <p className="text-gray-400 text-lg">Leverage bio-markers to improve cholesterol, blood sugar, and hormonal balance, guaranteeing long-term physical and cognitive longevity. **We work with your existing medical team to integrate the fitness component, ensuring your internal metrics are optimally engineered.**</p>
                    </div>

                    {/* Service 4: Sustained Stamina & Stress Resilience */}
                    <div className="performance-card p-6 rounded-xl border-t-4 border-lime-electric/50 flex flex-col items-start service-card">
                        <div className="mb-4">
                            <ActivityIcon />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Sustained Stamina & Stress Resilience</h3>
                        <p className="text-gray-400 text-lg">Engineered cardio protocols that build sustained energy reserves, ensuring you maintain peak decision-making power from 8 AM to 8 PM. **Our stamina protocols are designed for the high-pressure environment, enhancing mitochondrial density and buffering the effects of professional burnout.**</p>
                    </div>
                </div>
            </div>
        </section>
    );
}