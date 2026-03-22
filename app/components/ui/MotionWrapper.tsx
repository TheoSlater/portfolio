"use client";

import { motion, HTMLMotionProps, Variants } from "motion/react";
import React from "react";

/**
 * Variants for different animation types
 */
export const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
};

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: keyof typeof animationVariants;
  delay?: number;
  viewportOnce?: boolean;
}

/**
 * A reusable wrapper for motion animations using motion/react.
 * Provides standard variants and handles common animation props.
 */
export const MotionWrapper = ({
  children,
  variant = "fadeIn",
  delay = 0,
  viewportOnce = true,
  ...props
}: MotionWrapperProps) => {
  return (
    <motion.div
      variants={animationVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
