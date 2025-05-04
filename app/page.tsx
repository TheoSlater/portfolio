"use client";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FadeIn from "./components/FadeIn";
import Navigation from "./components/Navigation";

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
              borderRadius: 4,
              padding: { xs: 1.5, sm: 5 },
              boxSizing: "border-box",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "divider",
            }}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={4}
              alignItems={isMobile ? "center" : "flex-start"}
            >
              <Avatar
                sx={{
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  fontSize: { xs: 32, sm: 40 },
                  boxShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
                }}
              >
                T
              </Avatar>
              <Box sx={{ width: "100%", alignSelf: "center" }}>
                <Typography
                  variant="h3"
                  fontWeight="600"
                  fontSize={{ xs: "2rem", sm: "3rem" }}
                  textAlign={isMobile ? "center" : "left"}
                >
                  Hello, I&apos;m Theo.
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ marginTop: 2 }}>
              <Typography
                variant="h6"
                fontWeight={"400"}
                textAlign={isMobile ? "center" : "left"}
              >
                I am a 15 year old full stack junior developer, guitarist and
                pianist based in the UK. I am passionate about building clean,
                practical and user-friendly applications. I have experience in a
                variety of programming languages and frameworks, and I am always
                looking to learn new skills and take on new challenges. I am
                currently working on a few personal projects, and I am open to
                freelance work.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </FadeIn>
  );
}
