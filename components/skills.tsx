"use client";

import { skills } from "@/lib/data";
import { fadeInAnimationVariants, useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="w-full py-12 md:py-24 lg:py-28 scroll-mt-28"
    >
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
          {skills.map((skill, index) => (
            <motion.li
              className="grid gap-1"
              key={skill.name}
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
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </div>
              <p className="text-muted-foreground"> {skill.items.join(", ")}</p>
            </motion.li>
          ))}
        </div>
      </div>
    </section>
  );
};
