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
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import Navigation from "../components/Navigation";

export default function Home() {
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
                  Experience.
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" fontWeight={"400"} sx={{ mb: 4 }}>
                I have some experience in software development, with most of my
                work focused on web development. I&apos;ve contributed to
                projects ranging from simple sites to more complex web
                applications, and I&apos;m always looking to deepen my skills
                and take on new challenges.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={4} sx={{ mt: 4 }}>
              <Box>
                <Typography variant="h4" fontWeight={"600"} sx={{ mb: 2 }}>
                  Freelance
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  I&apos;ve collaborated with a few clients to bring their web
                  applications to life. I&apos;m currently open to freelance
                  work — so if you&apos;ve got a project in mind or just want to
                  connect, feel free to{" "}
                  <Link
                    href="mailto:theoslater4@gmail.com"
                    style={{
                      fontWeight: "600",
                      color: "inherit",
                      textDecoration: "none",
                      borderBottom: "2px solid",
                    }}
                    className="hover-opacity"
                  >
                    reach out
                  </Link>
                  .
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FadeIn>
  );
}
