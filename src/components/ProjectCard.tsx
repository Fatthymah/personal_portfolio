import React from "react";
import { ExternalLink, Smartphone, Globe, Clock } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isMobile = project.category === "Mobile Application";

  return (
    <article className="group flex flex-col rounded-2xl bg-[#141414] border border-[#2A2A2A] hover:border-[#A81E2E]/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#A81E2E]/10">
      {/* Project Card Visual Header / Preview Area */}
      <div className="relative aspect-[16/9] w-full bg-[#0D0D0D] border-b border-[#2A2A2A] flex flex-col items-center justify-center p-6 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:16px_16px] opacity-40"
          aria-hidden="true"
        />

        {/* Subtle red accent ambient glow */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 bg-[#A81E2E]/15 rounded-full blur-2xl group-hover:bg-[#A81E2E]/25 transition-colors"
          aria-hidden="true"
        />

        {/* Central Graphic / Mockup Badge */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] group-hover:border-[#A81E2E]/40 flex items-center justify-center text-[#A81E2E] shadow-inner mb-3 transition-transform group-hover:scale-110 duration-300">
            {isMobile ? (
              <Smartphone className="w-7 h-7" />
            ) : (
              <Globe className="w-7 h-7" />
            )}
          </div>
          <span className="text-xs font-semibold text-[#F5F5F5] font-heading tracking-wide">
            {project.imagePlaceholderTitle}
          </span>
          <span className="text-[11px] text-[#71717A] mt-0.5">
            {project.inProgress ? "In Active Development" : "Source Code Ready"}
          </span>
        </div>

        {/* Category Pill Tag in Top Left */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider font-heading ${
              isMobile
                ? "bg-[#220D12] text-[#D63248] border border-[#A81E2E]/30"
                : "bg-[#111A24] text-[#60A5FA] border border-[#3B82F6]/30"
            }`}
          >
            {isMobile ? (
              <Smartphone className="w-3 h-3" />
            ) : (
              <Globe className="w-3 h-3" />
            )}
            <span>{project.category}</span>
          </span>
        </div>

        {/* Badge in Top Right */}
        <div className="absolute top-3 right-3 z-10">
          {project.inProgress ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#261E08] text-[#FBBF24] border border-[#FBBF24]/30">
              <Clock className="w-3 h-3" />
              <span>{project.badge}</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#171717] text-[#A1A1AA] border border-[#2A2A2A]">
              {project.badge}
            </span>
          )}
        </div>
      </div>

      {/* Project Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-3 font-heading flex items-center justify-between">
            <span>{project.title}</span>
          </h3>

          <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#2A2A2A]">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#D4D4D8] border border-[#2A2A2A]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] bg-[#1C1C1C] hover:bg-[#262626] border border-[#2A2A2A] hover:border-[#A81E2E]/50 rounded-lg transition-colors font-heading"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#71717A] bg-[#171717] border border-[#242424] rounded-lg font-heading cursor-not-allowed"
                title="Repository link pending"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live preview of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-lg transition-colors font-heading"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#71717A] bg-[#111111] border border-[#222222] rounded-lg cursor-default"
                title="Live preview will be connected once deployment is public"
              >
                <ExternalLink className="w-3 h-3 text-[#52525B]" />
                <span>{project.inProgress ? "Building" : "Demo Ready"}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
