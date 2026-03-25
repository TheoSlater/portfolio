"use client";

import { motion, HTMLMotionProps, Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Variants for different animation types
 */
export const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.4,
      },
    },
  },
};

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: keyof typeof animationVariants;
  delay?: number;
  viewportOnce?: boolean;
  noTrigger?: boolean;
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
  noTrigger = false,
  ...props
}: MotionWrapperProps) => {
  const variantTransition = (animationVariants[variant] as any)?.visible
    ?.transition;

  return (
    <motion.div
      variants={animationVariants[variant]}
      initial={noTrigger ? undefined : "hidden"}
      whileInView={noTrigger ? undefined : "visible"}
      viewport={noTrigger ? undefined : { once: viewportOnce }}
      transition={{
        ...variantTransition,
        delay: delay || (variantTransition as any)?.delay || 0,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
