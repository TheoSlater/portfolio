"use client";

import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import { EditRounded } from "@mui/icons-material";
import UniversalChip from "../components/ui/universal-chip";
import { MotionWrapper } from "../components/ui/MotionWrapper";

export default function BlogPage() {
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
                fontSize: { xs: "2.5rem", md: "4rem" },
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
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: "600px",
                mb: 8,
              }}
            >
              Insights and experiences from my journey as a developer—exploring
              ideas, overcoming challenges, and sharing lessons learned along the
              way.
            </Typography>
          </MotionWrapper>

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
              <Typography variant="body1" color="text.secondary">
                Stay tuned! The blog is currently under development.
              </Typography>
            </Box>
          </MotionWrapper>
        </MotionWrapper>
      </Container>
    </Box>
  );
}
