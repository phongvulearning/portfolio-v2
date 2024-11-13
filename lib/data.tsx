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
    title: "Urslots",
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
      "🌐 Built with React, Typescript",
      "💾 PostgreSQL & Drizzle ORM",
      "🔌 Stripe SDK Integration",
      "🔥 API via Hono.js",
      "💾 Redis for caching",
      "🎨 Styled with TailwindCSS and Shadcn UI",
      "🚀 Deployment on Vercel",
    ],
    challenges:
      "I faced challenges while working on UrSlots, including managing staff working hours for optimal scheduling and implementing key features like an import preview, a service cost calculator, and a drag-and-drop booking interface in the calendar to enhance user experience.",
  },
  {
    title: "Jira",
    desciption:
      "Jira is a powerful project management tool that helps teams plan, track, and release software. It provides features such as issue tracking, agile boards, sprints, and project management, making it an essential tool for software development teams.",
    features: [
      "🏢 Workspaces",
      "📊 Projects / Epics",
      "✅ Tasks",
      "📋 Kanban Board View",
      "🗃️ Data Table View",
      "📅 Calendar View",
      "✉️ Invite system / Invite codes",
      "⚙️ Workspace and Project Settings",
      "🖼️ Image Uploads (for avatars and attachments)",
      "🔍 Advanced Search and Filtering",
      "📈 Analytics Dashboard",
      "👥 User Roles and Permissions",
      "🔒 Authentication (OAuth and Email)",
    ],
    technologies: [
      "⚛️ Next.js 14 Framework, Typescript",
      "🚀 API using Hono.js",
      "🔐 Auth using Clerk",
      "Beautiful Drag and Drop",
      "🚀 Deployment on Vercel",
      "🔌 Appwrite SDK Integration",
      "🎨 Shadcn UI & TailwindCSS Styling",
      "📱 Responsive Design (Mobile-friendly)",
    ],
    challenges:
      "I faced challenges while working on Jira, including understanding the API, managing secure transactions, and handling errors, as it was my first experience with the platform.",
  },
  {
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
      "⚛️ Next.js 14 Framework, Typescript",
      "🔌 Stripe SDK Integration",
      "🚀 Deployment on Vercel",
      "💾 PostgresDB using AivenDB",
      "🌧 ORM using Prisma",
      "🔐 Auth using Clerk",
      "🎨 Shadcn UI & TailwindCSS Styling",
    ],
    challenges:
      "While implementing Taskify, I faced challenges with Stripe integration, including understanding the API, managing secure transactions, and handling errors, as it was my first experience with the platform.",
  },

  {
    title: "Make Your Link",
    desciption:
      "Simplify your online presence with Make Your Link! Created a personalized page that allows users to showcase all their social media pro les in one place.",
    features: [
      "Responsive layout for various devices",
      "Integration with popular social media platforms",
      "Drag-and-drop functionality for easy content management",
    ],
    technologies: [
      "⚛️ Next.js 14 Framework",
      "🎨 Shadcn UI & TailwindCSS Styling",
      "Context API",
      "🖼️ Image Uploads (for avatars and attachments) - Uploadthing",
      "Dnd Kit",
      "📱 Responsive Design (Mobile-friendly)",
      "🚀 Deployment on Vercel",
    ],
    challenges:
      "I faced challenges while working on Make Your Link, including understanding the API, managing secure transactions, and handling errors, as it was my first experience with the platform.",
  },
];

export const experience = [
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Front-end Developer",
    company: "Gridly Company.",
    dates: "Jun 2023 - Present",
    description:
      "Continued working remotely as a fresher, contributing to various front-end projects. Worked on features such as Merge branch, Record history, Import preview, and Batch spell check, LQA ,Tag Detection..., enhancing, refactoring, and optimizing code to improve the application's functionality and user experience.",
  },
  {
    icon: <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Intern Front-end Developer",
    company: "Gridly Company.",
    dates: "Apr 2023 - Jun 2023",
    description:
      "Completed a 3-month internship, gaining hands-on experience in front-end development. Supported building a landing page and implementing a spell check feature.",
  },
];

export const education = [
  {
    icon: <GraduationCapIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Self-taught",
    dates: "Self-taught | 2023",
    description:
      "Completed a comprehensive self-taught program in front-end web development. Focused on mastering HTML, CSS, JavaScript, and popular front-end frameworks and libraries. Learned through online resources, coding challenges, and personal projects to build a strong foundation in web development.",
  },
  {
    icon: <BadgeIcon className="w-5 h-5 text-primary-foreground" />,
    title: "Front-end Web Development Certification",
    dates: "Frontend Masters | Roadmap.sh | 2023 - 2024",
    description:
      "Followed the roadmap.sh and Frontend Masters certification programs, covering HTML, CSS, JavaScript, and popular front-end frameworks and libraries.",
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
