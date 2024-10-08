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
      "Integration with payment gateways",
      "Real-time notifications for appointments and bookings",
      "Import and export functionality",
      "Management statistics and reports",
      "Sell gift cards and coupons",
      "Manage working hours and availability",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Honojs",
      "Redis",
      "etc.",
    ],
    challenges:
      "I faced challenges while working on UrSlots, including managing staff working hours for optimal scheduling and implementing key features like an import preview, a service cost calculator, and a drag-and-drop booking interface in the calendar to enhance user experience.",
  },
  {
    title: "Taskify App",
    desciption:
      "Taskify helps team move work forward Collbaorate , manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify.",
    features: [
      "Collaborate with team members",
      "Manage projects and tasks",
      "drag-and-drop task management",
      "Customize task lists",
      "Mobile-friendly design",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Typescript",
      "AivenDB",
      "Prisma",
      "Stripe",
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
      "React",
      "Next.js",
      "Tailwind CSS",
      "Context API",
      "Uploadthing",
      "Dnd Kit",
      "Shacdn UI",
    ],
    challenges: "",
  },
  {
    title: "Portfolio Website",
    desciption:
      "I designed and developed a responsive and user-friendly portfolio website that showcased my skills and experience. The website was built using React, Next.js, Framer Motion and Tailwind CSS, and featured a clean and modern design with a contact form for inquiries.",
    features: [
      "Responsive layout for various devices",
      "Detailed project showcases with animations",
      "Contact form for inquiries with validation and submission handling",
      "Mobile-friendly design",
      "SEO-friendly structure",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenges: "",
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
