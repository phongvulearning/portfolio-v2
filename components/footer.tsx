"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { socials } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-6 border-t bg-muted overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-sm text-muted-foreground"
        >
          &copy; 2024 Phong Vu. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-4">
          {socials.map((social, index) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={social.name}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.07 * index,
              }}
            >
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                {social.name}
              </Link>
            </motion.li>
          ))}
        </div>
      </div>
    </footer>
  );
};
