"use client";

import { Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, type Variants } from "framer-motion";
import { Foreground } from "../layout/foreground";
import GreenPulse from "../Icons/GreenPulse";
import Magnetic from "../ui/magnetic";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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
        <Typography
          variant="h3"
          fontWeight={450}
          sx={{
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "text.primary",
          }}
        >
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
            lineHeight: 1.6,
            fontSize: "1.05rem",
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
          <Magnetic>
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
          </Magnetic>
          <Magnetic>
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
          </Magnetic>
          <Magnetic intensity={0.2}>
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
          </Magnetic>
        </Stack>
      </motion.div>
    </Stack>
  );
}
