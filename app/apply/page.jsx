// Default is a Server Component in Next.js 15
import ApplyHero from '@/components/section/ApplyHero';
import ApplyFormSection from '@/components/section/ApplyFormSection';


export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">

      {/* 1. Hero Section (GSAP animation) */}
      <ApplyHero />

      {/* 2. Application Form & Qualification Criteria */}
      <ApplyFormSection />

     

    </main>
  );
}
