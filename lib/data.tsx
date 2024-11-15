// import {
//   BadgeIcon,
//   BriefcaseIcon,
//   CodeIcon,
//   GraduationCapIcon,
// } from "@/components/svg";
import {
  BadgeIcon,
  BriefcaseIcon,
  CodeIcon,
  GraduationCapIcon,
  PenToolIcon,
  PuzzleIcon,
  SmartphoneIcon,
  UsersIcon,
} from "lucide-react";

export const links = [
  {
    name: "Introduction",
    hash: "#introduction",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  {
    icon: <CodeIcon className="w-5 h-5 text-primary-foreground" />,
    name: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    icon: <PuzzleIcon className="w-5 h-5 text-primary-foreground" />,
    name: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TanStack",
      "Astro",
      "Framer Motion",
    ],
  },
  {
    icon: <PenToolIcon className="w-5 h-5 text-primary-foreground" />,
    name: "Tools & Workflows",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "Eslint",
      "Prettier",
      "Jira",
      "Bitbucket",
      "Vite",
    ],
  },
  {
    icon: <UsersIcon className="w-5 h-5 text-primary-foreground" />,
    name: "Soft Skills",
    items: ["Problem-solving", "Teamwork", "Communication", "Adaptability"],
  },
  {
    icon: <SmartphoneIcon className="w-5 h-5 text-primary-foreground" />,
    name: "Responsive Design",
    items: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Accessibility",
    ],
  },
];

export const projects = [
  {
    href: "https://phong-vu-jira.vercel.app/",
    title: "Jira",
    desciption:
      "Jira is a powerful project management tool that helps teams plan, track, and release software. It provides features such as issue tracking, agile boards, sprints, and project management, making it an essential tool for software development teams.",
    features: [
      "🏢 Workspaces",
      "📊 Projects / Epics",
      "📋 Kanban Board View",
      "🗃️ Data Table View",
      "📅 Calendar View",
      "✉️ Invite system / Invite codes",
      "⚙️ Workspace and Project Settings",
      "🔍 Advanced Search and Filtering",
      "📈 Analytics Dashboard",
      "👥 User Roles and Permissions",
      "🔒 Authentication (OAuth and Email)",
    ],
    technologies: [
      "⚛️ Next.js 14 Framework - Typescript",
      "🔥 API using Hono.js",
      "🔐 Auth using Clerk",
      "Beautiful Drag and Drop",
      "🚀 Deployment on Vercel",
      "🔌 Appwrite SDK Integration",
      "🎨 Shadcn UI & TailwindCSS Styling",
      "📱 Responsive Design (Mobile-friendly)",
    ],
  },
  {
    href: "https://dev-merchant.urslots.com/",
    title: "Urslots - Startup",
    desciption:
      "UrSlots is a user-friendly SaaS platform designed for booking nail services. It allows salon owners to manage appointments, track customer data, and optimize scheduling, providing a seamless experience for both clients and businesses.",
    features: [
      "📈 Analytics Dashboard",
      "🔄 CSV transaction imports",
      "🤝 Real-time collaboration",
      "🔐 Auth, organisations and invites",
      "👤 User settings customization",
      "🔐 Role based access control",
      "🧵 Threads / Replies system",
      "🔍 Advanced Search and Filtering",
      "🔒 Authentication (OAuth and Email)",
      "💳 Pro tier for unlimited hearts using Stripe",
    ],
    technologies: [
      "🌐 Built with React - Typescript",
      "💾 PostgreSQL & Drizzle ORM",
      "🔌 Stripe SDK Integration",
      "🔥 API via Hono.js",
      "💾 Redis for caching",
      "🎨 Styled with TailwindCSS and Shadcn UI",
      "🚀 Deployment on Vercel",
    ],
  },
  {
    href: "https://taskify-app-phong-vu.vercel.app/",
    title: "Taskify App",
    desciption:
      "Taskify helps team move work forward collboarate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.",
    features: [
      "🏢 Workspaces",
      "📊 Projects / Epics",
      "✅ Tasks",
      "⚙️ Workspace and Project Settings",
      "📋 Kanban Board View",
      "📱 Responsive Design (Mobile-friendly)",
    ],
    technologies: [
      "⚛️ Next.js 14 Framework - Typescript",
      "🌧 ORM using Prisma",
      "🔐 Auth using Clerk",
      "🚀 Deployment on Vercel",
      "🔌 Stripe SDK Integration",
      "💾 PostgresDB using AivenDB",
      "🎨 Shadcn UI & TailwindCSS Styling",
    ],
  },
  {
    href: "https://app.gridly.com/",
    title: "Gridly - Sweden",
    desciption:
      "A SaaS platform streamlining content management and localization for global products and digital teams.",
    features: [
      "Merge branch",
      "Import localization",
      "Spell check",
      "Batch QA Check",
      "Record history",
      "Tag Detection",
      "Real-time collaboration",
      "Optimized for performance",
      "User-friendly interface",
      "Customizable settings",
      "Collaboration features",
      "Integration with popular tools",
    ],
    technologies: [
      "🌐 Built with React - Typescript",
      "🎨 Styled with TailwindCSS and Shadcn UI",
      "Tanstack (Virtualized, Table, Router , Query)",
      "etc...",
    ],
  },
  {
    href: "https://make-your-link.vercel.app/",
    title: "Make Your Link",
    desciption:
      "Simplify your online presence with Make Your Link! Created a personalized page that allows users to showcase all their social media pro les in one place.",
    features: [
      "Responsive layout for various devices",
      "Integration with popular social media platforms",
      "Drag-and-drop functionality for easy content management",
      "🖼️ Image Uploads (for avatars and attachments)",
    ],
    technologies: [
      "⚛️ Next.js 14 Framework - Typescript",
      "🎨 Shadcn UI & TailwindCSS Styling",
      "📱 Responsive Design (Mobile-friendly)",
      "🚀 Deployment on Vercel",
      "Uploadthing",
    ],
  },
];

