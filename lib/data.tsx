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
    title: "Todo App",
    desciption: "Lorem ipsum",
    features: [
      "Add, edit, and delete tasks",
      "Mark tasks as complete",
      "Filter tasks by status (all, active, completed)",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Implementing the filtering functionality and ensuring that the task data is persisted across page refreshes.",
  },
  {
    title: "Weather App",
    desciption:
      "A weather app that displays the current weather and forecast for a user's location.",
    features: [
      "Automatically detect user's location",
      "Display current weather conditions",
      "Show hourly and daily weather forecast",
      "Option to search for weather in other locations",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Handling user location permissions and integrating the weather API to display accurate and relevant data.",
  },
  {
    title: "E-commerce Website",
    desciption: "Lorem ipsum",
    features: [
      "Browse and search for products",
      "Browse and search for products",
      "Checkout process with payment integration",
      "Admin dashboard to manage products and orders",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Implementing a secure and user-friendly checkout process, managing product inventory, and building the admin dashboard.",
  },
  {
    title: "Portfolio Website",
    desciption: "Lorem ipsum",
    features: [
      "Clean and modern design",
      "Responsive layout for various devices",
      "Detailed project showcases",
      "Contact form for inquiries",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    challenges:
      "Designing a visually appealing and user-friendly portfolio, and implementing the contact form with validation and submission handling.",
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
    dates: "Frontend Masters | Roadmap.sh | 2023",
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
    name: "Twitter",
    href: "https://twitter.com/phongvu",
  },
];
