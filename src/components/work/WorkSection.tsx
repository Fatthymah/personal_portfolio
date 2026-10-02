import React from "react";
import FocusForgePanel from "./FocusForgePanel";
import JournalApplicationPanel from "./JournalApplicationPanel";
import YaashBridalsPanel from "./YaashBridalsPanel";
import FocusEventsPanel from "./FocusEventsPanel";
import { projectsData } from "@/data/projects";

export default function WorkSection() {
  const focusForgeProject = projectsData[0];
  const journalAppProject = projectsData[1];
  const yaashBridalsProject = projectsData[2];
  const focusEventsProject = projectsData[3];

  return (
    <section
      id="work"
      aria-label="Work and Featured Projects"
      className="py-16 sm:py-20 md:py-24 bg-[#080808] relative scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        <FocusForgePanel project={focusForgeProject} />
        <JournalApplicationPanel project={journalAppProject} />
        <YaashBridalsPanel project={yaashBridalsProject} />
        <FocusEventsPanel project={focusEventsProject} />
      </div>
    </section>
  );
}
