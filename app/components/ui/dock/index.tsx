"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Box, useTheme, alpha, Typography } from "@mui/material";
import { ChevronsUpDown } from "lucide-react";
import { useBlog } from "@/app/features/blog/context/BlogContext";
import { DockIcon } from "./DockIcon";
import { TOCPanel } from "./TOCPanel";
import { NAV_ITEMS, ISLAND_SPRING, ISLAND_EASE } from "./constants";
import {
  HandWaving,
  Briefcase,
  ChatTeardropDots,
  HandPalm,
} from "../../Icons/NavIcons";

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useRef(0);
  const theme = useTheme();
  const { headings, isExpanded, setIsExpanded, toggleExpanded } =
    useBlog();

  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const showTimer = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isExpanded) {
      if (isHidden) setIsHidden(false);
      mouseX.set(Infinity);
      return;
    }

    const previous = lastScrollY.current;
    const diff = latest - previous;

    if (showTimer.current) clearTimeout(showTimer.current);

    if (diff > 5 && latest > 150) {
      setIsHidden(true);
    } else if (diff < -5 || latest < 50) {
      setIsHidden(false);
    }

    showTimer.current = setTimeout(() => {
      setIsHidden(false);
    }, 1200);

    lastScrollY.current = latest;
  });

  const hasHeadings = headings.length > 0;

  // Simple icon component resolver
  const renderIcon = (name: string) => {
    const props = { style: { fontSize: "1.4rem" } };
    switch (name) {
      case "home":
        return <HandWaving {...props} />;
      case "projects":
        return <Briefcase {...props} />;
      case "blog":
        return <ChatTeardropDots {...props} />;
      case "about":
        return <HandPalm {...props} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: 0,
        right: 0,
        zIndex: 3000,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        pointerEvents: "none",
      }}
    >
      <motion.nav
        initial={false}
        animate={{
          y: isHidden ? 100 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          y: ISLAND_SPRING,
          opacity: { duration: 0.3, ease: ISLAND_EASE },
        }}
        style={{
          pointerEvents: "auto",
          willChange: "transform, opacity",
        }}
        onMouseMove={(e) => {
          if (
            document.body.classList.contains("disable-scroll") ||
            isExpanded
          ) {
            mouseX.set(Infinity);
            return;
          }
          mouseX.set(e.pageX);
          mouseY.current = e.pageY;
        }}
        onMouseLeave={(e) => {
          if (mouseX.get() !== e.pageX || mouseY.current !== e.pageY)
            return mouseX.set(Infinity);

          const mouseEventHandler = (event: MouseEvent) => {
            if (Math.abs(mouseY.current - event.pageY) > 20) {
              mouseX.set(Infinity);
              document.removeEventListener("mousemove", mouseEventHandler);
            }
          };
          document.addEventListener("mousemove", mouseEventHandler);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: alpha(theme.palette.background.default, 0.75),
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            boxShadow: `0 12px 60px 0 ${alpha("#000000", 0.9)}`,
            borderRadius: isExpanded ? 24 : 48,
            width: isExpanded ? "min(420px, 92vw)" : undefined,
            maxWidth: "92vw",
            transition:
              "width 0.65s cubic-bezier(0.32, 0.72, 0, 1), border-radius 0.65s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          <TOCPanel mouseX={mouseX} />

          {/* Bottom Bar: Nav Icons + Toggle */}
          <motion.div
            initial={false}
            animate={{
              paddingTop: isExpanded ? 12 : 4,
              paddingBottom: isExpanded ? 20 : 4,
              paddingLeft: isExpanded ? 20 : 16,
              paddingRight: isExpanded ? 20 : 16,
            }}
            transition={ISLAND_SPRING}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                padding: 0,
                gap: 8,
                opacity: isExpanded ? 0.3 : 1,
                transition: "opacity 0.3s ease",
                listStyle: "none",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <DockIcon
                  key={item.href}
                  mouseX={mouseX}
                  href={item.href}
                  label={item.label}
                  emoji={item.emoji}
                  name={item.name}
                >
                  {renderIcon(item.name)}
                </DockIcon>
              ))}
            </ul>

            {/* Expansion Toggle */}
            {hasHeadings && (
              <Box
                component="button"
                onClick={toggleExpanded}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  padding: "8px 16px",
                  borderRadius: "2rem",
                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    isExpanded ? 0.2 : 0.08,
                  ),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  transition:
                    "background-color 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, fontSize: "0.82rem" }}
                >
                  {isExpanded ? "Close" : "On this page"}
                </Typography>
                <ChevronsUpDown size={16} />
              </Box>
            )}
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};
