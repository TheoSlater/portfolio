"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "./section-header"

const skills = ["React", "JavaScript", "TypeScript", "Golang", "Node.js", "Rust", "C#", "Python"]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="About" subtitle="Who I am" />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a 15-year-old full-stack developer passionate about building minimal, powerful software. As the
              founder of Monolabs, I focus on creating tools that are both beautiful and functional.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My approach to development emphasizes clean code, thoughtful design, and user-centric experiences. I
              believe in the power of simplicity and the elegance of well-crafted solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground/70">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  style={{ borderRadius: "6px" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
