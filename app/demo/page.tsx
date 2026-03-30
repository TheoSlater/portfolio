import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SplitPane } from "./SplitPlane";

export default function Demo() {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <SplitPane
        storageKey="my-split"
        initial={40}
        min={20}
        max={80}
        left={
          <Box sx={{ height: "100%", p: 3, bgcolor: "action.hover" }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Left Pane
            </Typography>
            <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
              Drag the divider to resize. Double-click it to reset. Your
              position is saved to localStorage.
            </Typography>
          </Box>
        }
        right={
          <Box sx={{ height: "100%", p: 3 }}>
            <Typography variant="h6" fontWeight={500} gutterBottom>
              Right Pane
            </Typography>
            <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
              This pane fills the remaining space with{" "}
              <Box
                component="code"
                sx={{
                  fontSize: "0.75rem",
                  bgcolor: "action.hover",
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 1,
                }}
              >
                flex: 1
              </Box>
              .
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}
