"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreePhaseSystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const phases = gsap.utils.toArray(".protocol-phase");

      phases.forEach((phase, index) => {
        gsap.fromTo(
          phase,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: phase,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      });

    //   phases.forEach((phase, index) => {
    //     gsap.fromTo(
    //       phase,
    //       { opacity: 0, y: 100 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 1,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: phase,
    //           start: "top 80%",
    //           end: "bottom 60%",
    //           toggleActions: "play none none none",
    //         },
    //         delay: index * 0.1,
    //       }
    //     );
    //   });

      phases.forEach((phase) => {
        // Animate detail blocks inside each phase
        gsap.from(phase.querySelectorAll(".detail-block"), {
          opacity: 0,
          x: 40, // slide in from right
          duration: 0.9,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: phase, // animate when the phase section enters
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Title animation
      gsap.fromTo(
        ".phase-title",
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const phases = [
    {
      id: "I",
      title: "Metabolic Audit & Diagnostics",
      summary:
        "You can't manage what you don't measure. We eliminate all variables and establish your absolute physiological baseline.",
      details: [
        {
          title: "The Biometric Engine (Bloodwork & Hormones)",
          content:
            "Deep dive into blood panels, HRV, and inflammatory markers. We optimize the cellular environment before touching a barbell by identifying hidden metabolic inefficiencies (e.g., insulin resistance, poor recovery, low testosterone) that are limiting executive performance.",
          points: [
            "Comprehensive analysis of hormonal profiles.",
            "Defining optimal recovery windows based on nervous system status.",
          ],
          strong: true,
        },
        {
          title: "Movement & Bio-mechanics Screening",
          content:
            "Comprehensive evaluation of mobility, stability, and biomechanical weaknesses to injury-proof your training and ensure 100% lift efficiency. Integration of wearable data (Oura, Whoop) is used to define optimal recovery windows.",
          points: [
            "Identifying and correcting joint imbalances.",
            "Data-driven analysis of sleep architecture and quality.",
          ],
        },
      ],
    },
    {
      id: "II",
      title: "Load & Time Optimization",
      summary:
        "Your training is fused into a single, cohesive engine. We apply minimal effective dose principles to maximize ROI in the gym.",
      details: [
        {
          title: "Adaptive Training System (ATS)",
          content:
            "Your plan evolves weekly based on recovery data and real-time stress load, guaranteeing continuous progressive overload. We use advanced techniques like cluster sets and high-frequency, low-volume programs.",
          points: [
            "Executive Periodization: Scheduling ruthlessly efficient, adapting based on your travel.",
            "Utilizing short, intense blocks (20-40 minutes) to maximize mitochondrial output.",
          ],
          strong: true,
        },
        {
          title: "Nutrient & Timing Protocol",
          content:
            "Customized macro and micro-nutrient profiles tailored to your metabolic audit results and business demands, ensuring sustained energy and focus without crash. Precision fueling strategies optimized for immediate cognitive demands.",
          points: [
            "Micro-adjustments to eliminate brain fog.",
            "Designed for sustained mental output during high-stakes work.",
          ],
        },
      ],
    },
    {
      id: "III",
      title: "Stress Resilience & Blueprint",
      summary:
        "We apply nutritional and physical strategies to enhance focus, decision-making stamina, and stress resilience. Performance is mental.",
      details: [
        {
          title: "Autonomic Nervous System Tuning",
          content:
            "Specific routines to regulate heart rate variability (HRV) and improve parasympathetic dominance (recovery). This phase physically buffers the effects of high-stakes, chronic professional stress using advanced breathwork protocols and recovery strategies.",
          points: [
            "Protocols designed for stress inoculation.",
            "Ensuring sustained energy reserves from 8 AM to 8 PM.",
          ],
          strong: true,
        },
        {
          title: "Exit Strategy & Habit Fortification",
          content:
            "The final phase focuses on transitioning the protocol into an autonomous, unbreakable high-performance lifestyle, ensuring long-term maintenance of your results. We develop the knowledge and systems so you can self-manage and scale your performance indefinitely.",
          points: [
            "Daily check-ins and centralized tracking for course correction.",
            "Creation of the post-program blueprint.",
          ],
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 phase-title">
          The Three-Phase Optimization System
        </h2>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 gap-10 items-start p-8 md:p-12 rounded-xl border border-subtle bg-black/30 protocol-phase protocol-phase-card"
            >
              {/* LEFT COLUMN */}
              <div className="md:col-span-4">
                <span className="text-7xl font-black text-lime-electric opacity-70 block mb-2">
                  {phase.id}
                </span>
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-xl font-light">
                  {phase.summary}
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="md:col-span-8 space-y-6">
                {phase.details.map((detail, i) => (
                  <div
                    key={i}
                    className={`p-6 border-l-4 detail-block ${
                      detail.strong
                        ? "border-lime-electric"
                        : "phase-border-lime-electric"
                    } bg-black/50 rounded-r-lg`}
                  >
                    <h4 className="text-2xl font-semibold text-white mb-2">
                      {detail.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{detail.content}</p>
                    <ul className="space-y-1 text-gray-400 ml-5 list-disc text-sm">
                      {detail.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
