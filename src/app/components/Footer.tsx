"use client";
import { motion } from "motion/react";
import { fadeInUp } from "../data/variants";
import { FiArrowUpRight, FiInstagram, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-[var(--background)] overflow-hidden pt-16 pb-16 lg:pb-24 text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col z-10 relative">
        
        {/* Top Social Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pb-10 border-b border-gray-200 dark:border-gray-800/60">
          <div className="flex items-center gap-4">

            <div className="flex flex-col justify-center gap-[0.2rem]">
              <span className="text-[1.4rem] font-normal tracking-widest text-[#6b7280] uppercase leading-none">Portfolio</span>
              <span className="font-outfit font-normal text-[1.4rem] tracking-wide text-[#3b82f6] uppercase leading-none">ritik</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 mt-8 md:mt-0">
            <span className="text-[1.1rem] font-normal text-[#1a1f36] dark:text-gray-300">Social Media</span>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-[var(--background)] hover:bg-gray-50 dark:hover:bg-gray-900 transition shadow-sm drop-shadow-sm text-[#1a1f36] dark:text-gray-300">
                <span className="font-bold text-[1.2rem] leading-none text-gray-700 dark:text-gray-300">X</span>
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-[var(--background)] hover:bg-gray-50 dark:hover:bg-gray-900 transition shadow-sm drop-shadow-sm text-[#1a1f36] dark:text-gray-300">
                <FiInstagram className="size-[1.3rem] text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-[var(--background)] hover:bg-gray-50 dark:hover:bg-gray-900 transition shadow-sm drop-shadow-sm text-[#1a1f36] dark:text-gray-300">
                <FiLinkedin className="size-[1.3rem] text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://github.com/heyritikk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-[var(--background)] hover:bg-gray-50 dark:hover:bg-gray-900 transition shadow-sm drop-shadow-sm text-[#1a1f36] dark:text-gray-300">
                <FiGithub className="size-[1.3rem] text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-start mt-16 md:mt-20">
          
          <div className="flex flex-col max-w-xl">
            <a href="#" className="inline-flex items-center gap-4 text-gray-500 hover:text-[#3b82f6] transition group font-semibold text-[1.1rem] md:text-[1.2rem] mb-12 w-fit">
              <FiDownload className="size-6 text-[#3b82f6] group-hover:-translate-y-1 transition-transform" />
              Download the Ritik Kumar Resume
            </a>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-normal text-[#1a1f36] dark:text-gray-200 tracking-tight">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-[380px] rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-[var(--background)] px-6 py-4 text-[1.1rem] text-gray-700 dark:text-gray-300 outline-none focus:ring-1 focus:ring-gray-300 shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative z-20 font-medium"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0f172a] dark:bg-gray-100 text-white dark:text-black px-8 py-4 text-[1.1rem] font-bold hover:opacity-90 transition shadow-md whitespace-nowrap relative z-20"
                >
                  Book a demo <FiArrowUpRight className="size-[1.3rem]" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start mt-20 md:mt-0 md:pr-16 relative z-20">
            <h4 className="font-bold text-[1.3rem] text-[#1a1f36] dark:text-gray-200 mb-8">Explore</h4>
            <ul className="text-[1.15rem] md:text-[1.25rem] space-y-6 text-gray-400 dark:text-gray-500 font-normal tracking-wide">
              <li><a href="#home" className="hover:text-gray-800 dark:hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-gray-800 dark:hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-gray-800 dark:hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Graphic Cropper Wrapper */}
      <div className="w-full relative overflow-hidden mt-16 md:mt-20 z-0">
        <div className="w-full pointer-events-none flex flex-col items-center justify-end select-none -mb-10 md:-mb-16 lg:-mb-20">
          <div className="font-outfit text-[clamp(2.5rem,7vw,4.5rem)] font-normal tracking-[0.4em] md:tracking-[0.8em] text-[#e2e4e9] dark:text-zinc-800/40 ml-[0.8em] mb-[-2.5%] relative z-0">
            K U M A R
          </div>
          <div className="font-outfit text-[clamp(8rem,28vw,32rem)] font-black leading-[0.75] bg-clip-text text-transparent bg-gradient-to-b from-[#e2e4e9] to-transparent dark:from-zinc-800/60 dark:to-[var(--background)] tracking-[0.1em] pb-4">
            ritik
          </div>
        </div>
      </div>

      {/* Copyright Links flow naturally below the cropped graphic */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-[0.85rem] md:text-[0.95rem] text-gray-400 dark:text-gray-500 tracking-wide mt-16 md:mt-24 relative z-20">
        <p>©2025 Ritik Kumar. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition">Cookies Policy</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

