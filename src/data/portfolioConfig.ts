import planDetails from "@/assets/dr_calories/plan_details.jpg";
import waterReminders from "@/assets/dr_calories/water_reminders.jpg";
import customPlan from "@/assets/dr_calories/custom_plan.mp4";
import bodyAnalysis from "@/assets/dr_calories/body_analysis.mp4";
import createPlan from "@/assets/dr_calories/create_plan.mp4";
import addToCart from "@/assets/velvet/add_to_cart.png";
import categories from "@/assets/velvet/categories.png";
import filter1 from "@/assets/velvet/filter_1.png";
import filter2 from "@/assets/velvet/filter_2.png";
import filter3 from "@/assets/velvet/filter_3.png";
import search from "@/assets/velvet/search.png";
import settings from "@/assets/velvet/settings.png";
import product_details from "@/assets/velvet/product_details.png";
import deviceFound from "@/assets/foot_tracker/device_found.jpg";
import monitorTracking from "@/assets/foot_tracker/monitor_tracking.jpg";
import noDevice from "@/assets/foot_tracker/no_device.jpg";
import patientInfoForm from "@/assets/foot_tracker/patient_info_form.jpg";
import realTimeMonitor from "@/assets/foot_tracker/real_time_monitor.jpg";
import scanDevices from "@/assets/foot_tracker/scan_devices.jpg";
import turnBluetooth from "@/assets/foot_tracker/turn_bluetooth.jpg";









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

export interface ShowcaseFeature {
  label: string;
  image?: string;
  videoUrl?: string;
  landscape?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  bullets: string[];
  CompanyProject?:string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  media: SectionMedia;
  showcase?: ShowcaseFeature[];
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
      ],
      media: {
        enabled: true,
        type: "images",
        images: [],
      },
      colors: {
        primary: "200 80% 55%",
        secondary: "220 18% 10%",
      },
    },
    {
      role: "Flutter Developer (Freelance)",
      company: "",
      period: "March 2026 – Present",
      projects: [
      ],
      media: {
        enabled: true,
        type: "video",
        images: [],
      },
      colors: {
        primary: "200 80% 55%",
        secondary: "220 18% 10%",
      },
    },
  ],
  projects: [
    {
      CompanyProject:"E-solutions group",
      title: "Dr Calories (Nutrition Planning App)",
      description: " A nutrtion app for personalized meal planning and real-time macro tracking with seamless data synchronization.",
      bullets: [
        "Enhanced and maintained a legacy Flutter codebase, improving scalability and code organization",
        "Implemented real-time macro calculation logic with synchronized updates across meals and daily totals",
        "Designed and developed features for personalized meal planning and user data management",
        "Collaborated with backend engineers to define feature flows and integrate APIs",
        "Built responsive UI components and handled complex state synchronization",
      ],
       techStack: ["Flutter", "FireBase","Local Notifications"],
      githubUrl: "",
      media: {
        enabled: false,
        type: "none",
      },
      showcase:[
       { label:"Custom Plan",videoUrl:customPlan,},
       {label:"Plan Details",image:planDetails},
       {label:"Water Reminders",image:waterReminders},
       {label:"Body Analysis",videoUrl:bodyAnalysis},
       {label:"Create a Plan",videoUrl:createPlan,landscape:true},
      ],
      colors: {
        primary: "85.33 54.22%  51.18%",
        secondary: "220 18% 10%",
      },
    },
     {
      CompanyProject:"E-solutions group",
          title: "Velvet (E-commerce Application)",
          description:"An e-commerce application featuring product browsing, smart filtering, and a seamless checkout experience",
          bullets: [
            "Developed core e-commerce features including product browsing, search, filtering, cart, and checkout",
            "Integrated backend services for product listings, orders, and user workflows",
            "Implemented category and attribute-based filtering with optimized state management",
            "Improved UI responsiveness across different screen sizes and devices",
          ], techStack: ["Flutter", "Payment"],
      githubUrl: "",
      media: {
        enabled: false,
        type: "none",
      },
      showcase: [
        { label: "Categories", image: categories },
        { label: "Search", image: search },
        { label: "Filter Options", image: filter1 },
        { label: "Additional Filters", image: filter2 },
        { label: "More Filters", image: filter3 },
        { label: "Product Details", image: product_details },
        { label: "Add to Cart", image: addToCart },
        { label: "Settings", image: settings },
      ],
      colors: {
        primary: "0 0% 100%",
        secondary: "220 18% 10%",
      },
        },
        
    {
      CompanyProject:"Freelance",
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
      showcase: [
        { label: "Turn Bluetooth", image: turnBluetooth },
        { label: "Scan Devices", image: scanDevices },
        { label: "No Device", image: noDevice },
        { label: "Device Found", image: deviceFound },
        { label: "Patient Info Form", image: patientInfoForm },
        { label: "Real Time Monitor", image: realTimeMonitor },
        { label: "Monitor Tracking", image: monitorTracking },
      ],
      colors: {
        primary: "150 70% 45%",
        secondary: "220 18% 10%",
      },
    },
    {
      CompanyProject:null,
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
      CompanyProject:null,
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
