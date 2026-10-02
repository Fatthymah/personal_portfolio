import React from "react";
import { Smartphone, Globe, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import MotionSection from "./MotionSection";

export default function Intro() {
  const { intro } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About Fidha Fathima"
      className="py-20 bg-[#0C0C0C] border-y border-[#2A2A2A]/70 relative scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <MotionSection className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A81E2E] mb-2 font-heading">
            {intro.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight mb-4 font-heading">
            {intro.title}
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {intro.description}
          </p>
        </MotionSection>

        {/* Dual Focus Pillars: Equal Importance for Web & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Web Pillar */}
          <MotionSection delay={0.1}>
            <div className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 transition-all group h-full">
              <div className="w-12 h-12 rounded-lg bg-[#A81E2E]/10 border border-[#A81E2E]/20 flex items-center justify-center text-[#C42438] mb-5 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">
                  {intro.webFocusTitle}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A1A1AA] px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2A2A2A]">
                  React & Next.js
                </span>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                {intro.webFocusDescription}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2A2A2A]/50 text-xs text-[#71717A]">
                <span>TypeScript</span>
                <span>•</span>
                <span>Component Driven</span>
                <span>•</span>
                <span>Responsive CSS</span>
                <span>•</span>
                <span>Clean UX</span>
              </div>
            </div>
          </MotionSection>

          {/* Mobile Pillar */}
          <MotionSection delay={0.2}>
            <div className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 transition-all group h-full">
              <div className="w-12 h-12 rounded-lg bg-[#A81E2E]/10 border border-[#A81E2E]/20 flex items-center justify-center text-[#C42438] mb-5 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#F5F5F5] font-heading">
                  {intro.mobileFocusTitle}
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A1A1AA] px-2 py-0.5 rounded bg-[#1C1C1C] border border-[#2A2A2A]">
                  Flutter & Dart
                </span>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                {intro.mobileFocusDescription}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2A2A2A]/50 text-xs text-[#71717A]">
                <span>MVC / MVVM</span>
                <span>•</span>
                <span>REST APIs</span>
                <span>•</span>
                <span>State Handling</span>
                <span>•</span>
                <span>Local Persistence</span>
              </div>
            </div>
          </MotionSection>
        </div>

        {/* Current Experience Status Bar */}
        <MotionSection delay={0.3}>
          <div className="p-4 sm:p-5 rounded-xl bg-[#111111] border border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#1C1C1C] border border-[#2A2A2A] flex items-center justify-center text-[#A81E2E]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#71717A] font-semibold font-heading">
                  Current Role
                </p>
                <p className="font-medium text-[#F5F5F5]">
                  {intro.currentRole}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] pl-11 sm:pl-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Actively learning & expanding into full-stack workflows</span>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
