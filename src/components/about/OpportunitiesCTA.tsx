import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

export default function OpportunitiesCTA() {
  const { opportunities } = aboutData;

  return (
    <section
      id="opportunities"
      aria-label="Collaboration Opportunities"
      className="py-20 md:py-24 bg-[#050505] border-t border-[#2A2A2A]/80 relative overflow-hidden"
    >
      {/* Subtle crimson glow aura */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#A81E2E]/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MotionSection>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs text-[#A1A1AA] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#A81E2E] animate-pulse"></span>
            <span className="font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight mb-5 font-heading">
            {opportunities.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            {opportunities.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={opportunities.primaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-xl transition-all shadow-lg shadow-[#A81E2E]/25 hover:shadow-[#A81E2E]/40 font-heading group"
            >
              <span>{opportunities.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={opportunities.secondaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#A81E2E]/50 rounded-xl transition-all font-heading"
            >
              <Mail className="w-4 h-4 text-[#D63248]" />
              <span>{opportunities.secondaryButtonText}</span>
            </Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
