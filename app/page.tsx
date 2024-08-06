import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { Project } from "@/components/project";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Introduction />
        <Skills />
        <Project />

        <Experience />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
