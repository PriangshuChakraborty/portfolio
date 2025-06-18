import { FaJs } from "react-icons/fa6";
import { SiNextdotjs, SiSpringboot, SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedis } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

import waveBoard from "./assets/projectImage/waveBoard.png";
import bonglang from "./assets/projectImage/bonglang.png";
import ytAdAvoid from "./assets/projectImage/yt-ad-avoid.png";
import clactor from "./assets/projectImage/clactor.png";
import snakyRun from "./assets/projectImage/snakeGame.png";
import { title } from "framer-motion/client";

export const navData = [
  // "Home",
  // "Skills",
  // "About",
  // "Projects",
  // "Experiences",
  // "Contact",
  {
    title: "Home",
    link: "home",
  },
  {
    title: "Skills",
    link: "skill",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Projects",
    link: "project",
  },
  {
    title: "Experiences",
    link: "experience",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

export const skillsData = [
  {
    title: "JavaScript",
    icon: FaJs,
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
  },
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "CSS",
    icon: FaCss3,
  },
  {
    title: "React",
    icon: FaReact,
  },
  {
    title: "Next.js",
    icon : SiNextdotjs,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "Redux",
    icon: SiRedux,
  },
  {
    title: "Node",
    icon: SiNodedotjs,
  },
  {
    title: "Express",
    icon: SiExpress,
  },
  {
    title: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title : "Spring Boot",
    icon: SiSpringboot,
  },
  {
    title: "Socket.io",
    icon: SiSocketdotio,
  },
  {
    title: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    title: "Redis",
    icon: SiRedis,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
  {
    title: "Kafka",
    icon: SiApachekafka,
  },
  {
    title: "Git",
    icon: FaGitAlt,
  },
];

export const projectData = [
  {
    id: 1,
    title: "Wave Board",
    description:
      "Real-time collaborative whiteboard platform enabling multi-user interaction through advanced drawing tools, rich text capabilities, integrated chat communication, dynamic user activity tracking, interactive reaction mechanisms, instant notifications, comprehensive session management, and seamless workspace sharing for enhanced team creativity and productivity.",
    techStack:
      "React.Js, Tailwind CSS, Socket.IO, HTML5 Canvas, Vercel, Render",
    image: waveBoard,
    websiteLink: "https://wave-board.vercel.app/",
    githubLink: "https://github.com/PriangshuChakraborty/Wave-Board",
  },
  {
    id: 2,
    title: "Bonglang Playground & Bonglang",
    description:
      "Bonglang Playground is a web-based code editor for Bonglang, a fun programming language with keywords in Bengali, featuring syntax highlighting, live code execution, auto-completion of brackets and string literals, code suggestions, and integrated documentation.",
    techStack: "React.Js, Tailwind CSS, Monaco-editor, Vercel, JavaScript",
    image: bonglang,
    websiteLink: "https://bonglang.vercel.app/",
    githubLink: "https://github.com/PriangshuChakraborty/bonglang_playground",
  },
  {
    id: 3,
    title: "YouTube Ad Avoid",
    description:
      "YouTube Ad Avoid, a Chrome extension, enhances your viewing experience by automatically skipping YouTube ads. It speeds up ads and clicks the skip button, ensuring seamless, uninterrupted entertainment.",
    techStack: "JavaScript, HTML, CSS, manifest.json",
    image: ytAdAvoid,
    websiteLink:
      "https://www.linkedin.com/posts/priangshu-chakraborty-4a94b3256_connections-youtube-chromeextension-activity-7180796006681260032-eLbt?utm_source=share&utm_medium=member_desktop",
    githubLink: "https://github.com/PriangshuChakraborty/YouTube-Ad-Avoid",
  },
  {
    id: 4,
    title: "Calctor",
    description:
      "A user-friendly calculator app designed for quick and accurate calculations. Features include basic arithmetic operations, a clean interface, responsive design for an efficient, seamless experience.",
    techStack: "HTML, CSS, JavaScript",
    image: clactor,
    websiteLink: "https://calctor.vercel.app/",
    githubLink:
      "https://github.com/PriangshuChakraborty/LGMVIP/tree/main/webtask4-calculator",
  },
  {
    id: 5,
    title: "Snaky Run",
    description:
      "Snake Game where the snake grows by eating food. Game Over occurs if the snake hits a wall, collides with itself, or triggers custom rules for added challenges.",
    techStack: "HTML, CSS, JavaScript",
    image: snakyRun,
    websiteLink: "https://snaky-run.vercel.app/",
    githubLink: "https://github.com/PriangshuChakraborty/snake_game",
  },
];

export const experienceData = [
  {
    title: "Directorate of Technical Education, Government of West Bengal",
    role: "Backend Developer",
    duration: "Mar 2025 - May 2025",
    description:
    "Developed and implemented the complete backend and database for online Letter Tracking System for  Directorate of Technical Education, allowing their officials to submit, track, and monitor government letters."
  },
  {
    title: "Vaibwork",
    role: "Fullstack Developer",
    duration: "Sep 2024 - Feb 2025",
    description:
      "As a full-stack developer at Vaibwork, a digital solutions startup, I manage the complete lifecycle of website development, from initial coding to deployment. My portfolio includes projects for organizations like Aetherwave, NCQAC - IIT KGP(Development Phase), and contributions to Tribalwed.",

  },
  {
    title: "Dev Nexus 1.O",
    role: "Frontend Developer",
    duration: "Jun 2024 - Aug 2024",
    description:
      "As a frontend developer at Dev Nexus 1.0, an 8-hour offline hackathon, I collaborated with developers to build a dynamic, user-friendly website, implementing components for seamless navigation and visually appealing interfaces.",
  },
  {
    title: "Enginerds 2k24",
    role: "Backend Developer",
    duration: "May 2024 - Aug 2024",
    description:
      "As a backend developer at Enginerds 2k24, our college annual tech fest, I worked on the backend of the official website of Enginerds 2k24, ensuring smooth functionality, efficient data management, and secure user interactions.",
  },
  {
    title: "Web Development Intern",
    role: "Frontend Intern",
    duration: "Aug 2023 - Sep 2023",
    description:
      "As a frontend intern at a Prodigy InfoTech, LetsGrowMore, Oasis Infobyte, I honed my skills in frontend development, creating responsive, visually appealing websites, and learning to integrate design elements with functionality for a seamless user experience.",
  },
];
