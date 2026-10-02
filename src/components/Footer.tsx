import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#2A2A2A]/80 py-12 text-sm text-[#A1A1AA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Role */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a
              href="#home"
              className="font-bold text-[#F5F5F5] hover:text-white transition-colors font-heading tracking-tight"
            >
              {portfolioData.name}
            </a>
            <span className="hidden sm:inline text-[#404040]">•</span>
            <span className="text-xs text-[#71717A]">
              {portfolioData.title}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={portfolioData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#A81E2E]/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#A81E2E]/50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.email}`}
              aria-label="Email Fidha"
              className="p-2 rounded-lg bg-[#141414] border border-[#2A2A2A] text-[#A1A1AA] hover:text-white hover:border-[#A81E2E]/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 p-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-[#71717A] hover:text-[#F5F5F5] hover:border-[#A81E2E]/40 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between text-xs text-[#52525B] gap-2">
          <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with Next.js, React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
