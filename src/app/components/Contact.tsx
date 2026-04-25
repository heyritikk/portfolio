"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FiMail } from "react-icons/fi";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";

const Contact = React.forwardRef<HTMLElement, { id: string }>(({ id }, ref) => {
  const [status, setStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.target as HTMLFormElement;
    const website = form.website.value;
    if (website) return;
    const email = form.email.value;
    const message = form.message.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setTimeout(() => {
        setEmailError("");
      }, 4000);
      return;
    } else {
      setEmailError("");
    }
    if (message.trim().length < 10) {
      setMessageError("Please enter at least 10 characters.");
      setTimeout(() => {
        setMessageError("");
      }, 4000);
      return;
    } else {
      setMessageError("");
    }

    const formData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      email,
      message,
    };

    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setStatus(null);
    }, 4000);
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id={id}
      ref={ref}
      className="bg-[var(--background)] tracking-wide sm:tracking-wider flex flex-col justify-center items-center text-[var(--foreground)] py-16 px-6"
    >
      <motion.p
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="text-sm md:text-base text-center text-[var(--muted)] dark:text-gray-200 font-medium"
      >
        GET IN TOUCH
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl md:text-7xl [font-family:var(--font-instrument-serif)] pt-2 sm:pt-4 px-4 mb-7 md:mb-12"
      >
        Let&apos;s{" "}
        <span className="animated-text-gradient italic">Connect</span>
      </motion.h2>
      <div className="w-full sm:max-w-2xl md:max-w-[54rem] border border-[var(--border)] p-4 md:p-8 rounded-2xl shadow-md">
        <div className="flex max-md:flex-col gap-4">
          <motion.a
            href="mailto:yourname@email.com" // TODO: Replace with your email address
            className="flex flex-1 items-center md:hover:bg-[var(--surface-hover)] text-base md:text-lg justify-center gap-2 py-3 border border-[var(--border)] rounded-lg "
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <FiMail className="text-base md:text-lg" /> yourname@email.com{" "}
            {/* TODO: Replace with your email */}
          </motion.a>
        </div>

        <motion.div
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 py-6"
        >
          <div className="flex-1 h-px bg-[var(--border)] opacity-50" />
          <p className="text-[var(--muted)] text-sm md:text-base font-medium whitespace-nowrap">
            Or send a message
          </p>
          <div className="flex-1 h-px bg-[var(--border)] opacity-50" />
        </motion.div>

        <motion.form className="w-full space-y-4" onSubmit={handleSubmit}>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-1"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              aria-describedby="email-error"
              placeholder="Your Email"
              className="w-full px-4 py-3.5 border text-base md:text-lg placeholder:text-base md:placeholder:text-lg bg-[var(--surface)] border-[var(--border)] rounded-lg focus:outline-none"
              required
            />
            {emailError && (
              <p id="email-error" className="text-red-500 text-xs">
                {emailError}
              </p>
            )}
          </motion.div>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <motion.textarea
              placeholder="Your Message"
              name="message"
              id="message"
              aria-describedby="message-error"
              rows={5}
              className="w-full px-4 py-3.5 border text-base md:text-lg placeholder:text-base md:placeholder:text-lg bg-[var(--surface)] border-[var(--border)] rounded-lg focus:outline-none resize-none"
              required
            />
            {messageError && (
              <p id="message-error" className="text-red-500 text-xs">
                {messageError}
              </p>
            )}
            <div className="absolute left-[-9999px]">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </motion.div>
          <motion.button
            type="submit"
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            disabled={loading}
            className={`w-full bg-[var(--card-bg)] px-4 py-3 rounded-lg text-base md:text-lg font-medium border border-[var(--border)] md:hover:bg-[var(--surface-hover)] flex justify-center ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {status && (
          <p
            aria-live="polite"
            className="mt-4 text-center text-base md:text-lg font-medium text-blue-600"
          >
            {status}
          </p>
        )}
      </div>
    </motion.section>
  );
});

Contact.displayName = "Contact";
export default Contact;
