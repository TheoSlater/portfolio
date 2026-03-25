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
} from "../Icons/NavIcons";

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
                  backgroundColor: "text.secondary",
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

  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const showTimer = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const diff = latest - previous;

    if (showTimer.current) clearTimeout(showTimer.current);

    if (diff > 5 && latest > 150) {
      // Scrolling down and past initial threshold
      setIsHidden(true);
    } else if (diff < -5 || latest < 50) {
      // Scrolling up or near top
      setIsHidden(false);
    }

    // Show when scroll stops
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
    // {
    //   name: "archive",
    //   label: "Archive",
    //   href: "/archive",
    //   icon: <Bookmark />,
    // },
  ];

  return (
    <Box
      component={motion.nav}
      initial={{ x: "-50%", y: 0, opacity: 1 }}
      animate={{
        x: "-50%",
        y: isHidden ? 100 : 0,
        opacity: isHidden ? 0 : 1,
        scale: isHidden ? 0.95 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      sx={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        zIndex: 3000,
        display: "flex",
        alignItems: "center",
        padding: "4px 16px",
        borderRadius: "4rem",
        backgroundColor: alpha(theme.palette.background.default, 0.7),
        backdropFilter: "blur(24px)",
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        boxShadow: `0 12px 40px 0 ${alpha("#000000", 0.9)}`,
      }}
      onMouseMove={(e) => {
        if (document.body.classList.contains("disable-scroll")) return;

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
      <Box
        component="ul"
        sx={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          padding: 0,
          gap: 1,
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
    </Box>
  );
};
