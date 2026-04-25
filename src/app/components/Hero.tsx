"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import { fadeInDown, fadeInUp } from "../data/variants";

const Hero = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  return (
    <main
      id={id}
      ref={ref}
      className="flex flex-col overflow-hidden gap-y-4 bg-[var(--background)] justify-center items-center text-[var(--foreground)] h-screen mx-auto text-center"
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeInDown}
        viewport={{ once: true }}
        className="text-xs tracking-wide mt-20 md:mt-32 lg:mt-44 mb-8 sm:tracking-wider border border-[var(--border)] rounded-full px-4 py-1.5 flex justify-center items-center gap-2 relative shine"
      >
        Learning. Building. Improving.
      </motion.p>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-[52px] max-[370px]:text-[48px] sm:text-5xl font-medium md:text-[60px] [font-family:var(--font-instrument-serif)]
 leading-14 px-4 sm:leading-18 w-[96%] sm:max-w-2xl md:max-w-[44rem]"
      >
        Turning Ideas into Seamless Modern{" "}
        <span className="italic">Web Experiences</span>{" "}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="text-xl md:text-2xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 max-[370px]:px-10 md:max-w-3xl text-[var(--muted)]"
      >
        Hey, I&apos;m John Doe, a Full Stack Developer{" "}
        {/* TODO: Replace "John Doe" with your name and "Full Stack Developer" with your title */}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="flex max-sm:flex-col w-full px-8 justify-center mt-6 gap-4 md:gap-6"
      >
        <motion.a
          className="px-6 flex group items-center justify-center gap-2 py-2 rounded-full border border-[var(--border)] md:text-lg cursor-pointer"
          whileHover="hover"
          href="https://www.linkedin.com/in/yourprofile/" // TODO: Replace with your LinkedIn URL (or any connect link)
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hover: { scale: 1.05 },
          }}
        >
          <motion.span
            variants={{
              hover: { rotate: [0, 15, -15, 0, 15, 0] },
            }}
            transition={{ duration: 0.5 }}
          >
            👋
          </motion.span>
          Let&apos;s Connect
        </motion.a>

        <motion.a
          whileHover="hover"
          variants={{
            hover: { scale: 1.05 },
          }}
          href="#projects"
          className="px-6 flex justify-center items-center gap-2 py-2 rounded-full border border-[var(--border)] md:text-lg cursor-pointer"
        >
          View Projects{" "}
          <motion.span
            variants={{
              hover: { x: [0, 3, -2, 3, 0] },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FiArrowRight className="md:text-lg" />
          </motion.span>
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pointer-events-none relative z-10 mx-auto -mt-20 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#0f172a,transparent_80%)] before:opacity-15 dark:before:bg-[radial-gradient(circle_at_bottom_center,#93c5fd,transparent_78%)] dark:before:opacity-35"
      >
        <div
          aria-hidden
          className="absolute animate-gradient top-1/2 -left-1/2 z-10 w-[200%] rounded-[100%] border-t-8 border-t-[#3341553d] blur-[10px] dark:border-t-[#d0e8ff66] dark:blur-[12px]"
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="absolute animate-gradient top-1/2 -left-1/2 z-20 w-[200%] rounded-[100%] border-t-4 border-t-[#01030f] dark:border-t-[#d0e8ff] bg-[var(--background)] shadow-[inset_0_1px_0_#ffffffd4,inset_0_2px_18px_#64748b63,0_-12px_46px_#33415552] dark:shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_50px_1px_#d0e8ffb3]"
        ></motion.div>
      </motion.div>
    </main>
  );
});

Hero.displayName = "Hero";
export default Hero;
