import React from "react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

interface AboutHeroProps {
  isHomePage?: boolean;
}

export default function AboutHero({ isHomePage = false }: AboutHeroProps) {
  const { hero } = aboutData;
  const HeadingTag = isHomePage ? "h2" : "h1";

  return (
    <section
      id="about"
      aria-label="About Fidha Fathima"
      className={`relative overflow-hidden scroll-mt-24 ${
        isHomePage
          ? "pt-20 pb-16 md:pt-24 md:pb-20 border-t border-[#2A2A2A]/60"
          : "pt-32 pb-16 md:pt-40 md:pb-20"
      }`}
    >
      {/* Subtle ambient red background blur */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#A81E2E]/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <MotionSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#2A2A2A] text-xs text-[#A1A1AA] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#A81E2E] animate-pulse"></span>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
                {hero.eyebrow}
              </span>
            </div>

            <HeadingTag className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight leading-[1.18] mb-6 font-heading">
              {hero.heading}
            </HeadingTag>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-sans">
              {hero.description}
            </p>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
