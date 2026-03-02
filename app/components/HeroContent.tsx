"use client";

import { Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import GreenPulse from "./Icons/GreenPulse";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroContent() {
  const scrollToNextSection = () => {
    const projectsSection = document.getElementById("bento");
    if (projectsSection) {
      const viewportHeight = window.innerHeight;
      const sectionHeight = projectsSection.offsetHeight;
      const headerOffset = 60;
      const centerOffset =
        Math.max(0, (viewportHeight - sectionHeight) / 2) + headerOffset;
      const offsetPosition =
        projectsSection.getBoundingClientRect().top +
        window.pageYOffset -
        centerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <Stack
      spacing={4}
      alignItems="flex-start"
      textAlign="left"
      sx={{
        width: "100%",
        maxWidth: "min(640px, 100%)",
      }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        style={{ willChange: "filter, transform, opacity" }}
      >
        <Chip
          icon={<GreenPulse />}
          label="Available for projects"
          sx={(theme) => ({
            p: 1,
            width: "fit-content",
            fontWeight: 500,
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
            border: `1px solid ${theme.palette.divider}`,
          })}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{ willChange: "filter, transform, opacity" }}
      >
        <Typography variant="h3" fontWeight={450}>
          Hi, I&apos;m Theo.
          <br />A software engineer.
        </Typography>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{ willChange: "filter, transform, opacity" }}
      >
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "32rem",
            },
          }}
        >
          Mainly working with modern languages, I focus on learning,
          problem-solving, and building.
        </Typography>
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{ willChange: "filter, transform, opacity" }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            component="a"
            href="mailto:theoslater1@gmail.com"
            aria-label="Email"
            sx={(theme) => ({
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.secondary,
              transition: "all 0.2s ease",
              "&:hover": {
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
              },
            })}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/TheoSlater"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            sx={(theme) => ({
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.secondary,
              transition: "all 0.2s ease",
              "&:hover": {
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
              },
            })}
          >
            <GitHubIcon />
          </IconButton>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={scrollToNextSection}
            sx={(theme) => ({
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.secondary,
              borderRadius: "8px",
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                backgroundColor: "transparent",
              },
            })}
          >
            Explore more
          </Button>
        </Stack>
      </motion.div>
    </Stack>
  );
}
