"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import MotionSection from "./MotionSection";

export default function ContactCTA() {
  const { contact, email, linkedinUrl, githubUrl, location } = portfolioData;

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="py-24 bg-[#080808] relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle background red glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A81E2E]/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="rounded-3xl bg-gradient-to-b from-[#141414] to-[#101010] border border-[#2A2A2A] p-8 sm:p-12 md:p-16 shadow-2xl relative">
            <div className="max-w-3xl mx-auto text-center">
              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A81E2E] mb-3 font-heading">
                {contact.eyebrow}
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] tracking-tight mb-5 font-heading">
                {contact.heading}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-10">
                {contact.description}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                {/* Mailto Button */}
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-xl transition-all shadow-lg shadow-[#A81E2E]/25 hover:shadow-[#A81E2E]/40 font-heading group"
                >
                  <Mail className="w-4 h-4 transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-[2px] motion-reduce:transform-none" />
                  <span>{contact.emailButtonText}</span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-white bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] [@media(hover:hover)]:hover:border-[#A81E2E]/60 rounded-xl transition-all font-heading group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-[2px] motion-reduce:transform-none" />
                </a>
              </div>

              {/* Direct Phone & WhatsApp Contact Details */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-5 py-3.5 rounded-2xl bg-[#141414] border border-[#2A2A2A] max-w-md mx-auto mb-10">
                {/* Visible Phone Number */}
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-[#A81E2E]">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-[#F5F5F5] font-sans">
                    +91 99461 96918
                  </span>
                </div>

                {/* Direct Actions: Call & WhatsApp */}
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+919946196918"
                    aria-label="Call Fidha Fathima at +91 99461 96918"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] [@media(hover:hover)]:hover:border-[#A81E2E]/60 rounded-lg transition-all font-heading group"
                  >
                    <Phone className="w-3 h-3 text-[#A81E2E] transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-[2px] motion-reduce:transform-none" />
                    <span>Call</span>
                  </a>

                  <a
                    href="https://wa.me/919946196918"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Fidha Fathima on WhatsApp"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] [@media(hover:hover)]:hover:border-[#A81E2E]/60 rounded-lg transition-all font-heading group"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-400 transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-[2px] motion-reduce:transform-none" />
                  </a>
                </div>
              </div>

              {/* Location & Quick Info Bar */}
              <div className="pt-8 border-t border-[#2A2A2A]/70 flex flex-wrap items-center justify-center gap-6 text-xs text-[#71717A]">
                <span className="flex items-center gap-1.5 text-[#A1A1AA]">
                  <MapPin className="w-3.5 h-3.5 text-[#A81E2E]" />
                  <span>{location}</span>
                </span>
                <span>•</span>
                <span>{contact.note}</span>
                <span>•</span>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors underline underline-offset-4 decoration-[#2A2A2A] hover:decoration-[#A81E2E]"
                >
                  <GithubIcon className="w-3.5 h-3.5 inline" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
