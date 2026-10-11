import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface YaashBridalsPanelProps {
  project: Project;
}

export default function YaashBridalsPanel({ project }: YaashBridalsPanelProps) {
  const homepageImg = project.images.homepage || "/images/projects/yaash-bridals/homepage.png";
  const collectionsImg = project.images.collections || "/images/projects/yaash-bridals/collections.png";
  const setsImg = project.images.contactOrAdmin || "/images/projects/yaash-bridals/contact-or-admin.png";

  return (
    <article
      aria-label={`${project.title} - ${project.category}`}
      className="relative rounded-3xl bg-[#0F0F0F]/95 border border-[#262626] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Subtle Ambient Crimson Glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#A81E2E]/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#A81E2E]/4 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-8 xl:p-10">
        <div className="grid grid-cols-1 min-[720px]:grid-cols-12 gap-6 min-[720px]:gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Project Details & Information
             ======================================================== */}
          <div className="min-[720px]:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {/* Category & Title */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] font-heading mb-1.5">
                {project.category}
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-[#F5F5F5] tracking-tight font-heading">
                {project.title}
              </h3>
            </div>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Confirmed Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#171717] border border-[#2A2A2A] text-[#E4E4E7] tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button: Visit Website */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Yaash Bridals website"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-heading text-xs font-bold tracking-wider uppercase bg-[#171717] hover:bg-[#202020] text-[#F5F5F5] border border-[#2A2A2A] hover:border-[#A81E2E]/60 transition-all duration-200 group shadow-md"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A81E2E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Screenshots Showcase
             ======================================================== */}
          <div className="min-[720px]:col-span-6 xl:col-span-7 flex flex-col justify-center w-full">
            
            {/* Main Visual: Homepage Hero Banner */}
            <div className="relative w-full aspect-[1024/467] rounded-xl overflow-hidden border border-[#262626] bg-[#141414] shadow-lg mb-3 group [@media(hover:hover)]:hover:border-[#A81E2E]/40 [@media(hover:hover)]:hover:shadow-[0_0_25px_rgba(168,30,46,0.12)] transition-all duration-300 motion-reduce:transition-none">
              <Image
                src={homepageImg}
                alt="Yaash Bridals Homepage showcasing bridal rental collection and hero banner"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover [@media(hover:hover)]:group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>

            {/* Supporting Visuals: 2 Side-by-Side Screenshots */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Supporting Screenshot 1: Collections */}
              <div className="relative w-full aspect-[1024/467] rounded-lg overflow-hidden border border-[#262626] bg-[#141414] shadow-md group [@media(hover:hover)]:hover:border-[#A81E2E]/40 [@media(hover:hover)]:hover:shadow-[0_0_20px_rgba(168,30,46,0.12)] transition-all duration-300 motion-reduce:transition-none">
                <Image
                  src={collectionsImg}
                  alt="Yaash Bridals Collections and Accessories category browsing"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover [@media(hover:hover)]:group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>

              {/* Supporting Screenshot 2: Curated Sets */}
              <div className="relative w-full aspect-[1024/467] rounded-lg overflow-hidden border border-[#262626] bg-[#141414] shadow-md group [@media(hover:hover)]:hover:border-[#A81E2E]/40 [@media(hover:hover)]:hover:shadow-[0_0_20px_rgba(168,30,46,0.12)] transition-all duration-300 motion-reduce:transition-none">
                <Image
                  src={setsImg}
                  alt="Yaash Bridals Curated Bridal Sets and Ornaments"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover [@media(hover:hover)]:group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
}
