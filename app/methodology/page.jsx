// app/methodology/page.jsx

import MethodologyHero from '@/components/section/MethodologyHero';
import ProtocolPhases from '@/components/section/ProtocolPhases';
import PerformanceDomains from '@/components/section/PerformanceDomains';
import InactionComparison from '@/components/section/InactionComparison';
import MethodologyCTA from '@/components/section/MethodologyCTA';


export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-bg-dark text-white">
            {/* 1. Methodology Hero Section (Intro animation on page load) */}
            <MethodologyHero /> 

            {/* 2. The Protocol Process: Three Phases (Scroll-triggered animation) */}
            <ProtocolPhases />

            {/* 3. Detailed Service Descriptions (Scroll-triggered animation) */}
            <PerformanceDomains />

            {/* 4. The Cost of Inaction: Why Traditional Training Fails (Scroll-triggered animation) */}
            <InactionComparison />

            {/* 5. CTA Banner (Scroll-triggered animation) */}
            <MethodologyCTA />
        </main>
    );
}