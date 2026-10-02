import React from "react";
import { Quote, Layers } from "lucide-react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

export default function DeveloperStory() {
  const { story } = aboutData;

  return (
    <section
      id="story"
      aria-label="Developer Story"
      className="py-16 md:py-20 bg-[#0C0C0C] border-y border-[#2A2A2A]/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <MotionSection>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
                  PHILOSOPHY & MINDSET
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight mb-6 font-heading">
                {story.heading}
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-sans">
                <p>{story.paragraph1}</p>
                <p>{story.paragraph2}</p>
              </div>
            </MotionSection>
          </div>

          {/* Right Column: Editorial Highlight Callout (5 cols) */}
          <div className="lg:col-span-5">
            <MotionSection delay={0.15}>
              <div className="p-7 sm:p-9 rounded-2xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 transition-all shadow-xl relative overflow-hidden group">
                {/* Subtle corner crimson glow */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 bg-[#A81E2E]/15 rounded-full blur-2xl group-hover:bg-[#A81E2E]/25 transition-colors"
                  aria-hidden="true"
                />

                <div className="w-10 h-10 rounded-lg bg-[#1F1416] border border-[#A81E2E]/30 flex items-center justify-center text-[#D63248] mb-5">
                  <Quote className="w-5 h-5" />
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-[#F5F5F5] leading-snug font-heading mb-4">
                  {story.callout}
                </blockquote>

                <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#71717A]">
                  <span className="font-medium text-[#A1A1AA]">Continuous Iteration</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
                    Hands-on Practice
                  </span>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </div>
    </section>
  );
}
