"use client"

import { SectionHeader } from "./section-header"
import { ProjectCard, type Project } from "./project-card"

const projects: Project[] = [
  {
    title: "Minimalistic Mood Tracker",
    description:
      "A minimalistic mood tracker that uses custom SVG Blob components for reactive blob animations representing emotions and moods.",
    link: "https://github.com/TheoSlater/mood-tracker",
    badges: ["Vite", "Tauri", "In Dev"],
  },
  {
    title: "SVG Blob Component",
    description:
      "An open source SVG Blob component library with loads of different variants and custom types. Perfect for adding organic, animated shapes.",
    link: "https://github.com/TheoSlater/blob-component",
    badges: ["MIT", "React", "Released"],
  },
  {
    title: "Monolabs Landing Page",
    description:
      "A minimalistic website landing page designed for Monolabs, showcasing clean design principles and smooth user experience.",
    link: "https://www.monolabs.site/",
    badges: ["Next.js", "Framer Motion", "Live"],
  },
  {
    title: "Vocab App",
    description:
      "Scroll through endless words to expand your vocabulary. Like words, see their definitions, word types, and pronunciations.",
    link: "https://www.monolabs.site/",
    badges: ["Expo", "React Native", "In Dev"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Projects" subtitle="Selected work" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
