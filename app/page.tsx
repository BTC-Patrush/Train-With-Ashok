// app/page.jsx

// CRITICAL: REMOVE "use client"; here. 
// Only place it in the child component files that NEED client-side features.

import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ServicesSection from "../components/section/ServicesSection";
import ResultSection from "../components/section/ResultsSection";
import CTABanner from "../components/section/CTABanner";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResultSection />
      <CTABanner />
    </main>
  );
}