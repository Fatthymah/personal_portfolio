import React from "react";
import { Globe, Smartphone, CheckCircle2 } from "lucide-react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

export default function FocusAreas() {
  const { focusAreas } = aboutData;

  return (
    <section
      id="focus-areas"
      aria-label="Web and Mobile Development Focus"
      className="py-20 md:py-24 bg-[#080808] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
              DUAL CAPABILITIES
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight font-heading">
            Balanced Engineering Across Web & Mobile
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-3">
            Rather than confining myself to a single platform, I develop for both
            web browsers and mobile devices with equal focus and dedication.
          </p>
        </MotionSection>

        {/* 2-Column Symmetrical Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: Web Development */}
          <MotionSection delay={0.1}>
            <div className="p-7 sm:p-9 rounded-2xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/50 transition-all duration-300 flex flex-col justify-between h-full group shadow-xl hover:shadow-2xl hover:shadow-[#A81E2E]/5">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1F1416] border border-[#A81E2E]/30 flex items-center justify-center text-[#D63248] group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] font-heading">
                    Web Focus
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-3 font-heading group-hover:text-white transition-colors">
                  {focusAreas.web.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                  {focusAreas.web.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#71717A] mb-3 font-heading">
                  Technologies & Ecosystem
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#2A2A2A]">
                  {focusAreas.web.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#E4E4E7] border border-[#2E2E2E] group-hover:border-[#3A3A3A] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionSection>

          {/* Panel 2: Mobile Development */}
          <MotionSection delay={0.2}>
            <div className="p-7 sm:p-9 rounded-2xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/50 transition-all duration-300 flex flex-col justify-between h-full group shadow-xl hover:shadow-2xl hover:shadow-[#A81E2E]/5">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1F1416] border border-[#A81E2E]/30 flex items-center justify-center text-[#D63248] group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] font-heading">
                    Mobile Focus
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-3 font-heading group-hover:text-white transition-colors">
                  {focusAreas.mobile.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8">
                  {focusAreas.mobile.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#71717A] mb-3 font-heading">
                  Technologies & Ecosystem
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#2A2A2A]">
                  {focusAreas.mobile.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#E4E4E7] border border-[#2E2E2E] group-hover:border-[#3A3A3A] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
