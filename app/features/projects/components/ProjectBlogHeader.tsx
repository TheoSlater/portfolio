import { Box, Typography, Chip } from "@mui/material";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/lib/projects";

type Props = {
  project: ProjectFrontmatter;
};

export default function ProjectBlogHeader({ project }: Props) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="overline"
        sx={{
          color: "text.secondary",
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          display: "block",
          mb: 2,
        }}
      >
        {project.year}
      </Typography>

      <Typography
        component="h1"
        variant="h3"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          mb: 2.5,
          maxWidth: "800px",
        }}
      >
        {project.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: "1rem",
          lineHeight: 1.65,
          maxWidth: "620px",
          mb: 5,
        }}
      >
        {project.description}
      </Typography>

      {project.image && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "rgba(255,255,255,0.03)",
          }}
        >
          <Box sx={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
