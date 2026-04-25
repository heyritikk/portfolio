"use client";

import React, { RefObject } from "react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
}
const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const navLinks = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Projects", section: "projects" },
    { label: "Blog", section: "projects" },
  ] as const;

  const handleScroll = (section: string) => {
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto h-[78px] px-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleScroll("home")}
          className="text-3xl sm:text-4xl [font-family:var(--font-instrument-serif)]"
        >
          Ritik Kumar
        </button>

        <ul className="hidden md:flex items-center gap-9 text-lg">
          {navLinks.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => handleScroll(item.section)}
                className="hover:opacity-70 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => handleScroll("contact")}
            className="bg-black text-white px-6 py-2.5 rounded-xl text-base font-medium hover:opacity-90 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
