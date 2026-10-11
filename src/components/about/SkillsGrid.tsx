"use client";

import React from "react";
import {
  Layout,
  Smartphone,
  Server,
  Wrench,
  Globe,
  Layers,
  Network,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { aboutData } from "@/data/about";
import MotionSection from "../MotionSection";

const capabilities = [
  {
    title: "Responsive Web Interfaces",
    description:
      "Modern, mobile-friendly websites and web applications that adapt smoothly across screen sizes.",
    icon: Globe,
  },
  {
    title: "Frontend Component Systems",
    description:
      "Reusable React and Next.js interfaces with organized structure and consistent visual patterns.",
    icon: Layers,
  },
  {
    title: "Flutter Mobile Experiences",
    description:
      "Clean mobile screens and practical user flows for Android-focused applications.",
    icon: Smartphone,
  },
  {
    title: "API and Service Integration",
    description:
      "Connecting interfaces with REST APIs, Supabase services, authentication flows, and structured application data.",
    icon: Network,
  },
];

export default function SkillsGrid() {
  const { skills } = aboutData;
  const shouldReduceMotion = useReducedMotion();

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
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#E4E4E7] border border-[#2E2E2E] [@media(hover:hover)]:hover:border-[#A81E2E]/60 [@media(hover:hover)]:hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>

        {/* Practical Development Capabilities */}
        <div className="mt-16 md:mt-20 pt-16 border-t border-[#2A2A2A]/60">
          <MotionSection className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D63248] font-heading">
                WHAT I BUILD
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#F5F5F5] tracking-tight font-heading">
              Practical Development Capabilities
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] mt-3 leading-relaxed">
              I turn ideas into responsive web experiences and mobile interfaces with a focus
              on clear user flows, reusable components, and polished interactions.
            </p>
          </MotionSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <MotionSection key={cap.title} delay={idx * 0.08}>
                  <div className="p-5 sm:p-6 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/40 transition-all duration-300 flex items-start gap-4 group shadow-lg hover:shadow-[#A81E2E]/5 h-full">
                    <div className="w-10 h-10 rounded-lg bg-[#1F1416] border border-[#A81E2E]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#A81E2E] group-hover:text-[#D63248] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] font-heading group-hover:text-white transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-sm text-[#A1A1AA] mt-1.5 leading-relaxed">
                        {cap.description}
                      </p>
                      <motion.div
                        className="h-[2px] w-10 bg-[#A81E2E] rounded-full origin-left mt-3.5"
                        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.4, ease: "easeOut" }
                        }
                      />
                    </div>
                  </div>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
