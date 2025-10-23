import BlogHero from '@/components/section/BlogHero';
import BlogGrid from '@/components/section/BlogGrid';
import BlogCTA from '@/components/section/BlogCTA';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">
      
      {/* 1. Hero Section with page-load animation */}
      <BlogHero />

      {/* 2. Blog Articles Grid with scroll-triggered animations */}
      <BlogGrid />

      {/* 3. Call-to-Action section with GSAP fade-in */}
      <BlogCTA />
    </main>
  );
}
