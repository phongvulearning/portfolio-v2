/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const Experience = () => {
  return (
    <section id="experience" className="py-12 px-4 md:px-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Experience & Education
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have gained valuable experience working as a front-end developer
              in various industries, contributing to the development of
              responsive and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-12 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">Front-end Developer</h3>
              </div>
              <div className="text-muted-foreground">
                Acme Inc. | Jan 2021 - Present
              </div>
              <p className="text-muted-foreground">
                Developed and maintained responsive and user-friendly front-end
                interfaces for the company's web applications. Collaborated with
                the design team to ensure pixel-perfect implementation of
                designs.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <BriefcaseIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">
                  Intern Front-end Developer
                </h3>
              </div>
              <div className="text-muted-foreground">
                XYZ Corp. | Jun 2020 - Dec 2020
              </div>
              <p className="text-muted-foreground">
                Gained hands-on experience in front-end development,
                contributing to the company's web projects and learning various
                front-end technologies and best practices.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <GraduationCapIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">Self-taught</h3>
              </div>
              <div className="text-muted-foreground">Self-taught | 2022</div>
              <p className="text-muted-foreground">
                Completed a comprehensive program in computer science, including
                courses in data structures, algorithms, and front-end web
                development.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <BadgeIcon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">
                  Front-end Web Development Certification
                </h3>
              </div>
              <div className="text-muted-foreground">Udemy | 2019</div>
              <p className="text-muted-foreground">
                Completed a comprehensive online course on front-end web
                development, covering HTML, CSS, JavaScript, and popular
                front-end frameworks and libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function BadgeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
