// components/AboutSection.jsx
'use client'; 

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link'; 
import Image from 'next/image'; // CRITICAL FIX: Ensure Next.js Image component is imported

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    
    useEffect(() => {
        // FIX 1: Declare the timeout variable outside the context to allow both
        // the context and the useEffect cleanup to access it.
        let refreshTimeout; 

        const ctx = gsap.context(() => {
    
            const startState = { opacity: 0, y: 50 };

            // Select all children elements within the main container
            const sectionElements = gsap.utils.toArray("#about-section > div > div > *"); 
            
            // Animate the section elements with a stagger effect
            gsap.from(sectionElements, {
                ...startState,
                duration: 1.2,
                stagger: 0.1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#about-section",
                    start: "top 80%", 
                    toggleActions: "play none none none",
                }
            });
            
            // Re-adding the scroll refresh fix 
            refreshTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500); 

            // FIX 2: IMPORTANT! NO 'return' statement inside the gsap.context().
            // This prevents the infinite recursion.

        }); 

        // FIX 3: The main useEffect return handles ALL cleanup.
        return () => {
            // 1. Revert all GSAP/ScrollTrigger animations
            ctx.revert();
            // 2. Clear the timeout if it hasn't fired yet
            clearTimeout(refreshTimeout); 
        };
    }, []); 

    return (
        <section
            id="about-section"
            // FIX 4: Removed conflicting 'border-b' class, keeping the explicit 1px setting.
            className="py-24 md:py-32 bg-elevated border-subtle border-b-[1px] scroll-reveal" 
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Photo/Video */}
                    <div className="space-y-8">
                        {/* FIX 5: Correct Next.js Image Component usage with 'fill' */}
                        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl card border-4 border-lime-electric/30 image-glow">
                            <Image
                                // NOTE: Change this path to your actual local image path (e.g., "/images/coach.jpg")
                                // or ensure the domain is whitelisted in next.config.js for remote URLs.
                                src="https://placehold.co/800x960/0a0a0a/00FF80?text=Professional+Photo+Placeholder" 
                                alt="Professional Coach Photo"
                                fill // Use fill to make it cover the parent container
                                sizes="(max-width: 768px) 100vw, 50vw" // Good practice for responsive sizing
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-500"
                                priority={false} 
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                                <p className="text-2xl font-semibold text-white">Coach [Your Name]</p>
                                <p className="text-lime-electric">
                                    Founder & Head Performance Engineer
                                </p>
                            </div>
                        </div>

                        {/* Optional Video Greeting */}
                        <div className="w-full card rounded-xl p-6">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Personal Video Greeting (Optional)
                            </h3>
                            <div className="h-40 w-full flex items-center justify-center bg-black rounded-lg border border-lime-electric/20 text-gray-500 text-center text-md">
                                [Placeholder: Short 60-Second Video Greeting]
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Story & Credentials */}
                    <div className="space-y-8">
                        <p className="text-lg font-semibold text-lime-electric uppercase tracking-widest mb-2">
                            ABOUT THE ARCHITECT
                        </p>
                        <h2 className="text-5xl font-extrabold text-white leading-tight">
                            My Story: From <span className="text-lime-electric">Burnout</span> to
                            Protocol
                        </h2>
                        <p className="text-xl text-gray-400">
                            I built Protocol/FIT because I lived the high-stakes life and hit the wall. My
                            career was accelerating, but my health was collapsing. I realized traditional
                            training wasn't built for <em>our</em> schedule. It lacked precision, data, and
                            ruthless efficiency. Now, I dedicate my expertise to ensuring other leaders
                            don't make the same mistake.
                        </p>

                        <h3 className="text-3xl font-bold text-white">Credentials & Specialties</h3>
                        <ul className="space-y-3 text-lg text-gray-300 ml-5 list-disc list-outside">
                            <li>
                                <strong>Certified Performance Specialist (C-PS):</strong> Focused on
                                neurological efficiency and power output.
                            </li>
                            <li>
                                <strong>15+ Years Experience:</strong> Working exclusively with C-Suite and
                                high-net-worth clients.
                            </li>
                            <li>
                                <strong>Specialties:</strong> Metabolic Recomposition, HRT integration support,
                                Stress Resilience protocols.
                            </li>
                            <li>
                                <strong>Education:</strong> B.S. Kinesiology, M.A. Applied Physiology from
                                [Prestigious University].
                            </li>
                        </ul>

                        {/* FIX 6: CTA STYLING for consistency */}
                        <Link
                            href="/about"
                            className="cta-button bg-transparent text-lime-electric px-8 py-3 rounded-xl font-bold text-lg mt-8 inline-block border-2 border-lime-electric hover:bg-lime-electric hover:text-black transition duration-300"
                        >
                            Read the Full 15-Year Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}