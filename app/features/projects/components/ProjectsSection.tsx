"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectCard from "./ProjectCard";
import UniversalChip from "../../../components/ui/universal-chip";

const projectsData = [
  {
    year: "2026",
    title: "Desktop Copilot",
    description:
      "An always-on-top AI overlay for your desktop. Built with Tauri, routing all AI requests locally via Ollama.",
    image: "/desktop-copilot-mockup.png",
  },
];

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        // Use standard background matching the app's default paper/bg
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              mb: { xs: 6, md: 9 },
              gap: 4,
            }}
          >
            <Box sx={{ maxWidth: "500px" }}>
              <Box sx={{ mb: 3.5 }}>
                <UniversalChip
                  label={
                    <Box
                      component="span"
                      sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
                    >
                      <WorkIcon fontSize="small" sx={{ fontSize: 16 }} />
                      Projects
                    </Box>
                  }
                />
              </Box>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "2.25rem", md: "3rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Milestones in the
                <br />
                learning journey
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.6,
                  maxWidth: "600px",
                }}
              >
                Each project marks a step forward, showcasing my growth and journey as a developer.
                Explore how I&apos;ve tackled challenges and built solutions along the way.
              </Typography>
            </Box>

            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              href="#" // Update link as needed
              sx={{
                borderRadius: "50px", // Fully rounded as per image
                px: 3,
                py: 1,
                borderColor: "divider",
                color: "text.primary",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                "&:hover": {
                  borderColor: "text.primary",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              View all projects
            </Button>
          </Box>

          {/* Grid container with explicit max-width applied to constraint the project cards, leaving empty space to the right */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 380px))",
              },
              gap: { xs: 3, md: 4 },
              justifyContent: "flex-start",
            }}
          >
            {projectsData.map((project, index) => (
              <Box key={index}>
                <Box style={{ height: "100%" }}>
                  <ProjectCard
                    year={project.year || "2024"}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
