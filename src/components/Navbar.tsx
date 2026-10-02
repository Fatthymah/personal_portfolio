"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";

  // Section IDs in physical DOM bottom-to-top order for accurate scroll-spy tracking:
  // DOM layout: Home (#home) -> About (#about) -> Work (#work) -> Skills (#skills) -> Contact (#contact)
  const domScrollOrder = ["contact", "skills", "work", "about", "home"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // On homepage, track the currently visible section based on DOM position
      if (typeof window !== "undefined" && !isAboutPage) {
        const scrollPosition = window.scrollY + 140; // Offset for sticky navbar
        for (const id of domScrollOrder) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAboutPage]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Helper to resolve anchor link based on current route
  const getHref = (rawHref: string) => {
    return isAboutPage ? `/${rawHref}` : rawHref;
  };

  const isItemActive = (href: string) => {
    if (isAboutPage) return false;
    const targetId = href.replace("#", "");
    return activeSection === targetId;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isAboutPage
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#2A2A2A] shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Logo / Brand Name */}
          <a
            href={getHref("#home")}
            className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#F5F5F5] hover:text-[#FFFFFF] transition-colors font-heading"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#A81E2E] inline-block transition-transform group-hover:scale-125"></span>
            <span>{portfolioData.name}</span>
          </a>

          {/* Desktop Nav Links in exact order: Home, About, Work, Skills, Contact */}
          <div className="hidden md:flex items-center gap-7">
            {portfolioData.navItems.map((item) => {
              const active = isItemActive(item.href);
              const href = getHref(item.href);

              return (
                <a
                  key={item.label}
                  href={href}
                  className={`text-sm transition-all relative py-1 ${
                    active
                      ? "text-white font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#A81E2E]"
                      : "text-[#A1A1AA] font-medium hover:text-[#F5F5F5] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A81E2E] hover:after:w-full after:transition-all after:duration-200"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {portfolioData.hasResume ? (
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#171717] hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#A81E2E]/50 rounded-md transition-all font-heading"
              >
                <FileText className="w-3.5 h-3.5 text-[#A81E2E]" />
                <span>Resume</span>
              </a>
            ) : (
              <a
                href={getHref("#contact")}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#171717] hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#A81E2E]/50 rounded-md transition-all font-heading"
                title="Resume available upon request"
              >
                <FileText className="w-3.5 h-3.5 text-[#A81E2E]" />
                <span>Resume</span>
              </a>
            )}

            <a
              href={getHref("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-md transition-all shadow-md shadow-[#A81E2E]/20 hover:shadow-[#A81E2E]/40 font-heading"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden p-2 rounded-md bg-[#171717] border border-[#2A2A2A] text-[#F5F5F5] hover:text-white hover:border-[#A81E2E]/50 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#C42438]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-b border-[#2A2A2A] px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {portfolioData.navItems.map((item) => {
              const active = isItemActive(item.href);
              const href = getHref(item.href);

              return (
                <a
                  key={item.label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    active
                      ? "bg-[#171717] text-white font-semibold border-l-2 border-[#A81E2E]"
                      : "text-[#A1A1AA] font-medium hover:text-white hover:bg-[#171717]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#2A2A2A] flex flex-col gap-2">
            <a
              href={getHref("#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#171717] border border-[#2A2A2A] rounded-md"
            >
              <FileText className="w-3.5 h-3.5 text-[#A81E2E]" />
              <span>Resume</span>
            </a>
            <a
              href={getHref("#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-md"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
