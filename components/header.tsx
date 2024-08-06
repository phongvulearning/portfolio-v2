import Link from "next/link";
import { CodeIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="py-5 px-4 md:px-6 border-b bg-muted ">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center justify-center gap-2"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6" />
          <p className="text-xl font-bold">Phong Vu</p>
        </Link>
        <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Introduction
          </Link>

          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Education
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
