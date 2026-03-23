import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Theo Slater",
  description:
    "Learn about Theo Slater — 16-year-old Full-Stack Developer, Founder of Monolabs, and passionate builder of minimal, powerful software using React, TypeScript, and Go.",
  alternates: {
    canonical: "https://theoslater.xyz/about",
  },
  openGraph: {
    title: "About Theo Slater",
    description:
      "Theo Slater — 16-year-old Full-Stack Developer & Founder of Monolabs.",
    url: "https://theoslater.xyz/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
