"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "C#",
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 md:pl-32 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-light tracking-tight mb-6"
            >
              About
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Just before Covid-19 hit, I started exploring coding with Python
                and JavaScript. I began with small projects, which quickly led
                me into the world of web development.
              </p>
              <p>
                I started creating websites for friends and family, and soon
                after, I began building my own passion projects. I'm currently
                studying GCSE Business and Computer Science, and I'm always
                driven by a deep love for learning and building.
              </p>
              <p>
                Whether it's experimenting with new technologies or solving
                real-world problems, I'm constantly looking for new challenges
                and opportunities to grow.
              </p>
            </motion.div>

            <div className="mt-12 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background flex items-center justify-center">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    Freelance Software Engineer
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nov 2022 - Present
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building custom software solutions for clients ranging from
                    startups to small businesses. Projects include web
                    applications, automation scripts, and consulting on
                    architecture and scaling.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">GCSE</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    2024 - Present
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Computer Science, Business, Music
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-light tracking-tight mb-6"
            >
              Skills
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-background border border-border text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
