"use client";
import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/types";
import { scrollIntoTheView } from "@/lib/hooks";

export default function Home() {
  const params = useParams();
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const hashRegex = /#(.*)/;
    const hash = window.location.hash.match(hashRegex)?.[1] as string;
    const hashUpperCaseFirstLetter = (hash?.[0].toUpperCase() +
      hash?.slice(1)) as SectionName;

    if (hash) {
      scrollIntoTheView(hash);
      setTimeOfLastClick(Date.now());
      setActiveSection(hashUpperCaseFirstLetter);
    }
  }, [params, setActiveSection, setTimeOfLastClick]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Introduction />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
