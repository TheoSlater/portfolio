"use client";

import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        pt: 4,
        pb: 2,
        px: { xs: 2, sm: 3 },
        mt: { xs: 3, md: 6 },
        zIndex: 2100,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Left side - Name and subtitle */}
        <Box sx={{ mb: { xs: 1, md: 0 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "1.1rem",
              mb: 0.5,
            }}
          >
            Theo Slater
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.85rem",
            }}
          >
            Amateur Full-Stack Developer
          </Typography>
        </Box>

        {/* Right side - Link columns */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, sm: 4, md: 5 },
            flexWrap: "wrap",
          }}
        >
          {/* Me column */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                mb: 1,
                display: "block",
                opacity: 0.7,
              }}
            >
              Me
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link
                href="/projects"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontSize: "0.9rem",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontSize: "0.9rem",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Blog
              </Link>
            </Box>
          </Box>

          {/* This site column */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                mb: 1,
                display: "block",
                opacity: 0.7,
              }}
            >
              This site
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link
                href="https://github.com/theoslater/theoslater.is-a.dev"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontSize: "0.9rem",
                  "&:hover": {
                    color: "primary.main",
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
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                mb: 1,
                display: "block",
                opacity: 0.7,
              }}
            >
              Elsewhere
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link
                href="https://monkeytype.com/profile/theoslater"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontSize: "0.9rem",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Monkeytype
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          display: "block",
          mt: 4,
          color: "text.secondary",
          opacity: 0.6,
          fontSize: "0.75rem",
        }}
      >
        © Theo Slater - All rights reserved
      </Typography>
    </Box>
  );
}
