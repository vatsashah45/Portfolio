"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}

    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
      I am a Computer Science graduate from Concordia University. My journey includes internships at notable companies like Microsoft, UNO Platform, and Nventive, where I honed my skills in various programming languages and technologies. I particularly enjoy <span className="italic">building and optimizing web and mobile applications</span>. My expertise lies in <span className="font-medium">.NET, React, TypeScript Node.js, and mobile app development</span>. I thrive on challenges and <span className="underline">love</span> solving complex problems through code. Currently, I am seeking a <span className="font-medium">full-time role</span> where I can contribute and grow as a software developer.
    </p>

    <p>
      When not coding, I lead and organize large-scale events like ConUHacks, a testament to my <span className="italic">leadership and organizational skills</span>. My hobbies include <span className="font-medium">exploring new technologies, working out, and engaging in creative projects</span>. I'm always eager to <span className="font-medium">learn and grow</span> both professionally and personally.
    </p>
    </motion.section>
  );
}