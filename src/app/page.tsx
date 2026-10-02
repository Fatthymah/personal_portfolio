import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutHero from "@/components/about/AboutHero";
import DeveloperStory from "@/components/about/DeveloperStory";
import FocusAreas from "@/components/about/FocusAreas";
import SkillsGrid from "@/components/about/SkillsGrid";
import LearningNow from "@/components/about/LearningNow";
import OpportunitiesCTA from "@/components/about/OpportunitiesCTA";
import WorkSection from "@/components/work/WorkSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#A81E2E]/30 selection:text-white flex flex-col justify-between">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Complete About Section */}
        <AboutHero isHomePage={true} />
        <DeveloperStory />
        <FocusAreas />
        <LearningNow />
        <OpportunitiesCTA />

        {/* 3. Work Section (Focus Forge Showcase) */}
        <WorkSection />

        {/* 4. Skills Section */}
        <SkillsGrid />

        {/* 5. Contact Section */}
        <ContactCTA />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
