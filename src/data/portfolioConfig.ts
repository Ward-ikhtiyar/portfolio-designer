export type MediaType = "none" | "video" | "images";

export interface SectionMedia {
  enabled: boolean;
  type: MediaType;
  videoUrl?: string;
  images?: string[];
}

export interface SectionColors {
  primary: string; // HSL string like "36 95% 55%"
  secondary: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  bullets: string[];
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  media: SectionMedia;
  colors: SectionColors;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  projects: {
    name: string;
    bullets: string[];
  }[];
  media: SectionMedia;
  colors: SectionColors;
}

export interface PortfolioSection {
  id: string;
  title: string;
  media: SectionMedia;
  colors: SectionColors;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  heroMedia: SectionMedia;
  heroColors: SectionColors;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: {
    degree: string;
    university: string;
    graduation: string;
    note: string;
    media: SectionMedia;
    colors: SectionColors;
  };
  skills: {
    categories: { label: string; items: string[] }[];
    media: SectionMedia;
    colors: SectionColors;
  };
  contactColors: SectionColors;
}

export const portfolioData: PortfolioData = {
  name: "Ward Ekhtiar",
  title: "Flutter Developer",
  email: "wardekr@gmail.com",
  phone: "+963931754165",
  github: "https://github.com/Ward-ikhtiyar",
  heroMedia: {
    enabled: false,
    type: "none",
  },
  heroColors: {
    primary: "36 95% 55%",
    secondary: "220 18% 10%",
  },
  experience: [
    {
      role: "Flutter Developer",
      company: "E-Solutions Group",
      period: "April 2025 – Present",
      projects: [
        {
          name: "Dr Calories (Nutrition Planning App)",
          bullets: [
            "Enhanced and maintained a legacy Flutter codebase, improving scalability and code organization",
            "Implemented real-time macro calculation logic with synchronized updates across meals and daily totals",
            "Designed and developed features for personalized meal planning and user data management",
            "Collaborated with backend engineers to define feature flows and integrate APIs",
            "Built responsive UI components and handled complex state synchronization",
          ],
        },
        {
          name: "Velvet (E-commerce Application)",
          bullets: [
            "Developed core e-commerce features including product browsing, search, filtering, cart, and checkout",
            "Integrated backend services for product listings, orders, and user workflows",
            "Implemented category and attribute-based filtering with optimized state management",
            "Improved UI responsiveness across different screen sizes and devices",
          ],
        },
      ],
      media: {
        enabled: false,
        type: "none",
      },
      colors: {
        primary: "200 80% 55%",
        secondary: "220 18% 10%",
      },
    },
  ],
  projects: [
    {
      title: "Smart Foot Health Monitoring",
      description: "Bluetooth-enabled Flutter app for monitoring foot pressure and temperature for diabetic patients",
      bullets: [
        "Real-time data processing with visual risk indicators",
        "Adaptive alert systems (notifications, vibration, escalation) based on risk thresholds",
        "Patient onboarding, live monitoring, and emergency guidance",
      ],
      techStack: ["Flutter", "Bluetooth BLE", "Real-time Data"],
      githubUrl: "https://github.com/Ward-ikhtiyar/diabetic-foot-monitor-app",
      media: {
        enabled: false,
        type: "none",
      },
      colors: {
        primary: "150 70% 45%",
        secondary: "220 18% 10%",
      },
    },
    {
      title: "Easy Rent – Real Estate Platform",
      description: "Cross-platform property rental app using Flutter and React",
      bullets: [
        "Advanced filtering and map-based search",
        "360° panoramic property views for immersive experience",
        "Stripe integration for subscription-based access",
        "Clean architecture with offline support and smooth animations",
      ],
      techStack: ["Flutter", "React", "Stripe", "Clean Architecture"],
      githubUrl: "https://github.com/Ward-ikhtiyar/Easyrent-Rental-Platform",
      liveUrl: "https://easyrent-rental-platform.vercel.app",
      media: {
        enabled: false,
        type: "none",
      },
      colors: {
        primary: "260 70% 60%",
        secondary: "220 18% 10%",
      },
    },
    {
      title: "Monumental Habits – Habit Tracker",
      description: "Habit tracking app with calendar-based progress visualization and analytics",
      bullets: [
        "Calendar-based progress visualization and analytics",
        "Reminders and motivational features for user engagement",
        "MVP architecture with maintainable codebase",
      ],
      techStack: ["Flutter", "MVP Architecture"],
      githubUrl: "https://github.com/Ward-ikhtiyar/Monumental-habits",
      media: {
        enabled: false,
        type: "none",
      },
      colors: {
        primary: "330 70% 55%",
        secondary: "220 18% 10%",
      },
    },
  ],
  education: {
    degree: "B.Sc. in Informatics Technology Engineering",
    university: "University of Damascus",
    graduation: "Expected Graduation: 2027",
    note: "4th year student specializing in Artificial Intelligence and Natural Language Processing",
    media: {
      enabled: false,
      type: "none",
    },
    colors: {
      primary: "36 95% 55%",
      secondary: "220 18% 10%",
    },
  },
  skills: {
    categories: [
      { label: "Frameworks", items: ["Flutter", "React"] },
      { label: "Architecture", items: ["Clean Architecture", "MVP"] },
      { label: "State Management", items: ["Bloc", "GetX"] },
      { label: "Integrations", items: ["REST APIs", "Bluetooth (BLE)", "Stripe"] },
      { label: "Other", items: ["Responsive UI", "Animations", "Real-time Data"] },
    ],
    media: {
      enabled: false,
      type: "none",
    },
    colors: {
      primary: "36 95% 55%",
      secondary: "220 18% 10%",
    },
  },
  contactColors: {
    primary: "36 95% 55%",
    secondary: "220 18% 10%",
  },
};
