import Link from "next/link";
import React from "react";
import { ModeToggle } from "./switch-theme";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t bg-muted">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Phong Vu. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Twitter
          </Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </footer>
  );
};
