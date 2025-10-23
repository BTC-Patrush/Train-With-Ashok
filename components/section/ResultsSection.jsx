// components/ResultsSection.jsx
'use client'; 

import React, { useEffect, useRef } from 'react';
import CarouselClient from './CarouselClient';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

// Register ScrollTrigger globally once
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// 1. Define the Data for the Testimonials
const testimonialSlides = [
    {
        stats: "-18KG Fat Mass & 3% Body Fat Drop",
        quote: "The precision nutrition was a game changer. I'm leaner, stronger, and my cognitive output hasn't dropped a bit. Total system upgrade.",
        client: "K.L., CEO, Tech Startup"
    },
    {
        stats: "+45KG Squat & Zero Injury Days",
        quote: "I broke through strength plateaus I thought were permanent. The training is efficient and built to support my chronic back pain. Unmatched ROI.",
        client: "J.M., Founder, Fintech"
    },
    {
        stats: "+30% HRV & Sharper Decision Making",
        quote: "My energy used to crash at 3 PM. Now, I maintain focus through the evening calls. This is the competitive edge I was missing.",
        client: "C.S., Legal Partner, London"
    },
    {
        stats: "+90 Min Deep Sleep & Anxiety Reduction",
        quote: "The sleep protocol was life-changing. I now start every day truly rested, which has fundamentally changed how I handle high-stress litigation.",
        client: "M.D., Managing Partner, Law Firm"
    },
    {
        stats: "-15% Cortisol & Enhanced Focus",
        quote: "Stress management became effortless. The tailored regimen dramatically improved my ability to handle long, high-stakes days.",
        client: "A.G., Venture Capitalist"
    },
    {
        stats: "+50% Stamina & Quick Recovery",
        quote: "My endurance for competitive sports has soared. Recovery is faster, allowing me to maintain peak performance day after day.",
        client: "S.B., Professional Athlete"
    },
];

// 2. Map the Data into the required JSX structure (FIXED: Using Next.js Image fill for responsive sizing)
const slidesJSX = testimonialSlides.map((t, index) => (
    <div key={index} className="card p-6 rounded-xl h-full border-t-4 border-lime-electric/50">
        
        {/* FIX: Set container height (h-64/h-80) and relative positioning */}
        <div className="flex justify-between items-center mb-4 relative h-64 md:h-80"> 
            
            {/* Image 1: BEFORE */}
            <div className="relative w-1/2 h-full mr-2"> 
                <Image 
                    src="https://placehold.co/400x560/0d0d0d/888888?text=BEFORE" 
                    alt="Before Photo" 
                    fill // <-- FIX: Use 'fill' for responsive sizing
                    className="object-cover rounded-lg border-2 border-red-500/50" 
                    sizes="(max-width: 768px) 50vw, 33vw"
                />
            </div>
            
            {/* Image 2: AFTER */}
            <div className="relative w-1/2 h-full ml-2">
                <Image 
                    src="https://placehold.co/400x560/00FF80/000000?text=AFTER" 
                    alt="After Photo" 
                    fill // <-- FIX: Use 'fill' for responsive sizing
                    className="object-cover rounded-lg border-2 border-lime-electric" 
                    sizes="(max-width: 768px) 50vw, 33vw"
                />
            </div>
            
        </div>

        <p className="text-lg font-bold text-lime-electric mb-4 text-center">
            {t.stats}
        </p>
        <blockquote className="text-gray-300 italic border-l-4 border-lime-electric pl-4 mb-4 min-h-[100px]">
            "{t.quote}"
        </blockquote>
        <p className="text-sm font-semibold text-white uppercase">— {t.client}</p>
    </div>
));


// 3. The Main Results Section Component
export default function ResultsSection() {
    const sectionRef = useRef(null); 
    const headlineRef = useRef(null); 
    const subheadlineRef = useRef(null); 
    const carouselRef = useRef(null); 
    const videoRef = useRef(null); 

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // CRITICAL FIX: Use gsap.context() for safe cleanup
        const ctx = gsap.context(() => {
            
            // Animation for Headlines (Using IDs)
            gsap.fromTo("#results-headline, #results-subheadline",
                { opacity: 0, y: 30 }, 
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: "#results-section",
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );

            // Animation for Carousel Wrapper (Using ID)
            gsap.fromTo("#results-carousel",
                { opacity: 0, y: 50, scale: 0.95 }, 
                {
                    opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: "#results-carousel", 
                        start: 'top 85%', 
                        toggleActions: 'play none none none',
                    }
                }
            );

            // Animation for Video Placeholder (Using ID)
            gsap.fromTo("#results-video",
                { opacity: 0, y: 40 }, 
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: "#results-video", 
                        start: 'top 90%', 
                        toggleActions: 'play none none none',
                    }
                }
            );
            
        }); 

        // CRITICAL FIX: Proper cleanup using ctx.revert()
        return () => ctx.revert(); 
    }, []); 

    return (
        <section 
            id="results-section" // ID for GSAP trigger
            ref={sectionRef} 
            className="py-24 md:py-32 bg-bg-elevated border-b border-border-subtle"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* HEADLINE: Includes ID for GSAP selection */}
                <h2 
                    id="results-headline" 
                    ref={headlineRef} 
                    className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 opacity-0"
                >
                    Verified Transformations. Uncompromising Results.
                </h2>
                
                {/* SUB-HEADLINE: Includes ID for GSAP selection */}
                <p 
                    id="results-subheadline" 
                    ref={subheadlineRef} 
                    className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16 opacity-0" 
                >
                    We only work with data and documented proof. Swipe or click to see the results our clients demand.
                </p>

                {/* CAROUSEL WRAPPER: Includes ID for GSAP selection */}
                <div 
                    id="results-carousel" 
                    ref={carouselRef} 
                    className="opacity-0"
                > 
                    <CarouselClient slidesData={slidesJSX} />
                </div>

                {/* Video Testimonial Placeholder: Includes ID for GSAP selection */}
                <div 
                    id="results-video" 
                    ref={videoRef} 
                    className="mt-20 text-center opacity-0"
                > 
                    <p className="text-lg font-semibold text-lime-electric uppercase tracking-widest mb-4">OPTIONAL: VIDEO PROOF</p>
                    <div className="max-w-4xl mx-auto h-64 md:h-96 w-full flex items-center justify-center bg-black/50 rounded-xl border border-lime-electric/50 text-gray-400 text-2xl p-4">
                        [Placeholder for Embedded Video Testimonial]
                    </div>
                </div>
            </div>
        </section>
    );
}