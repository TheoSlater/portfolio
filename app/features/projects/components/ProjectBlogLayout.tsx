import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";
import type { ProjectFrontmatter } from "@/lib/projects";
import ProjectBlogHeader from "./ProjectBlogHeader";
import TableOfContents, { type Heading } from "./TableOfContents";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

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
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: 8, md: 12 },
        pb: { xs: 12, md: 20 },
      }}
    >
      <Container maxWidth="lg">
        {/* Two-column grid — header + content share left column, ToC in right */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 740px) minmax(180px, 220px)",
            },
            gap: { xs: 0, md: "60px" },
            alignItems: "start",
          }}
        >
          {/* Left column: header + body content share the same edge */}
          <Box>
            <Box sx={{ mb: 8 }}>
              <ProjectBlogHeader project={project} />
            </Box>
            <Box sx={{ minWidth: 0 }}>{children}</Box>
          </Box>

          {/* Right column: sticky ToC sidebar — offset to align with body text */}
          <Box sx={{ display: { xs: "none", md: "block" }, pt: { md: 12 } }}>
            <TableOfContents headings={headings} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}