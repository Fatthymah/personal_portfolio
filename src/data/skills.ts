export interface SkillCategory {
  title: string;
  category: "web" | "mobile" | "backend" | "tools";
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Web Development",
    category: "web",
    description: "Responsive layouts, modern web frameworks, and clean user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
    ],
  },
  {
    title: "Mobile Development",
    category: "mobile",
    description: "Cross-platform mobile apps with structured state and networking.",
    skills: [
      "Flutter",
      "Dart",
      "API integration",
      "Dio",
      "JWT authentication",
    ],
  },
  {
    title: "Backend & Services",
    category: "backend",
    description: "Database handling, cloud backends, and structured API consumption.",
    skills: [
      "Supabase",
      "SQL",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Environment",
    category: "tools",
    description: "Version control, development IDEs, and deployment platforms.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Vercel",
      "Render",
    ],
  },
];
