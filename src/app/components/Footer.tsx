"use client";
import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-[var(--background)] border-t border-[var(--border)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-5">
        <a href="#home" className="inline-flex items-center">
          <span className="text-xs uppercase tracking-[0.35em] font-semibold text-[var(--foreground)]">
            RITIK KUMAR
          </span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <a
            href="/resume.pdf" // TODO: Replace with your actual downloadable file URL
            className="text-base hover:underline"
          >
            Download the KAWA Analytics Python Library
          </a>

          <div className="space-y-3 max-w-md">
            <h3 className="text-3xl font-semibold">Subscribe to our newsletter</h3>
            <div className="flex max-sm:flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-base outline-none focus:ring-1 focus:ring-[var(--foreground)]"
              />
              <button
                type="button"
                className="rounded-lg bg-black text-white px-6 py-3 text-base font-medium hover:opacity-90 transition"
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>

        <div className="md:justify-self-end flex flex-col items-start md:items-end gap-5">
          <div className="flex items-center gap-3">
            <span className="text-base">Social Media</span>
            <a
              href="https://x.com/rittik_kumarr"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-md border border-[var(--border)] grid place-items-center hover:bg-[var(--muted)] transition"
            >
              <FaXTwitter className="size-4" />
            </a>
            <a
              href="https://github.com/heyritikk/"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-md border border-[var(--border)] grid place-items-center hover:bg-[var(--muted)] transition"
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-kumar13/"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-md border border-[var(--border)] grid place-items-center hover:bg-[var(--muted)] transition"
            >
              <FaLinkedinIn className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/lamrlttlk?igsh=Nzl1N3lhZGZoY3dq"
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 rounded-md border border-[var(--border)] grid place-items-center hover:bg-[var(--muted)] transition"
            >
              <FaInstagram className="size-4" />
            </a>
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-semibold">Explore</h4>
            <ul className="text-base space-y-1 text-[var(--muted-foreground)]">
              <li><a href="#home" className="hover:text-[var(--foreground)]">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--foreground)]">About</a></li>
              <li><a href="#contact" className="hover:text-[var(--foreground)]">Contact</a></li>
              <li><a href="#" className="hover:text-[var(--foreground)]">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--foreground)]">Security</a></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
