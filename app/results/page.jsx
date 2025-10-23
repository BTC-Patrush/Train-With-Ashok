import ResultsHero from "../../components/section/ResultsHero";
import ResultsCaseStudies from "../../components/section/ResultsCaseStudies";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">
      {/* 1. Results Hero Section (Intro animation on page load) */}
      <ResultsHero />

      {/* 2. Key Achievements & Highlights (scroll-triggered) */}
      <ResultsCaseStudies />
    </main>
  );
}
