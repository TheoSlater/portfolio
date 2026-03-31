import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";
import type { ProjectFrontmatter } from "@/lib/projects";
import { slugify } from "@/lib/formatters";
import ProjectBlogHeader from "./ProjectBlogHeader";
import { BlogClientWrapper } from "@/app/features/blog/context/BlogClientWrapper";
import { type Heading } from "./TableOfContents";

type Props = {
  project: ProjectFrontmatter & { content: string };
  children: ReactNode;
};

export default function ProjectBlogLayout({ project, children }: Props) {
  // Extract headings from raw MDX content (no hooks — server component)
  const headings: Heading[] = project.content
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s/, "").trim();
      return { id: slugify(text), text, level };
    });

  return (
    <BlogClientWrapper headings={headings}>
      <Box
        sx={{
          minHeight: "100vh",
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 20 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: "740px",
              mx: "auto",
              width: "100%",
            }}
          >
            <Box sx={{ mb: 8 }}>
              <ProjectBlogHeader project={project} />
            </Box>
            <Box sx={{ minWidth: 0 }}>{children}</Box>
          </Box>
        </Container>
      </Box>
    </BlogClientWrapper>
  );
}