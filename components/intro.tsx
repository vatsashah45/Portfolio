"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsLinkedin, BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-32 flex flex-col items-center justify-center gap-10 px-4 sm:flex-row sm:gap-16"
    >
      {/* ––––– Avatar card ––––– */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 12 }}
        className="group relative isolate h-48 w-48 flex-shrink-0 rounded-2xl"
      >
        {/* blurred glow */}
        <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-pink/40 via-brand-purple/30 to-brand-orange/30 blur-[50px] opacity-60 transition duration-500 group-hover:opacity-90" />
        {/* glass card */}
        <div className="h-full w-full overflow-hidden rounded-2xl backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 ring-1 ring-inset ring-white/40 dark:ring-gray-600/40">
          <Image
            src="/vatsa_pfp.jpg"
            alt="Vatsa portrait"
            fill
            sizes="192px"
            className="object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      {/* ––––– Text & actions ––––– */}
      <div className="max-w-xl text-center sm:text-left">
        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
        >
          Hello, I’m&nbsp;
          <span className="relative inline-block">
            Vatsa
            {/* animated accent underline */}
            <motion.span
              layoutId="headline-underline"
              className="absolute -bottom-1 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-orange"
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Software developer with&nbsp;
          <span className="font-medium text-gray-900 dark:text-gray-100">
            2&nbsp;years
          </span>
          &nbsp;of experience, passionate about&nbsp;
          <span className="italic">cross-platform apps</span>, currently freezing
          at&nbsp;-25 °C in Montréal. 🌨️
        </motion.p>

        {/* call-to-actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-gray-900 transition hover:scale-105 focus:scale-105 dark:text-gray-50"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-orange opacity-20 group-hover:opacity-40" />
            <span className="relative z-10 flex items-center">
              Contact&nbsp;me
              <BsArrowRight className="ml-1 transition group-hover:translate-x-1" />
            </span>
          </Link>

          <a
            href="/CV.pdf"
            download
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-gray-900 transition hover:scale-105 focus:scale-105 dark:text-gray-50"
          >
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-gray-300 dark:ring-gray-600" />
            <span className="relative z-10 flex items-center">
              Download&nbsp;CV
              <HiDownload className="ml-1 transition group-hover:translate-y-1" />
            </span>
          </a>

          {/* social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/vatsashah01/"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:-translate-y-1 dark:bg-white/10 dark:text-white/70 dark:shadow-none"
            >
              <BsLinkedin size={22} />
            </a>
            <a
              href="https://github.com/vatsashah45"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:-translate-y-1 dark:bg-white/10 dark:text-white/70 dark:shadow-none"
            >
              <FaGithubSquare size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
