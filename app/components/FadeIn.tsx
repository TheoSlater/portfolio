"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      {children}
    </Box>
  );
}
