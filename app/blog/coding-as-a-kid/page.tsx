import { Box, Container, Stack, Typography } from "@mui/material";
import FadeIn from "../../components/FadeIn";
import Navigation from "../../components/Navigation";

export default function BlogPost() {
  return (
    <FadeIn>
      <Container
        maxWidth="xl"
        sx={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
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
              padding: { xs: 2, sm: 4 },
              borderRadius: 4,
              boxSizing: "border-box",
              overflowY: "auto", // This allows scrolling
              maxHeight: "90vh", // Restricts the height so it becomes scrollable
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--mui-palette-divider)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "var(--mui-palette-action-hover)",
              },
            }}
          >
            <Typography variant="body1" sx={{ opacity: 0.7, mb: 1 }}>
              May 2024
            </Typography>

            <Typography
              variant="h3"
              fontWeight="600"
              fontSize={{ xs: "2rem", sm: "3rem" }}
              sx={{ mb: 3 }}
            >
              How I Got Into Coding as a Kid
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
            >
              I was 10 when I wrote my first line of Python. No clue what I was
              doing—just messing around, running random scripts, and getting way
              too excited when something actually worked. After that, I dipped
              into the front-end world with raw HTML, CSS, and JavaScript. It
              was chaotic, but fun. Python kept pulling me back, though.
              Eventually, I stumbled across React, toyed with components like
              they were building blocks, and somehow ended up launching my first
              legit website. A couple years later, I met Next.js—and yeah, that
              changed everything.
            </Typography>

            {/* Subheading for "Getting Started with Python" */}
            <Typography variant="h5" fontWeight="500" sx={{ mb: 2 }}>
              Starting with Python
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
            >
              At 10, Python seemed like a secret code language. I had no idea
              what variables were, but I learned fast that they made things
              work. I started with small projects, like simple games and
              calculators. The best part? It all just *clicked*.
            </Typography>

            {/* Subheading for "Exploring HTML, CSS, and JS" */}
            <Typography variant="h5" fontWeight="500" sx={{ mb: 2 }}>
              Diving into HTML, CSS, and JS
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
            >
              After a few Python projects, I realized I wanted to build
              something more *visual*. Enter: HTML, CSS, and JavaScript. The
              process was hands-on and raw—no frameworks, just me, a text
              editor, and the browser console. I didn&apos;t know much, but I
              loved seeing the results on screen.
            </Typography>

            {/* Subheading for "Discovering React" */}
            <Typography variant="h5" fontWeight="500" sx={{ mb: 2 }}>
              Discovering React
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
            >
              React opened my eyes to what modern web development could be.
              Components, state management, JSX—it felt like magic. I played
              around with it until I could build a full-on website. I realized I
              was onto something big, and that felt awesome.
            </Typography>

            {/* Subheading for "Next.js: A Game Changer" */}
            <Typography variant="h5" fontWeight="500" sx={{ mb: 2 }}>
              Next.js: A Game Changer
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}
            >
              A couple of years later, I came across Next.js. It was like
              React&apos;s cool cousin—fast, optimized, and easy to scale. I
              immediately jumped in, and it took my skills to a new level.
              Everything clicked in a way that made me feel like I was ready to
              take on bigger challenges.
            </Typography>

            {/* Final Conclusion */}
            <Typography variant="h5" fontWeight="600" sx={{ mb: 2, mt: 5 }}>
              Lessons Learned
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Looking back, the journey wasn&apos;t always smooth, but it was
              always worth it. The real lesson? Stay curious. Never stop playing
              around with new technologies and keep building—whether it&apos;s
              small projects or big ones. That&apos;s how you grow.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </FadeIn>
  );
}
