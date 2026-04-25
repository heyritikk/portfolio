
"use client";
import { motion } from "motion/react";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";

const Education = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className="pb-4 border-b border-[var(--border)] max-sm:px-1"
    >
      <div className="flex flex-col">
        <h3 className="text-lg font-medium mb-2">
          Education
        </h3>
        <p className="text-sm flex justify-between">
          <span className="font-medium">{education.college}</span>{" "}
          <span>{education.duration}</span>
        </p>
        <p className="text-sm flex justify-between">
          <span>{education.course}</span> <span className="inline-block min-w-20">CGPA: {education.cgpa}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Education;

