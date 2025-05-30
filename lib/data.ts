import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import redditESClassifier from "@/public/RedditESClassifier.png";
import webCrawler from "@/public/WebCrawler.png";
import spotifyExplicitnessPredictor from "@/public/SpotifyExplicitnessPredictor.png";
import rushHour from "@/public/RushHour.png";
import dropoutNeuralNets from "@/public/DropoutNeuralNets.png";
import eternity from "@/public/Eternity.png";
import beastFit from "@/public/BeastFit.png";

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
    bulletPoints: [
      "Built a localized cross-platform Web application for leasing event spaces by using the MERNG Stack (MongoDB, Express, ReactJS, NodeJS and GraphQL) and React-Native.",
      "Developed the UI, built and integrated GraphQL API’s and NodeJS microservices.",
      "Maintained and improved the DevOps pipelines to buid and deploy the applications to AWS Cloud.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "January 2022 - April 2022",
  },
  {
    companyName: "nventive",
    title: "Mobile App Developer Intern",
    location: "Montreal, Canada",
    bulletPoints: [
      "Contributed to the development of the MoreRewards cross-platform application using Xamarin.Forms (C# & XAML).",
      "Built key screens (Home, Offers, Map), incorporating real-time data displays and location-based functionality.",
      "Implemented custom animations and transitions to flex containers and forms.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - August 2022",
  },
  {
    companyName: "Uno Platform",
    title: "Software Developer Intern",
    location: "Montreal, Canada",
    bulletPoints: [
      "Led the team of interns to build TubePlayer - a YouTube app rebuilt on Xamarin and optimized for performance and user experience.",
      "Developed app's video playback feature, including integration with the YouTube Data API to retrieve and display videos.",
      "Implemented the search functionality with filters and developed the loading, error, and empty search pages.",
    ],
    icon: React.createElement(FaReact),
    date: "January 2023 - April 2023",
  },
  {
    companyName: "Microsoft",
    title: "Software Developer Intern",
    location: "Montreal, Canada",
    bulletPoints: [
      "Developed end-to-end functionality of a GPT utterance generator to support conversational AI scenarios.",
      "Built a system to automatically adjust filtering options based on user input files, and dynamically filter and sort the results.",
      "Created a Python-based automation tool to convert .xlsx files to .trsx, streamlining user downloads and data workflows.",
      "Optimized project performance by reducing the runtime by 35%.",
    ],
    icon: React.createElement(FaReact),
    date: "May 2023 - August 2023",
  },
  {
    companyName: "Uno Platform",
    title: "Software Developer",
    location: "Montreal, Canada",
    bulletPoints: [
      "Developed the Hot Design tool, a visual designer for cross-platform .NET applications (iOS, Android, macOS, Windows, WebAssembly, Linux) that transforms the running app into an interactive design surface, accessible from any IDE on any OS.",
      "Designed and implemented the complete UI, created the API’s and backend logic for a License Manager system - including license generation, dynamic trial handling, feature gating, and automated validity checks for free and premium tiers.",
      "Integrated telemetry across all Uno Platform tools for user behaviour tracking and analysis.",
      "Published official documentation and sample applications (like Chefs) to demonstrate Uno Platform features.",
      "Collaborated with cross-functional teams to ensure seamless integration of new features and bug fixes.",
    ],
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
    imageUrl: redditESClassifier,
  },
  {
    title: "Web Crawler",
    description:
      "This program crawls a website and analyzes the text of the pages it visits using k-means clustering and sentiment analysis.",
    tags: ["Python"],
    imageUrl: webCrawler,
  },
  {
    title: "Spotify Explicitness Predictor",
    description:
      "Application for predicting the explicitness of songs on Spotify. The code uses machine learning algorithms to classify songs as either explicit or non-explicit.",
    tags: ["Python", "NLP"],
    imageUrl: spotifyExplicitnessPredictor,
  },
  {
    title: "Rush Hour Game",
    description:
      "This application implements various search algorithms to solve the Rush Hour game.",
    tags: ["Python", "NLP"],
    imageUrl: rushHour,
  },
  {
    title: "HFESTS",
    description:
      "The Health Facility Employee Status Tracking System (HFESTS) is a database system developed to help healthcare facilities keep track of their employees’ health status during the COVID-19 pandemic.",
    tags: ["PHP", "HTML", "SQL", "CSS"],
    imageUrl: rushHour,
  },
  {
    title: "Dropout in Neural Networks",
    description:
      "This program implements dropout in neural networks on multiple datasets. Dropout is a regularization technique that can prevent overfitting in neural networks by randomly dropping out some neurons during training.",
    tags: ["Python"],
    imageUrl: dropoutNeuralNets,
  },
  {
    title: "Eternity",
    description:
      "ETERNITY is a scientific calculator that can compute certain complex special functions.",
    tags: ["Python"],
    imageUrl: eternity,
  },
  {
    title: "BeastFit",
    description:
      "A full stack website built as a concept for a montreal-based fitness company.",
    tags: ["PHP", "JavaScript", "HTML", "SQL", "CSS"],
    imageUrl: beastFit,
  },
] as const;

export const skillsData = [
  "Java",
  "C",
  "C#",
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "XAML",
  "PHP",
  "CSS",
  ".NET",
  "React",
  "NodeJS",
  "React-Native",
  "Uno Platform",
  "MongoDB",
  "MySQL",
  "GraphQL",
  "Git",
  "AWS",
  "Docker",
  "Postman",
  "LaTeX",
  "Vercel",
  "Heroku",
  "Netlify",
] as const;