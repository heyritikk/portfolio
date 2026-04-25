"use client";
import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";
import { IoCodeDownloadOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-[var(--background)] tracking-wide sm:tracking-wider border-t flex max-md:gap-2 max-md:flex-col-reverse gap-20 justify-center items-center border-[var(--border)] text-[var(--foreground)] text-center text-sm lg:py-6 pb-8 pt-4"
    >
      <p className="">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.{" "}
        {/* TODO: Replace with your name */}
      </p>
      <a
        href="https://github.com/yourusername" // TODO: Replace with your GitHub repo URL or any link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-2 gap-1 hover:underline rounded-md transition"
      >
        <IoCodeDownloadOutline
          strokeWidth={2}
          className="size-5 md:size-[22px]"
        />
        Source Code{" "}
      </a>
    </motion.footer>
  );
};

export default Footer;
