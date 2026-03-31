"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, useTheme, alpha, Typography } from "@mui/material";
import {
  HandWaving,
  Briefcase,
  ChatTeardropDots,
  HandPalm,
  CaretUp,
} from "../Icons/NavIcons";
import { useBlog } from "@/app/features/blog/context/BlogContext";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

/* Apple Dynamic Island spring — snappy with natural settle */
const ISLAND_SPRING = {
  type: "spring" as const,
  stiffness: 400,
  damping: 34,
  mass: 0.8,
};
const ISLAND_EASE = [0.4, 0, 0.2, 1] as const;

interface DockIconProps {
  mouseX: MotionValue<number>;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
  href: string;
  label: string;
  emoji?: string;
  name: string;
}

const DockIcon = ({
  mouseX,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  children,
  href,
  label,
  emoji,
  name,
}: DockIconProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const theme = useTheme();
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  const [isHovered, setIsHovered] = useState(false);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [46, magnification, 46],
  );

  const widthSpring = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const width = widthSpring;

  return (
    <Box
      component="li"
      sx={{ position: "relative", listStyle: "none", viewTransitionName: name }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "-42px",
              left: "50%",
              pointerEvents: "none",
              zIndex: 3100,
            }}
          >
            <Box
              sx={{
                backgroundColor: alpha(theme.palette.background.paper, 0.9),
                backdropFilter: "blur(12px)",
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: "2rem",
                padding: "6px 14px",
                whiteSpace: "nowrap",
                boxShadow: `0 4px 20px ${alpha("#000000", 0.6)}`,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontSize: "0.85rem",
                  letterSpacing: "0.01em",
                }}
              >
                {label} {emoji}
              </Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={href} passHref>
        <motion.a
          ref={ref}
          style={{
            width: width,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "text.primary",
              transition: "color 0.3s ease",
              position: "relative",
              "& svg": {
                fontSize: "1.4rem",
              },
            }}
          >
            {children}
            {isActive && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: "3px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                }}
              />
            )}
          </Box>
        </motion.a>
      </Link>
    </Box>
  );
};

export const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useRef(0);
  const theme = useTheme();
  const { headings, activeId, isExpanded, setIsExpanded, toggleExpanded } =
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

  const navItems = [
    {
      name: "home",
      label: "Hi",
      emoji: "👋",
      href: "/",
      icon: <HandWaving />,
    },
    {
      name: "projects",
      label: "Projects",
      href: "/projects",
      icon: <Briefcase />,
    },
    {
      name: "blog",
      label: "Blog",
      href: "/blog",
      icon: <ChatTeardropDots />,
    },
    {
      name: "about",
      label: "About",
      href: "/about",
      icon: <HandPalm />,
    },
  ];

  const hasHeadings = headings.length > 0;

  return (
    /* Centering wrapper — flexbox centering so Framer never
       touches translateX. Only y + opacity are animated. */
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
        {/*
          Island container — width and borderRadius use CSS transitions
          to avoid the shrink-then-expand jitter that plagued the old
          Framer animate approach. CSS transitions smoothly interpolate
          from the current computed width to the target. When collapsed
          width is unset (auto-sizes to content). When expanded it's a
          fixed px value. No "undefined" frame ever occurs.
        */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: alpha(
              theme.palette.background.default,
              0.75,
            ),
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            boxShadow: `0 12px 60px 0 ${alpha("#000000", 0.9)}`,
            overflow: "hidden",
            borderRadius: isExpanded ? 24 : 48,
            width: isExpanded ? "min(420px, 92vw)" : undefined,
            maxWidth: "92vw",
            transition:
              "width 0.45s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* TOC panel — always in DOM, height morphs to 0 when closed */}
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
            style={{ width: "100%", overflow: "hidden" }}
          >
            <Box
              sx={{
                width: "100%",
                maxHeight: "max(300px, 40vh)",
                overflowY: "auto",
                padding: "24px 20px 8px",
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
                        // Synchronous layout changes can abort smooth scroll animations.
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
                        color: isActive
                          ? "primary.main"
                          : "text.secondary",
                        fontWeight: isActive ? 600 : 400,
                        borderRadius: "0.75rem",
                        transition: "all 0.2s ease",
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          color: "text.primary",
                          bgcolor: alpha(
                            theme.palette.common.white,
                            0.04,
                          ),
                        },
                        ...(isActive && {
                          bgcolor: alpha(
                            theme.palette.primary.main,
                            0.05,
                          ),
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

          {/* Bottom bar — nav icons always functional + toggle */}
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
            <Box
              component="ul"
              sx={{
                display: "flex",
                alignItems: "center",
                margin: 0,
                padding: 0,
                gap: 1,
                opacity: isExpanded ? 0.3 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              {navItems.map((item) => (
                <DockIcon
                  key={item.href}
                  mouseX={mouseX}
                  href={item.href}
                  label={item.label}
                  emoji={item.emoji}
                  name={item.name}
                >
                  {item.icon}
                </DockIcon>
              ))}
            </Box>

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
                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.15,
                  )}`,
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                  transition:
                    "background-color 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    backgroundColor: alpha(
                      theme.palette.primary.main,
                      0.15,
                    ),
                  },
                  "&:active": {
                    backgroundColor: alpha(
                      theme.palette.primary.main,
                      0.25,
                    ),
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, fontSize: "0.82rem" }}
                >
                  {isExpanded ? "Close" : "On this page"}
                </Typography>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={ISLAND_SPRING}
                >
                  <CaretUp style={{ fontSize: "1rem" }} />
                </motion.div>
              </Box>
            )}
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};
