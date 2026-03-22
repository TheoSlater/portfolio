"use client";

import { motion } from "motion/react";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.main>
  );
}
