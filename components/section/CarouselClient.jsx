// components/CarouselClient.jsx
'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

export default function CarouselClient({ slidesData }) {
    const carouselRef = useRef(null);
    const wrapperRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const slideCount = slidesData.length;

    // --- Utility & Calculation Functions ---

    const getVisibleSlides = useCallback(() => {
        if (!wrapperRef.current) return 1;
        const width = wrapperRef.current.clientWidth;
        return width >= 640 ? 2 : 1;
    }, []);

    // Calculate the number of pages/dots needed
    const totalPages = useMemo(() => {
        // Ensure there's always at least one page if there are slides
        return Math.max(0, slideCount - visibleSlides) + 1;
    }, [slideCount, visibleSlides]);

    const updateCarouselPosition = useCallback(() => {
        if (!carouselRef.current || slideWidth === 0) return;
        const offset = currentIndex * slideWidth;
        
        // Use GSAP if available, fallback to CSS transition
        if (typeof gsap !== 'undefined') {
            gsap.to(carouselRef.current, { x: -offset, duration: 0.5, ease: 'power2.out' });
        } else {
            carouselRef.current.style.transform = `translateX(-${offset}px)`;
        }
    }, [currentIndex, slideWidth]);

    // --- Effects: Position and Resizing ---

    // 1. Update carousel position whenever currentIndex changes
    useEffect(() => {
        updateCarouselPosition();
    }, [currentIndex, updateCarouselPosition]);


    // 2. Resize Observer & Initial Setup (This handles slide width and visibleSlides state)
    useEffect(() => {
        if (!wrapperRef.current) return;
        
        const observer = new ResizeObserver(() => {
            const newVisibleSlides = getVisibleSlides();
            const firstSlide = carouselRef.current?.querySelector('.slide-item');

            if (newVisibleSlides !== visibleSlides || slideWidth === 0 || firstSlide?.offsetWidth !== slideWidth) {
                
                if (firstSlide) {
                    setSlideWidth(firstSlide.offsetWidth);
                }
                
                setVisibleSlides(newVisibleSlides);
                
                // Adjust index to prevent showing a gap
                setCurrentIndex(prev => Math.min(prev, slideCount - newVisibleSlides)); 
            }
            // Calling updateCarouselPosition here is crucial for resize transitions
            updateCarouselPosition();
        });

        observer.observe(wrapperRef.current);
        
        // Initial manual setup
        const initialVisibleSlides = getVisibleSlides();
        setVisibleSlides(initialVisibleSlides);
        
        return () => observer.disconnect();
    }, [getVisibleSlides, visibleSlides, slideCount, slideWidth, updateCarouselPosition]);


    // --- Swipe/Navigation Handlers ---
    
    useEffect(() => {
        const carouselElement = carouselRef.current;
        if (!carouselElement) return;

        let touchStartX = 0;
        
        const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchStartX - touchEndX;

            if (Math.abs(deltaX) > 50) { 
                if (deltaX > 0) { // Swipe Left (Next)
                    setCurrentIndex(prev => Math.min(prev + 1, totalPages - 1)); // Use totalPages
                } else { // Swipe Right (Previous)
                    setCurrentIndex(prev => Math.max(prev - 1, 0));
                }
            }
        };

        carouselElement.addEventListener('touchstart', handleTouchStart);
        carouselElement.addEventListener('touchend', handleTouchEnd);
        
        return () => {
            carouselElement.removeEventListener('touchstart', handleTouchStart);
            carouselElement.removeEventListener('touchend', handleTouchEnd);
        };
    }, [totalPages, visibleSlides]);
    
    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };
    const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, totalPages - 1)); // Use totalPages
    };

    // --- Render (JSX) ---

    // Create an array to map over for dot rendering
    const dotIndices = Array.from({ length: totalPages }, (_, i) => i);

    return (
        <div className="relative">
            <div id="carousel-wrapper" ref={wrapperRef} className="overflow-hidden relative -mr-6">
                {/* Slides Container */}
                <div 
                    id="carousel-slides" 
                    ref={carouselRef} 
                    className="carousel-slides flex flex-nowrap w-full"
                    style={{ transition: typeof gsap === 'undefined' ? 'transform 0.5s ease-out' : 'none' }}
                >
                    {slidesData.map((slide, index) => (
                        <div 
                            key={index} 
                            className="slide-item flex-shrink-0 w-full sm:w-1/2 pr-6" 
                        >
                            {slide} 
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Centered to Image) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                {/* Previous Button */}
                <button 
                    id="prev-btn" 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? 'default' : 'pointer' }}
                    className="absolute left-0 top-1/4 mt-4 bg-black/60 p-3 rounded-full text-white hover:bg-lime-electric hover:text-black z-10 transition duration-300 shadow-xl ml-4 pointer-events-auto" 
                    aria-label="Previous Slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                
                {/* Next Button */}
                <button 
                    id="next-btn" 
                    onClick={handleNext} 
                    disabled={currentIndex >= totalPages - 1}
                    style={{ opacity: currentIndex >= totalPages - 1 ? 0.5 : 1, cursor: currentIndex >= totalPages - 1 ? 'default' : 'pointer' }}
                    className="absolute right-0 top-1/4 mt-4 bg-black/60 p-3 rounded-full text-white hover:bg-lime-electric hover:text-black z-10 transition duration-300 shadow-xl mr-4 pointer-events-auto" 
                    aria-label="Next Slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>


            {/* Pagination Dots Container: Now rendered with JSX map */}
            <div id="carousel-dots" className="flex justify-center mt-12 space-x-2">
                {dotIndices.map((i) => {
                    const isActive = i === currentIndex;
                    return (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide page ${i + 1}`}
                            // Apply dynamic classes using template literals/string concatenation for Tailwind
                            className={`
                                w-3 h-3 rounded-full mx-1 transition duration-300
                                ${isActive ? 'bg-lime-electric scale-125' : 'bg-gray-700 hover:bg-lime-electric'}
                            `}
                        />
                    );
                })}
            </div>
        </div>
    );
}