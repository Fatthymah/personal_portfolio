export interface ProjectImages {
  onboarding: string;
  splash: string;
  login: string;
  homepage?: string;
  collections?: string;
  contactOrAdmin?: string;
  screenshot1?: string;
  screenshot2?: string;
  screenshot3?: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  images: ProjectImages;
  githubUrl?: string;
  websiteUrl?: string;
  liveUrl?: string;
  counter?: string;
  tagline?: string;
  supportingDescription?: string;
  role?: string;
  status?: string;
  highlights?: string[];
  // Optional backwards-compatible properties for legacy cards
  badge?: string;
  description?: string;
  imagePlaceholderTitle?: string;
  inProgress?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "focus-forge",
    counter: "01 / SELECTED WORK",
    category: "Flutter Mobile Application",
    title: "Focus Forge",
    tagline: "Work with your energy, not against it.",
    shortDescription:
      "A Flutter productivity app that helps users manage tasks and focus sessions based on their daily energy levels.",
    supportingDescription:
      "Designed around mindful productivity, Focus Forge encourages users to build sustainable focus habits without adding unnecessary pressure.",
    role: "Designed and built independently",
    status: "Completed personal project · Not publicly deployed",
    highlights: [
      "Plan tasks around daily energy levels",
      "Focus timer with reflection for mindful sessions",
      "Offline data storage with Hive and SharedPreferences",
    ],
    technologies: ["Flutter", "Dart", "Hive", "SharedPreferences"],
    githubUrl: "https://github.com/Fatthymah/focus_forge.git",
    images: {
      onboarding: "/images/projects/focus-forge/onboarding.png",
      splash: "/images/projects/focus-forge/splash.png",
      login: "/images/projects/focus-forge/login.png",
    },
  },
  {
    id: "journal-application",
    counter: "02 / SELECTED WORK",
    category: "Flutter Mobile Application",
    title: "Journal Application",
    tagline: "A private space for thoughts worth keeping.",
    shortDescription:
      "A private Flutter journaling app for creating, organizing, searching, and protecting personal entries.",
    supportingDescription:
      "Built with Firebase Authentication and Supabase, the app combines simple writing tools with tags, search, CRUD journal management, and a privacy lock mechanism.",
    role: "Designed and built independently",
    status: "Completed personal project",
    highlights: [
      "Create, edit, organize, and manage journal entries",
      "Find entries by title, content, or tags",
      "Protect private writing with authentication and a lock mechanism",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Supabase",
      "CRUD",
      "Tags & Search",
    ],
    githubUrl: "https://github.com/Fatthymah/journal_application.git",
    images: {
      onboarding: "/images/projects/journal-application/onboarding.jpg",
      splash: "/images/projects/journal-application/splash.jpg",
      login: "/images/projects/journal-application/login.png",
    },
  },
  {
    id: "yaash-bridals",
    category: "Bridal Rental Website",
    title: "Yaash Bridals",
    shortDescription:
      "A modern bridal-rental website for browsing curated outfits and ornaments, exploring product categories, and contacting the store through call or WhatsApp.",
    technologies: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    liveUrl: "https://yaashbridals.vercel.app/",
    websiteUrl: "https://yaashbridals.vercel.app/",
    githubUrl: "https://github.com/denetics/yaashbridals",
    images: {
      onboarding: "/images/projects/yaash-bridals/homepage.png",
      splash: "/images/projects/yaash-bridals/collections.png",
      login: "/images/projects/yaash-bridals/contact-or-admin.png",
      homepage: "/images/projects/yaash-bridals/homepage.png",
      collections: "/images/projects/yaash-bridals/collections.png",
      contactOrAdmin: "/images/projects/yaash-bridals/contact-or-admin.png",
      screenshot1: "/images/projects/yaash-bridals/homepage.png",
      screenshot2: "/images/projects/yaash-bridals/collections.png",
      screenshot3: "/images/projects/yaash-bridals/contact-or-admin.png",
    },
  },
];
