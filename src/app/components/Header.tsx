"use client";

import React, { RefObject } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  sectionRefs?: Record<string, RefObject<HTMLElement | null>>;
}

type HeaderNavItem =
  | { label: string; href: string; kind: "scroll"; section: string }
  | { label: string; href: string; kind: "link" };

const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const navLinks: HeaderNavItem[] = sectionRefs
    ? [
        { label: "Home", kind: "scroll", section: "home", href: "/#home" },
        { label: "About", kind: "scroll", section: "about", href: "/#about" },
        {
          label: "Projects",
          kind: "scroll",
          section: "projects",
          href: "/#projects",
        },
        { label: "Blog", kind: "link", href: "/blog" },
      ]
    : [
        { label: "Home", kind: "link", href: "/" },
        { label: "About", kind: "link", href: "/#about" },
        { label: "Projects", kind: "link", href: "/#projects" },
        { label: "Blog", kind: "link", href: "/blog" },
      ];

  const handleScroll = (section: string) => {
    if (!sectionRefs) return;
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
        <Link
          href="/"
          className="text-3xl sm:text-4xl [font-family:var(--font-instrument-serif)]"
        >
          Ritik Kumar
        </Link>

        <ul className="hidden md:flex items-center gap-9 text-lg">
          {navLinks.map((item) => (
            <li key={item.label}>
              {item.kind === "scroll" && sectionRefs ? (
                <button
                  type="button"
                  onClick={() => handleScroll(item.section)}
                  className="hover:opacity-70 transition"
                >
                  {item.label}
                </button>
              ) : (
                <Link href={item.href} className="hover:opacity-70 transition">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-xl text-base font-medium hover:opacity-90 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
