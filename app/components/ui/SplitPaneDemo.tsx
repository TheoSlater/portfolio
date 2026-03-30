"use client";

import { Box, Typography } from "@mui/material";
import { SplitPane } from "@/app/demo/SplitPlane";

export function SplitPaneDemo() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        my: 4,
        bgcolor: "background.paper",
      }}
    >
      <SplitPane
        storageKey="blog-demo-split"
        initial={50}
        min={20}
        max={80}
        left={
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(96, 230, 215, 0.05)",
              p: 3,
            }}
          >
            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
              Left Pane
            </Typography>
          </Box>
        }
        right={
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(255, 255, 255, 0.02)",
              p: 3,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Right Pane
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Drag the divider to resize these panels.
              <br />
              Double-click it to reset.
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}
