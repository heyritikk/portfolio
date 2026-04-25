"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="p-2 md:p-2.5 rounded-full">
        <div className="w-[18px] h-[18px]" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="navbar-li"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.09 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 45 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isDark ? (
          <FiSun style={{ fontSize: "18px" }} />
        ) : (
          <FiMoon style={{ fontSize: "18px" }}/>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
