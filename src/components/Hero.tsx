"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero, name, title, availability } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  // Explicitly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Overview"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Subtle Ambient Red Glow Background (Slow Pulse) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#A81E2E]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "7s" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-[#A81E2E]/5 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content (7 cols on lg) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability / Location Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#2A2A2A] text-xs text-[#A1A1AA] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#A81E2E] animate-pulse"></span>
              <span className="font-medium">{availability}</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#A81E2E] mb-3 font-heading"
            >
              {hero.eyebrow}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#F5F5F5] tracking-tight leading-[1.15] mb-5 font-heading"
            >
              {hero.heading}
            </motion.h1>

            {/* Personal Sub-intro & Draft Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mb-8 font-sans"
            >
              {hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href={hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#A81E2E] hover:bg-[#C42438] rounded-lg transition-all shadow-lg shadow-[#A81E2E]/25 hover:shadow-[#A81E2E]/40 font-heading group"
              >
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={hero.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#171717] hover:bg-[#202020] border border-[#2A2A2A] hover:border-[#A81E2E]/60 rounded-lg transition-all font-heading"
              >
                <Mail className="w-4 h-4 text-[#A81E2E]" />
                <span>{hero.secondaryCtaText}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
                title="Resume preview"
              >
                <FileText className="w-4 h-4 text-[#A1A1AA]" />
                <span className="underline underline-offset-4 decoration-[#2A2A2A] hover:decoration-[#A81E2E]">
                  {hero.resumeCtaText}
                </span>
              </a>
            </motion.div>

            {/* Equal Tech Focus Micro-Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-[#2A2A2A]/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA]"
            >
              <span className="font-semibold uppercase tracking-wider text-[#71717A] font-heading">
                Core Focus:
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A81E2E]"></span>
                Flutter & Dart Mobile Apps
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C42438]"></span>
                React & Next.js Web Interfaces
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Photo 2 Frame (5 cols on lg) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer Decorative Gradient Frame */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-b from-[#A81E2E]/40 via-transparent to-[#A81E2E]/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 opacity-75"
                aria-hidden="true"
              />

              {/* Photo Card Container with fixed aspect ratio */}
              <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[4/5] rounded-xl overflow-hidden bg-[#111111] border border-[#2A2A2A] group-hover:border-[#A81E2E]/50 transition-colors shadow-2xl">
                <Image
                  src="/images/hero-photo-2.jpg"
                  alt="Portrait of Fidha Fathima, Frontend and Mobile Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 340px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
