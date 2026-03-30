"use client";

import React, { useState, useRef } from "react";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { ContentCopyRounded, CheckRounded } from "@mui/icons-material";

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock = ({ children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (preRef.current) {
      const text = preRef.current.innerText;
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        my: 3,
        "&:hover .copy-button": {
          opacity: 1,
        },
      }}
    >
      <Box
        ref={preRef}
        component="pre"
        sx={{
          bgcolor: "#0d1117",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "12px",
          p: 2.5,
          overflowX: "auto",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          position: "relative",
          "& code": {
            bgcolor: "transparent",
            border: "none",
            p: 0,
            fontFamily: "inherit",
          },
        }}
      >
        {children}
      </Box>

      <Box
        className="copy-button"
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          opacity: 0,
          transition: "all 0.2s ease-in-out",
          zIndex: 10,
        }}
      >
        <Tooltip
          title={copied ? "Copied!" : "Copy code"}
          placement="left"
          TransitionComponent={Zoom}
          arrow
        >
          <IconButton
            onClick={handleCopy}
            size="small"
            sx={{
              bgcolor: copied ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.05)",
              color: copied ? "#4ade80" : "text.secondary",
              backdropFilter: "blur(8px)",
              border: "1px solid",
              borderColor: copied ? "rgba(34, 197, 94, 0.3)" : "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "6px",
              "&:hover": {
                bgcolor: copied ? "rgba(34, 197, 94, 0.2)" : "rgba(255, 255, 255, 0.1)",
                borderColor: copied ? "rgba(34, 197, 94, 0.4)" : "rgba(255, 255, 255, 0.2)",
                color: copied ? "#4ade80" : "text.primary",
                transform: "translateY(-1px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {copied ? (
              <CheckRounded sx={{ fontSize: 18 }} />
            ) : (
              <ContentCopyRounded sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
