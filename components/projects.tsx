"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Minimalistic Mood Tracker",
    description:
      "A minimalistic mood tracker that uses my custom SVG Blob component for reactive blob animations representing emotions and moods. Open source under MIT license.",
    tags: ["Vite", "Tauri", "TypeScript"],
    year: "2025",
    link: "https://github.com/TheoSlater/mood-tracker",
    status: "In Development",
    isOpenSource: true,
  },
  {
    title: "SVG Blob Component",
    description:
      "An open source SVG Blob component library with loads of different variants and custom types. Perfect for adding organic, animated shapes to your projects.",
    tags: ["Next.js", "TypeScript", "React"],
    year: "2025",
    link: "https://github.com/TheoSlater/blob-component",
    status: "Released",
    isOpenSource: true,
  },
  {
    title: "Monolabs Landing Page",
    description:
      "A minimalistic website landing page designed for Monolabs, showcasing clean design principles and smooth user experience.",
    tags: ["Next.js", "TypeScript", "Material UI", "Framer Motion"],
    year: "2025",
    link: "https://www.monolabs.site/",
    status: "Live",
    isOpenSource: false,
  },
  {
    title: "Vocab App",
    description:
      "Scroll through endless words to expand your vocabulary. Like words, see their definitions, word types, and pronunciations in an engaging interface.",
    tags: ["Expo", "React Native", "Swift", "API Integration"],
    year: "2025",
    link: "https://www.monolabs.site/",
    status: "In Development",
    isOpenSource: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 md:pl-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A collection of projects from 2025 showcasing my approach to
            building clean, functional applications.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group p-8 hover:shadow-lg transition-all duration-300 border-border/50 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                    {project.status === "In Development" && (
                      <Badge variant="secondary" className="text-xs">
                        In Dev
                      </Badge>
                    )}
                    {project.isOpenSource && (
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1"
                      >
                        <Github className="h-3 w-3" />
                        MIT
                      </Badge>
                    )}
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>

                <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
