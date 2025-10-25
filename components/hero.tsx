"use client";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Light mode colors - soft but present pastels
  const lightColors = ["#e0f2fe", "#ddd6fe", "#fce7f3", "#ffe4e6"];

  // Dark mode colors - deep, dark tones with subtle color
  const darkColors = ["#0f0a1a", "#1a0f20", "#0a1520", "#1a0f15"];

  const colors = !mounted
    ? lightColors
    : resolvedTheme === "dark"
      ? darkColors
      : lightColors;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 md:pl-32 relative overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-100">
        <MeshGradient
          width="100%"
          height="100%"
          colors={colors}
          distortion={0.5}
          swirl={0.15}
          grainMixer={0.05}
          grainOverlay={0}
          speed={0.4}
          scale={1.25}
          rotation={10}
          offsetX={0}
          offsetY={0}
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl w-full relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-muted-foreground tracking-wide uppercase"
            >
              Full-Stack Software Developer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance"
            >
              Hi, I'm Theo.
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full Stack Amateur Developer with a passion for technology and a
            love for building creative, functional solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View my work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
