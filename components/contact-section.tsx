"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { SectionHeader } from "./section-header"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Contact" subtitle="Get in touch" />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg space-y-6"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="your_name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground/70">
              Message
            </label>
            <textarea
              id="message"
              placeholder="say_hello();"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full resize-none border border-border bg-transparent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              style={{ borderRadius: "6px" }}
              required
            />
          </div>

          <button
            type="submit"
            className="group w-full border border-border px-6 py-3 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
            style={{ borderRadius: "6px" }}
          >
            <span className="flex items-center justify-center gap-2">
              Send Message
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
