"use client";
import { motion } from "motion/react";
import { experiences } from "../data/data";
import { fadeInUpLeft } from "../data/variants";
const Experience = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className="bg-[var(--background)] w-full mx-auto pb-5 border-b border-[var(--border)] max-sm:px-1"
    >
      <div className="gap-4 text-base md:text-lg">
        <h2 className="text-2xl font-medium mb-4">Experience</h2>

        {experiences.map((experience, index) => (
          <div key={index} className="mb-6 last:mb-0">
            {experience.companyName !== "Freelance" && (
              <h3 className="flex justify-between items-center">
                <span className="font-medium">{experience.companyName}</span>
                <span>{experience.duration}</span>
              </h3>
            )}
            <h3 className="flex justify-between items-center mt-1 mb-3">
              <span className="font-medium">{experience.title}</span>
              <span>
                {experience.companyName === "Freelance"
                  ? experience.duration
                  : experience.location}
              </span>
            </h3>

            <motion.ul
              className="mt-2 space-y-2 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {experience.points.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="border-l-3 dark:border-gray-200 border-gray-700 pl-3"
                >
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

