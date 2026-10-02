import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
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
      className="relative rounded-3xl bg-[#0F0D0C]/95 border border-[#2A231F] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Refined Bridal Ambient Glow (Champagne Gold / Deep Burgundy) */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C5A880]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8B263E]/6 blur-3xl"
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
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#C5A880] font-heading mb-1.5">
                {project.category}
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-[#FDFBF7] tracking-tight font-heading">
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
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#1C1714] border border-[#332A24] text-[#EFE8DF] tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: Visit Website & View on GitHub */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Yaash Bridals website"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-heading text-xs font-bold tracking-wider uppercase bg-[#241C17] hover:bg-[#322720] text-[#FDFBF7] border border-[#48382F] hover:border-[#C5A880]/70 transition-all duration-200 group shadow-md"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Yaash Bridals source code on GitHub"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-heading text-xs font-bold tracking-wider uppercase bg-[#171311] hover:bg-[#221B17] text-[#D8CEC4] border border-[#332720] hover:border-[#8E7969]/60 transition-all duration-200 group shadow-md"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#C5A880] group-hover:scale-110 transition-transform" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#A8988B] group-hover:text-[#FDFBF7] transition-colors" />
                </a>
              )}
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Screenshots Showcase
             ======================================================== */}
          <div className="min-[720px]:col-span-6 xl:col-span-7 flex flex-col justify-center w-full">
            
            {/* Main Visual: Homepage Hero Banner */}
            <div className="relative w-full aspect-[1024/467] rounded-xl overflow-hidden border border-[#382C25] bg-[#120E0C] shadow-lg mb-3 group">
              <Image
                src={homepageImg}
                alt="Yaash Bridals Homepage showcasing bridal rental collection and hero banner"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            {/* Supporting Visuals: 2 Side-by-Side Screenshots */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Supporting Screenshot 1: Collections */}
              <div className="relative w-full aspect-[1024/467] rounded-lg overflow-hidden border border-[#2D231E] bg-[#120E0C] shadow-md group">
                <Image
                  src={collectionsImg}
                  alt="Yaash Bridals Collections and Accessories category browsing"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Supporting Screenshot 2: Curated Sets */}
              <div className="relative w-full aspect-[1024/467] rounded-lg overflow-hidden border border-[#2D231E] bg-[#120E0C] shadow-md group">
                <Image
                  src={setsImg}
                  alt="Yaash Bridals Curated Bridal Sets and Ornaments"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
}
