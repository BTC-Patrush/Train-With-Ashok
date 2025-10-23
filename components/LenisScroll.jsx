// components/LenisScroll.jsx
'use client'; 

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Import GSAP and ScrollTrigger to handle sync
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function LenisScroll({ children }) {
    useEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // 2. CRITICAL: Sync Lenis with GSAP ScrollTrigger
        // When Lenis scrolls, update ScrollTrigger's position
        lenis.on('scroll', ScrollTrigger.update);
        
        // This is a special function that tells ScrollTrigger to use Lenis's smooth scroll position
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Prevents default ScrollTrigger behavior that conflicts with smooth scroll
        gsap.ticker.lagSmoothing(0);


        // 3. Define and Start the RAF loop (removed the redundant manual loop)
        // Note: The GSAP ticker now handles calling lenis.raf(time).

        
        // 4. Clean up
        return () => {
            lenis.destroy();
            // Optional: You can remove the GSAP ticker sync here as well, 
            // but destroying lenis is usually enough.
            gsap.ticker.remove(lenis.raf); 
        };
    }, []);

    // Return children without an unnecessary wrapper.
    return <>{children}</>; 
}