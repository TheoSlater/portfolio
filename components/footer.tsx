"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border px-6 py-8"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          Built by Theo Slater.{" "}
          <Link href="https://monolabs.site" target="_blank" className="transition-colors hover:text-primary">
            Monolabs
          </Link>
          .
        </p>

        <p className="font-mono text-[10px] text-muted-foreground/30">{new Date().getFullYear()}</p>
      </div>
    </motion.footer>
  )
}
