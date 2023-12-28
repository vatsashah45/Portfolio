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
    companyName: "EventDesk",
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
    "OpenAI: Optimized the GPT-4 plugins using Langchain to allow the bot to automatically select the appropriate tool in response to user inputs. NLU Tool: Implemented the entire UI of the app. Designed and implemented dynamic filtering and sorting functionalities for the results page and developed system that automatically changes filtering options according to the user inputted file. Wrote a Python script that allowed users to download the results as a .trsX file from a .xlsx file. o Reduced project runtime by 65% through the implementation of Singleton threading.",
    icon: React.createElement(FaReact),
    date: "May 2023 - August 2023",
  },
  {
    companyName: "Uno Platform",
    title: "Software Developer Intern",
    location: "Montreal, Canada",
    description:
    "Uno Platform",
    icon: React.createElement(FaReact),
    date: "September 2023 - December 2023",
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