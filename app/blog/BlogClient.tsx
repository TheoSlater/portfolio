"use client";

import { Box, Container, Typography, alpha, Grid } from "@mui/material";
import { ConstructionOutlined, EditRounded } from "@mui/icons-material";
import UniversalChip from "../components/ui/universal-chip";
import { MotionWrapper } from "../components/ui/MotionWrapper";
import { BlogFrontmatter } from "@/lib/blog";
import ProjectCard from "../features/projects/components/ProjectCard";

interface BlogClientProps {
  posts: BlogFrontmatter[];
}

export function BlogClient({ posts }: BlogClientProps) {
  return (
    <Box sx={{ pt: 16, pb: 10 }}>
      <Container maxWidth="lg">
        <MotionWrapper variant="container">
          <MotionWrapper variant="slideUp" noTrigger>
            <Box sx={{ mb: 4 }}>
              <UniversalChip
                sx={{
                  backgroundColor: alpha("#10b981", 0.1),
                  border: `1px solid ${alpha("#10b981", 0.2)}`,
                  color: "#10b981",
                  fontWeight: 600,
                  p: 1,
                  px: 2,
                  height: "auto",
                  "& .MuiChip-label": {
                    p: 0,
                  },
                }}
                label={
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <EditRounded sx={{ fontSize: 14 }} />
                    Blog
                  </Box>
                }
              />
            </Box>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" noTrigger>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                mb: 4,
                fontSize: { xs: "2.25rem", md: "3rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "text.primary",
              }}
            >
              Learning, Building, and
              <br />
              Documenting
            </Typography>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" noTrigger>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                maxWidth: "600px",
                mb: 8,
              }}
            >
              Insights and experiences from my journey as a developer—exploring
              ideas, overcoming challenges, and sharing lessons learned along
              the way.
            </Typography>
          </MotionWrapper>

          {posts.length > 0 ? (
            <MotionWrapper variant="slideUp" noTrigger>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(2, minmax(0, 500px))",
                  },
                  gap: { xs: 4, md: 6 },
                }}
              >
                {posts.map((post) => (
                  <ProjectCard
                    key={post.slug}
                    year={post.year}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    url={`/blog/${post.slug}`}
                  />
                ))}
              </Box>
            </MotionWrapper>
          ) : (
            <MotionWrapper variant="slideUp" noTrigger>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: "1px dashed",
                  borderColor: "divider",
                  textAlign: "center",
                }}
              >
                <ConstructionOutlined sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  The blog is currently under development.
                </Typography>
              </Box>
            </MotionWrapper>
          )}
        </MotionWrapper>
      </Container>
    </Box>
  );
}
