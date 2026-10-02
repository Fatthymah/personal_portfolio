import React from "react";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ProjectCard from "./ProjectCard";
import MotionSection from "./MotionSection";
import { projectsData } from "@/data/projects";
import { portfolioData } from "@/data/portfolio";

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      aria-label="Featured Projects Preview"
      className="py-24 bg-[#080808] relative scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <MotionSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A81E2E] mb-2 font-heading">
              PORTFOLIO SHOWCASE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F5F5] tracking-tight font-heading">
              Featured Work & Projects
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
              A balanced selection of real-world mobile applications built with
              Flutter and modern web interfaces engineered with React and Next.js.
            </p>
          </div>

          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-[#C42438] transition-colors font-heading self-start md:self-end group"
          >
            <GithubIcon className="w-4 h-4 text-[#A81E2E]" />
            <span>Explore all repos on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </MotionSection>

        {/* 2x2 Grid of Featured Projects with staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <MotionSection key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
