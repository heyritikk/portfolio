"use client";
import React from "react";
import { skills } from "../data/data";
import { motion } from "motion/react";
import { fadeInUpLeft, rotateYVariant } from "../data/variants";
const Skills = () => {
  return (
    <motion.section
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className="bg-[var(--background)] flex flex-col justify-center max-sm:px-1"
    >
      <h2 className="text-lg font-semibold mb-2 self-start">
        Tech Stack
      </h2>

      <div className="flex gap-1.5 md:gap-2 flex-wrap max-w-3xl ">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const color = skill.color;
          return (
            <motion.span
              variants={rotateYVariant}
              initial="initial"
              whileInView="whileInView"
              whileHover={{ rotateZ: -7, rotateX: 5 }} 
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={index}
              viewport={{once: true}}
              className="inline-flex justify-center items-center gap-2 px-3 rounded-full py-1 text-xs border border-[var(--border)]"
            >
              <Icon style={{ color: color }} />
              {skill.name}
            </motion.span>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;

