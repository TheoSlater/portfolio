"use client";

import { Github, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/TheoSlater" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/theoslatwork/",
  },
  { icon: Mail, label: "Email", href: "mailto:theoslater1@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 md:pl-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-6"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12"
          >
            Want to chat? Just shoot me an email and I'll respond whenever I
            can. I will ignore all soliciting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Theo Slater. Designed and built with
            care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
