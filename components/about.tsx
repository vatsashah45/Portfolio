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

    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
      I am a Software Developer working remotely from -25°C Montreal, Canada. Over the past half decade, I graduated from Concordia University with internships at notable companies like Microsoft, UNO Platform, nventive, and EventDesk. Since January of this year, I've been working at Uno Platform, building a platform for developers to build cross-platform apps with ease.
    </p>

    <p>
    <span className="italic"> When I'm not coding, </span> I like to organize or participate in hackathons, explore new technologies, work out, and travel.
    </p>

    <p>
    <span className="underline">Fun fact:</span> I have visited 9+ countries in the last 3 years.
    </p>
    </motion.section>
  );
}