import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import DeveloperStory from "@/components/about/DeveloperStory";
import FocusAreas from "@/components/about/FocusAreas";
import SkillsGrid from "@/components/about/SkillsGrid";
import LearningNow from "@/components/about/LearningNow";
import OpportunitiesCTA from "@/components/about/OpportunitiesCTA";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: aboutData.meta.title,
  description: aboutData.meta.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#A81E2E]/30 selection:text-white flex flex-col justify-between">
      {/* Shared Navigation with active About state */}
      <Navbar />

      <main>
        {/* 1. About Hero */}
        <AboutHero />

        {/* 2. Developer Story */}
        <DeveloperStory />

        {/* 3. Web and Mobile Focus */}
        <FocusAreas />

        {/* 4. Skills and Tools */}
        <SkillsGrid />

        {/* 5. Current Learning Section */}
        <LearningNow />

        {/* 6. Opportunities Call-to-Action */}
        <OpportunitiesCTA />
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
