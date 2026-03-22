"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import UniversalChip from "../components/ui/universal-chip";

export default function AboutPage() {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 16, pb: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 4 }}>
          <UniversalChip
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

        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          I'm Theo Slater,
          <br />
          <Box component="span" sx={{ color: "text.secondary" }}>
            a full-stack developer.
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          I'm a 15-year-old developer and founder of Monolabs. I'm passionate
          about building minimal, powerful software that solves real-world
          problems. My expertise spans across React, TypeScript, Golang, and
          various modern web technologies.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          When I'm not coding, I'm exploring new technologies, contributing to
          open-source, or working on my next big project. I believe in the
          power of simplicity and efficiency in software design.
        </Typography>
      </Container>
    </Box>
  );
}
