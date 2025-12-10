"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="grid-bg relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              Full-Stack Developer
            </motion.p>

            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Theo Slater
              <span className="caret ml-1 inline-block h-12 w-[3px] bg-primary md:h-16" />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-md text-lg text-muted-foreground"
          >
            15-year-old developer & founder of{" "}
            <Link
              href="https://monolabs.site"
              target="_blank"
              className="text-primary transition-colors hover:text-primary/80"
            >
              Monolabs
            </Link>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 border border-border px-6 py-3 text-sm transition-all hover:border-primary hover:text-primary"
              style={{ borderRadius: "6px" }}
            >
              Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
