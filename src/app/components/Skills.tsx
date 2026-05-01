"use client";
import React from "react";
import { skillCategories } from "../data/data";
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
      <h2 className="text-2xl font-semibold mb-3 self-start">
        <span className="animated-text-gradient">Tech Stack</span>
      </h2>

      <div className="flex w-full max-w-4xl flex-col gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col gap-3 rounded-xl border border-[var(--border)] p-4 md:p-5"
          >
            <h3 className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">
              {category.title}
            </h3>
            <div className="flex gap-2 md:gap-2.5 flex-wrap justify-center">
              {category.items.map((skill) => {
                const Icon = skill.icon;
                const color = skill.color;
                return (
                  <motion.span
                    variants={rotateYVariant}
                    initial="initial"
                    whileInView="whileInView"
                    whileHover={{ rotateZ: -7, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    key={`${category.title}-${skill.name}`}
                    viewport={{ once: true }}
                    className="inline-flex justify-center items-center gap-2 px-4 rounded-full py-1.5 text-sm md:text-base border border-[var(--border)]"
                  >
                    <Icon style={{ color }} />
                    {skill.name}
                  </motion.span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

