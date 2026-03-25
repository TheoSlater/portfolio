"use client";

import { Box, Typography, Link, Container, alpha } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        pt: 6,
        pb: 4,
        mt: { xs: 6, md: 10 },
        zIndex: 2100,
        position: "relative",
        background: (theme) => alpha(theme.palette.background.default, 0.8),
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left side - Name, subtitle, and copyright */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: { md: 120 },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  mb: 0.5,
                  letterSpacing: "-0.01em",
                }}
              >
                Theo Slater
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.9rem",
                  opacity: 0.8,
                }}
              >
                Amateur Full-Stack Developer
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{
                mt: { xs: 4, md: 0 },
                color: "text.secondary",
                opacity: 0.5,
                fontSize: "0.75rem",
              }}
            >
              © {new Date().getFullYear()} Theo Slater — All rights reserved
            </Typography>
          </Box>

          {/* Right side - Link columns */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 4, sm: 8 },
              flexWrap: "wrap",
            }}
          >
            {/* Me column */}
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  mb: 2,
                  display: "block",
                  opacity: 0.6,
                }}
              >
                ME
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  { label: "Projects", href: "/projects" },
                  { label: "Blog", href: "/blog" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#10b981",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* This site column */}
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  mb: 2,
                  display: "block",
                  opacity: 0.6,
                }}
              >
                SITE
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="https://github.com/theoslater/theoslater.is-a.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#10b981",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Source code
                </Link>
              </Box>
            </Box>

            {/* Elsewhere column */}
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  mb: 2,
                  display: "block",
                  opacity: 0.6,
                }}
              >
                ELSEWHERE
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="https://monkeytype.com/profile/theoslater"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#10b981",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  Monkeytype
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
