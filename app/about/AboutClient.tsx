"use client";

import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Avatar,
} from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import UniversalChip from "../components/ui/universal-chip";
import { MotionWrapper } from "../components/ui/MotionWrapper";
import Link from "next/link";

export function AboutClient() {
  const theme = useTheme();

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
                    <PersonRounded fontSize="small" sx={{ fontSize: 16 }} />
                    About Me
                  </Box>
                }
              />
            </Box>
          </MotionWrapper>

          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: { xs: 3, md: 4 },
                mb: 4,
              }}
            >
              <MotionWrapper variant="slideUp" noTrigger>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/155472213?s=400&u=68c99ad5f3d9ebaf368491bb2284dac23f09c8ac&v=4"
                  sx={{
                    width: { xs: 80, md: 120 },
                    height: { xs: 80, md: 120 },
                    border: `2px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: `0 10px 30px -10px ${alpha("#10b981", 0.3)}`,
                  }}
                />
              </MotionWrapper>

              <MotionWrapper variant="slideUp" noTrigger>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1.75rem", md: "3rem" },
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
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <MotionWrapper variant="slideUp" noTrigger>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.7,
                    maxWidth: "800px",
                  }}
                >
                  I&apos;m a 16-year-old developer and founder of{" "}
                  <Link
                    href="https://monolabs.site/"
                    style={{ textDecoration: "underline" }}
                  >
                    Monolabs
                  </Link>
                  . I&apos;m passionate about building minimal, powerful
                  software that solves real-world problems. My expertise spans
                  across React, TypeScript, Golang, and various modern web
                  technologies.
                </Typography>
              </MotionWrapper>

              <MotionWrapper variant="slideUp" noTrigger>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.7,
                    maxWidth: "800px",
                  }}
                >
                  When I&apos;m not coding, I&apos;m exploring new technologies,
                  contributing to open-source, or working on my next big
                  project. I believe in the power of simplicity and efficiency
                  in software design.
                </Typography>
              </MotionWrapper>
            </Box>
          </Box>
        </MotionWrapper>
      </Container>
    </Box>
  );
}
