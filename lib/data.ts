import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// Add my own project images here
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Emotion and Sentiment Classifier",
    description:
      "Machine learning-based tool that analyzes and categorizes emotions and sentiments. It identifies various emotional states like happiness or sadness from textual data, useful in applications such as social media analysis and customer feedback.",
    tags: ["Python", "NLP"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Web Crawler",
    description:
      "This program crawls a website and analyzes the text of the pages it visits using k-means clustering and sentiment analysis.",
    tags: ["Python"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Spotify Explicitness Predictor",
    description:
      "Application for predicting the explicitness of songs on Spotify. The code uses machine learning algorithms to classify songs as either explicit or non-explicit.",
    tags: ["Python", "NLP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Rush Hour Game",
    description:
      "This application implements various search algorithms to solve the Rush Hour game.",
    tags: ["Python", "NLP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "HFESTS",
    description:
      "The Health Facility Employee Status Tracking System (HFESTS) is a database system developed to help healthcare facilities keep track of their employees’ health status during the COVID-19 pandemic.",
    tags: ["PHP", "HTML", "SQL", "CSS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Dropout in Neural Networks",
    description:
      "This program implements dropout in neural networks on multiple datasets. Dropout is a regularization technique that can prevent overfitting in neural networks by randomly dropping out some neurons during training.",
    tags: ["Python"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Eternity",
    description:
      "ETERNITY is a scientific calculator that can compute certain complex special functions.",
    tags: ["Python"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "BeastFit",
    description:
      "A full stack website built as a concept for a montreal-based fitness company.",
    tags: ["PHP", "JavaScript", "HTML", "SQL", "CSS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C",
  "C#",
  ".NET",
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "HTML",
  "XAML",
  "CSS",
  "PHP",
  "React",
  "React-Native",
  "Node.js",
  "Apollo",
  "Express",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Git",
] as const;