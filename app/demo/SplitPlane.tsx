"use client";

import Box from "@mui/material/Box";
import { useSplitPane } from "./useSplitPlane";

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
  storageKey?: string;
  min?: number;
  max?: number;
  initial?: number;
  direction?: "horizontal" | "vertical";
}

export function SplitPane({
  left,
  right,
  storageKey = "split-pane",
  min = 20,
  max = 80,
  initial = 50,
  direction = "horizontal",
}: SplitPaneProps) {
  const {
    containerRef,
    paneARef,
    onDividerPointerDown,
    onContainerPointerMove,
    onContainerPointerUp,
    reset,
  } = useSplitPane({ storageKey, min, max, initial, direction });

  const isHorizontal = direction === "horizontal";

  return (
    <Box
      ref={containerRef}
      onPointerMove={onContainerPointerMove}
      onPointerUp={onContainerPointerUp}
      sx={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        userSelect: "none", // prevents text selection while dragging
      }}
    >
      {/* Pane A — no flexBasis in sx, hook owns it via inline style */}
      <Box
        ref={paneARef}
        sx={{
          flexShrink: 0,
          overflow: "auto",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        {left}
      </Box>

      {/* Divider */}
      <Box
        onPointerDown={onDividerPointerDown}
        onDoubleClick={reset}
        title="Drag to resize · Double-click to reset"
        sx={{
          flexShrink: 0,
          width: isHorizontal ? "4px" : "100%",
          height: isHorizontal ? "100%" : "4px",
          cursor: isHorizontal ? "col-resize" : "row-resize",
          bgcolor: "divider",
          transition: "background-color 0.15s",
          "&:hover": {
            bgcolor: "action.focus",
          },
        }}
      />

      {/* Pane B */}
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          minWidth: 0,
          minHeight: 0,
        }}
      >
        {right}
      </Box>
    </Box>
  );
}
