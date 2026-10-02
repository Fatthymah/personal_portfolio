import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import PhoneMockup from "./PhoneMockup";
import { Project } from "@/data/projects";

interface JournalApplicationPanelProps {
  project: Project;
}

export default function JournalApplicationPanel({ project }: JournalApplicationPanelProps) {
  return (
    <article
      aria-label={`${project.title} - ${project.category}`}
      className="relative rounded-3xl bg-[#0F0E17]/95 border border-[#262338] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
    >
      {/* Subtle Restrained Plum / Lavender Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#8B82F6]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#A78BFA]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-8 xl:p-10">
        <div className="grid grid-cols-1 min-[720px]:grid-cols-12 gap-6 min-[720px]:gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Project Details & Information
             ======================================================== */}
          <div className="min-[720px]:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {/* Category & Title */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A1A1AA] font-heading mb-1.5">
                {project.category}
              </p>
              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-[#F8FAFC] tracking-tight font-heading">
                {project.title}
              </h3>
            </div>

            {/* Concise Description */}
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Confirmed Technologies Only (6 chips) */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#171524] border border-[#2C273E] text-[#EDE9FE] tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link Button */}
            {project.githubUrl && (
              <div className="pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Journal Application source code on GitHub"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-heading text-xs font-bold tracking-wider uppercase bg-[#1A1829] hover:bg-[#232038] text-[#F8FAFC] border border-[#35304E] hover:border-[#8B82F6]/60 transition-all duration-200 group shadow-md"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#8B82F6] group-hover:scale-110 transition-transform" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#A59EB8] group-hover:text-[#F8FAFC] transition-colors" />
                </a>
              </div>
            )}

          </div>

          {/* ========================================================
              RIGHT COLUMN: Screenshots Showcase
             ======================================================== */}
          <div className="min-[720px]:col-span-6 xl:col-span-6 flex flex-col items-center justify-center">
            
            {/* Desktop Composition: Layered 3-Phone Showcase (720px and above) */}
            <div className="hidden min-[720px]:flex relative items-center justify-center w-full h-[380px] lg:h-[400px] xl:h-[450px]">
              
              {/* Supporting Mockup Left: Splash Screen */}
              <div
                className="absolute left-1 xl:left-3 z-10 -rotate-6 hover:-rotate-2 transition-all duration-300 opacity-80 hover:opacity-100 hover:z-30 cursor-pointer"
                title="Journal Application — Splash Screen"
              >
                <div className="text-[10px] font-semibold text-center text-[#A59EB8] mb-1 font-heading tracking-wider uppercase">
                  Splash Screen
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[360px]">
                  <PhoneMockup
                    src={project.images.splash}
                    alt="Journal Application Splash Screen showing DailyRecord and book icon"
                    width={484}
                    height={1024}
                    className="h-full"
                  />
                </div>
              </div>

              {/* Dominant Mockup Center: Onboarding Screen */}
              <div
                className="relative z-20 hover:scale-[1.02] transition-transform duration-300"
                title="Journal Application — Onboarding Screen"
              >
                <div className="text-xs font-bold text-center text-[#A78BFA] mb-1 font-heading tracking-wider uppercase flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B82F6]" />
                  <span>Primary · Welcome</span>
                </div>
                <div className="h-[340px] sm:h-[360px] lg:h-[385px] xl:h-[435px]">
                  <PhoneMockup
                    src={project.images.onboarding}
                    alt="Journal Application Onboarding Screen showing 'Welcome to Daily Record'"
                    width={484}
                    height={1024}
                    isPrimary={true}
                    priority={true}
                    className="h-full"
                  />
                </div>
              </div>

              {/* Supporting Mockup Right: Login Screen */}
              <div
                className="absolute right-1 xl:right-3 z-10 rotate-6 hover:rotate-2 transition-all duration-300 opacity-80 hover:opacity-100 hover:z-30 cursor-pointer"
                title="Journal Application — Login Screen"
              >
                <div className="text-[10px] font-semibold text-center text-[#A59EB8] mb-1 font-heading tracking-wider uppercase">
                  Login Screen
                </div>
                <div className="h-[280px] sm:h-[300px] lg:h-[320px] xl:h-[360px]">
                  <PhoneMockup
                    src={project.images.login}
                    alt="Journal Application Login Screen showing authentication form"
                    width={485}
                    height={1024}
                    className="h-full"
                  />
                </div>
              </div>

            </div>

            {/* Mobile Composition: Clean Vertical Stack (Under 720px) */}
            <div className="w-full min-[720px]:hidden flex flex-col items-center">
              
              {/* Primary / Dominant Onboarding Screen */}
              <div className="w-full flex flex-col items-center mb-8 text-center">
                <div className="text-xs font-bold text-[#A78BFA] mb-2 font-heading tracking-wider uppercase flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B82F6]" />
                  <span>Onboarding Experience</span>
                </div>
                <div className="h-[340px] sm:h-[380px]">
                  <PhoneMockup
                    src={project.images.onboarding}
                    alt="Journal Application Onboarding Screen"
                    width={484}
                    height={1024}
                    isPrimary={true}
                    priority={true}
                    className="h-full"
                  />
                </div>
              </div>

              {/* Supporting Visuals: Splash and Login Side-by-Side */}
              <div className="w-full max-w-[340px] sm:max-w-[380px]">
                <p className="text-[11px] font-semibold text-center text-[#A59EB8] uppercase tracking-wider font-heading mb-3">
                  Supporting Screens
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 justify-items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-[#736B8A] mb-1 font-heading uppercase">
                      Splash
                    </span>
                    <div className="h-[220px] sm:h-[260px]">
                      <PhoneMockup
                        src={project.images.splash}
                        alt="Journal Application Splash Screen"
                        width={484}
                        height={1024}
                        className="h-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-[#736B8A] mb-1 font-heading uppercase">
                      Login
                    </span>
                    <div className="h-[220px] sm:h-[260px]">
                      <PhoneMockup
                        src={project.images.login}
                        alt="Journal Application Login Screen"
                        width={485}
                        height={1024}
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </article>
  );
}
