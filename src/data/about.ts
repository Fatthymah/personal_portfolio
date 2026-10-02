export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface AboutData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    photoSrc: string; // Set to '/images/hero-photo-2.jpg' or custom photo path
    photoAlt: string;
    photoBadge: string;
  };
  story: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    callout: string;
  };
  focusAreas: {
    web: {
      title: string;
      description: string;
      technologies: string[];
    };
    mobile: {
      title: string;
      description: string;
      technologies: string[];
    };
  };
  skills: SkillGroup[];
  learning: {
    heading: string;
    items: string[];
    note: string;
  };
  opportunities: {
    heading: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHref: string;
    secondaryButtonText: string;
    secondaryButtonHref: string;
  };
}

export const aboutData: AboutData = {
  meta: {
    title: "About | Fidha Fathima",
    description:
      "Learn about Fidha Fathima, an aspiring web and mobile application developer building responsive websites and practical Flutter applications.",
  },
  hero: {
    eyebrow: "ABOUT ME",
    heading: "Building across web and mobile, one project at a time.",
    description:
      "I’m an aspiring web and mobile application developer who enjoys creating responsive websites and practical mobile applications. I learn by building real projects, improving how I design interfaces, structure applications, connect APIs, and create better user experiences.",
    photoSrc: "/images/about-photo.jpg",
    photoAlt: "Portrait of Fidha Fathima",
    photoBadge: "Frontend & Mobile Developer",
  },
  story: {
    heading: "How I approach development",
    paragraph1:
      "I enjoy taking ideas and turning them into usable digital experiences. My work combines frontend development, responsive design, mobile application development, and backend service integration.",
    paragraph2:
      "I am especially interested in business-focused applications, e-commerce and product presentation, real-estate experiences, and mobile apps that solve practical problems. I focus on learning through hands-on projects and improving each stage of the development process.",
    callout: "Learning by building, refining, and solving real interface problems.",
  },
  focusAreas: {
    web: {
      title: "Web development",
      description:
        "I build responsive interfaces and web applications with a focus on clean layouts, reusable components, usability, and modern frontend tools.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vite",
        "Supabase",
        "SQL",
        "REST APIs",
      ],
    },
    mobile: {
      title: "Mobile development",
      description:
        "I build Flutter applications and explore practical mobile experiences with API integration, authentication flows, and thoughtful UI design.",
      technologies: [
        "Flutter",
        "Dart",
        "Dio",
        "REST APIs",
        "JWT authentication",
        "Android Studio",
      ],
    },
  },
  skills: [
    {
      name: "Frontend",
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
      name: "Mobile",
      skills: ["Flutter", "Dart", "Dio"],
    },
    {
      name: "Backend and Services",
      skills: ["Supabase", "SQL", "REST APIs", "JWT Authentication"],
    },
    {
      name: "Workflow and Deployment",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Android Studio",
        "Vercel",
        "Render",
      ],
    },
  ],
  learning: {
    heading: "Currently learning and improving",
    items: [
      "Building stronger Flutter and Dart applications",
      "Integrating APIs and handling authentication flows",
      "Improving responsive UI and frontend architecture",
      "Working with databases and backend services",
      "Practicing problem-solving and data structures",
    ],
    note: "I believe the best way to improve is to keep building, reviewing my work, and learning from every project.",
  },
  opportunities: {
    heading: "Open to building and learning together.",
    description:
      "I’m interested in junior web or mobile development opportunities, internships, freelance projects, and collaborations where I can contribute, keep learning, and build useful products.",
    primaryButtonText: "View my work",
    primaryButtonHref: "/#work",
    secondaryButtonText: "Get in touch",
    secondaryButtonHref: "/#contact",
  },
};
