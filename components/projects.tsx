/* eslint-disable react/no-unescaped-entities */
"use client";
import { projects } from "@/lib/data";
import { Project } from "./project";
import { useSectionInView } from "@/lib/hooks";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted md:-scroll-mt-20 scroll-mt-28"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent web development projects, showcasing
              my skills in building responsive and user-friendly applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
