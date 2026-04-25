// ============================================================
// DATA.TS — Your Portfolio Data (Edit this file to personalize)
// ============================================================
// This is the ONLY file you need to edit to make the portfolio yours.
// Fill in your details below and the entire site will update automatically.
// Browse https://react-icons.github.io/react-icons/ to find icons for your skills.
// ============================================================

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiMongodb,
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
  SiFramer,
} from "react-icons/si";
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
  { name: "NextJS", icon: SiNextdotjs, color: "var(--foreground)" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "var(--foreground)" },
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
    url: "https://www.linkedin.com/in/yourprofile/", // TODO: Replace with your LinkedIn URL
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/yourusername", // TODO: Replace with your GitHub URL
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
    name: "E-Commerce Platform", // TODO: Replace with your project name
    description: "A full-stack online store with cart and payment integration.",
    points: [
      "User authentication and profile management.",
      "Product catalog with search and filters.",
      "Shopping cart and Stripe payment integration.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "https://your-project-link.vercel.app", // TODO: Replace with your live project URL
    githubLink: "https://github.com/yourusername/project-repo", // TODO: Replace with your GitHub repo URL
    image: "/img/projectimage.jfif", // TODO: Replace with your project screenshot (place in /public/img/)
  },
  {
    name: "Real-Time Chat App", // TODO: Replace with your project name
    description: "A messaging platform with real-time communication.",
    points: [
      "Real-time messaging with Socket.IO.",
      "Group chats and direct messages.",
      "Responsive design for mobile and desktop.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "var(--foreground)" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "https://your-project-link.vercel.app", // TODO: Replace with your live project URL
    githubLink: "https://github.com/yourusername/project-repo", // TODO: Replace with your GitHub repo URL
    image: "/img/projectimage.jfif", // TODO: Replace with your project screenshot (place in /public/img/)
  },
  {
    name: "Task Management Dashboard", // TODO: Replace with your project name
    description: "A productivity app for managing tasks and tracking progress.",
    points: [
      "Drag and drop task organization.",
      "User authentication with Firebase.",
      "Analytics dashboard with charts.",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    liveLink: "https://your-project-link.vercel.app", // TODO: Replace with your live project URL
    githubLink: "https://github.com/yourusername/project-repo", // TODO: Replace with your GitHub repo URL
    image: "/img/projectimage.jfif", // TODO: Replace with your project screenshot (place in /public/img/)
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
  pfp: "/img/profilepic.webp", // TODO: Replace with your profile picture path
  alt: "Profile Pic",
  summary:
    "I'm a passionate developer who loves building web applications. I enjoy solving complex problems and creating user-friendly experiences. Always eager to learn new technologies and contribute to exciting projects.", // TODO: Write your own summary
  location: "Chennai, India", // TODO: Replace with your location
};
// ──────────────────────────────────────────────
// EDUCATION — Your academic background.
// ──────────────────────────────────────────────
export const education = {
  college: "Your University Name", // TODO: Replace with your university
  course: "Bachelor of Technology in Computer Science", // TODO: Replace with your degree
  cgpa: "8.5", // TODO: Replace with your CGPA/GPA
  duration: "2020 - 2024", // TODO: Replace with your duration
};
// ──────────────────────────────────────────────
// EXPERIENCE — Your work history.
// Add multiple experience objects if you have more than one.
// For freelance work, set companyName to "Freelance".
// If you don't have experience yet, you can leave this as an empty array: []
// ──────────────────────────────────────────────
export const experiences = [
  {
    companyName: "Tech Company Inc.", // TODO: Replace with your company name
    title: "Software Developer", // TODO: Replace with your job title
    duration: "2024 - Present", // TODO: Replace with your duration
    location: "Remote", // TODO: Replace with your work location
    points: [
      "Developed and maintained web applications using React and Node.js.", // TODO: Replace with your experience points
      "Collaborated with cross-functional teams to deliver features on time.",
      "Implemented responsive designs and optimized application performance.",
      "Participated in code reviews and contributed to best practices.",
    ],
  },
];
