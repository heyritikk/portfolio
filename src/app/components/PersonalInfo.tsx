"use client";
import { motion } from "motion/react";
import { fadeInUpRight } from "../data/variants";
import Image from "next/image";
import { personalInfo } from "../data/data";
import { GrLocation } from "react-icons/gr";

const PersonalInfo = () => {
  return (
    <motion.div className="lg:w-1/3 lg:max-w-3xl text-center flex flex-col items-center gap-4 pt-6 lg:px-6">
      <motion.div
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          src={personalInfo.pfp}
          alt="Profile Picture" // TODO: You can update this alt text with your name
          className="border border-[var(--border)] rounded-full"
          width={160}
          height={160}
          sizes="160px"
        />
      </motion.div>
      <motion.p
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl max-md:text-sm tracking-wide sm:tracking-wider text-left leading-relaxed text-[var(--foreground)] border-b border-[var(--border)] pb-4 max-sm:px-1"
      >
        {personalInfo.summary}
      </motion.p>
      <motion.div
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden lg:flex items-center gap-2 text-[var(--foreground)]"
      >
        <GrLocation />
        <span>{personalInfo.location}</span>
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfo;
