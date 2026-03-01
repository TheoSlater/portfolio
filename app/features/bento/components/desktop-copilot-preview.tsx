"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

const PROMPTS = [
  "Summarize my last meeting notes",
  "Draft a reply to this email",
  "What's on my calendar today?",
  "Explain this error message",
];

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 28, mass: 0.8 },
  },
};

const cursorVariants: Variants = {
  blink: {
    opacity: [1, 1, 0, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      times: [0, 0.49, 0.5, 0.99, 1],
      ease: "linear",
    },
  },
};

const dotVariants: Variants = {
  pulse: (i: number) => ({
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

export default function DesktopCopilotPreview() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  // Only start animations after client mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentPrompt = PROMPTS[promptIndex];
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    setDisplayedText("");
    setIsTyping(true);
    setShowResponse(false);

    const typeChar = () => {
      if (charIndex < currentPrompt.length) {
        setDisplayedText(currentPrompt.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeChar, 65);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => setShowResponse(true), 600);
      }
    };

    timeout = setTimeout(typeChar, 800);

    return () => clearTimeout(timeout);
  }, [promptIndex, mounted]);

  useEffect(() => {
    if (!showResponse) return;
    const timeout = setTimeout(() => {
      setPromptIndex((prev) => (prev + 1) % PROMPTS.length);
    }, 2200);
    return () => clearTimeout(timeout);
  }, [showResponse]);

  const inputBg = alpha(theme.palette.common.white, 0.06);
  const inputBorder = alpha(theme.palette.common.white, 0.1);
  const subtleText = alpha(theme.palette.text.primary, 0.4);

  return (
    <Box
      sx={{
        position: "relative",
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        pb: 1.5,
        overflow: "hidden",
      }}
    >
      {/* Subtle glow behind the overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "60px",
          background: `radial-gradient(ellipse at center, ${alpha(theme.palette.common.white, 0.04)} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: "92%",
          maxWidth: 320,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* The copilot overlay pill */}
        <Box
          sx={{
            background: inputBg,
            backdropFilter: "blur(16px)",
            border: `1px solid ${inputBorder}`,
            borderRadius: "14px",
            px: 2,
            py: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Input row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              minHeight: 28,
            }}
          >
            {/* Sparkle icon */}
            <Box
              component={motion.div}
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                flexShrink: 0,
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                  fill={alpha(theme.palette.common.white, 0.5)}
                />
              </svg>
            </Box>

            {/* Typed text */}
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 400,
                color: alpha(theme.palette.text.primary, 0.8),
                lineHeight: 1.4,
                flex: 1,
                minWidth: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "inherit",
              }}
            >
              {displayedText}
              {isTyping && (
                <Box
                  component={motion.span}
                  variants={cursorVariants}
                  animate="blink"
                  sx={{
                    display: "inline-block",
                    width: "1.5px",
                    height: "14px",
                    backgroundColor: alpha(theme.palette.common.white, 0.6),
                    ml: "1px",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </Typography>
          </Box>

          {/* Response area */}
          <AnimatePresence mode="wait">
            {showResponse && (
              <motion.div
                key={promptIndex}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                    pt: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                  }}
                >
                  {/* Animated thinking dots */}
                  {[0, 1, 2].map((i) => (
                    <Box
                      key={i}
                      component={motion.div}
                      custom={i}
                      variants={dotVariants}
                      animate="pulse"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        backgroundColor: alpha(
                          theme.palette.common.white,
                          0.5
                        ),
                      }}
                    />
                  ))}
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: subtleText,
                      ml: 0.5,
                      fontStyle: "italic",
                    }}
                  >
                    Thinking...
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        {/* Hotkey hint below the overlay */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              px: 1,
              py: 0.25,
              borderRadius: "6px",
              background: alpha(theme.palette.common.white, 0.04),
              border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
            }}
          >
            <Typography
              sx={{
                fontSize: 10,
                color: subtleText,
                fontFamily: "monospace",
                letterSpacing: "0.02em",
              }}
            >
              {"Ctrl + Space"}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
