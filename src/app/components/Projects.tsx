"use client";
import React, { useEffect, useState } from "react";
import { projects } from "../data/data";
import Image from "next/image";
import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpDelay,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";

const Projects = React.forwardRef<HTMLElement, { id: string }>(
  ({ id }, ref) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
      const mqLg = window.matchMedia("(min-width: 1024px)");
      const handlerLg = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
      setIsLargeScreen(mqLg.matches);
      mqLg.addEventListener("change", handlerLg);

      const mqMd = window.matchMedia("(min-width: 768px)");
      const handlerMd = (e: MediaQueryListEvent) => setIsMdScreen(e.matches);
      setIsMdScreen(mqMd.matches);
      mqMd.addEventListener("change", handlerMd);

      return () => {
        mqLg.removeEventListener("change", handlerLg);
        mqMd.removeEventListener("change", handlerMd);
      };
    }, []);

    return (
      <section
        id={id}
        ref={ref}
        className="bg-[var(--background)] tracking-wide sm:tracking-wider flex flex-col justify-center items-center text-[var(--foreground)] py-6 sm:py-16"
      >
        <motion.p
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-sm md:text-base text-center text-[var(--muted)] dark:text-gray-200 font-medium"
        >
          EXPLORE MY CREATIONS
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-7xl [font-family:var(--font-instrument-serif)] pt-2 sm:pt-4 px-4 pb-1 mb-7 md:mb-12"
        >
          Project{" "}
          <span className="animated-text-gradient italic">Showcase</span>
        </motion.h2>

        <motion.div
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 lg:w-5xl "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project flex max-lg:flex-col max-lg:pb-4 bg-[var(--card-bg)] gap-4 my-5 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition sticky border border-[var(--border)] max-md:h-[80svh] max-lg:h-auto"
              style={{
                top: `calc(${isLargeScreen ? "72px" : isMdScreen ? "50px" : "20px"} + ${index * (isMdScreen ? 80 : 50)}px)`,
                zIndex: index + 1,
              }}
            >
              <motion.div
                variants={fadeInUpDelay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="projectinfo flex flex-1 flex-col p-5 md:p-9 lg:h-[430px] min-h-0 max-lg:overflow-y-auto"
              >
                <h3 className="text-3xl md:text-5xl [font-family:var(--font-instrument-serif)] border-b border-[var(--border)] pb-3 font-medium">
                  {project.name}
                </h3>
                <p className="mt-3 text-lg md:text-xl">{project.description}</p>
                <ul>
                  {project.points.map((listItem, index) => (
                    <li className="text-base md:text-lg pt-2.5 flex items-start" key={index}>
                      <MdOutlineKeyboardArrowRight className="inline-block size-5 mt-0.5 mr-1" />{" "}
                      {listItem}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-4">
                  {project.techStack.map((tech, i) => {
                    const Icon = tech.icon;
                    const color = tech.color;
                    return (
                      <motion.span
                        variants={rotateYVariant}
                        initial="initial"
                        whileInView="whileInView"
                        whileHover={{ rotateZ: -7, rotateX: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        viewport={{ once: true }}
                        key={i}
                        className="flex items-center gap-2 text-sm md:text-base px-3.5 py-1.5 rounded-full border border-[var(--border)]"
                      >
                        <Icon style={{ color }} /> {tech.name}
                      </motion.span>
                    );
                  })}
                </div>

                <motion.div
                  variants={rotateYVariant}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="flex gap-4 mt-5"
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-base border border-[var(--border)] hover:border-none shadow-md dark:hover:bg-[var(--surface-hover)] lg:hover:bg-gray-800 lg:hover:text-white transition-transform duration-100 ease-out hover:scale-105 hover:-translate-y-0.5"
                  >
                    GitHub
                    <FaGithub />
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-base border border-[var(--border)] hover:border-none shadow-md lg:hover:bg-blue-600 lg:hover:text-white transition-transform duration-100 ease-out hover:scale-105 hover:-translate-y-0.5"
                  >
                    Live Site
                    <FiExternalLink />
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInUpDelay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative lg:flex-1 overflow-visible"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    className="relative projectimg lg:absolute lg:top-20 lg:right-[-55%] w-full h-48 sm:h-80 md:h-96 lg:w-[167%] border-2 border-black dark:border-white rounded-[1.5rem] lg:h-[22rem] hover:cursor-pointer shadow-2xl bg-zinc-900/5 dark:bg-white/5 p-1"
                    whileHover={isLargeScreen ? { x: -320, y: -55 } : {}}
                    transition={
                      isLargeScreen
                        ? { duration: 0.3, ease: "easeOut", delay: 0.3 }
                        : {}
                    }
                  >
                    <Image
                      src={project.image}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={`Screenshot of ${project.name} - ${project.description}`}
                      priority={index === 0}
                      className="rounded-[1.25rem] object-cover"
                    />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    );
  },
);
Projects.displayName = "Projects";

export default Projects;
