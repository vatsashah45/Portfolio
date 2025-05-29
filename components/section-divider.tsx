"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.hr
      className="my-16 h-px w-full max-w-[16rem] bg-gray-200 border-0 dark:bg-white/20"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.125, type: "spring", stiffness: 100 }}
    />
  );
}
