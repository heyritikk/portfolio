"use client";

import React, { RefObject } from "react";
import { navbarData } from "../data/data";
import { motion } from "motion/react";
import { liVariants, tooltipVariants, headerVariants } from "../data/variants";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
}
const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [isBelowMd, setIsBelowMd] = React.useState(false);
  const [activeTapItem, setActiveTapItem] = React.useState<string | null>(null);
  const tapResetTimeoutRef = React.useRef<number | null>(null);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsBelowMd(event.matches);
    };

    setIsBelowMd(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  React.useEffect(() => {
    return () => {
      if (tapResetTimeoutRef.current) {
        window.clearTimeout(tapResetTimeoutRef.current);
      }
    };
  }, []);

  const triggerMobileTapAnimation = (itemName: string) => {
    if (!isBelowMd) return;

    if (tapResetTimeoutRef.current) {
      window.clearTimeout(tapResetTimeoutRef.current);
    }

    setActiveTapItem(itemName);
    tapResetTimeoutRef.current = window.setTimeout(() => {
      setActiveTapItem(null);
    }, 120);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const handleScroll = (
    section: string,
    type: "scroll" | "link",
    url?: string,
  ) => {
    if (type === "scroll") {
      sectionRefs[section]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (type === "link" && url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.nav aria-label="Main navigation" className="fixed text-sm w-full z-50 text-[var(--foreground)] bottom-0 pb-6 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/70 to-transparent lg:top-0 lg:bottom-auto lg:pt-4 lg:pb-0 lg:bg-gradient-to-b">
      <motion.ul
        variants={headerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="flex items-center gap-2 md:gap-3 w-fit bg-[var(--card-bg)] border border-[var(--border)] rounded-full px-2.5 py-1.5 mx-auto navbar"
        whileHover="whileHover"
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 5,
        }}
      >
        {navbarData.map((item) => {
          const Icon = item.icon;
          const size = item.size;
          return (
            <li key={item.name} className="relative">
              <motion.button
                type="button"
                className={`navbar-li ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-[var(--surface-hover)]"
                    : ""
                }`}
                initial="rest"
                animate={activeTapItem === item.name ? "tap" : "rest"}
                whileHover="hover"
                variants={liVariants}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                onClick={() => {
                  triggerMobileTapAnimation(item.name);
                  handleScroll(item.name.toLowerCase(), item.type, item.url);
                }}
                aria-label={item.name}
              >
                <motion.span>
                  <Icon style={{ fontSize: size }} />
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 max-lg:bottom-full max-lg:mb-1.5 lg:top-full lg:mt-1.5 px-2 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs rounded-md whitespace-nowrap"
                    variants={tooltipVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                </motion.span>{" "}
              </motion.button>
            </li>
          );
        })}
        <div className="w-px h-5 bg-[var(--border)]" />
        <ThemeToggle />
      </motion.ul>
    </motion.nav>
  );
};

export default Header;
