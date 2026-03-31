"use client";

import { useEffect, useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import { motion } from "motion/react";
import { useBlog } from "@/app/features/blog/context/BlogContext";

export type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

type Props = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
  const { activeId, setActiveId } = useBlog();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      },
    );

    headingElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings, setActiveId]);

  if (headings.length === 0) return null;

  return (
    <Box
      component="nav"
      aria-label="Table of contents"
      sx={{
        position: "sticky",
        top: { xs: "1rem", md: "2rem" },
        maxHeight: "calc(100vh - 4rem)",
        overflowY: "auto",
        pl: 2,
        borderLeft: "1px solid",
        borderColor: "divider",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "text.secondary",
          fontSize: "0.7rem",
          display: "block",
          mb: 2,
        }}
      >
        On this page
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <Box component="li" key={h.id} sx={{ mb: 0.5 }}>
              <Link
                href={`#${h.id}`}
                underline="none"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(h.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  display: "block",
                  pl: h.level === 3 ? 2 : 0,
                  py: 0.5,
                  fontSize: "0.8rem",
                  lineHeight: 1.4,
                  color: isActive ? "primary.main" : "text.secondary",
                  fontWeight: isActive ? 600 : 400,
                  transition: "color 0.2s ease",
                  "&:hover": { color: "text.primary" },
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-indicator"
                    style={{
                      display: "inline-block",
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      background: "currentColor",
                      marginRight: 6,
                      verticalAlign: "middle",
                    }}
                  />
                )}
                {h.text}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
