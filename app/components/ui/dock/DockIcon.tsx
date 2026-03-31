"use client";

import { useRef, useState } from "react";
import {
  motion,
  useTransform,
  useSpring,
  MotionValue,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, useTheme, alpha, Typography } from "@mui/material";
import { DEFAULT_MAGNIFICATION, DEFAULT_DISTANCE } from "./constants";

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

export const DockIcon = ({
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
            width: widthSpring,
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
