import React from "react";
import { ArrowUpRight, TrendingUp, Check } from "lucide-react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

export default function LearningNow() {
  const { learning } = aboutData;

  return (
    <section
      id="learning"
      aria-label="Current Learning Focus"
      className="py-20 md:py-24 bg-[#080808] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <MotionSection>
            <div className="rounded-3xl bg-gradient-to-b from-[#141414] to-[#101010] border border-[#2A2A2A] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Subtle crimson accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[#A81E2E]/10 rounded-full blur-3xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#1F1416] border border-[#A81E2E]/30 flex items-center justify-center text-[#D63248]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
                  GROWTH & SKILL EXPANSION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight mb-8 font-heading">
                {learning.heading}
              </h2>

              {/* Learning Roadmap List */}
              <div className="space-y-3.5 mb-10">
                {learning.items.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#171717] border border-[#262626] hover:border-[#A81E2E]/40 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#221014] border border-[#A81E2E]/40 flex items-center justify-center text-[#D63248] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#F5F5F5] group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Philosophy Note */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#111111] border border-[#2A2A2A] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
                <p className="text-xs sm:text-sm text-[#A1A1AA] italic leading-relaxed">
                  {learning.note}
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
