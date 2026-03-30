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
  CaretDown,
} from "../Icons/NavIcons";
import { useBlog } from "@/app/features/blog/context/BlogContext";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

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
      mouseX.set(Infinity); // Un-hover icons when expanded
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
    { name: "home", label: "Hi", emoji: "👋", href: "/", icon: <HandWaving /> },
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
    <Box
      component={motion.nav}
      layout
      initial={{ x: "-50%", y: 0, opacity: 1 }}
      animate={{
        x: "-50%",
        y: isHidden ? 100 : 0,
        opacity: isHidden ? 0 : 1,
        scale: isHidden ? 0.95 : 1,
      }}
      transition={{
        layout: { duration: 0.5, type: "spring", stiffness: 220, damping: 28 },
        default: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      }}
      sx={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        zIndex: 3000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.background.default, 0.75),
        backdropFilter: "blur(30px)",
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        boxShadow: `0 12px 60px 0 ${alpha("#000000", 0.9)}`,
        borderRadius: isExpanded ? "2rem" : "4rem",
        width: isExpanded ? "min(420px, 92vw)" : "auto",
        maxWidth: "92vw",
        overflow: "hidden",
        transformOrigin: "bottom center",
      }}
      onMouseMove={(e) => {
        if (document.body.classList.contains("disable-scroll") || isExpanded) {
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
      <AnimatePresence initial={false}>
        {isExpanded && (
          <Box
            key="expanded-toc"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
                      const element = document.getElementById(h.id);
                      if (element) {
                        const top = element.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                      setIsExpanded(false);
                      mouseX.set(Infinity);
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
        )}
      </AnimatePresence>

      <Box
        layout
        component={motion.div}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          width: "100%",
          padding: isExpanded ? "12px 20px 20px" : "4px 16px",
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
            pointerEvents: isExpanded ? "none" : "auto",
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
            component={motion.button}
            layout
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
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                transform: "scale(1.02)",
              },
              "&:active": {
                transform: "scale(0.98)",
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
              transition={{ duration: 0.4, type: "spring", bounce: 0 }}
            >
              <CaretUp style={{ fontSize: "1rem" }} />
            </motion.div>
          </Box>
        )}
      </Box>
    </Box>
  );
};
