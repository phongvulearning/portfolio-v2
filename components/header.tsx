"use client";

import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="py-5 px-4 md:px-6 border-b bg-muted">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#introduction" className="flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <CodeIcon className="h-6 w-6" />
            <p className="text-xl font-bold">Phong Vu</p>
          </motion.div>
        </Link>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          {links.map((link, index) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.07 * index,
              }}
            >
              <Link
                className={cn(
                  "text-sm font-medium hover:underline underline-offset-4",
                  {
                    underline: activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </nav>
      </div>
    </header>
  );
};
