import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import healthSyncImg from "@/public/healthSync.png";
import fundTrackerImg from "@/public/fundTracker.png";
import oneHRImg from "@/public/oneHR.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AAiT",
    location: "Addis Ababa, 5 Kilo",
    description:
      "Enrolled in software engineering major",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Intern",
    location: "Addis Ababa, Bole",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Addis Ababa, Bole",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    id:'fbbhnrffeirne89',
    title: "HealthSync",
    description:
      `An AI-powered platform that seamlessly connects patients with verified doctors to provide accessible, reliable, and personalized healthcare services. 
      I contributed as both a front-end developer and AI backend engineer for about a year, focusing on creating an intuitive user interface and integrating 
      advanced AI features for symptom analysis, appointment scheduling, and personalized medical recommendations. My work involved optimizing user experience, 
      ensuring data security, and enhancing AI-driven functionalities to improve patient-doctor interactions and healthcare outcomes.`,
    tags: ["React", "Next.js", "Express" , "MongoDB", "Tailwind", "Python" , "Transformers"],
    imageUrl: healthSyncImg,
  },
  {
    id:'dgvbdsrbebsduxx123',
    title: "oneHR",
    description:
      `oneHR is a comprehensive platform that automates and streamlines all core HR functions, including recruitment, employee onboarding, attendance tracking, 
      performance management, payroll processing, and compliance management. Designed to improve operational efficiency and reduce administrative overhead, 
      oneHR enables HR teams to focus on strategic initiatives. I worked on this project as a full-stack developer for 2 years, where I contributed to building 
      scalable backend APIs, designing responsive front-end interfaces, and integrating various modules to ensure seamless data flow and user experience. 
      My role also involved optimizing system performance, implementing security best practices, and collaborating closely with stakeholders to deliver features aligned with business goals.`,
    tags: ["React", "Next.js", "Tailwind", "Framer", "Antd", "Material UI"],
    imageUrl: oneHRImg,
  },
  {
    id:'cvvdkvjnektei234kgjn',
    title: "Fund Tracker",
    description:
      `Fund Tracker is a robust financial management tool designed to provide complete transparency and accountability in fund allocation. 
      It enables organizations to track funds in real-time, visualize disbursement through milestone-based workflows, and generate detailed reports to ensure every penny is accounted for. 
      I worked on this project for 6 months, contributing to both front-end and back-end development. My responsibilities included implementing secure transaction tracking, 
      designing intuitive dashboards for fund monitoring, and integrating milestone-triggered notifications to keep stakeholders informed throughout the disbursement process. 
      The platform significantly improves financial oversight and fosters trust between fund managers and beneficiaries.`,
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: fundTrackerImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
