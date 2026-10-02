export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  availability: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string; // Placeholder or path to uploaded resume PDF (e.g., '/resume.pdf')
  hasResume: boolean;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    resumeCtaText: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    webFocusTitle: string;
    webFocusDescription: string;
    mobileFocusTitle: string;
    mobileFocusDescription: string;
    currentRole: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    emailButtonText: string;
    linkedinButtonText: string;
    githubButtonText: string;
    note: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Fidha Fathima",
  title: "Frontend and Mobile Developer",
  location: "Calicut, Kerala",
  availability: "Calicut, Kerala • Open to opportunities",
  email: "fidhafathimakakkad@gmail.com",
  githubUrl: "https://github.com/Fatthymah",
  linkedinUrl: "https://linkedin.com/in/fidha-fathima00/",
  resumeUrl: "#resume", // Set to '/resume.pdf' when your PDF is placed in public/resume.pdf
  hasResume: false, // Set to true once the PDF is linked
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Fatthymah",
      iconName: "Github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/fidha-fathima00/",
      iconName: "Linkedin",
    },
    {
      label: "Email",
      href: "mailto:fidhafathimakakkad@gmail.com",
      iconName: "Mail",
    },
  ],
  hero: {
    eyebrow: "WEB + MOBILE DEVELOPMENT",
    heading: "Building thoughtful digital experiences for web and mobile.",
    description:
      "I’m an aspiring web and mobile application developer focused on creating responsive websites and practical mobile applications. I enjoy turning real-world ideas into clean, useful, and user-friendly digital experiences.",
    primaryCtaText: "View my work",
    primaryCtaHref: "#work",
    secondaryCtaText: "Let’s connect",
    secondaryCtaHref: "#contact",
    resumeCtaText: "View Resume",
  },
  intro: {
    eyebrow: "ABOUT MY WORK",
    title: "A developer focused on learning by building.",
    description:
      "I work across web and mobile development, building projects that help me improve my frontend skills, application structure, API integration, authentication, responsive design, and user experience.",
    webFocusTitle: "Web Engineering",
    webFocusDescription:
      "Building clean, accessible, and responsive user interfaces with React, Next.js, and TypeScript, paying close attention to component structure and clean styling.",
    mobileFocusTitle: "Mobile Engineering",
    mobileFocusDescription:
      "Developing cross-platform applications with Flutter and Dart, focusing on state management, REST API integration, and structured MVC/MVVM patterns.",
    currentRole: "Flutter Developer Intern at Bridgeon (2025 – Present)",
  },
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Let’s build something useful.",
    description:
      "I’m open to learning opportunities, freelance projects, collaborations, and junior web or mobile development roles. Feel free to reach out via email or connect on LinkedIn.",
    emailButtonText: "Send an email",
    linkedinButtonText: "Connect on LinkedIn",
    githubButtonText: "View GitHub Profile",
    note: "Response time is usually within 24–48 hours.",
  },
};
