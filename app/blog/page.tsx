"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { ChatTeardropDots } from "../components/Icons/NavIcons";
import UniversalChip from "../components/ui/universal-chip";

export default function BlogPage() {
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
                <ChatTeardropDots fontSize="small" sx={{ fontSize: 16 }} />
                Blog
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
          Thoughts &
          <br />
          <Box component="span" sx={{ color: "text.secondary" }}>
            writings.
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            mb: 8,
          }}
        >
          Exploring technology, design, and software engineering. Here I share
          my experiences and insights from the projects I build.
        </Typography>

        <Box
          sx={{
            p: 4,
            borderRadius: 4,
            border: "1px dashed",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Stay tuned! The blog is currently under development.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
