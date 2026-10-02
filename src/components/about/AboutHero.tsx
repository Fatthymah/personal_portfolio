import React from "react";
import Image from "next/image";
import { Sparkles, Code2, Terminal } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Intro Paragraph */}
          <div className="lg:col-span-7">
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

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-sans">
                {hero.description}
              </p>
            </MotionSection>
          </div>

          {/* Right Column: Photo 2 Frame or Abstract Fallback */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <MotionSection delay={0.15}>
              <div className="relative group">
                {/* Outer Decorative Gradient Outline */}
                <div
                  className="absolute -inset-1 bg-gradient-to-b from-[#A81E2E]/40 via-transparent to-[#A81E2E]/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-80"
                  aria-hidden="true"
                />

                {/* Main Frame Container */}
                <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-xl overflow-hidden bg-[#111111] border border-[#2A2A2A] group-hover:border-[#A81E2E]/50 transition-colors shadow-2xl">
                  {hero.photoSrc ? (
                    <Image
                      src={hero.photoSrc}
                      alt={hero.photoAlt}
                      fill
                      priority
                      sizes="(max-width: 640px) 280px, 320px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Clean Abstract Developer-Themed Visual Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#111111]">
                      <div className="w-16 h-16 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A81E2E] mb-4">
                        <Terminal className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-semibold text-[#F5F5F5] font-heading">
                        Developer Portrait
                      </p>
                      <p className="text-xs text-[#71717A] mt-1">
                        Photo Placeholder
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </div>
    </section>
  );
}
