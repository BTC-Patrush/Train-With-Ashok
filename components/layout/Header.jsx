"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation"; // <-- Import

export default function Header() {
  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- Get current path

  // --- FIX: SCROLL LOCK EFFECT ---
  useEffect(() => {
    const body = document.body;
    body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      body.style.overflow = "";
    };
  }, [isMenuOpen]);
  // -------------------------------

  useEffect(() => {
    // GSAP Intro Animation
    const elements = headerRef.current.querySelectorAll(".intro-element");
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper function for active link styling
  const getLinkClass = (href) =>
    `text-gray-400 hover:text-lime-electric transition duration-300 nav-link ${
      pathname === href ? "text-lime-electric font-bold" : ""
    }`;

  // --- DESKTOP LINKS ---
  const desktopNavLinks = (
    <>
      <Link href="/results" className={getLinkClass("/results")}>
        PROOF
      </Link>
      <Link href="/methodology" className={getLinkClass("/methodology")}>
        METHODOLOGY
      </Link>
      <Link href="/blog" className={getLinkClass("/blog")}>
        BLOG
      </Link>
      <Link href="/apply" className={getLinkClass("/apply")}>
        APPLY
      </Link>
    </>
  );

  // --- MOBILE LINKS ---
  const mobileNavLinks = (
    <>
      <Link
        href="/results"
        className={`${getLinkClass(
          "/results"
        )} block py-4 text-2xl font-semibold w-full text-center`}
        onClick={() => setIsMenuOpen(false)}
      >
        PROOF
      </Link>
      <Link
        href="/methodology"
        className={`${getLinkClass(
          "/methodology"
        )} block py-4 text-2xl font-semibold w-full text-center`}
        onClick={() => setIsMenuOpen(false)}
      >
        METHODOLOGY
      </Link>
      <Link
        href="/blog"
        className={`${getLinkClass(
          "/blog"
        )} block py-4 text-2xl font-semibold w-full text-center`}
        onClick={() => setIsMenuOpen(false)}
      >
        BLOG
      </Link>
      <Link
        href="/apply"
        className={`${getLinkClass(
          "/apply"
        )} block py-4 text-2xl font-semibold w-full text-center`}
        onClick={() => setIsMenuOpen(false)}
      >
        APPLY
      </Link>
    </>
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md shadow-2xl shadow-gray-900/50 border-b border-gray-800"
    >
      {/* 1. Main Header Bar (Desktop/Mobile) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative z-[102]">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-white tracking-tight logo-text"
        >
          TWA
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium opacity-0 translate-y-3 intro-element">
          {desktopNavLinks}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="/apply"
          className="cta-button bg-transparent border border-lime-electric text-lime-electric px-6 py-2 rounded-lg font-bold hover:bg-lime-electric hover:text-black hidden md:block text-sm header-cta opacity-0 translate-y-3 intro-element transition-all duration-300"
        >
          APPLY NOW
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-lime-electric transition duration-300"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* 2. Mobile Menu Drawer */}
      <div
        className={`
                    md:hidden fixed top-0 right-0 h-screen w-full max-w-sm 
                    bg-black/95 backdrop-blur-md shadow-2xl z-[101] 
                    transform transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
      >
        <div className="pt-20 flex flex-col items-center space-y-0 text-xl font-medium">
          {mobileNavLinks}
          <Link
            href="/apply"
            className="cta-button bg-transparent border border-lime-electric text-lime-electric px-6 py-3 rounded-lg font-bold hover:bg-lime-electric hover:text-black text-xl transition-all duration-300 mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            APPLY NOW
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0 border-b border-gray-700"></div>
      </div>

      {/* 3. Overlay/Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] md:hidden transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
