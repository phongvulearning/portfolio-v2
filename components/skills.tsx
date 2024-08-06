import React from "react";

type Props = {};

const skills = [
  {
    name: "Programming Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TanStack",
      "Astro",
      "React-Hook-Form",
    ],
  },
  {
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
    name: "Soft Skills",
    items: ["Problem-solving", "Teamwork", "Communication", "Adaptability"],
  },
  {
    name: "Responsive Design",
    items: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Accessibility",
    ],
  },
];

export const Skills = (props: Props) => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have expertise in a variety of front-end technologies and tools,
              allowing me to build responsive and user-friendly web
              applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 pt-12 lg:grid-cols-3 lg:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="grid gap-1">
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p className="text-muted-foreground">{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
