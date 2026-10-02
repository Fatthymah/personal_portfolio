import React from "react";
import { Globe, Smartphone, Database, Wrench } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";
import MotionSection from "./MotionSection";

export default function SkillsPreview() {
  const getIcon = (category: SkillCategory["category"]) => {
    switch (category) {
      case "web":
        return <Globe className="w-5 h-5 text-[#D63248]" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-[#A81E2E]" />;
      case "backend":
        return <Database className="w-5 h-5 text-[#D63248]" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-[#A81E2E]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills Preview"
      className="py-24 bg-[#0C0C0C] border-t border-[#2A2A2A]/70 relative scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <MotionSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A81E2E] mb-2 font-heading">
            TECHNICAL CAPABILITIES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight mb-4 font-heading">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            An honest, transparent view of the technologies I actively use in
            mobile and web projects. Equal emphasis is placed on frontend interfaces
            and cross-platform mobile apps.
          </p>
        </MotionSection>

        {/* 4-Category Equal Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <MotionSection key={category.title} delay={idx * 0.08}>
              <div className="rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-[#A81E2E]/5 h-full">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1D1D1D] border border-[#2E2E2E] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getIcon(category.category)}
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 font-heading">
                    {category.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-5 min-h-[36px]">
                    {category.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2A2A2A]/60">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#E4E4E7] border border-[#2E2E2E] group-hover:border-[#3A3A3A] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
