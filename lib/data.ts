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
    companyName: "SallePrivee",
    title: "Web Developer Intern",
    location: "Montreal, Canada",
    description:
      "Built localized cross-platform Web application for leasing event spaces by using the MERNG Stack (MongoDB, Express, ReactJS, NodeJS and GraphQL) and React-Native. Designed and created the User Login page and the Venue Management page. Built and integrated GraphQL based API’s and NodeJS microservices. Maintained and improved the DevOps pipelines to buid and deploy the applications to AWS Cloud.",
    icon: React.createElement(LuGraduationCap),
    date: "January 2022 - April 2022",
  },
  {
    companyName: "nventive",
    title: "Mobile App Developer Intern",
    location: "Montreal, Canada",
    description:
      "Contributed to the development of the MoreRewards cross-platform (iOS, Android, UWP) mobile application in .NET (C#) and XAML (Xamarin). Designed and created the Home Page, the Offers Page and the Maps. Implemented custom animations and transitions to flex containers and forms.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - August 2022",
  },
  {
    companyName: "Uno Platform",
    title: "Software Developer Intern",
    location: "Montreal, Canada",
    description:
      "Led the team of interns to build TubePlayer - a fully functional YouTube app rebuilt on Xamarin and optimized for performance and user experience. Developed app's video playback feature, including integration with the YouTube Data API to retrieve and display videos. Implemented the search functionality with filters for video type, upload date, and duration. And also implemented the loading, error, and empty search pages.",
    icon: React.createElement(FaReact),
    date: "January 2023 - April 2023",
  },
  {
    companyName: "Microsoft",
    title: "Software Developer Intern",
    location: "Montreal, Canada",
    description:
    "Developed a GPT utterance generator. Implemented both frontend and backend functionalities, including dynamic filtering and sorting of the results. Designed and developed a system to automatically adjust filtering options based on user input files. Created a Python script to convert .xslx files to .trsX files for user downloads. Reduced project runtime by 35%.",
    icon: React.createElement(FaReact),
    date: "May 2023 - August 2023",
  },
  {
    companyName: "Uno Platform",
    title: "Software Developer",
    location: "Montreal, Canada",
    description:
    "Developed the Single Project feature of Uno Platform, creating a unified project that targets multiple platforms (iOS, Android, macOS, Windows, WebAssembly, Linux), streamlining development and maintenance process for cross-platform applications. Designed and implemented the UI & backend for a License Manager system, generating licenses, offering free trials, and transitioning users to a paid subscription model with dynamic validation and feature management for free and premium access. Improved the navigation of Uno apps by optimizing the routing logic, resulting in improved performance and user experience. Collaborated with cross-functional teams to ensure seamless integration of new features and bug fixes.",
    icon: React.createElement(FaReact),
    date: "September 2023 - Present",
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
  "Python",
  "Java",
  "C#",
  "C",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "PHP",
  "XAML",
  ".NET",
  "React",
  "NodeJS",
  "Express",
  "Docker",
  "React-Native",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "Uno Platfrom",
  "Git",
  "LaTeX",
  "Postman",
  "Heroku/Netlify",
] as const;