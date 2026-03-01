"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const PROMPTS = [
  "Summarize my last meeting",
  "Draft a reply to this email",
  "Explain this error message",
];

type Phase =
  | "idle"
  | "typing"
  | "cursor-move"
  | "cursor-click"
  | "sent"
  | "thinking"
  | "responding"
  | "done";

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 28, mass: 0.8 },
  },
};

const textCursorVariants: Variants = {
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

const SKELETON_LINES = ["85%", "100%", "70%", "90%", "50%"];

/* macOS-style pointer cursor SVG */
function PointerCursor({ color = "#fff" }: { color?: string }) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L1 16.2L5.4 12.4L8.8 19.8L11.6 18.6L8.2 11.2L13.8 10.8L1 1Z"
        fill={color}
        stroke="rgba(0,0,0,0.5)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DesktopCopilotPreview() {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");

  /* Refs for measuring send button position */
  const containerRef = useRef<HTMLDivElement>(null);
  const sendBtnRef = useRef<HTMLDivElement>(null);
  const [cursorTarget, setCursorTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetCycle = useCallback(() => {
    setDisplayedText("");
    setPhase("idle");
  }, []);

  /* Measure send button position relative to container */
  const measureSendButton = useCallback(() => {
    if (!containerRef.current || !sendBtnRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = sendBtnRef.current.getBoundingClientRect();
    setCursorTarget({
      x: btnRect.left - containerRect.left + btnRect.width / 2,
      y: btnRect.top - containerRect.top + btnRect.height / 2,
    });
  }, []);

  /* Phase 1: Type out the prompt */
  useEffect(() => {
    if (!mounted) return;

    const currentPrompt = PROMPTS[promptIndex];
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    resetCycle();

    const typeChar = () => {
      if (charIndex < currentPrompt.length) {
        setDisplayedText(currentPrompt.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeChar, 60);
      } else {
        timeout = setTimeout(() => {
          measureSendButton();
          setPhase("cursor-move");
        }, 400);
      }
    };

    timeout = setTimeout(() => {
      setPhase("typing");
      typeChar();
    }, 700);

    return () => clearTimeout(timeout);
  }, [promptIndex, mounted, resetCycle, measureSendButton]);

  /* Phase 2: Cursor arrives -> click */
  useEffect(() => {
    if (phase !== "cursor-move") return;
    const timeout = setTimeout(() => setPhase("cursor-click"), 600);
    return () => clearTimeout(timeout);
  }, [phase]);

  /* Phase 3: Click -> sent */
  useEffect(() => {
    if (phase !== "cursor-click") return;
    const timeout = setTimeout(() => setPhase("sent"), 300);
    return () => clearTimeout(timeout);
  }, [phase]);

  /* Phase 4: Sent -> thinking */
  useEffect(() => {
    if (phase !== "sent") return;
    const timeout = setTimeout(() => setPhase("thinking"), 300);
    return () => clearTimeout(timeout);
  }, [phase]);

  /* Phase 5: Thinking -> responding */
  useEffect(() => {
    if (phase !== "thinking") return;
    const timeout = setTimeout(() => setPhase("responding"), 1400);
    return () => clearTimeout(timeout);
  }, [phase]);

  /* Phase 6: Responding -> done */
  useEffect(() => {
    if (phase !== "responding") return;
    const timeout = setTimeout(() => setPhase("done"), 1800);
    return () => clearTimeout(timeout);
  }, [phase]);

  /* Phase 7: Done -> next prompt */
  useEffect(() => {
    if (phase !== "done") return;
    const timeout = setTimeout(() => {
      setPromptIndex((prev) => (prev + 1) % PROMPTS.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [phase]);

  const inputBg = alpha(theme.palette.common.white, 0.06);
  const inputBorder = alpha(theme.palette.common.white, 0.1);
  const subtleText = alpha(theme.palette.text.primary, 0.35);

  const isSentOrLater =
    phase === "sent" ||
    phase === "thinking" ||
    phase === "responding" ||
    phase === "done";

  const showCursor =
    phase === "cursor-move" || phase === "cursor-click";

  const sendActive =
    phase === "cursor-move" ||
    phase === "cursor-click";

  return (
    <Box
      ref={containerRef}
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
      {/* Subtle glow */}
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

      {/* Animated mouse cursor */}
      <AnimatePresence>
        {showCursor && (
          <motion.div
            initial={{ opacity: 0, x: cursorTarget.x - 50, y: cursorTarget.y + 30 }}
            animate={{
              opacity: 1,
              x: cursorTarget.x - 4,
              y: cursorTarget.y - 4,
              scale: phase === "cursor-click" ? 0.85 : 1,
            }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{
              x: { type: "spring", stiffness: 120, damping: 18 },
              y: { type: "spring", stiffness: 120, damping: 18 },
              opacity: { duration: 0.2 },
              scale: { type: "spring", stiffness: 500, damping: 20 },
            }}
            style={{
              position: "absolute",
              zIndex: 20,
              pointerEvents: "none",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          >
            <PointerCursor color={alpha(theme.palette.common.white, 0.9)} />
          </motion.div>
        )}
      </AnimatePresence>

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
                fontSize: { xs: 11, sm: 13 },
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
              {isSentOrLater ? (
                <Box
                  component="span"
                  sx={{
                    color: alpha(theme.palette.text.primary, 0.25),
                    fontStyle: "italic",
                    fontSize: { xs: 10, sm: 12 },
                  }}
                >
                  Ask anything...
                </Box>
              ) : (
                <>
                  {displayedText}
                  {phase === "typing" && (
                    <Box
                      component={motion.span}
                      variants={textCursorVariants}
                      animate="blink"
                      sx={{
                        display: "inline-block",
                        width: "1.5px",
                        height: "14px",
                        backgroundColor: alpha(
                          theme.palette.common.white,
                          0.6
                        ),
                        ml: "1px",
                        verticalAlign: "text-bottom",
                      }}
                    />
                  )}
                </>
              )}
            </Typography>

            {/* Send button */}
            <Box
              ref={sendBtnRef}
              component={motion.div}
              animate={{
                scale:
                  phase === "cursor-click"
                    ? 0.82
                    : sendActive
                      ? 1.08
                      : 1,
                backgroundColor: sendActive
                  ? alpha(theme.palette.common.white, 0.2)
                  : alpha(theme.palette.common.white, 0.08),
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              sx={{
                flexShrink: 0,
                width: 26,
                height: 26,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 1.5L7 9M14.5 1.5L10 14.5L7 9M14.5 1.5L1.5 6L7 9"
                  stroke={alpha(
                    theme.palette.common.white,
                    sendActive ? 0.9 : 0.4
                  )}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>

          {/* Chat area: user bubble + AI response */}
          <AnimatePresence mode="wait">
            {isSentOrLater && (
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
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {/* User message bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Box
                        sx={{
                          backgroundColor: alpha(
                            theme.palette.common.white,
                            0.1
                          ),
                          borderRadius: "10px 10px 2px 10px",
                          px: 1.5,
                          py: 0.75,
                          maxWidth: "85%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: 10, sm: 12 },
                            color: alpha(theme.palette.text.primary, 0.85),
                            lineHeight: 1.4,
                            fontFamily: "inherit",
                          }}
                        >
                          {PROMPTS[promptIndex]}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>

                  {/* AI response area */}
                  {(phase === "thinking" ||
                    phase === "responding" ||
                    phase === "done") && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Box
                          sx={{
                            backgroundColor: alpha(
                              theme.palette.common.white,
                              0.04
                            ),
                            border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                            borderRadius: "10px 10px 10px 2px",
                            px: 1.5,
                            py: 1,
                            maxWidth: "90%",
                            width: "90%",
                          }}
                        >
                          {/* Thinking dots */}
                          {phase === "thinking" && (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.75,
                                py: 0.25,
                              }}
                            >
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
                            </Box>
                          )}

                          {/* Skeleton lines */}
                          {(phase === "responding" || phase === "done") && (
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 0.75,
                              }}
                            >
                              {SKELETON_LINES.map((width, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scaleX: 0 }}
                                  animate={{ opacity: 1, scaleX: 1 }}
                                  transition={{
                                    duration: 0.35,
                                    delay: i * 0.12,
                                    ease: "easeOut",
                                  }}
                                  style={{ originX: 0 }}
                                >
                                  <Box
                                    sx={{
                                      height: 6,
                                      width,
                                      borderRadius: "3px",
                                      backgroundColor: alpha(
                                        theme.palette.common.white,
                                        0.08
                                      ),
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </motion.div>
                  )}
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        {/* Hotkey hint */}
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
