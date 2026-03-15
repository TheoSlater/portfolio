import type { MDXComponents } from 'mdx/types';
import { Box, Typography, Divider, Link as MuiLink } from "@mui/material";
import type { ReactNode } from "react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export const MDX_COMPONENTS: MDXComponents = {
  h1: ({ children }) => (
    <Typography component="h1" variant="h3" sx={{ fontWeight: 700, letterSpacing: "-0.03em", mt: 6, mb: 2 }}>
      {children as ReactNode}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      id={slugify(String(children))}
      component="h2"
      variant="h5"
      sx={{ fontWeight: 600, mt: 6, mb: 2, scrollMarginTop: "5rem" }}
    >
      {children as ReactNode}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      id={slugify(String(children))}
      component="h3"
      variant="h6"
      sx={{ fontWeight: 600, mt: 4, mb: 1.5, scrollMarginTop: "5rem" }}
    >
      {children as ReactNode}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="body1" sx={{ mb: 2.5, lineHeight: 1.75, color: "text.secondary" }}>
      {children as ReactNode}
    </Typography>
  ),
  a: ({ children, href }) => (
    <MuiLink
      href={href as string}
      target={(href as string)?.startsWith("http") ? "_blank" : undefined}
      rel={(href as string)?.startsWith("http") ? "noopener noreferrer" : undefined}
      sx={{ color: "primary.main", textDecoration: "underline", textUnderlineOffset: "3px" }}
    >
      {children as ReactNode}
    </MuiLink>
  ),
  ul: ({ children }) => (
    <Box component="ul" sx={{ pl: 3, mb: 2.5, "& li": { mb: 0.75, color: "text.secondary", lineHeight: 1.7 } }}>
      {children as ReactNode}
    </Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" sx={{ pl: 3, mb: 2.5, "& li": { mb: 0.75, color: "text.secondary", lineHeight: 1.7 } }}>
      {children as ReactNode}
    </Box>
  ),
  blockquote: ({ children }) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: "3px solid",
        borderColor: "primary.main",
        pl: 2.5,
        py: 0.5,
        my: 3,
        "& p": { color: "text.secondary", fontStyle: "italic", mb: 0 },
      }}
    >
      {children as ReactNode}
    </Box>
  ),
  code: ({ children }) => (
    <Box
      component="code"
      sx={{
        fontFamily: "monospace",
        fontSize: "0.875em",
        bgcolor: "rgba(255,255,255,0.06)",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "4px",
        px: 0.75,
        py: 0.25,
      }}
    >
      {children as ReactNode}
    </Box>
  ),
  pre: ({ children }) => (
    <Box
      component="pre"
      sx={{
        bgcolor: "#0d1117",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "8px",
        p: 2.5,
        my: 3,
        overflowX: "auto",
        fontFamily: "monospace",
        fontSize: "0.875rem",
        lineHeight: 1.7,
        "& code": { bgcolor: "transparent", border: "none", p: 0 },
      }}
    >
      {children as ReactNode}
    </Box>
  ),
  table: ({ children }) => (
    <Box sx={{ overflowX: "auto", my: 3 }}>
      <Box
        component="table"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          "& th": { textAlign: "left", p: 1.5, borderBottom: "2px solid", borderColor: "divider", fontWeight: 600 },
          "& td": { p: 1.5, borderBottom: "1px solid", borderColor: "divider", color: "text.secondary" },
        }}
      >
        {children as ReactNode}
      </Box>
    </Box>
  ),
  hr: () => <Divider sx={{ my: 4, borderColor: "divider" }} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDX_COMPONENTS,
    ...components,
  };
}

