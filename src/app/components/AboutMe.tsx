"use client";
import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import { motion } from "motion/react";
import { fadeInRight, fadeInUp } from "../data/variants";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

const AboutMe = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      id={id}
      ref={ref}
      className="bg-[var(--background)]  tracking-wide sm:tracking-wider flex flex-col overflow-hidden items-center text-[var(--foreground)] px-4 lg:px-6 md:py-16"
    >
      <motion.p
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{once: true}}
        className="text-xs text-center text-[var(--muted)] dark:text-gray-200 font-medium"
      >
        GET TO KNOW ME
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="text-4xl [font-family:var(--font-instrument-serif)] md:text-6xl font-medium pt-2 sm:pt-4 mb-6 md:mb-10 px-4"
      >
        About <span className="animated-text-gradient italic">Me</span>
      </motion.h2>
      <div className="flex max-lg:flex-col max-w-4xl ">
        <PersonalInfo />
        <motion.div className="lg:w-2/3 py-2 lg:p-6 space-y-4 lg:border-l lg:border-[var(--border)]">
          <Education />
          <Experience />
          <Skills />
        </motion.div>
      </div>
    </motion.section>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
