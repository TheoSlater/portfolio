import type { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { AutoAwesome } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import DesktopCopilotPreview from "../desktop-copilot-preview";

interface FeaturedWorkCardProps {
  colSpan?: number;
  rowSpan?: number;
  sx?: SxProps<Theme>;
}

export default function FeaturedWorkCard({
  colSpan,
  rowSpan,
  sx,
}: FeaturedWorkCardProps) {
  return (
    <BentoCard
      widthSize="md"
      heightSize="sm"
      colSpan={colSpan}
      rowSpan={rowSpan}
      sx={[
        {
          overflow: "hidden",
          height: "100%",
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <CardLabelWithIcon
        icon={<AutoAwesome fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Desktop Copilot
      </CardLabelWithIcon>
      <Typography
        sx={{
          fontSize: 12,
          color: (t) => alpha(t.palette.text.primary, 0.45),
          lineHeight: 1.4,
          mt: -0.25,
          mb: 0.5,
          px: 0.5,
        }}
      >
        AI overlay for Windows & macOS
      </Typography>
      <DesktopCopilotPreview />
    </BentoCard>
  );
}
