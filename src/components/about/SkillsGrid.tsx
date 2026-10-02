import React from "react";
import { Layout, Smartphone, Server, Wrench } from "lucide-react";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

export default function SkillsGrid() {
  const { skills } = aboutData;

  const getGroupIcon = (name: string) => {
    switch (name) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-[#D63248]" />;
      case "Mobile":
        return <Smartphone className="w-5 h-5 text-[#A81E2E]" />;
      case "Backend and Services":
        return <Server className="w-5 h-5 text-[#D63248]" />;
      case "Workflow and Deployment":
        return <Wrench className="w-5 h-5 text-[#A81E2E]" />;
      default:
        return <Layout className="w-5 h-5 text-[#A81E2E]" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Tools"
      className="py-20 md:py-24 bg-[#0C0C0C] border-t border-[#2A2A2A]/70 relative scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
              TECHNICAL STACK
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight font-heading">
            Tools & Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 leading-relaxed">
            A categorized overview of the genuine languages, frameworks, and
            workflows I apply in my development projects.
          </p>
        </MotionSection>

        {/* 4 Group Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <MotionSection key={group.name} delay={idx * 0.08}>
              <div className="p-6 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 transition-all duration-300 flex flex-col justify-between h-full group shadow-lg hover:shadow-[#A81E2E]/5">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1F1416] border border-[#A81E2E]/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getGroupIcon(group.name)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5] mb-4 font-heading group-hover:text-white transition-colors">
                    {group.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2A2A2A]">
                  {group.skills.map((skill) => (
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
