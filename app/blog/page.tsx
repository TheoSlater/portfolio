"use client";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FadeIn from "../components/FadeIn";
import Navigation from "../components/Navigation";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "How I Got Into Coding as a Kid.",
    description:
      "You're never too young (or too curious) to start coding. Here's my story of picking up programming before I even knew what it really was.",
    date: "May 2024",
    href: "/blog/coding-as-a-kid",
  },
];

export default function Blog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FadeIn>
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          placeItems: "center",
          height: "100dvh",
          overflow: "hidden",
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
        }}
      >
        <Stack direction="column" alignItems="center">
          <Navigation />
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              border: 1,
              borderColor: "divider",
              padding: { xs: 1.5, sm: 5 },
              borderRadius: 4,
              boxSizing: "border-box",
            }}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={isMobile ? 2 : 4}
              alignItems={isMobile ? "center" : "flex-start"}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  fontSize={{ xs: "2rem", sm: "3rem" }}
                  textAlign={isMobile ? "center" : "left"}
                >
                  Blogs.
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" fontWeight={"400"} sx={{ mb: 4 }}>
                Here I share my thoughts, experiences, and learnings about
                software development, music, and other topics that interest me.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={4} sx={{ mt: 4 }}>
              {BLOG_POSTS.map((post) => (
                <Box key={post.href}>
                  <Link
                    href={post.href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="600"
                      sx={{
                        mb: 1,
                        transition: "opacity 0.2s ease",
                        "&:hover": { opacity: 0.7 },
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Link>
                  <Typography variant="body1" sx={{ opacity: 0.7, mb: 2 }}>
                    {post.date}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    {post.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FadeIn>
  );
}
