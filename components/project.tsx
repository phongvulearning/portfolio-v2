"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { IProject } from "@/lib/types";

type Props = {
  project: IProject;
};

export const Project = ({ project }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const {
    technologies,
    title,
    desciption,
    features,
    challenges = "",
  } = project;

  return (
    <motion.div
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      ref={ref}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desciption}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div>
              <h3 className="text-lg font-bold">Key Features</h3>
              <ul className="list-disc pl-4 text-muted-foreground">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Technologies Used</h3>
              <p className="text-muted-foreground">{technologies.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Challenges</h3>
              {challenges && (
                <p className="text-muted-foreground">{challenges}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
