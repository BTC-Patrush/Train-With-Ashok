"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogGrid() {
  const gridRef = useRef(null);

  const articles = [
    {
      category: "LONGEVITY",
      date: "OCT 10",
      title: "The CEO's Guide to Telomere Preservation",
      description:
        "A deep dive into cellular aging, and the three non-negotiable supplements that guarantee cellular health and improved cognitive function.",
      link: "/blog/telomere-preservation",
    },
    {
      category: "METABOLISM",
      date: "SEP 28",
      title: "Why Fasting Protocols Fail High-Stress Executives",
      description:
        "When intermittent fasting harms cortisol levels. The precise method for high-stress professionals to leverage metabolic switching safely.",
      link: "/blog/fasting-executives",
    },
    {
      category: "TRAINING",
      date: "SEP 15",
      title: "The 20-Minute Minimal Effective Dose Workout",
      description:
        "Our proprietary density training system. How to gain functional strength and mitochondrial mass in less time than your morning commute.",
      link: "/blog/minimal-workout",
    },
    {
      category: "NUTRITION",
      date: "SEP 01",
      title: "Cognitive Fueling: The Executive's Plate",
      description:
        "The micro-nutrient profile required to sustain 14-hour high-stakes decision-making sessions without mental fatigue or crashes.",
      link: "/blog/cognitive-fueling",
    },
    {
      category: "RESILIENCE",
      date: "AUG 20",
      title: "Biohacking Sleep: HRV Optimization",
      description:
        "Advanced techniques for leveraging Heart Rate Variability (HRV) data to actively manage and maximize overnight recovery and readiness.",
      link: "/blog/hrv-optimization",
    },
    {
      category: "METHODOLOGY",
      date: "AUG 05",
      title: "The Myth of Overtraining for the Executive",
      description:
        "Exploring the difference between training fatigue and systemic professional stress, and how to program around both safely.",
      link: "/blog/overtraining-myth",
    },
  ];
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".article-card").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 0.3,
        ease: "back.inOut(1.7)",
        delay: i * 0.2, // 🎯 0.2s DELAY between EACH card
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
    });
  }, gridRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="blog-grid" ref={gridRef} className="py-24 md:py-32 border-b border-subtle bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              className="group block article-card bg-elevated p-8 rounded-2xl border border-subtle hover:border-lime-electric/50 hover:bg-elevated/50 shadow-xl hover:shadow-2xl hover:shadow-lime-electric/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <p className="text-sm font-semibold text-lime-electric mb-4 uppercase tracking-wider">
                {article.category} | {article.date}
              </p>
              <h3 className="group-hover:text-lime-electric transition-colors duration-200 text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{article.description}</p>
              <span className="text-sm text-lime-electric block font-semibold group-hover:translate-x-2 transition-transform duration-200">
                Read Article →
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href="/blog"
            className="inline-block bg-transparent border-2 border-lime-electric text-lime-electric px-10 py-4 rounded-2xl font-bold text-xl hover:bg-lime-electric hover:text-black transform hover:scale-[1.05] transition-all duration-200 shadow-2xl hover:shadow-lime-electric/25"
          >
            LOAD MORE INSIGHTS
          </a>
        </div>
      </div>
    </section>
  );
}