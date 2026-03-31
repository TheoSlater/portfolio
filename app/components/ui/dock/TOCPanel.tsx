"use client";

import { motion, PanInfo, MotionValue } from "motion/react";
import { Box, Typography, alpha, useTheme } from "@mui/material";
import { useBlog } from "@/app/features/blog/context/BlogContext";
import { ISLAND_SPRING, ISLAND_EASE } from "./constants";

interface TOCPanelProps {
  mouseX: MotionValue<number>;
}

export const TOCPanel = ({ mouseX }: TOCPanelProps) => {
  const theme = useTheme();
  const { headings, activeId, isExpanded, setIsExpanded } = useBlog();

  const handleDragEnd = (_: any, info: PanInfo) => {
    // If swiped down more than 100px, close the island
    if (info.offset.y > 100) {
      setIsExpanded(false);
      mouseX.set(Infinity);
    }
  };

  return (
    <motion.div
      initial={false}
      animate={{
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      transition={{
        height: ISLAND_SPRING,
        opacity: {
          duration: isExpanded ? 0.25 : 0.12,
          ease: ISLAND_EASE,
          delay: isExpanded ? 0.08 : 0,
        },
      }}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Mobile Drag Handle */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: 1.5,
          pb: 0.5,
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 4,
            borderRadius: 2,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
          }}
        />
      </Box>

      {/* Draggable Area */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "100%",
            maxHeight: "max(300px, 40vh)",
            overflowY: "auto",
            padding: "8px 20px 8px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              width: "100%",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                mb: 1.5,
                opacity: 0.6,
                pl: 2,
              }}
            >
              On this page
            </Typography>
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <Box
                  key={h.id}
                  component="a"
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(false);
                    mouseX.set(Infinity);

                    // Delay scroll slightly to allow React to commit the collapse state.
                    setTimeout(() => {
                      const target = document.getElementById(h.id);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 50);
                  }}
                  sx={{
                    display: "block",
                    pl: h.level === 3 ? 4 : 2,
                    pr: 2,
                    py: 1.25,
                    fontSize: "0.92rem",
                    color: isActive ? "primary.main" : "text.secondary",
                    fontWeight: isActive ? 600 : 400,
                    borderRadius: "0.75rem",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: alpha(theme.palette.common.white, 0.04),
                    },
                    ...(isActive && {
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }),
                  }}
                >
                  {h.text}
                </Box>
              );
            })}
          </Box>
        </Box>
      </motion.div>
    </motion.div>
  );
};
