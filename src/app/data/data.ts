// ============================================================
// DATA.TS — Your Portfolio Data (Edit this file to personalize)
// ============================================================
// This is the ONLY file you need to edit to make the portfolio yours.
// Fill in your details below and the entire site will update automatically.
// Browse https://react-icons.github.io/react-icons/ to find icons for your skills.
// ============================================================

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiMicrosoftsqlserver,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiSpring,
  SiDotnet,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// ──────────────────────────────────────────────
// SKILLS — Add/remove your tech stack here.
// Each skill needs: name (string), icon (imported icon component), color (hex color code).
// Find icons at: https://react-icons.github.io/react-icons/
// ──────────────────────────────────────────────
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "NextJS", icon: SiNextdotjs, color: "var(--foreground)" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "var(--foreground)" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
  { name: "REST API", icon: TbApi, color: "#FF6C37" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "var(--foreground)" },
];

// ──────────────────────────────────────────────
// NAVBAR — Customize your navigation links.
// "scroll" type links scroll to a section on the page.
// "link" type links open an external URL in a new tab.
// Replace the LinkedIn and GitHub URLs with your own profile links.
// ──────────────────────────────────────────────
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/ritik-kumar13/",
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/heyritikk/",
    size: "18px",
  },
  {
    name: "Instagram",
    type: "link",
    icon: FaInstagram,
    url: "https://www.instagram.com/lamrlttlk?igsh=Nzl1N3lhZGZoY3dq",
    size: "18px",
  },
];

// ──────────────────────────────────────────────
// PROJECTS — Showcase your work here.
// For each project, provide:
//   - name: Project title
//   - description: One-line description
//   - points: 2-4 bullet points about the project
//   - techStack: Technologies used (with icon and color)
//   - liveLink: Deployed project URL (or "#" if not deployed)
//   - githubLink: GitHub repo URL (or "#" if private)
//   - image: Screenshot path — place images in /public/img/ folder
//
// You can add or remove projects as needed. Recommended: 2-4 projects.
// A demo image "projectimage.jfif" is provided — replace with your own screenshots.
// ──────────────────────────────────────────────
export const projects = [
  {
    name: "AGC On Board Workforce Solutions",
    description: "A dynamic UAE-based manpower solutions company providing highly trained and project-ready manpower.",
    points: [
      "Manpower solutions across civil construction, MEP works, and infrastructure development.",
    ],
    techStack: [
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { name: "REST API", icon: TbApi, color: "#007ACC" },
    ],
    liveLink: "https://agcgroupuae.com/",
    githubLink: "#",
    image: "/img/agc.png",
  },
  {
    name: "Planera",
    description: "A internal budget and expense management platform designed to streamline fiscal tracking for teams.",
    points: [
      "Real-time expense submission and tracking dashboard.",
    ],
    techStack: [
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { name: "REST API", icon: TbApi, color: "#007ACC" },
    ],
    liveLink: "https://planera-six.vercel.app/",
    githubLink: "#",
    image: "/img/planera.png",
  },
  {
    name: "Nexorise",
    description: "An intelligent platform for realistic hiring simulations and performance analytics.",
    points: [
      "Interactive hiring simulations to prepare candidates for real-world interviews.",
    ],
    techStack: [
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { name: "REST API", icon: TbApi, color: "#007ACC" },
    ],
    liveLink: "https://github.com/heyritikk/Nexorise",
    githubLink: "https://github.com/heyritikk/Nexorise",
    image: "/img/nexorise.png",
  },
];
// ──────────────────────────────────────────────
// PERSONAL INFO — Your profile details.
// - pfp: Path to your profile picture (place it in /public/img/)
//   A demo picture "profilepic.webp" is provided — replace with your own.
// - summary: A short paragraph about yourself (2-4 sentences)
// - location: Your city/country
// ──────────────────────────────────────────────
export const personalInfo = {
  pfp: "/img/profilepic.png", // TODO: Replace with your profile picture path
  alt: "Profile Pic",
  summary:
    "I'm a CS graduate and Program Analyst Trainee at Cognizant, working with C#, SQL, and modern web technologies. I enjoy building full-stack apps and solving real-world problems. Always eager to learn and grow as a developer.",
  location: "Chennai, India", // TODO: Replace with your location
};
// ──────────────────────────────────────────────
// EDUCATION — Your academic background.
// ──────────────────────────────────────────────
export const education = {
  college: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute", // TODO: Replace with your university
  course: "Bachelor of Technology in Computer Science", // TODO: Replace with your degree
  cgpa: "8.7", // TODO: Replace with your CGPA/GPA
  duration: "2021 - 2025", // TODO: Replace with your duration
};
// ──────────────────────────────────────────────
// EXPERIENCE — Your work history.
// Add multiple experience objects if you have more than one.
// For freelance work, set companyName to "Freelance".
// If you don't have experience yet, you can leave this as an empty array: []
// ──────────────────────────────────────────────
export const experiences = [
  {
    companyName: "Cognizant",
    url: "https://careers.cognizant.com/india-en/",
    title: "Program Analyst Trainee",
    duration: "Dec 2025 - Present",
    location: "Chennai, Tamil Nadu, India · On-site",
    points: [
      "Building enterprise solutions using C# and SQL, collaborating with cross-functional teams on software development tasks.",
    ],
  },
  {
    companyName: "Nyra AI",
    url: "https://www.getnyra.ai/",
    title: "Growth and Marketing Intern",
    duration: "Jun 2025 - Nov 2025",
    location: "Bengaluru, Karnataka, India · Remote",
    points: [
      "Drove growth strategies and executed user acquisition campaigns for an AI-powered marketing engine.",
    ],
  },
  {
    companyName: "Insight Genesis - IGAi",
    url: "https://insightgenesis.ai/",
    title: "Digital Marketing and Community Manager",
    duration: "Apr 2025 - Nov 2025",
    location: "Singapore · Remote",
    points: [
      "Managed digital marketing and grew a global Web3 community for an AI platform built on DPI.",
    ],
  },
  {
    companyName: "UCTalent",
    url: "https://uctalent.io/",
    title: "QA/QC & Community Manager",
    duration: "Dec 2024 - Apr 2025",
    location: "Vietnam · Remote",
    points: [
      "Conducted QA/QC and managed community operations for an on-chain Web3 recruitment platform.",
    ],
  },
  {
    companyName: "Association Blockchain Asia (ABA)",
    url: "https://asiaweb3aiassociation.org/",
    title: "Community Manager",
    duration: "Nov 2024 - May 2025",
    location: "Singapore · Remote",
    points: [
      "Managed community growth and led social marketing for a blockchain association across Asia.",
    ],
  },
];
