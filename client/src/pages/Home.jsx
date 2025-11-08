import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import headshotImage from "./images/headShot.png";
import dashboardImage from "./images/CrownClothingImage.png";
import skillbridgeimage from "./images/SkillBridgeImage.png";
import almaMaterImage from "./images/almaMater.png";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const skills = [
    { name: "HTML5", icon: "fab fa-html5", category: "Core Technologies" },
    { name: "C++", icon: "fab fa-html5", category: "Core Technologies" },
    { name: "Python", icon: "fab fa-html5", category: "Core Technologies" },
    { name: "CSS3", icon: "fab fa-css3-alt", category: "Core Technologies" },
    { name: "JavaScript", icon: "fab fa-js", category: "Core Technologies" },
    { name: "TypeScript", icon: "fab fa-js", category: "Core Technologies" },
    { name: "React", icon: "fab fa-react", category: "Frameworks" },
    { name: "Next.js", icon: "fas fa-layer-group", category: "Frameworks" },
    { name: "Tailwind CSS", icon: "fas fa-wind", category: "Frameworks" },
    { name: "Git", icon: "fab fa-git-alt", category: "Tools" },
    { name: "Netlify", icon: "fab fa-git-alt", category: "Tools" },
    { name: "GitHub", icon: "fab fa-github", category: "Tools" },
    { name: "Figma", icon: "fab fa-figma", category: "Tools" },
    { name: "VS Code", icon: "fas fa-code", category: "Tools" },
    { name: "npm", icon: "fab fa-npm", category: "Tools" },
  ];

  const projects = [
    {
      title: "Alma Mater",
      description: "Alma Matr is a React-based alumni networking platform that lets users explore and connect through searchable, filterable profiles. It features a clean UI, responsive design for a seamless community experience.",
      imageUrl: almaMaterImage,
      technologies: ["React", "JavaScript", "MUI", "SCSS", "Netlify"],
      liveUrl: "https://almamatr.netlify.app/",
      githubUrl: "https://github.com/Prabh0608/Alma-Mater",
      featured: true,
    },
    {
      title: "Crown Clothing",
      description: "Crown Clothing is a React-based e-commerce app featuring user authentication, real-time data from a cloud database, and dynamic cart management — built to demonstrate modern frontend architecture, state handling, and responsive UI design.",
      imageUrl: dashboardImage,
      technologies: ["React", "Firebase", "Redux", "SCSS", "JavaScript", "Netlify"],
      liveUrl: "https://lucent-douhua-4e4020.netlify.app/",
      githubUrl: "https://github.com/Prabh0608/Crown-Clothing",
    },
    {
      title: "Skill Bridge",
      description: "Skill Bridge is a web platform built under the PM Internship Scheme to recommend internships to underprivileged students. It features a clean, responsive UI with an Indian flag–inspired theme, dynamic internship listings, and smart recommendations based on skills and interests.",
      imageUrl: skillbridgeimage,
      technologies: ["React", "JavaScript", "HTML", "SCSS", "Node.js", "Netlify"],
      liveUrl: "https://skillbrdg.netlify.app/",
      githubUrl: "https://github.com/Prabh0608/Skill-Bridge",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} onThemeToggle={toggleTheme} />

      <HeroSection
        name="Prabhjot Singh Saini"
        role="Front-End Developer"
        tagline="I’m a passionate front-end developer eager to learn and grow through real-world experience. I enjoy creating clean, user-focused designs and turning ideas into interactive realities."
        avatarUrl={headshotImage}
      />

      <AboutSection
        intro="Hey there! I’m Prabhjot, a front-end developer who loves bringing ideas to life on the web. I enjoy turning simple concepts into clean, interactive, and meaningful experiences that people actually enjoy using.

I’ve worked on projects that mix creativity with logic — building apps with smooth filters, dynamic data, and user-friendly designs. I’m all about writing code that feels thoughtful and crafting interfaces that just click.

Outside of coding, I’m usually exploring new design styles, discovering clever UI ideas, or planning my next project challenge. I love learning new things and finding better ways to make the web feel more alive."
        highlights={[
          "Expert in React, JavaScript, and modern web frameworks",
          "Proven track record of building scalable, high-performance applications",
          "Strong advocate for clean code, best practices, and continuous learning",
          "Experienced in collaborating with cross-functional teams",
          "Committed to accessibility and creating inclusive digital experiences",
        ]}
      />

      <SkillsSection skills={skills} />

      <ProjectsSection projects={projects} />

      <ContactSection email="sainiprabhjot75@gamil.com" />

      <Footer />
    </div>
  );
}
