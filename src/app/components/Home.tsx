"use client"
import { useRef } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  return (
    <div className="pb-14 lg:pb-0">
      <Header sectionRefs={sectionRefs} />
      <Hero id="home" ref={sectionRefs.home} />
      <AboutMe id="about" ref={sectionRefs.about} />
      <Projects id="projects" ref={sectionRefs.projects} />
      <Contact id="contact" ref={sectionRefs.contact} />
      <Footer />
    </div>
  );
}
