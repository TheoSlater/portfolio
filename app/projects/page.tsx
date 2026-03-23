import type { Metadata } from "next";
import ProjectsSection from "../features/projects/components/ProjectsSection";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Theo Slater — Full-Stack Developer and Founder of Monolabs. Explore minimal, powerful software built with React, TypeScript, and Go.",
  alternates: {
    canonical: "https://theoslater.is-a.dev/projects",
  },
  openGraph: {
    title: "Projects | Theo Slater",
    description:
      "Software projects built by Theo Slater, including Monolabs and more.",
    url: "https://theoslater.is-a.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <Box sx={{ pt: 10 }}>
      <ProjectsSection />
    </Box>
  );
}
