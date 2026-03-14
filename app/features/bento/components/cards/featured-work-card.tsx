import type { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { WorkOutline } from "@mui/icons-material";
import { BentoCard } from "../../../../components/ui/bento-card";
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
          gap: 0.75,
          p: { xs: 2, sm: 3 },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <CardLabelWithIcon
        icon={<WorkOutline fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Featured work
      </CardLabelWithIcon>
      <Typography
        sx={{
          fontSize: 12,
          color: "text.secondary",
          opacity: 0.65,
          lineHeight: 1.4,
          position: "absolute",
          mt: 0.5,
          right: { xs: 18, sm: 22 },
          textAlign: "right",
          maxWidth: "45%",
        }}
      >
        AI overlay for Windows & macOS
      </Typography>
      <DesktopCopilotPreview />
    </BentoCard>
  );
}
