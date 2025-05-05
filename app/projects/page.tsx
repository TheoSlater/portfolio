"use client";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Link as MuiLink,
} from "@mui/material";
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
                  Projects.
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" fontWeight={"400"} sx={{ mb: 4 }}>
                I&apos;m into solving problems and building clean, practical
                solutions—usually just for fun. Here&apos;s some open source
                stuff I&apos;ve contributed to or built along the way.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={4} sx={{ mt: 4 }}>
              <Box>
                <Typography variant="h4" fontWeight={"600"} sx={{ mb: 2 }}>
                  Ollama Chatbot
                </Typography>
                <Typography variant="h6" sx={{ mb: 2, opacity: 0.9 }}>
                  A chatbot web app that uses Ollama to locally host a LLM.
                  It&apos;s built in Vite, Typescript and MUI.
                </Typography>
                <MuiLink
                  href="https://github.com/TheoSlater/chatbot-ui"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    opacity: 0.8,
                    transition: "opacity 0.2s ease",
                    "&:hover": {
                      opacity: 1,
                      textDecoration: "none",
                    },
                  }}
                >
                  View Project →
                </MuiLink>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </FadeIn>
  );
}
