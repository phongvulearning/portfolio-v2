import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type IProject = {
  title: string;
  desciption: string;
  features: Array<string>;
  technologies: Array<string>;
  challenges: string;
};
