"use client";
import { Instagram, MailOutline } from "@mui/icons-material";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blogs" },
];

export default function Navigation() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const NavLinks = () => (
    <Box gap={3} display="flex" alignItems="center">
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            position: "relative",
          }}
        >
          <Typography
            variant="body1"
            fontSize={20}
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: -4,
                left: 0,
                backgroundColor: "primary.main",
                transform: pathname === href ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "bottom right",
                transition: "transform 0.3s ease",
              },
              "&:hover::after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            {label}
          </Typography>
        </Link>
      ))}
    </Box>
  );

  const SocialLinks = () => (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        height: "100%",
      }}
    >
      <Link
        href="https://www.instagram.com/theoslatwork/"
        style={{
          display: "flex",
          alignItems: "center",
          height: "24px",
          lineHeight: 0,
        }}
      >
        <Instagram
          sx={{
            fontSize: 24,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.1)" },
            display: "block",
          }}
        />
      </Link>
      <Link
        href="mailto:theoslater4@gmail.com"
        style={{
          display: "flex",
          alignItems: "center",
          height: "24px",
          lineHeight: 0,
        }}
      >
        <MailOutline
          sx={{
            fontSize: 24,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.1)" },
            display: "block",
          }}
        />
      </Link>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", p: 2, width: "100%" }}>
      {isMobile ? (
        <>
          <Stack direction={"column"} gap={2} sx={{ width: "100%" }}>
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <SocialLinks />
            </Box>
            <NavLinks />
          </Stack>
        </>
      ) : (
        <>
          <NavLinks />
          <Box sx={{ marginLeft: "auto" }}>
            <SocialLinks />
          </Box>
        </>
      )}
    </Box>
  );
}
