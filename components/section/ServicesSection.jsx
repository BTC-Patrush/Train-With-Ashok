// components/ServicesSection.jsx
"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger, as it's a GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
    const services = [
        // ... (Your services data remains the same) ...
        { icon: "🔥", title: "Rapid Fat Loss", description: "Data-driven metabolic programming for accelerated body fat reduction without compromising executive energy or mental acuity." },
        { icon: "💪", title: "Functional Muscle Gain", description: "Efficient strength training optimized for physical presence, posture, and systemic resilience against chronic strain." },
        { icon: "❤️", title: "Longevity Metrics", description: "Optimization of key bio-markers (HRV, sleep, blood panel) for guaranteed long-term physical and cognitive function." },
        { icon: "⚡", title: "Sustained Stamina", description: "Engineered conditioning to build energy reserves that maintain peak decision-making power from morning until late evening." },
        { icon: "🍎", title: "Precision Nutrition", description: "Custom meal strategies optimized for mental clarity, stress reduction, and efficient recovery with zero decision fatigue." },
        { icon: "🧠", title: "Cognitive Resilience", description: "Protocols targeting sleep, stress, and nervous system health to improve focus and buffer the impact of high-stakes pressure." },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            // 1. FIX: Use GSAP.set to hide all animated elements initially
            gsap.set(["#services-header h2", "#services-header p", ".service-card", "#services-section .cta-button-services"], {
                opacity: 0,
                y: 30 // CRITICAL: Hides elements below their final position
            });
            
            // 2. Animation for the main heading and subheading
            gsap.to(["#services-header h2", "#services-header p"], {
                opacity: 1, 
                y: 0, 
                duration: 1.0, // Reduced from 1.2 for snappier header
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#services-header",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            // 3. Staggered Fade-In Animation for Cards
            gsap.to(".service-card", 
                {
                    opacity: 1,
                    y: 0, // Animate up to final position
                    duration: 0.5, // Increased duration for a smoother visual
                    stagger: 0.1, // Increased stagger for a slower, more noticeable sequence
                    ease: "power2.Out",
                    scrollTrigger: {
                        trigger: "#services-section .grid", 
                        start: "top 75%", 
                        toggleActions: "play none none none",
                    },
                }
            );

            // 4. Animation for the CTA button at the bottom
            gsap.to("#services-section .cta-button-services", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#services-section .cta-button-services",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services-section"
            className="py-24 md:py-32 border-subtle"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div id="services-header">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
                        Engineered for Executive Excellence
                    </h2>
                    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
                        Our data-driven protocols deliver targeted outcomes where generic training fails.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card service-card p-6 rounded-xl border-t-4 border-lime-electric hover:bg-black transition duration-300" 
                        >
                            <div className="text-lime-electric text-3xl mb-3">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/methodology"
                        className="cta-button cta-button-services bg-transparent text-lime-electric px-8 py-3 rounded-xl font-bold text-lg border-2 border-lime-electric hover:bg-lime-electric hover:text-black transition duration-300 inline-block" // Added border styles for button
                    >
                        SEE HOW IT WORKS
                    </Link>
                </div>
            </div>
        </section>
    );
}