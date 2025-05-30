"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [open, setOpen] = useState<number | null>(
    () => experiencesData.length - 1
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[50rem] mx-auto"
    >
      <SectionHeading>My experience</SectionHeading>

      <ul className="mt-10 divide-y divide-gray-200 dark:divide-gray-700">
        {experiencesData.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.companyName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.title} · {item.location}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl select-none"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden pb-6"
                  >
                    {item.bulletPoints && (
                      <motion.ul
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                          collapsed: {},
                        }}
                        className="list-disc space-y-1 pl-5"
                      >
                        {item.bulletPoints.map((bp, idx) => (
                          <motion.li
                            key={idx}
                            variants={{
                              open: { opacity: 1, x: 0 },
                              collapsed: { opacity: 0, x: -10 },
                            }}
                            transition={{ duration: 0.25 }}
                          >
                            {bp}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
