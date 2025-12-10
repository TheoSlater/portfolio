"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export interface Project {
  title: string
  description: string
  link: string
  badges?: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-hover group relative border border-border bg-card p-6 transition-all hover:border-primary/30"
      style={{ borderRadius: "6px" }}
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary"
      >
        <ExternalLink className="h-4 w-4" />
      </Link>

      <div className="space-y-3">
        <h3 className="font-mono text-lg text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.badges && project.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                style={{ borderRadius: "4px" }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
