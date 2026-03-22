"use client";

import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import UniversalChip from "../components/ui/universal-chip";
import { MotionWrapper } from "../components/ui/MotionWrapper";

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 16, pb: 10 }}>
      <Container maxWidth="md">
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
                    <PersonRounded fontSize="small" sx={{ fontSize: 16 }} />
                    About Me
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
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              I&apos;m Theo Slater,
              <br />
              <Box component="span" sx={{ color: "text.secondary" }}>
                a full-stack developer.
              </Box>
            </Typography>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" noTrigger>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              I&apos;m a 15-year-old developer and founder of Monolabs. I&apos;m passionate
              about building minimal, powerful software that solves real-world
              problems. My expertise spans across React, TypeScript, Golang, and
              various modern web technologies.
            </Typography>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" noTrigger>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
              open-source, or working on my next big project. I believe in the
              power of simplicity and efficiency in software design.
            </Typography>
          </MotionWrapper>
        </MotionWrapper>
      </Container>
    </Box>
  );
}