export const experience = [
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Front-end Developer",
    company: "Gridly Company - Sweden",
    dates: "Jun 2023 - Present",
    description:
      "Implemented core features like branch merging, spell check, history tracking, batch QA, localization import, and real-time discussions. Suggested modern frameworks, replacing outdated libraries, and researched new web tech to improve functionality. Collaborated with the backend team on feature integration, troubleshooting, and enhancements.",
  },
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Fullstack Developer",
    company: "Urslots - Startup",
    dates: "Dec 2023 - Present",
    description:
      "Contributed to developing key features, including authentication, appointment booking, categories, services, working hours, and import/export for bookings, staff, and clients. Enhanced the app’s UI/UX for a user-friendly, aesthetically pleasing design, collaborating on front-end and back-end tasks to create a cohesive product.",
  },
];

export const education = [
  {
    icon: <GraduationCapIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Self-taught",
    dates: "Self-taught | Jun 2022 - Apr 2023",
    description:
      "Completed a comprehensive self-taught program in front-end web development. Focused on mastering HTML, CSS, JavaScript, and popular front-end frameworks and libraries. Learned through online resources, coding challenges, and personal projects to build a strong foundation in web development.",
  },
  {
    icon: <BadgeIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Frontend Masters",
    dates: "Frontend Mastery Course |  July 2023 - Nov 2023",
    description:
      "Completed a course on Optimizing React and Core JavaScript, gaining expertise in performance optimization, e  cient state management, and best practices for building highquality, responsive applications.",
  },
  {
    icon: <BadgeIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Learn on Roadmap",
    dates: "roadmap.sh | Apr 2024 - July 2024",
    description:
      "Completed the Front End development roadmap as outlined on roadmap.sh to ensure a comprehensive understanding of frontend technologies.",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/phong-v%C5%A9-nguy%E1%BB%85n-498aa2253/",
  },
  {
    name: "GitHub",
    href: "https://github.com/phongvulearning",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100089372082015",
  },
];
