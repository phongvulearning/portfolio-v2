/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { fadeInAnimationVariants, useSectionInView } from "@/lib/hooks";
import { education, experience } from "@/lib/data";
import { motion } from "framer-motion";

export const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-12 px-4 md:px-6 scroll-mt-40"
    >
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
            {experience.map((experience, index) => (
              <motion.li
                className="grid gap-2"
                key={experience.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
                custom={index}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                    {experience.icon}
                  </div>
                  <h3 className="text-lg font-bold">{experience.title}</h3>
                </div>
                <div className="text-muted-foreground">
                  {experience.company} | {experience.dates}
                </div>
                <p className="text-muted-foreground">
                  {experience.description}
                </p>
              </motion.li>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="grid gap-6">
            {education.map((education, index) => (
              <motion.li
                className="grid gap-2"
                key={education.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
                custom={index}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                    {education.icon}
                  </div>
                  <h3 className="text-lg font-bold">{education.title}</h3>
                </div>
                <div className="text-muted-foreground">{education.dates}</div>
                <p className="text-muted-foreground">{education.description}</p>
              </motion.li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
